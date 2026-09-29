import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import Link from "next/link";
import { Cpu, Printer, Sparkles, ArrowRight, FlaskConical } from "lucide-react";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { projects } from "@/data/projects";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <HomeContent locale={locale} />;
}

function HomeContent({ locale }: { locale: string }) {
  const tNav = useTranslations("Navigation");
  const tHero = useTranslations("Hero");

  const isRtl = locale === "fa";

  return (
    <div className="flex min-h-screen flex-col">

      {/* Hero Section */}
      <main className="flex-1 max-w-7xl mx-auto px-6 py-24 flex flex-col justify-center items-center text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-950/30 text-cyan-400 text-xs font-mono mb-8 backdrop-blur-sm">
          <Sparkles className="h-3.5 w-3.5" />
          <span>{tHero("badge")}</span>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight max-w-4xl text-transparent bg-clip-text bg-gradient-to-b from-white via-zinc-200 to-zinc-500 leading-tight">
          {tHero("title")}
        </h1>

        <p className="mt-6 text-lg md:text-xl text-zinc-400 max-w-2xl leading-relaxed">
          {tHero("subtitle")}
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href={`/${locale}/projects`}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-cyan-500 text-zinc-950 font-semibold hover:bg-cyan-400 transition-all shadow-[0_0_20px_rgba(6,182,212,0.25)]"
          >
            <span>{tHero("exploreBtn")}</span>
            <ArrowRight className={`h-4 w-4 ${isRtl ? "rotate-180" : ""}`} />
          </Link>
          
          <Link
            href={`/${locale}/lab`}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-zinc-800 bg-zinc-900/60 hover:bg-zinc-800/80 text-zinc-300 font-medium transition-all"
          >
            <Printer className="h-4 w-4 text-zinc-400" />
            <span>{tHero("labBtn")}</span>
          </Link>
        </div>
      </main>

      {/* Featured Projects Grid */}
      <section className="max-w-7xl mx-auto px-6 py-20 w-full border-t border-zinc-900">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white">
              {locale === "fa" ? "پروژه‌های شاخص" : locale === "tr" ? "Öne Çıkan Projeler" : "Featured Engineering"}
            </h2>
            <p className="text-sm text-zinc-400 mt-1">
              {locale === "fa" ? "ترکیب سخت‌افزار، طراحی مکانیک و اتوماسیون" : locale === "tr" ? "Donanım, mekanik tasarım ve otomasyon" : "Hardware, CAD prototyping and custom automation"}
            </p>
          </div>
          <Link
            href={`/${locale}/projects`}
            className="text-xs font-mono text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            {locale === "fa" ? "مشاهده همه ←" : locale === "tr" ? "Tümünü Gör →" : "View All Projects →"}
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((item) => (
            <Link
              key={item.slug}
              href={`/${locale}/projects/${item.slug}`}
              className="block cursor-pointer p-6 rounded-2xl border border-zinc-800 bg-zinc-900/40 hover:border-cyan-500/50 hover:bg-zinc-900/80 transition-all group"
            >
              <div>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {item.categories?.map((cat) => (
                  <span
                    key={cat}
                    className="text-xs font-mono font-semibold uppercase tracking-wider text-cyan-400/80 bg-cyan-950/40 border border-cyan-800/30 px-2.5 py-1 rounded"
                  >
                    {cat.replace(/_/g, ' ')}
                  </span>
                ))}
              </div>
                <h3 className="text-lg font-semibold text-zinc-100 group-hover:text-cyan-300 transition-colors">
                  {item.title[locale as 'en'|'fa'|'tr'] || item.title.en}
                </h3>
                <p className="text-sm text-zinc-400 mt-2 line-clamp-3 leading-relaxed">
                  {item.summary[locale as 'en'|'fa'|'tr'] || item.summary.en}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-zinc-800/50 flex flex-wrap gap-1.5 "dir="ltr">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-mono px-2 py-0.5 rounded bg-zinc-800/60 text-zinc-400"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-900 py-8 text-center text-xs text-zinc-600 font-mono">
        © 2026 TECHnolog. Built with Next.js, Tailwind & TypeScript.
      </footer>
    </div>
  );
}
