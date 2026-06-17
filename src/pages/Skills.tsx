import { useRef, useState, useEffect } from 'react';
import { BadgeCheck, Code, Search, Database, Wrench, Brain, ExternalLink } from 'lucide-react';
import { useScrollReveal, useScrollRevealAll } from '@/hooks/useScrollReveal';

const skillGroups = [
  {
    icon: Search,
    title: 'SEO & Content Marketing',
    color: 'hsl(245 80% 70%)',
    skills: [
      { name: 'Keyword Research', level: 92 },
      { name: 'On-Page SEO', level: 95 },
      { name: 'Technical SEO', level: 88 },
      { name: 'Off-Page SEO / Link Building', level: 82 },
      { name: 'Google Search Console', level: 90 },
      { name: 'Content Marketing', level: 88 },
      { name: 'AEO & GEO Optimization', level: 85 },
      { name: 'SEO Site Auditing', level: 90 },
    ],
  },
  {
    icon: Code,
    title: 'Web Development',
    color: 'hsl(38 95% 60%)',
    skills: [
      { name: 'HTML / CSS', level: 90 },
      { name: 'JavaScript', level: 78 },
      { name: 'PHP', level: 70 },
      { name: 'REST APIs', level: 72 },
      { name: 'WordPress CMS', level: 88 },
      { name: 'Responsive Design', level: 85 },
    ],
  },
  {
    icon: Database,
    title: 'Database & Backend',
    color: 'hsl(160 70% 55%)',
    skills: [
      { name: 'SQL', level: 78 },
      { name: 'Database Design', level: 72 },
      { name: 'Python', level: 75 },
      { name: 'Java', level: 70 },
    ],
  },
  {
    icon: Wrench,
    title: 'Tools & Methodologies',
    color: 'hsl(320 70% 65%)',
    skills: [
      { name: 'Git / GitHub', level: 80 },
      { name: 'SDLC & Agile', level: 82 },
      { name: 'Unit Testing & Debugging', level: 75 },
      { name: 'AI Prompting', level: 88 },
    ],
  },
];

const certifications = [
  {
    title: 'Advanced Software Engineering Job Simulation',
    issuer: 'Walmart Global Tech (Forage)',
    topics: 'Data Structures · Software Architecture · Database Design · Engineering Problem-Solving',
    icon: '🏪',
    color: 'hsl(38 95% 60%)',
  },
  {
    title: 'Solutions Architecture Job Simulation',
    issuer: 'AWS (Forage)',
    topics: 'Scalable Cloud Architecture · Secure Solutions · Cost-Efficient Design · Business Alignment',
    icon: '☁️',
    color: 'hsl(245 80% 70%)',
  },
  {
    title: 'Fundamentals of Object-Oriented Programming',
    issuer: 'NPTEL – IIT Roorkee',
    topics: 'OOP Principles · Structured Software Development · Java Programming',
    icon: '🎓',
    color: 'hsl(160 70% 55%)',
  },
  {
    title: 'Web Development using CMS & SEO Certification',
    issuer: 'Hattrick Web Works',
    topics: 'Responsive Website Development · WordPress CMS · Search Performance Optimization',
    icon: '🌐',
    color: 'hsl(320 70% 65%)',
  },
];

function SkillBar({ name, level, color, animate }: { name: string; level: number; color: string; animate: boolean }) {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (animate) {
      const t = setTimeout(() => setWidth(level), 200);
      return () => clearTimeout(t);
    }
  }, [animate, level]);

  return (
    <div className="mb-4">
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-[hsl(220_10%_70%)] text-sm">{name}</span>
        <span className="text-xs font-semibold" style={{ color }}>{level}%</span>
      </div>
      <div className="h-1.5 rounded-full bg-[hsl(240_15%_12%)] overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-1000 ease-out"
          style={{
            width: `${width}%`,
            background: `linear-gradient(90deg, ${color}, ${color.replace('70%)', '85%)')})`,
          }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const { ref: headerRef, visible: headerVisible } = useScrollReveal();
  const { ref: certRef, visible: certVisible } = useScrollReveal();
  const { refs: groupRefs, visible: groupsVisible } = useScrollRevealAll(skillGroups.length);
  const { refs: certCardRefs, visible: certCardsVisible } = useScrollRevealAll(certifications.length);

  return (
    <div className="page-enter pt-28 pb-24">
      <div className="max-w-6xl mx-auto px-6">

        {/* ===== HEADER ===== */}
        <div ref={headerRef as React.RefObject<HTMLElement>}
             className={`mb-20 transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="text-[hsl(245_80%_75%)] text-sm font-semibold tracking-widest uppercase mb-3 block">Expertise & Credentials</span>
          <h1 className="text-5xl sm:text-6xl font-black text-white mb-5" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            Skills &{' '}
            <span className="shimmer-text">Certifications</span>
          </h1>
          <p className="text-[hsl(220_10%_55%)] text-lg max-w-2xl leading-relaxed">
            A versatile skill set built on real-world experience, rigorous self-learning, and industry-recognized credentials from AWS, Walmart, and IIT Roorkee.
          </p>
        </div>

        {/* ===== SKILL GROUPS ===== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-28">
          {skillGroups.map((group, i) => (
            <div
              key={i}
              ref={el => { groupRefs.current[i] = el; }}
              className={`glass-card rounded-2xl p-7 transition-all duration-700 hover:shadow-[0_8px_32px_hsl(245_80%_70%/0.1)] ${
                groupsVisible[i] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Group header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                     style={{ background: `${group.color.replace(')', ' / 0.15)')}` }}>
                  <group.icon size={20} style={{ color: group.color }} />
                </div>
                <h3 className="text-white font-bold text-lg" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  {group.title}
                </h3>
              </div>

              {group.skills.map((s) => (
                <SkillBar
                  key={s.name}
                  name={s.name}
                  level={s.level}
                  color={group.color}
                  animate={groupsVisible[i]}
                />
              ))}
            </div>
          ))}
        </div>

        {/* ===== CERTIFICATIONS ===== */}
        <div ref={certRef as React.RefObject<HTMLElement>}
             className={`transition-all duration-700 ${certVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center gap-4 mb-12">
            <BadgeCheck className="text-[hsl(38_95%_65%)]" size={24} />
            <h2 className="text-3xl font-bold text-white" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Certifications & Training
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, i) => (
              <div
                key={i}
                ref={el => { certCardRefs.current[i] = el; }}
                className={`glass-card rounded-2xl p-7 transition-all duration-700 hover:-translate-y-1 hover:shadow-[0_12px_36px_hsl(245_80%_70%/0.12)] group ${
                  certCardsVisible[i] ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl shrink-0"
                       style={{ background: `${cert.color.replace(')', ' / 0.12)')}`, border: `1px solid ${cert.color.replace(')', ' / 0.25)')}` }}>
                    {cert.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-base mb-1 leading-snug" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                      {cert.title}
                    </h4>
                    <p className="font-semibold text-sm mb-3" style={{ color: cert.color }}>{cert.issuer}</p>
                    <div className="flex flex-wrap gap-2">
                      {cert.topics.split(' · ').map(t => (
                        <span key={t} className="px-2.5 py-1 rounded-lg text-xs"
                              style={{ background: 'hsl(240 15% 10%)', color: 'hsl(220 10% 60%)' }}>
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Badge */}
                <div className="flex items-center gap-2 mt-5 pt-5 border-t border-[hsl(245_80%_70%/0.08)]">
                  <BadgeCheck size={14} style={{ color: cert.color }} />
                  <span className="text-xs" style={{ color: cert.color }}>Verified Certification</span>
                </div>
              </div>
            ))}
          </div>

          {/* Emerging Tech strip */}
          <div className="mt-12 glass-card rounded-2xl p-7">
            <div className="flex items-center gap-3 mb-5">
              <Brain size={22} className="text-[hsl(320_70%_65%)]" />
              <h3 className="text-white font-bold text-lg" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                Emerging Technologies
              </h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {['AI Prompting', 'GEO Optimization', 'Answer Engine Optimization', 'Core Web Vitals', 'Schema Markup', 'Google SGE', 'Agile Methodology', 'SDLC'].map(tag => (
                <span key={tag} className="px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 hover:scale-105 cursor-default"
                      style={{
                        background: 'linear-gradient(135deg, hsl(320 70% 65% / 0.12), hsl(245 80% 70% / 0.12))',
                        color: 'hsl(320 70% 75%)',
                        border: '1px solid hsl(320 70% 65% / 0.2)'
                      }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
