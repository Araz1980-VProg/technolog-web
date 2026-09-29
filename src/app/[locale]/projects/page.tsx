'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { useLocale } from 'next-intl';
import { projects, PROJECT_CATEGORIES } from '@/data/projects';
import ProjectProgressBar from '@/components/ProjectProgressBar';

export default function ProjectsPage() {
  const currentLocale = (useLocale() || 'en') as 'en' | 'fa' | 'tr';
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // عناوین بومی‌سازی شده
  const t = {
    title: {
      en: 'Projects',
      fa: 'پروژه‌ها',
      tr: 'Projeler',
    }[currentLocale],
    all: {
      en: 'All Projects',
      fa: 'همه پروژه‌ها',
      tr: 'Tüm Projeler',
    }[currentLocale],
    empty: {
      en: 'No projects found for the selected category.',
      fa: 'هیچ پروژه‌ای در این دسته‌بندی یافت نشد.',
      tr: 'Seçilen kategoride proje bulunamadı.',
    }[currentLocale],
  };

  // فیلتر کردن پروژه‌ها بر اساس دسته‌بندی انتخاب‌شده
  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'all') return projects;
    return projects.filter((project) =>
      project.categories?.includes(selectedCategory)
    );
  }, [selectedCategory]);

  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-white">{t.title}</h1>
        <span className="text-sm text-zinc-400">
          {filteredProjects.length} / {projects.length}
        </span>
      </div>

      {/* فیلتر دسته‌بندی‌ها (چیپ‌های تعاملی) */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-thin scrollbar-thumb-zinc-800">
        <button
          onClick={() => setSelectedCategory('all')}
          className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all whitespace-nowrap ${
            selectedCategory === 'all'
              ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/30'
              : 'bg-zinc-900 text-zinc-400 border border-zinc-800 hover:text-white hover:border-zinc-700'
          }`}
        >
          {t.all}
        </button>

        {PROJECT_CATEGORIES.map((cat) => {
          const isSelected = selectedCategory === cat.id;
          const count = projects.filter((p) => p.categories?.includes(cat.id)).length;
          
          // اگر پروژه‌ای با این تگ وجود نداشته باشد، چیپ را پنهان می‌کنیم
          if (count === 0) return null;

          return (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all whitespace-nowrap flex items-center gap-1.5 ${
                isSelected
                  ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/30'
                  : 'bg-zinc-900 text-zinc-400 border border-zinc-800 hover:text-white hover:border-zinc-700'
              }`}
            >
              <span>{cat.label[currentLocale] || cat.label.en}</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                isSelected ? 'bg-cyan-500/20 text-cyan-300' : 'bg-zinc-800 text-zinc-500'
              }`}>
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* لیست کارت‌های پروژه‌ها */}
      {filteredProjects.length === 0 ? (
        <div className="text-center py-16 text-zinc-500 border border-dashed border-zinc-800 rounded-xl">
          {t.empty}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((item) => (
            <Link
              key={item.slug}
              href={`/${currentLocale}/projects/${item.slug}`}
              className="group block p-6 border border-zinc-900 rounded-xl bg-zinc-950/40 hover:border-zinc-700 hover:bg-zinc-900/30 transition-all flex flex-col justify-between"
            >
              <div>
                {/* بج‌های دسته‌بندی پروژه */}
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {item.categories?.map((catId) => {
                    const catMeta = PROJECT_CATEGORIES.find((c) => c.id === catId);
                    const label = catMeta?.label[currentLocale] || catMeta?.label.en || catId;
                    return (
                      <span
                        key={catId}
                        className="text-[11px] font-medium px-2 py-0.5 rounded bg-zinc-900 text-cyan-400/90 border border-zinc-800 group-hover:border-zinc-700 transition-colors"
                      >
                        {label}
                      </span>
                    );
                  })}
                </div>

                <h2 className="text-xl font-bold group-hover:text-cyan-400 transition-colors text-white mb-2">
                  {item.title[currentLocale] || item.title.en}
                </h2>
                
                <p className="text-sm text-zinc-400 leading-relaxed line-clamp-3 mb-4">
                  {item.summary[currentLocale] || item.summary.en}
                </p>
              </div>

              {/* نوار پیشرفت فازها */}
              {item.phases && item.phases.length > 0 && (
                <div className="mt-4 pt-4 border-t border-zinc-900/80">
                  <ProjectProgressBar phases={item.phases} locale={currentLocale} />
                </div>
              )}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
