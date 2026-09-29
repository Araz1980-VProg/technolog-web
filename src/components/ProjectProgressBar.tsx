'use client';

import React from 'react';
import { ProjectPhase, PhaseKey } from '@/data/projects';

interface PhaseMeta {
  label: Record<'en' | 'fa' | 'tr', string>;
  color: string;      // کلاس Tailwind برای پر شدن
  activeColor: string; // کلاس پالس
}

export const PHASE_CONFIG: Record<PhaseKey, PhaseMeta> = {
  ai_research: {
    label: { en: 'AI & Research', fa: 'تحقیقات و هوش مصنوعی', tr: 'Yapay Zeka ve Araştırma' },
    color: 'bg-purple-500',
    activeColor: 'bg-purple-400',
  },
  concept: {
    label: { en: 'Concept & Specs', fa: 'مفهوم و معماری سیستم', tr: 'Kavram ve Sistem Mimarisi' },
    color: 'bg-amber-400',
    activeColor: 'bg-amber-300',
  },
  simulation: {
    label: { en: 'Simulation & CFD/FEA', fa: 'شبیه‌سازی و تحلیل', tr: 'Simülasyon ve Analiz' },
    color: 'bg-teal-400',
    activeColor: 'bg-teal-300',
  },
  cad_design: {
    label: { en: 'CAD & Design', fa: 'طراحی صنعتی و سه‌بعدی', tr: 'CAD ve Endüstriyel Tasarım' },
    color: 'bg-cyan-400',
    activeColor: 'bg-cyan-300',
  },
  electronics: {
    label: { en: 'Electronics & PCB', fa: 'الکترونیک و طراحی برد', tr: 'Elektronik ve PCB Tasarımı' },
    color: 'bg-indigo-400',
    activeColor: 'bg-indigo-300',
  },
  firmware: {
    label: { en: 'Firmware & Logic', fa: 'فریم‌ور و منطق کنترلی', tr: 'Gömülü Yazılım ve Mantık' },
    color: 'bg-blue-400',
    activeColor: 'bg-blue-300',
  },
  prototyping: {
    label: { en: 'Rapid Prototype', fa: 'پروتوتایپ و ساخت آزمایشگاهی', tr: 'Hızlı Prototipleme' },
    color: 'bg-rose-500',
    activeColor: 'bg-rose-400',
  },
  industrial_scale: {
    label: { en: 'Industrial Scale', fa: 'تولید انبوه و صنعتی', tr: 'Endüstriyel Ölçeklendirme' },
    color: 'bg-orange-500',
    activeColor: 'bg-orange-400',
  },
  field_testing: {
    label: { en: 'Testing & QA', fa: 'تست میدانی و کالیبراسیون', tr: 'Saha Testleri ve Kalibrasyon' },
    color: 'bg-emerald-400',
    activeColor: 'bg-emerald-300',
  },
};

interface Props {
  phases: ProjectPhase[];
  locale?: 'en' | 'fa' | 'tr';
}

export default function ProjectProgressBar({ phases, locale = 'en' }: Props) {
  if (!phases || phases.length === 0) return null;

  return (
    <div className="w-full space-y-1.5" dir="ltr">
      <div className="flex items-center gap-1.5 w-full">
        {phases.map((phase) => {
          const config = PHASE_CONFIG[phase.key];
          if (!config) return null;

          const isCompleted = phase.status === 'completed';
          const isInProgress = phase.status === 'in_progress';
          const localizedLabel = config.label[locale] || config.label.en;

          return (
            <div
              key={phase.key}
              className="group relative flex-1 h-2 bg-zinc-800/80 rounded-full overflow-hidden"
            >
              {/* پر شدن فاز تکمیل‌شده */}
              {isCompleted && (
                <div className={`h-full w-full ${config.color}`} />
              )}

              {/* پالس و پیشرفت فاز جاری */}
              {isInProgress && (
                <div
                  className={`h-full ${config.activeColor} animate-pulse rounded-full`}
                  style={{ width: `${Math.max(phase.progress, 15)}%` }}
                />
              )}

              {/* فاز pending خالی می‌ماند */}

              {/* Tooltip هنگام Hover روی هر سگمنت */}
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:flex flex-col items-center z-30 pointer-events-none">
                <div className="bg-zinc-900 border border-zinc-700 text-[11px] text-zinc-200 px-2.5 py-1 rounded shadow-xl whitespace-nowrap flex items-center gap-1.5">
                  <span className={`w-2 h-2 rounded-full ${config.color}`} />
                  <span className="font-medium">{localizedLabel}:</span>
                  <span className="text-cyan-400 font-mono">
                    {isCompleted ? '100%' : isInProgress ? `${phase.progress}%` : '0%'}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
