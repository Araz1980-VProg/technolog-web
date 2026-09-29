'use client';

import React, { useState } from 'react';
import { useLocale } from 'next-intl';
import Link from 'next/link';
import { QRCodeSVG } from 'qrcode.react';

import { 
  Cpu, 
  Layers, 
  Terminal, 
  Workflow, 
  ShieldCheck, 
  Lightbulb, 
  Mail, 
  Send, 
  MessageSquare, 
  CheckCircle2 
} from 'lucide-react';

export default function AboutPage() {
  const currentLocale = (useLocale() || 'en') as 'en' | 'fa' | 'tr';
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const content = {
    badge: {
      en: 'Engineering Studio & R&D Hub',
      fa: 'استودیو مهندسی و مرکز تحقیق و توسعه',
      tr: 'Mühendislik Stüdyosu ve Ar-Ge Merkezi',
    }[currentLocale],
    headline: {
      en: 'Bridging the Chasm Between Virtual Logic and Physical Reality.',
      fa: 'پیوند زدن منطق نرم‌افزاری با واقعیت دنیای فیزیکی.',
      tr: 'Yazılım Mantığı ile Fiziksel Gerçeklik Arasındaki Köprü.',
    }[currentLocale],
    manifesto: {
      en: 'Technolog was founded on a simple truth: software alone cannot solve tangible physical challenges. We engineer complete end-to-end ecosystems—from thermodynamic and process modeling to embedded electronics, precision CNC/3D fabrication, and modern AI-driven cloud backends.',
      fa: 'تکنولاگ (Technolog) بر پایه یک اصل شکل گرفت: نرم‌افزار به‌تنهایی قادر به حل مسائل جهان فیزیکی نیست. رسالت ما خلق چرخه‌های کامل مهندسی است؛ از مدل‌سازی فرآیندی و ترمودینامیک تا بردهای امبدد، ساخت دقیق سه‌بعدی و مکانیک، تا اتصال به سرورهای مدرن ابری و هوش مصنوعی.',
      tr: 'Technolog temel bir ilke üzerine kuruldu: Yazılım tek başına fiziksel zorlukları çözemez. Termodinamik ve süreç modellemesinden gömülü sistemlere, hassas üretime ve modern yapay zekâ altyapılarına kadar uçtan uca eksiksiz sistemler geliştiriyoruz.',
    }[currentLocale],
    matrixTitle: {
      en: 'Multidisciplinary Matrix',
      fa: 'ماتریس تخصص‌های بین‌رشته‌ای',
      tr: 'Disiplinlerarası Uzmanlık Matrisi',
    }[currentLocale],
    pillars: [
      {
        icon: Layers,
        title: {
          en: 'Mechatronics & Physical Design',
          fa: 'مکاترونیک و طراحی مکانیک',
          tr: 'Mekatronik ve Mekanik Tasarım',
        }[currentLocale],
        description: {
          en: 'Parametric 3D CAD (SolidWorks/FreeCAD), structural kinematics (Gantry systems), fluid/vacuum degassing, and functional FDM/resin rapid prototyping.',
          fa: 'طراحی پارامتریک سه‌بعدی (FreeCAD/SolidWorks)، سینماتیک سازه‌ها (گانگری)، سیستم‌های خلاء و سیالات، و نمونه‌سازی سریع با پرینت سه‌بعدی صنعتی.',
          tr: 'Parametrik 3D CAD, kinematik yapı tasarımı (Gantry sistemleri), vakum ve akışkan sistemleri ile fonksiyonel prototipleme.',
        }[currentLocale],
        tags: ['CAD/CAM', 'Kinematics', 'Rapid Prototyping', 'Vacuum Systems'],
      },
      {
        icon: Cpu,
        title: {
          en: 'Embedded Systems & Automation',
          fa: 'سیستم‌های امبدد و الکترونیک',
          tr: 'Gömülü Sistemler ve Otomasyon',
        }[currentLocale],
        description: {
          en: 'Microcontroller architecture (ESP32, STM32, ARM), motor driver tuning, sensor fusion, PCB layout, and low-latency C/C++ firmware.',
          fa: 'توسعه فریم‌ورهای بلادرنگ میکروکنترلری (ESP32/STM32)، کنترل دقیق درایورهای موتور، ادغام سنسورها و طراحی بردهای الکترونیکی اختصاصی.',
          tr: 'Mikrodenetleyici mimarisi (ESP32, STM32), motor sürücüleri, sensör füzyonu ve düşük gecikmeli gömülü yazılımlar.',
        }[currentLocale],
        tags: ['ESP32 / ARM', 'Firmware (C/C++)', 'Motor Control', 'Sensors'],
      },
      {
        icon: Terminal,
        title: {
          en: 'Full-Stack Software & AI Logic',
          fa: 'نرم‌افزار یکپارچه و منطق هوش مصنوعی',
          tr: 'Yazılım ve Yapay Zekâ',
        }[currentLocale],
        description: {
          en: 'High-throughput microservices using FastAPI & Python, Next.js interactive web interfaces, Redis queues, and computer vision / local AI integration.',
          fa: 'میکروسرویس‌های مقیاس‌پذیر با FastAPI و پایتون، رابط‌های مدرن وب Next.js، صف‌های بلادرنگ و پیاده‌سازی مدل‌های محلی بینایی ماشین و AI.',
          tr: 'FastAPI ve Python ile mikroservisler, Next.js kullanıcı arayüzleri ve görüntü işleme / yerel yapay zekâ entegrasyonu.',
        }[currentLocale],
        tags: ['FastAPI / Python', 'Next.js', 'Distributed Queues', 'Computer Vision'],
      },
      {
        icon: Workflow,
        title: {
          en: 'Process Engineering & Pilot Scale',
          fa: 'مهندسی فرآیند و تست‌های پایلوت',
          tr: 'Süreç Mühendisliği ve Pilot Ölçek',
        }[currentLocale],
        description: {
          en: 'Rooted in chemical & energy engineering backgrounds: mass-energy balances, pilot plant scale-up, industrial valve tuning, and field-tested durability.',
          fa: 'برخاسته از دانش مهندسی شیمی و انرژی: موازنه‌های جرم و انرژی، ارتقاء مقیاس پایلوت، کالیبراسیون تجهیزات ابزاردقیق و پایدارسازی میدانی.',
          tr: 'Kütle-enerji dengeleri, pilot tesis ölçekleme, enstrümantasyon kalibrasyonu ve zorlu saha koşullarında güvenilirlik.',
        }[currentLocale],
        tags: ['Scale-up', 'Thermodynamics', 'Instrument Tuning', 'Field Testing'],
      },
    ],
    principlesTitle: {
      en: 'The Technolog Axioms',
      fa: 'اصول حاکم بر توسعه در تکنولاگ',
      tr: 'Temel Mühendislik İlkeleri',
    }[currentLocale],
    principles: [
      {
        title: {
          en: 'Zero-Bloat Engineering',
          fa: 'مهندسی بدون زوائد (Zero-Bloat)',
          tr: 'Yalın Mühendislik',
        }[currentLocale],
        desc: {
          en: 'Every milligram of filament, line of firmware, and microservice call must justify its existence.',
          fa: 'هر میلی‌گرم متریال، هر خط از فریم‌ور و هر اندپوینت API باید توجیه فنی و کارکرد شفاف داشته باشد.',
          tr: 'Her filament gramı, her kod satırı ve mikroservis çağrısı somut bir amaca hizmet etmelidir.',
        }[currentLocale],
      },
      {
        title: {
          en: 'Hardware-Software Symbiosis',
          fa: 'هم‌زیستی سخت‌افزار و کد',
          tr: 'Donanım ve Yazılım Uyumu',
        }[currentLocale],
        desc: {
          en: 'Physical sensors and digital dashboards are treated as single organic entities, not isolated layers.',
          fa: 'سنسورهای فیزیکی و داشبوردهای نرم‌افزاری اجزای یک موجودیت یکپارچه‌اند، نه لایه‌های مجزا.',
          tr: 'Fiziksel sensörler ve dijital kontrol panelleri yalıtılmış değil, birleşik bir sistem olarak tasarlanır.',
        }[currentLocale],
      },
    ],
    contactSection: {
      badge: {
        en: 'Direct Communication',
        fa: 'کانال ارتباط مستقیم',
        tr: 'Doğrudan İletişim',
      }[currentLocale],
      title: {
        en: 'Initiate an Engineering Dialogue',
        fa: 'آغاز گفت‌وگو و همکاری مهندسی',
        tr: 'Mühendislik İletişimi Başlatın',
      }[currentLocale],
      desc: {
        en: 'Whether you need customized mechatronics prototyping, R&D consulting, or end-to-end IoT design, reach out directly.',
        fa: 'برای مشاوره تحقیق و توسعه، طراحی و ساخت پروتوتایپ‌های مکاترونیک یا سیستم‌های سفارشی، مستقیماً در ارتباط باشید.',
        tr: 'Özel mekatronik prototipleme, Ar-Ge danışmanlığı veya uçtan uca IoT tasarımı için doğrudan iletişime geçin.',
      }[currentLocale],
      emailLabel: {
        en: 'Direct Email',
        fa: 'ایمیل مستقیم',
        tr: 'Doğrudan E-posta',
      }[currentLocale],
      socialLabel: {
        en: 'Repositories & Code',
        fa: 'کدها و مخازن گیت‌هاب',
        tr: 'Kodlar ve Projeler',
      }[currentLocale],
      namePlaceholder: {
        en: 'Your Name / Company',
        fa: 'نام شما / مجموعه صنعتی',
        tr: 'Adınız / Şirketiniz',
      }[currentLocale],
      emailPlaceholder: {
        en: 'Email Address',
        fa: 'آدرس ایمیل',
        tr: 'E-posta Adresi',
      }[currentLocale],
      subjectPlaceholder: {
        en: 'Subject (e.g. R&D Consultation / Mechatronics Prototype)',
        fa: 'موضوع (مثلاً: مشاوره ساخت پروتوتایپ / اتوماسیون)',
        tr: 'Konu (örn. Ar-Ge Danışmanlığı / Mekatronik Prototip)',
      }[currentLocale],
      messagePlaceholder: {
        en: 'Briefly describe technical requirements or challenges...',
        fa: 'شرح مختصر نیازمندی‌ها یا چالش‌های فنی...',
        tr: 'Teknik gereksinimleri veya hedeflerinizi kısaca açıklayın...',
      }[currentLocale],
      submitBtn: {
        en: 'Send Dispatch',
        fa: 'ارسال پیام',
        tr: 'Mesajı Gönder',
      }[currentLocale],
      successMsg: {
        en: 'Message received. We will respond via technical channel shortly.',
        fa: 'پیام شما دریافت شد. در اسرع وقت از طریق ایمیل پاسخ داده خواهد شد.',
        tr: 'Mesajınız alındı. En kısa sürede teknik kanaldan dönüş yapılacaktır.',
      }[currentLocale],
    },
    instagramSection: {
      title: {
        en: 'Follow us on Instagram',
        fa: 'ما را در اینستاگرام دنبال کنید',
        tr: 'Bizi Instagram\'da takip edin'
      },
      desc: {
        en: 'Scan to see our latest works & behind-the-scenes.',
        fa: 'اسکن کنید تا جدیدترین کارها و پشت‌صحنه‌ها را ببینید.',
        tr: 'En son çalışmalarımızı ve sahne arkasını görmek için tarayın.'
      }
    },
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // در حالت پیش‌فرض برای تست، استیت ثبت را فعال می‌کنیم
    // می‌توان به api/contact یا سرویس فرم وصل کرد
    setSubmitted(true);
  };

  return (
    <div className="container mx-auto px-4 py-14 max-w-5xl">
      {/* هدر صفحه و مانیفست اصلی */}
      <section className="space-y-6 mb-16 text-start">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
          <Lightbulb className="w-3.5 h-3.5 text-cyan-400" />
          <span>{content.badge}</span>
        </div>
        
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
          {content.headline}
        </h1>

        <p className="text-base md:text-lg text-zinc-300 leading-relaxed max-w-3xl">
          {content.manifesto}
        </p>
      </section>

      {/* ماتریس ۴ ستونه مهارت‌ها */}
      <section className="mb-20">
        <h2 className="text-xl font-bold text-white mb-8 border-b border-zinc-900 pb-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-cyan-400 inline-block"></span>
          {content.matrixTitle}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {content.pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div 
                key={idx} 
                className="p-6 rounded-xl border border-zinc-900 bg-zinc-950/40 hover:border-zinc-800 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-zinc-900 flex items-center justify-center mb-4 border border-zinc-800 text-cyan-400">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{pillar.title}</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                    {pillar.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-zinc-900/60">
                  {pillar.tags.map((tag, tIdx) => (
                    <span 
                      key={tIdx} 
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-zinc-900/80 text-zinc-400 border border-zinc-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* اصول مهندسی */}
      <section className="mb-20 p-8 rounded-2xl border border-zinc-900 bg-gradient-to-b from-zinc-950/80 to-zinc-900/20">
        <h2 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-emerald-400" />
          {content.principlesTitle}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {content.principles.map((p, idx) => (
            <div key={idx} className="space-y-1.5">
              <h4 className="text-sm font-semibold text-zinc-200">{p.title}</h4>
              <p className="text-xs text-zinc-400 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* بخش ارتباط با ما (Contact & Inquiry) */}
      <section id="contact" className="p-8 md:p-10 rounded-2xl border border-zinc-800/80 bg-zinc-950/60 shadow-xl">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          
          {/* ستون اطلاعات مستقیم ارتباطی */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 bg-cyan-500/10 px-2.5 py-1 rounded border border-cyan-500/20 inline-block mb-3">
                {content.contactSection.badge}
              </span>
              <h3 className="text-2xl font-bold text-white mb-3">
                {content.contactSection.title}
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                {content.contactSection.desc}
              </p>
            </div>

            <div className="space-y-4 pt-2">
            <a 
                href="info@technologhq.com" 
                className="flex items-center gap-3 p-4 rounded-xl border border-zinc-900 bg-zinc-900/40 hover:border-zinc-700 hover:bg-zinc-900/80 transition-all text-sm group"
            >
                <div className="w-10 h-10 rounded-lg bg-zinc-800/80 flex items-center justify-center text-cyan-400 group-hover:text-cyan-300">
                <Mail className="w-5 h-5" />
                </div>
                <div>
                <div className="text-xs text-zinc-500">{content.contactSection.emailLabel}</div>
                <div className="font-mono text-zinc-200">info@technologhq.com</div>
                </div>
            </a>

            {/* نشانگر زمان پاسخگویی به جای لینک خالی */}
            <div className="px-4 py-3 rounded-xl border border-zinc-900/60 bg-zinc-950/40 flex items-center gap-2.5 text-xs text-zinc-400 font-mono">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>Response time: &lt; 24h (Direct Dispatch)</span>
            </div>
            </div>
          </div>

          {/* فرم ارسال پیام مستقیم */}
          <div className="lg:col-span-3 bg-zinc-900/20 p-6 md:p-8 rounded-xl border border-zinc-900">
            {submitted ? (
              <div className="py-12 flex flex-col items-center justify-center text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-400" />
                <h4 className="text-lg font-bold text-white">{content.contactSection.successMsg}</h4>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 text-xs font-mono text-cyan-400 hover:underline"
                >
                  ← ارسال پیام دیگر
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      required
                      placeholder={content.contactSection.namePlaceholder}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg bg-zinc-950/80 border border-zinc-800 text-sm text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-cyan-500 transition-colors"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      required
                      placeholder={content.contactSection.emailPlaceholder}
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg bg-zinc-950/80 border border-zinc-800 text-sm text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-cyan-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <input
                    type="text"
                    required
                    placeholder={content.contactSection.subjectPlaceholder}
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg bg-zinc-950/80 border border-zinc-800 text-sm text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-cyan-500 transition-colors"
                  />
                </div>

                <div>
                  <textarea
                    rows={4}
                    required
                    placeholder={content.contactSection.messagePlaceholder}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg bg-zinc-950/80 border border-zinc-800 text-sm text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-lg text-sm font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 hover:bg-cyan-500/20 hover:border-cyan-500/50 transition-all cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>{content.contactSection.submitBtn}</span>
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="mt-8 p-4 rounded-xl border border-zinc-800 bg-zinc-900/50 flex items-center gap-6">
          <QRCodeSVG 
            value="https://instagram.com/Technolog.hq" 
            size={100}
            bgColor="transparent"
            fgColor="#22d3ee" 
            className="border-2 border-zinc-700 rounded-lg p-1"
          />
          <div className="space-y-1">
            <h4 className="text-white font-medium">
              {content.instagramSection.title[currentLocale as 'en' | 'fa' | 'tr']}
            </h4>
            <p className="text-sm text-zinc-400">
              {content.instagramSection.desc[currentLocale as 'en' | 'fa' | 'tr']}
            </p>
          </div>
        </div>

      </section>
    </div>
  );
}
