'use client';

import { usePathname } from 'next/navigation';

export type locale = 'en' | 'fa' | 'tr';
const locales: locale[] = ['en', 'fa', 'tr'];

export default function LanguageSwitcher({ currentLocale }: { currentLocale: locale }) {
  const pathname = usePathname();

  const handlechange = (target: locale) => {
    document.cookie = `NEXT_LOCALE=${target}; path=/; max-age=31536000; SameSite=Lax`;

    const segments = pathname.split('/').filter(Boolean);
    if (segments.length > 0 && locales.includes(segments[0] as locale)) {
      segments.shift();
    }
    const rest = segments.join('/');
    const newpath = `/${target}${rest ? `/${rest}` : ''}`;

    window.location.href = newpath;
  };

  return (
    <div dir="ltr" className="inline-flex items-center gap-1 rounded-lg border border-zinc-800 bg-zinc-900/90 p-1">
      {locales.map((lc) => {
        const active = lc === currentLocale;
        return (
          <button
            key={lc}
            type="button"
            onClick={() => handlechange(lc)}
            className={`cursor-pointer px-2.5 py-1 text-xs font-mono rounded transition-colors ${
              active
                ? 'bg-cyan-500/20 text-cyan-400 font-bold'
                : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            {lc.toUpperCase()}
          </button>
        );
      })}
    </div>
  );
}
