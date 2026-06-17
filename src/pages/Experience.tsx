import { useRef } from 'react';
import { Briefcase, Calendar, MapPin, Award, CheckCircle, TrendingUp, Users, Star, Zap } from 'lucide-react';
import { useScrollReveal, useScrollRevealAll } from '@/hooks/useScrollReveal';

const experiences = [
  {
    role: 'SEO Specialist',
    company: 'Hattrick Web Works',
    location: 'Chennai, India',
    period: 'Aug 2024 – Present',
    type: 'Full-time',
    color: 'hsl(245 80% 70%)',
    highlights: [
      'Ranked webpage on Google Search for competitive keyword "best face wash in Germany" through strategic on-page & technical SEO.',
      'Executed comprehensive SEO including keyword research, meta tag optimization, URL structuring, and internal linking — improving organic visibility by 40%.',
      'Conducted SEO audits resolving site performance, indexing, mobile responsiveness, and page speed issues.',
      'Analyzed website traffic & user behavior using analytics tools to drive data-backed optimization decisions.',
      'Collaborated cross-functionally with content and development teams to align SEO best practices with business objectives.',
    ],
  },
  {
    role: 'Web Development Trainee',
    company: 'Codsoft',
    location: 'Chennai, India',
    period: 'Jul 2024 – Aug 2024',
    type: 'Internship',
    color: 'hsl(38 95% 60%)',
    highlights: [
      'Developed responsive web applications using HTML, CSS, and JavaScript with focus on clean UI and cross-browser compatibility.',
      'Implemented dynamic web features and form validations using JavaScript to enhance user interaction and usability.',
      'Applied SDLC practices including requirement analysis, development, testing, and deployment.',
      'Built and deployed mini projects emphasizing structured code, reusability, and performance optimization.',
    ],
  },
];

const achievements = [
  {
    icon: TrendingUp,
    title: 'Google Search Ranking Success',
    desc: 'Achieved first-page Google ranking for a highly competitive international keyword through strategic, data-backed SEO — a feat that speaks for itself.',
    metric: '#1',
    metricLabel: 'Page Rank',
    color: 'hsl(245 80% 70%)',
  },
  {
    icon: Users,
    title: 'Cross-Functional Collaboration',
    desc: 'Partnered with development and content teams to deliver client-aligned digital solutions that exceeded performance benchmarks.',
    metric: '100%',
    metricLabel: 'Client Satisfaction',
    color: 'hsl(38 95% 60%)',
  },
  {
    icon: Star,
    title: 'Continuous Learning Champion',
    desc: 'Completed 5+ industry certifications from AWS, Walmart Global Tech, and NPTEL — demonstrating an unwavering commitment to professional growth.',
    metric: '5+',
    metricLabel: 'Certifications',
    color: 'hsl(160 70% 55%)',
  },
  {
    icon: Zap,
    title: 'Technical Content Creation',
    desc: 'Developed 100% human-written, GEO and SEO-optimized content driving measurable organic traffic growth across multiple verticals.',
    metric: '40%',
    metricLabel: 'Traffic Growth',
    color: 'hsl(320 70% 65%)',
  },
];

export default function Experience() {
  const { ref: headerRef, visible: headerVisible } = useScrollReveal();
  const { ref: achRef, visible: achVisible } = useScrollReveal();
  const { refs: expRefs, visible: expVisible } = useScrollRevealAll(experiences.length);
  const { refs: achCardRefs, visible: achCardsVisible } = useScrollRevealAll(achievements.length);

  return (
    <div className="page-enter pt-28 pb-24">
      <div className="max-w-6xl mx-auto px-6">

        {/* ===== HEADER ===== */}
        <div ref={headerRef as React.RefObject<HTMLElement>}
             className={`mb-20 transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="text-[hsl(245_80%_75%)] text-sm font-semibold tracking-widest uppercase mb-3 block">My Journey</span>
          <h1 className="text-5xl sm:text-6xl font-black text-white mb-5" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            Experience &{' '}
            <span className="shimmer-text">Achievements</span>
          </h1>
          <p className="text-[hsl(220_10%_55%)] text-lg max-w-2xl leading-relaxed">
            From internship to active professional — every milestone sharpened my craft. Here's the story of how I turned SEO theory into measurable business impact.
          </p>
        </div>

        {/* ===== TIMELINE ===== */}
        <div className="mb-28">
          <div className="flex items-center gap-4 mb-12">
            <Briefcase className="text-[hsl(245_80%_75%)]" size={24} />
            <h2 className="text-3xl font-bold text-white" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Professional Experience
            </h2>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-px hidden md:block"
                 style={{ background: 'linear-gradient(to bottom, hsl(245 80% 70% / 0.6), hsl(38 95% 60% / 0.3), transparent)' }} />

            <div className="space-y-10">
              {experiences.map((exp, i) => (
                <div
                  key={i}
                  ref={el => { expRefs.current[i] = el; }}
                  className={`relative md:pl-16 transition-all duration-700 ${expVisible[i] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
                  style={{ transitionDelay: `${i * 150}ms` }}
                >
                  {/* Timeline dot */}
                  <div className="hidden md:flex absolute left-0 top-6 w-12 h-12 items-center justify-center rounded-xl z-10"
                       style={{ background: `${exp.color.replace(')', ' / 0.15)')}`, border: `2px solid ${exp.color.replace(')', ' / 0.4)')}` }}>
                    <Briefcase size={18} style={{ color: exp.color }} />
                  </div>

                  <div className="glass-card rounded-2xl p-7 hover:shadow-[0_8px_32px_hsl(245_80%_70%/0.1)] transition-all duration-300 hover:-translate-y-0.5">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                      <div>
                        <div className="flex items-center gap-3 mb-1">
                          <h3 className="text-white font-bold text-xl" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                            {exp.role}
                          </h3>
                          <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold"
                                style={{ background: `${exp.color.replace(')', ' / 0.15)')}`, color: exp.color }}>
                            {exp.type}
                          </span>
                        </div>
                        <p className="font-semibold" style={{ color: exp.color }}>{exp.company}</p>
                        <div className="flex items-center gap-4 mt-1 text-[hsl(220_10%_50%)] text-sm">
                          <span className="flex items-center gap-1"><MapPin size={12} />{exp.location}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm text-[hsl(220_10%_60%)] shrink-0"
                           style={{ background: 'hsl(240 15% 10%)' }}>
                        <Calendar size={13} />
                        {exp.period}
                      </div>
                    </div>

                    <ul className="space-y-3">
                      {exp.highlights.map((h, j) => (
                        <li key={j} className="flex items-start gap-3">
                          <CheckCircle size={15} className="mt-0.5 shrink-0" style={{ color: exp.color }} />
                          <span className="text-[hsl(220_10%_65%)] text-sm leading-relaxed">{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ===== ACHIEVEMENTS ===== */}
        <div ref={achRef as React.RefObject<HTMLElement>}
             className={`transition-all duration-700 ${achVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center gap-4 mb-12">
            <Award className="text-[hsl(38_95%_65%)]" size={24} />
            <h2 className="text-3xl font-bold text-white" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Key Achievements
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((ach, i) => (
              <div
                key={i}
                ref={el => { achCardRefs.current[i] = el; }}
                className={`glass-card rounded-2xl p-7 hover:shadow-[0_8px_32px_hsl(245_80%_70%/0.12)] transition-all duration-700 hover:-translate-y-1 group ${
                  achCardsVisible[i] ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110"
                       style={{ background: `${ach.color.replace(')', ' / 0.15)')}`, border: `1px solid ${ach.color.replace(')', ' / 0.3)')}` }}>
                    <ach.icon size={24} style={{ color: ach.color }} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <h3 className="text-white font-bold text-base leading-snug" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                        {ach.title}
                      </h3>
                      <div className="text-right shrink-0">
                        <p className="font-black text-2xl" style={{ color: ach.color, fontFamily: 'Space Grotesk, sans-serif' }}>
                          {ach.metric}
                        </p>
                        <p className="text-[hsl(220_10%_50%)] text-xs">{ach.metricLabel}</p>
                      </div>
                    </div>
                    <p className="text-[hsl(220_10%_58%)] text-sm leading-relaxed">{ach.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
