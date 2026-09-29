'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLocale } from 'next-intl';
import LanguageSwitcher, { type locale } from './LanguageSwitcher';
import Image from 'next/image';
import { FlaskConical } from 'lucide-react';

export default function Header() {
  const currentLocale = useLocale() as locale;
  const pathname = usePathname();

  const isHome = pathname === `/${currentLocale}` || pathname === `/${currentLocale}/`;
  const isProjects = pathname.startsWith(`/${currentLocale}/projects`);
  const isLab = pathname.startsWith(`/${currentLocale}/lab`);
  const isAbout = pathname.startsWith(`/${currentLocale}/about`);

  const activeClass = 'text-cyan-400 font-semibold';
  const inactiveClass = 'text-zinc-400 hover:text-cyan-400 transition-colors';

  return (
    <header className="flex items-center justify-between px-8 py-6 border-b border-zinc-900 sticky top-0 bg-black/80 backdrop-blur z-50" dir="ltr">
      <Link href={`/${currentLocale}`} className="flex items-center gap-3">
        <Image
          src="/Technolog_Logo.png"
          alt="Technolog Logo"
          width={36}
          height={36}
          className="object-contain"
          priority
        />
        <span
          className="text-2xl font-bold tracking-wider"
          style={{ fontFamily: 'var(--font-tech-logo)' }}
        >
          <span className="text-white">T</span>
          <span className="text-cyan-400">echnolog</span>
        </span>
      </Link>

      <nav className="flex items-center gap-8 text-sm">
        <Link
          href={`/${currentLocale}`}
          className={isHome ? activeClass : inactiveClass}
        >
          Home
        </Link>
        <Link
          href={`/${currentLocale}/projects`}
          className={isProjects ? activeClass : inactiveClass}
        >
          Projects
        </Link>
        <Link
          href={`/${currentLocale}/lab`}
          className={`flex items-center gap-1.5 ${isLab ? activeClass : inactiveClass}`}
        >
          <FlaskConical className="h-4 w-4 text-emerald-400" />
          Lab &amp; R&amp;D
        </Link>
        <Link
          href={`/${currentLocale}/about`}
          className={isAbout ? activeClass : inactiveClass}
        >
          About
        </Link>
      </nav>

      <div>
        <LanguageSwitcher currentLocale={currentLocale} />
      </div>
    </header>
  );
}
