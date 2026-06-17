import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Download, Linkedin, Mail, MapPin, TrendingUp, Code, Search, Star, Zap, ChevronDown } from 'lucide-react';
import { useTypewriter } from '@/hooks/useTypewriter';
import { useScrollReveal, useScrollRevealAll } from '@/hooks/useScrollReveal';

const roles = [
  'SEO Specialist',
  'Web Developer',
  'Content Strategist',
  'GEO Optimizer',
  'Digital Growth Hacker',
];

const stats = [
  { value: '40%', label: 'Organic Traffic Growth', icon: TrendingUp },
  { value: '5+', label: 'Industry Certifications', icon: Star },
  { value: '1st', label: 'Google Page Ranking', icon: Search },
  { value: '100%', label: 'Human-Written Content', icon: Zap },
];

const services = [
  {
    icon: Search,
    title: 'Technical SEO',
    desc: 'Deep audits, Core Web Vitals optimization, structured data & indexability fixes that move rankings.',
    tag: 'On-Page · Off-Page · Audit',
  },
  {
    icon: TrendingUp,
    title: 'Content & AEO Strategy',
    desc: 'AI-era Answer Engine Optimization — content built for Google, SGE, and beyond.',
    tag: 'AEO · GEO · Keyword Research',
  },
  {
    icon: Code,
    title: 'Web Development',
    desc: 'Responsive, performance-first websites with clean code and cross-browser precision.',
    tag: 'HTML · CSS · JS · PHP',
  },
];

export default function Home() {
  const typedText = useTypewriter(roles, 75, 45, 2200);

  const { ref: heroRef, visible: heroVisible } = useScrollReveal();
  const { ref: statsRef, visible: statsVisible } = useScrollReveal();
  const { ref: servRef, visible: servVisible } = useScrollReveal();
  const { refs: cardRefs, visible: cardsVisible } = useScrollRevealAll(3);

  // Parallax subtle effect on hero photo
  const photoRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!photoRef.current) return;
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      const dx = (e.clientX - cx) / cx;
      const dy = (e.clientY - cy) / cy;
      photoRef.current.style.transform = `translate(${dx * 8}px, ${dy * 8}px) scale(1.02)`;
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <div className="page-enter">
      {/* ===== HERO ===== */}
      <section className="relative min-h-screen grid-bg flex items-center overflow-hidden pt-20">
        {/* Radial spotlight */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full opacity-10"
               style={{ background: 'radial-gradient(circle, hsl(245 80% 70%), transparent 65%)' }} />
        </div>

        <div className="max-w-6xl mx-auto px-6 py-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text */}
            <div>
              {/* Status badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium mb-8 border badge-glow animate-fade-in-up"
                   style={{
                     background: 'hsl(245 80% 70% / 0.1)',
                     borderColor: 'hsl(245 80% 70% / 0.3)',
                     color: 'hsl(245 80% 80%)'
                   }}>
                <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: 'hsl(120 70% 55%)' }} />
                Available for new opportunities
              </div>

              {/* Greeting */}
              <p className="text-[hsl(220_10%_55%)] text-lg mb-2 font-light animate-fade-in-up delay-100"
                 style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                Hey there, I'm
              </p>

              {/* Name */}
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9] mb-4 animate-fade-in-up delay-200"
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                <span className="text-white block">HEMANTH</span>
                <span className="gradient-text block">KUMAR.S</span>
              </h1>

              {/* Typewriter role */}
              <div className="flex items-center gap-3 mb-6 animate-fade-in-up delay-300">
                <div className="h-px flex-1 max-w-[60px]"
                     style={{ background: 'linear-gradient(90deg, hsl(245 80% 70%), transparent)' }} />
                <p className="text-[hsl(245_80%_78%)] text-xl font-semibold cursor-blink"
                   style={{ fontFamily: 'Space Grotesk, sans-serif', minWidth: '240px' }}>
                  {typedText}
                </p>
              </div>

              <p className="text-[hsl(220_10%_58%)] text-base leading-relaxed max-w-lg mb-8 animate-fade-in-up delay-400">
                Rank higher. Drive traffic. Grow organically. I deliver top search visibility by Doing{' '}
                <span className="text-white font-medium">technical SEO expertise</span> with{' '}
                <span className="text-white font-medium">data-backed content strategies</span> - Ensuring every
                piece of content achieves measurable business impact.
              </p>

              {/* Location */}
              <div className="flex items-center gap-2 text-[hsl(220_10%_50%)] text-sm mb-8 animate-fade-in-up delay-400">
                <MapPin size={14} />
                Chennai, Tamil Nadu, India
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4 animate-fade-in-up delay-500">
                <Link
                  to="/experience"
                  className="glow-btn flex items-center gap-2 px-7 py-3.5 rounded-xl text-white font-semibold text-sm border border-[hsl(245_80%_70%/0.5)] transition-all duration-300"
                  style={{ background: 'linear-gradient(135deg, hsl(245 80% 55%), hsl(245 80% 45%))' }}
                >
                  View My Work <ArrowRight size={16} />
                </Link>
                <a
                  href="mailto:shemanthkumar2006@gmail.com"
                  className="flex items-center gap-2 px-7 py-3.5 rounded-xl text-[hsl(220_20%_75%)] font-semibold text-sm border border-[hsl(245_80%_70%/0.2)] hover:border-[hsl(245_80%_70%/0.5)] hover:text-white transition-all duration-300 hover:bg-[hsl(245_80%_70%/0.05)]"
                >
                  <Mail size={16} /> Contact Me
                </a>
              </div>

              {/* Social */}
              <div className="flex items-center gap-4 mt-8 animate-fade-in-up delay-600">
                <a href="https://www.linkedin.com/in/itsmehemanthkumar/" target="_blank" rel="noopener noreferrer"
                   className="w-10 h-10 rounded-xl flex items-center justify-center text-[hsl(220_10%_55%)] hover:text-white border border-[hsl(245_80%_70%/0.15)] hover:border-[hsl(245_80%_70%/0.5)] hover:bg-[hsl(245_80%_70%/0.1)] transition-all duration-300">
                  <Linkedin size={18} />
                </a>
                <a href="mailto:shemanthkumar2006@gmail.com"
                   className="w-10 h-10 rounded-xl flex items-center justify-center text-[hsl(220_10%_55%)] hover:text-white border border-[hsl(245_80%_70%/0.15)] hover:border-[hsl(245_80%_70%/0.5)] hover:bg-[hsl(245_80%_70%/0.1)] transition-all duration-300">
                  <Mail size={18} />
                </a>
              </div>
            </div>

            {/* Photo */}
            <div className="flex justify-center lg:justify-end animate-fade-in-right delay-300">
              <div className="relative">
                {/* Glow ring */}
                <div className="absolute inset-[-16px] rounded-full animate-pulse-glow pointer-events-none"
                     style={{ background: 'radial-gradient(circle, hsl(245 80% 70% / 0.2) 0%, transparent 70%)' }} />
                <div className="absolute inset-[-4px] rounded-full"
                     style={{ background: 'linear-gradient(135deg, hsl(245 80% 70% / 0.6), hsl(38 95% 60% / 0.4))', padding: '2px' }}>
                  <div className="w-full h-full rounded-full bg-[hsl(240_20%_4%)]" />
                </div>
                <div ref={photoRef} className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-[360px] lg:h-[360px] rounded-full overflow-hidden transition-transform duration-200 ease-out"
                     style={{ border: '3px solid hsl(245 80% 70% / 0.3)' }}>
                  <img
                    src="https://cdn-ai.onspace.ai/onspace/project/uploads/Q6wsJBMzGgY9EsUvSYxUci/img_me.jpg"
                    alt="Hemanthkumar S"
                    className="w-full h-full object-cover object-center"
                  />
                </div>

                {/* Floating badge — SEO */}
                <div className="absolute -bottom-4 -left-8 glass-card rounded-2xl px-4 py-3 animate-float"
                     style={{ animationDelay: '0s' }}>
                  <p className="text-xs text-[hsl(220_10%_55%)]">Current Role</p>
                  <p className="text-white font-bold text-sm">SEO Specialist</p>
                  <p className="text-[hsl(245_80%_75%)] text-xs">@ Hattrick Web Works</p>
                </div>

                {/* Floating badge — CGPA */}
                <div className="absolute -top-4 -right-8 glass-card rounded-2xl px-4 py-3 animate-float"
                     style={{ animationDelay: '2s' }}>
                  <p className="text-xs text-[hsl(220_10%_55%)]">Academic</p>
                  <p className="text-[hsl(38_95%_65%)] font-bold text-xl">85%</p>
                  <p className="text-white text-xs">CGPA · Anna University</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[hsl(220_10%_40%)] animate-bounce">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ChevronDown size={16} />
        </div>
      </section>

      {/* ===== STATS ===== */}
      <section ref={statsRef as React.RefObject<HTMLElement>} className="py-20 border-y border-[hsl(245_80%_70%/0.08)]">
        <div className="max-w-6xl mx-auto px-6">
          <div className={`grid grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-700 ${statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {stats.map(({ value, label, icon: Icon }, i) => (
              <div key={i} className="glass-card rounded-2xl p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_hsl(245_80%_70%/0.12)]"
                   style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-4"
                     style={{ background: 'hsl(245 80% 70% / 0.15)' }}>
                  <Icon size={20} className="text-[hsl(245_80%_75%)]" />
                </div>
                <p className="text-4xl font-black gradient-text mb-1" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  {value}
                </p>
                <p className="text-[hsl(220_10%_55%)] text-sm">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHAT I DO ===== */}
      <section ref={servRef as React.RefObject<HTMLElement>} className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className={`mb-16 transition-all duration-700 ${servVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="text-[hsl(245_80%_75%)] text-sm font-semibold tracking-widest uppercase mb-3 block">What I Deliver</span>
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              I Can Help You{' '}
              <span className="shimmer-text">Rank. Grow. Win.</span>
            </h2>
            <p className="text-[hsl(220_10%_55%)] max-w-xl text-base leading-relaxed">
              From technical SEO audits to development projects — I bring a holistic, performance-obsessed approach to every challenge.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((svc, i) => (
              <div
                key={i}
                ref={el => { cardRefs.current[i] = el; }}
                className={`glass-card rounded-2xl p-7 transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_16px_40px_hsl(245_80%_70%/0.12)] group cursor-default ${
                  cardsVisible[i] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
                     style={{ background: 'linear-gradient(135deg, hsl(245 80% 70% / 0.2), hsl(38 95% 60% / 0.15))' }}>
                  <svc.icon size={22} className="text-[hsl(245_80%_78%)]" />
                </div>
                <h3 className="text-white font-bold text-xl mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  {svc.title}
                </h3>
                <p className="text-[hsl(220_10%_55%)] text-sm leading-relaxed mb-5">{svc.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {svc.tag.split(' · ').map(t => (
                    <span key={t} className="px-2.5 py-1 rounded-lg text-xs font-medium"
                          style={{ background: 'hsl(245 80% 70% / 0.1)', color: 'hsl(245 80% 78%)' }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* CTA bottom */}
          <div className="flex justify-center mt-16">
            <Link
              to="/experience"
              className="group flex items-center gap-3 px-8 py-4 rounded-2xl text-white font-semibold border border-[hsl(245_80%_70%/0.3)] hover:border-[hsl(245_80%_70%/0.7)] hover:bg-[hsl(245_80%_70%/0.08)] transition-all duration-300"
            >
              Explore My Experience
              <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== QUICK ABOUT STRIP ===== */}
      <section className="py-16 border-t border-[hsl(245_80%_70%/0.08)]"
               style={{ background: 'linear-gradient(135deg, hsl(245 80% 70% / 0.04), hsl(38 95% 60% / 0.03))' }}>
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <p className="text-[hsl(220_10%_55%)] text-sm mb-1">Currently Pursuing</p>
            <p className="text-white font-bold text-lg" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              BE – Computer & Communication Engineering
            </p>
            <p className="text-[hsl(245_80%_75%)] text-sm">Gojan School of Business & Technology · Expected 2027</p>
          </div>
          <div className="h-12 w-px bg-[hsl(245_80%_70%/0.15)] hidden md:block" />
          <div>
            <p className="text-[hsl(220_10%_55%)] text-sm mb-1">Academic Performance</p>
            <p className="text-[hsl(38_95%_65%)] font-black text-4xl" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>85%</p>
            <p className="text-[hsl(220_10%_55%)] text-sm">CGPA · Anna University</p>
          </div>
          <div className="h-12 w-px bg-[hsl(245_80%_70%/0.15)] hidden md:block" />
          <Link to="/about"
                className="group flex items-center gap-2 text-[hsl(245_80%_78%)] font-semibold hover:text-white transition-colors duration-200">
            More About Me <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>
      </section>
    </div>
  );
}
