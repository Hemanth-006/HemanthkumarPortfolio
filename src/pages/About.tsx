import { useRef } from 'react';
import { Mail, Phone, MapPin, Linkedin, GraduationCap, Target, Heart, Coffee, Lightbulb, Send } from 'lucide-react';
import { useScrollReveal, useScrollRevealAll } from '@/hooks/useScrollReveal';

const values = [
  {
    icon: Target,
    title: 'Results-Obsessed',
    desc: 'Every strategy I build is anchored to measurable outcomes. Rankings, traffic, conversions — I track it all.',
    color: 'hsl(245 80% 70%)',
  },
  {
    icon: Lightbulb,
    title: 'Continuous Learner',
    desc: '5+ certifications and counting. I believe in staying ahead of algorithm changes and industry trends.',
    color: 'hsl(38 95% 60%)',
  },
  {
    icon: Coffee,
    title: 'Collaborative Spirit',
    desc: 'I thrive in cross-functional environments, bridging the gap between SEO, content, and development teams.',
    color: 'hsl(160 70% 55%)',
  },
  {
    icon: Heart,
    title: 'Passionate Creator',
    desc: 'I genuinely love crafting content and strategies that help brands get discovered by the right audience.',
    color: 'hsl(320 70% 65%)',
  },
];

const contactLinks = [
  {
    icon: Mail,
    label: 'Email',
    value: 'shemanthkumar2006@gmail.com',
    href: 'mailto:shemanthkumar2006@gmail.com',
    color: 'hsl(245 80% 70%)',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91-9345752697',
    href: 'tel:+919345752697',
    color: 'hsl(38 95% 60%)',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/itsmehemanthkumar',
    href: 'https://www.linkedin.com/in/itsmehemanthkumar/',
    color: 'hsl(160 70% 55%)',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Chennai, Tamil Nadu, India',
    href: null,
    color: 'hsl(320 70% 65%)',
  },
];

export default function About() {
  const { ref: headerRef, visible: headerVisible } = useScrollReveal();
  const { ref: bioRef, visible: bioVisible } = useScrollReveal();
  const { ref: eduRef, visible: eduVisible } = useScrollReveal();
  const { ref: valRef, visible: valVisible } = useScrollReveal();
  const { ref: contactRef, visible: contactVisible } = useScrollReveal();
  const { refs: valRefs, visible: valsVisible } = useScrollRevealAll(values.length);

  return (
    <div className="page-enter pt-28 pb-24">
      <div className="max-w-6xl mx-auto px-6">

        {/* ===== HEADER ===== */}
        <div ref={headerRef as React.RefObject<HTMLElement>}
             className={`mb-20 transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="text-[hsl(245_80%_75%)] text-sm font-semibold tracking-widest uppercase mb-3 block">The Person Behind the Work</span>
          <h1 className="text-5xl sm:text-6xl font-black text-white mb-5" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            About{' '}
            <span className="shimmer-text">Hemanthkumar</span>
          </h1>
          <p className="text-[hsl(220_10%_55%)] text-lg max-w-2xl leading-relaxed">
            A curious technologist, an SEO-driven strategist, and a storyteller through data — all bundled into one driven individual from Chennai.
          </p>
        </div>

        {/* ===== BIO SECTION ===== */}
        <section ref={bioRef as React.RefObject<HTMLElement>}
                 className={`grid grid-cols-1 lg:grid-cols-2 gap-14 items-center mb-24 transition-all duration-700 ${bioVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Photo side */}
          <div className="flex justify-center">
            <div className="relative">
              {/* Outer glow */}
              <div className="absolute inset-[-20px] rounded-3xl pointer-events-none opacity-40"
                   style={{ background: 'radial-gradient(circle, hsl(245 80% 70% / 0.3), transparent 70%)' }} />

              {/* Gradient border */}
              <div className="p-0.5 rounded-3xl"
                   style={{ background: 'linear-gradient(135deg, hsl(245 80% 70% / 0.7), hsl(38 95% 60% / 0.5))' }}>
                <div className="rounded-[22px] overflow-hidden w-80 h-80 sm:w-96 sm:h-96">
                  <img
                    src="https://cdn-ai.onspace.ai/onspace/project/uploads/Q6wsJBMzGgY9EsUvSYxUci/img_me.jpg"
                    alt="Hemanthkumar S"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>

              {/* Floating label */}
              <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap glass-card rounded-full px-5 py-2.5 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: 'hsl(120 70% 55%)' }} />
                <span className="text-white text-sm font-semibold">Open to Opportunities</span>
              </div>
            </div>
          </div>

          {/* Text side */}
          <div>
            <h2 className="text-4xl font-black text-white mb-6 leading-tight" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              I Transform{' '}
              <span className="gradient-text">Search Visibility</span>{' '}
              Into Business Growth
            </h2>

            <div className="space-y-4 text-[hsl(220_10%_60%)] leading-relaxed text-base">
              <p>
                I'm <span className="text-white font-semibold">Hemanthkumar S</span> — a passionate SEO Specialist and Web Developer based in Chennai, India.
                Currently pursuing my BE in Computer & Communication Engineering at Gojan School of Business and Technology under Anna University.
              </p>
              <p>
                My career mission is clear:{' '}
                <span className="text-[hsl(245_80%_78%)] font-medium">rank higher, drive traffic, and grow organically.</span>{' '}
                I merge technical SEO precision with data-backed content strategy to ensure every piece of content achieves real, measurable business impact.
              </p>
              <p>
                At <span className="text-white font-semibold">Hattrick Web Works</span>, I've achieved first-page Google rankings for competitive international keywords,
                improved organic visibility by 40%, and collaborated cross-functionally with content and development teams to deliver outstanding results.
              </p>
              <p>
                Beyond SEO, I build responsive websites and possess a growing foundation in cloud architecture, database design, and software engineering — certified by AWS and Walmart Global Tech.
              </p>
            </div>

            {/* Career Objective callout */}
            <div className="mt-8 p-5 rounded-2xl"
                 style={{ background: 'linear-gradient(135deg, hsl(245 80% 70% / 0.08), hsl(38 95% 60% / 0.06))', border: '1px solid hsl(245 80% 70% / 0.2)' }}>
              <p className="text-[hsl(245_80%_80%)] text-sm font-medium italic leading-relaxed">
                "Rank higher. Drive traffic. Grow organically. Every piece of content I craft and every SEO strategy I execute is built for measurable, lasting impact."
              </p>
            </div>
          </div>
        </section>

        {/* ===== EDUCATION ===== */}
        <section ref={eduRef as React.RefObject<HTMLElement>}
                 className={`mb-24 transition-all duration-700 ${eduVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center gap-4 mb-10">
            <GraduationCap className="text-[hsl(245_80%_75%)]" size={24} />
            <h2 className="text-3xl font-bold text-white" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Education
            </h2>
          </div>

          <div className="glass-card rounded-2xl p-8 hover:shadow-[0_8px_32px_hsl(245_80%_70%/0.1)] transition-all duration-300">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl shrink-0"
                     style={{ background: 'hsl(245 80% 70% / 0.12)', border: '1px solid hsl(245 80% 70% / 0.25)' }}>
                  🎓
                </div>
                <div>
                  <h3 className="text-white font-bold text-xl mb-1" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                    Bachelor of Engineering (BE)
                  </h3>
                  <p className="text-[hsl(245_80%_78%)] font-semibold mb-1">Computer & Communication Engineering</p>
                  <p className="text-[hsl(220_10%_55%)] text-sm">
                    Gojan School of Business and Technology, Chennai
                  </p>
                  <p className="text-[hsl(220_10%_50%)] text-sm">Anna University</p>
                </div>
              </div>

              <div className="flex gap-6 shrink-0">
                <div className="text-center glass-card rounded-xl px-5 py-4">
                  <p className="text-[hsl(38_95%_65%)] font-black text-3xl" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                    85%
                  </p>
                  <p className="text-[hsl(220_10%_55%)] text-xs mt-1">CGPA</p>
                </div>
                <div className="text-center glass-card rounded-xl px-5 py-4">
                  <p className="text-[hsl(245_80%_78%)] font-bold text-lg" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                    2027
                  </p>
                  <p className="text-[hsl(220_10%_55%)] text-xs mt-1">Expected</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== VALUES ===== */}
        <section ref={valRef as React.RefObject<HTMLElement>}
                 className={`mb-24 transition-all duration-700 ${valVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl font-bold text-white mb-10" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            What Drives Me
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {values.map((v, i) => (
              <div
                key={i}
                ref={el => { valRefs.current[i] = el; }}
                className={`glass-card rounded-2xl p-6 hover:-translate-y-1 hover:shadow-[0_8px_24px_hsl(245_80%_70%/0.1)] transition-all duration-700 group ${
                  valsVisible[i] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110"
                       style={{ background: `${v.color.replace(')', ' / 0.15)')}` }}>
                    <v.icon size={20} style={{ color: v.color }} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-base mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                      {v.title}
                    </h4>
                    <p className="text-[hsl(220_10%_58%)] text-sm leading-relaxed">{v.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ===== CONTACT ===== */}
        <section ref={contactRef as React.RefObject<HTMLElement>}
                 className={`transition-all duration-700 ${contactVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl font-bold text-white mb-10" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            Let's Connect
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact info */}
            <div className="space-y-4">
              {contactLinks.map((c, i) => (
                <div key={i} className="glass-card rounded-xl p-5 hover:border-[hsl(245_80%_70%/0.3)] hover:-translate-y-0.5 transition-all duration-300">
                  {c.href ? (
                    <a href={c.href} target={c.label === 'LinkedIn' ? '_blank' : undefined} rel="noopener noreferrer"
                       className="flex items-center gap-4 group">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-200 group-hover:scale-110"
                           style={{ background: `${c.color.replace(')', ' / 0.15)')}` }}>
                        <c.icon size={18} style={{ color: c.color }} />
                      </div>
                      <div>
                        <p className="text-[hsl(220_10%_50%)] text-xs">{c.label}</p>
                        <p className="text-white text-sm font-medium group-hover:text-[hsl(245_80%_78%)] transition-colors">{c.value}</p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                           style={{ background: `${c.color.replace(')', ' / 0.15)')}` }}>
                        <c.icon size={18} style={{ color: c.color }} />
                      </div>
                      <div>
                        <p className="text-[hsl(220_10%_50%)] text-xs">{c.label}</p>
                        <p className="text-white text-sm font-medium">{c.value}</p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* CTA card */}
            <div className="glass-card rounded-2xl p-8 flex flex-col justify-between"
                 style={{ background: 'linear-gradient(135deg, hsl(245 80% 70% / 0.08), hsl(38 95% 60% / 0.05))' }}>
              <div>
                <h3 className="text-white font-black text-2xl mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  Ready to Rank Higher?
                </h3>
                <p className="text-[hsl(220_10%_58%)] text-sm leading-relaxed mb-8">
                  Whether you need a comprehensive SEO audit, a data-backed content strategy, or a responsive website — I'm your person. Let's build something great together.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <a href="mailto:shemanthkumar2006@gmail.com"
                   className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-white font-semibold text-sm transition-all duration-300 hover:shadow-[0_0_20px_hsl(245_80%_70%/0.4)] hover:-translate-y-0.5"
                   style={{ background: 'linear-gradient(135deg, hsl(245 80% 60%), hsl(245 80% 48%))' }}>
                  <Send size={16} /> Send Me a Message
                </a>
                <a href="https://www.linkedin.com/in/itsmehemanthkumar/" target="_blank" rel="noopener noreferrer"
                   className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-white font-semibold text-sm border border-[hsl(245_80%_70%/0.3)] hover:border-[hsl(245_80%_70%/0.6)] hover:bg-[hsl(245_80%_70%/0.08)] transition-all duration-300">
                  <Linkedin size={16} /> Connect on LinkedIn
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
