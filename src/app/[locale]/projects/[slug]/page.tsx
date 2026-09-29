import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import Link from 'next/link';
import { projects } from '@/data/projects';
import { ArrowLeft, ArrowRight, Tag, Layers, Cpu } from 'lucide-react';

export async function generateStaticParams() {
  const locales = ['en', 'fa', 'tr'];
  return locales.flatMap((locale) =>
    projects.map((project) => ({
      locale,
      slug: project.slug,
    }))
  );
}

interface ProjectDetailPageProps {
  params: Promise<{
    locale: 'en' | 'fa' | 'tr';
    slug: string;
  }>;
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  // پیدا کردن پروژه بر اساس اسلاگ
  const project = projects.find((p) => p.slug === slug);
  if (!project) {
    notFound();
  }

  const isRtl = locale === 'fa';
  const BackArrow = isRtl ? ArrowRight : ArrowLeft;

  const backText = {
    fa: 'بازگشت به خانه',
    en: 'Back to Home',
    tr: 'Ana Sayfaya Dön'
  }[locale];

  return (
    <div className="min-h-screen bg-black text-zinc-100 py-16 px-6">
      <div className="max-w-4xl mx-auto space-y-10">
        {/* دکمه بازگشت */}
        <Link
          href={`/${locale}`}
          className="inline-flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
        >
          <BackArrow className="w-4 h-4" />
          <span>{backText}</span>
        </Link>

        {/* سربرگ پروژه */}
        <div className="space-y-4 border-b border-zinc-800 pb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-mono uppercase tracking-wider">
            <Cpu className="w-3.5 h-3.5" />
            {project.categories}
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-100">
            {project.title[locale] || project.title.en}
          </h1>

          <p className="text-lg text-zinc-400 leading-relaxed">
            {project.summary[locale] || project.summary.en}
          </p>
        </div>

        {/* بخش برچسب‌های فنی (Tech Stack & Tags) */}
        <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 space-y-3">
          <div className="flex items-center gap-2 text-sm font-semibold text-zinc-300">
            <Tag className="w-4 h-4 text-cyan-400" />
            <span>
              {locale === 'fa' ? 'فناوری‌ها و تگ‌ها' : locale === 'tr' ? 'Teknolojiler' : 'Technologies & Tags'}
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 text-xs font-mono bg-zinc-800 border border-zinc-700 text-zinc-300 rounded-md"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* جایگاه اطلاعات تکمیلی / مستندات مهندسی */}
        <div className="bg-zinc-900/30 border border-zinc-800/80 rounded-xl p-8 space-y-4 text-center">
          <Layers className="w-10 h-10 text-zinc-600 mx-auto" />
          <h2 className="text-lg font-medium text-zinc-300">
            {locale === 'fa'
              ? 'مستندات فنی، فایل‌های CAD و دیاگرام‌ها'
              : locale === 'tr'
              ? 'Teknik Dokümantasyon ve CAD Dosyaları'
              : 'Technical Documentation & CAD Schematics'}
          </h2>
          <p className="text-sm text-zinc-500 max-w-md mx-auto">
            {locale === 'fa'
              ? 'محتوا، شماتیک‌ها و گالری تصاویر این پروژه در حال تکمیل است.'
              : locale === 'tr'
              ? 'Bu projeye ait şemalar ve görseller yakında eklenecektir.'
              : 'Detailed schematics, bill of materials, and media will be displayed here.'}
          </p>
        </div>
      </div>
    </div>
  );
}
