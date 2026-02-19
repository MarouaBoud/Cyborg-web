import React, { useState, useEffect } from 'react';
import {
  Terminal,
  ChevronRight,
  ArrowRight,
  Sparkles,
  Radio,
  Fingerprint,
  Microchip,
  X,
  Layers,
  Zap,
  Shield,
  Users,
  Clock,
  MapPin,
  ExternalLink
} from 'lucide-react';

const App = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isManifestoOpen, setIsManifestoOpen] = useState(false);
  const [activeExperiment, setActiveExperiment] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-rotate experiments
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveExperiment((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const experiments = [
    {
      title: "The OS Switch",
      subtitle: "Week 1 → Week 2",
      description: "Shift from human coordination to an Agent Council that proposes your daily rhythm.",
      visual: "Human-Led → Agent-Led"
    },
    {
      title: "Shadow Molt",
      subtitle: "Agent Social Layer",
      description: "Your agents negotiate with other agents in a private protocol layer.",
      visual: "Agent ↔ Agent ↔ Agent"
    },
    {
      title: "Sovereign Shell",
      subtitle: "Personal OS",
      description: "Build an AI system tuned to your work style and energy patterns.",
      visual: "You + Your Agent = Cyborg"
    }
  ];

  const SectionHeading = ({ children, subtitle, dark = false }) => (
    <div className="mb-16 text-left max-w-3xl">
      <h2 className={`text-4xl md:text-5xl font-serif mb-6 ${dark ? 'text-white' : 'text-slate-900'}`}>{children}</h2>
      <p className={`text-lg leading-relaxed ${dark ? 'text-slate-400' : 'text-slate-600'}`}>{subtitle}</p>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#F9F7F2] text-slate-900 font-sans selection:bg-orange-100 selection:text-orange-900">

      {/* Manifesto Side Modal */}
      <div className={`fixed inset-0 z-[100] transition-opacity duration-500 ${isManifestoOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" onClick={() => setIsManifestoOpen(false)} />
        <div className={`absolute right-0 top-0 h-full w-full md:w-[600px] bg-[#FDFCFB] shadow-2xl transition-transform duration-500 transform ${isManifestoOpen ? 'translate-x-0' : 'translate-x-full'} overflow-y-auto p-8 md:p-12`}>
          <button onClick={() => setIsManifestoOpen(false)} className="absolute top-8 right-8 p-2 hover:bg-slate-100 rounded-full transition-colors">
            <X size={24} />
          </button>

          <div className="mt-12 space-y-8">
            <div className="uppercase tracking-[0.2em] text-xs font-bold text-orange-600">The 2026 Thesis</div>
            <h2 className="text-4xl font-serif leading-tight">Synthesis of 2003 and 2027</h2>

            <div className="prose prose-slate prose-lg">
              <p className="italic text-slate-500">AI is rapidly moving from a tool we use to systems that act on our behalf.</p>

              <h4 className="font-serif text-xl mt-8">1. The Extended Mind (2003)</h4>
              <p className="text-slate-600">We honor Andy Clark's vision: human brains are uniquely evolved to incorporate non-biological tools. Our minds are "built for breach." The failed "Semantic Web" of 2003 lacked the cheap intelligence we have today.</p>

              <h4 className="font-serif text-xl mt-8">2. Autonomic Business (2027)</h4>
              <p className="text-slate-600">By 2027, agents will handle 4 days of work unsupervised. This represents an Autonomic Business Transformation, shifting focus from digital business (human-driven) to systems that manage themselves.</p>

              <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 font-serif text-xl text-center my-8">
                E ∝ C<sup>α</sup> · M<sup>β</sup>
              </div>

              <p className="text-slate-600">Cyborg Horizon bridges these eras, moving from "machines reading text" to a Sovereign Mesh of autonomous agents that manage the complexity of a digital society.</p>
            </div>

            <button onClick={() => setIsManifestoOpen(false)} className="w-full py-4 bg-slate-900 text-white font-bold rounded-xl mt-12 hover:bg-slate-800 transition-colors">
              Close Thesis
            </button>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#F9F7F2]/90 backdrop-blur-md border-b border-slate-200 py-3' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 border border-slate-900 rounded-full flex items-center justify-center">
              <span className="font-serif italic font-bold">CH</span>
            </div>
            <span className="font-serif text-xl tracking-tight hidden sm:block">Cyborg Horizon</span>
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={() => setIsManifestoOpen(true)}
              className="text-sm font-bold uppercase tracking-widest text-slate-500 hover:text-orange-600 transition-colors flex items-center gap-2"
            >
              Manifesto <Layers size={16} />
            </button>
            <a href="#experiments" className="text-sm font-bold uppercase tracking-widest text-slate-500 hover:text-orange-600 transition-colors hidden sm:block">
              Experiments
            </a>
            <button className="bg-slate-900 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-orange-700 transition-all">
              Apply
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-44 pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-5xl">
            <div className="flex items-center gap-4 text-orange-600 mb-10 overflow-hidden">
              <span className="uppercase tracking-[0.4em] text-[10px] font-black whitespace-nowrap">Healdsburg · June 8 — 21, 2026</span>
              <div className="h-[1px] w-full bg-orange-600/30" />
            </div>

            <h1 className="text-[12vw] md:text-[9.5rem] font-serif leading-[0.8] tracking-tighter mb-12">
              <span className="block overflow-hidden">Cyborg</span>
              <span className="block italic mt-2">Horizon <span className="text-[4vw] md:text-[3.5rem] not-italic align-top opacity-40 ml-2">residency</span></span>
            </h1>

            <div className="grid md:grid-cols-12 gap-12 items-start mt-20">
              <div className="md:col-span-7">
                <p className="text-3xl md:text-4xl text-slate-800 font-serif leading-[1.2] mb-8">
                  The era of AI assistants is ending. We are entering the era of <span className="italic border-b-2 border-orange-200">AI-operated systems</span>.
                </p>
                <p className="text-xl text-slate-500 font-serif leading-relaxed max-w-xl">
                  An incubator for high-agency individuals who intend to own the infrastructure of the coming decade rather than merely rent it.
                </p>

                <div className="flex flex-wrap gap-4 pt-8">
                  <button className="group bg-slate-900 hover:bg-orange-700 text-white px-8 py-4 rounded-full font-bold transition-all flex items-center gap-3">
                    Join the Experiment
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button
                    onClick={() => setIsManifestoOpen(true)}
                    className="border-2 border-slate-300 hover:border-orange-300 px-8 py-4 rounded-full font-bold transition-all hover:bg-orange-50"
                  >
                    Read the Thesis
                  </button>
                </div>
              </div>

              <div className="md:col-span-5 flex justify-end">
                <div className="p-10 border border-slate-200 rounded-[3rem] bg-white shadow-xl shadow-orange-900/5 max-w-sm relative">
                  <Sparkles className="absolute -top-4 -right-4 text-orange-400 w-10 h-10" />
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-orange-500" /> Current Hypothesis
                  </p>
                  <p className="text-xl leading-tight font-serif italic text-slate-900">
                    "Our minds are built for breach—designed to think and feel through our best technologies."
                  </p>
                  <div className="mt-8 pt-8 border-t border-slate-100 flex justify-between items-center text-xs font-bold uppercase tracking-tighter text-slate-400">
                    <span>Andy Clark, 2003</span>
                    <ArrowRight size={14} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Background Element */}
        <div className="absolute top-20 right-[-10%] w-[60%] h-[80%] bg-gradient-to-bl from-orange-100/30 to-transparent rounded-full blur-[120px] -z-0" />
      </section>

      {/* Divider */}
      <div className="flex justify-center gap-4 py-8 text-slate-300">
        <span>☼</span><span>☼</span><span>☼</span>
      </div>

      {/* The Paradigm Shift */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_50%,rgba(234,88,12,0.2),transparent_50%)]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="uppercase tracking-[0.3em] text-orange-400 text-xs font-bold mb-4">THE PARADIGM SHIFT</div>
            <h2 className="text-4xl md:text-5xl font-serif">
              From tools to <span className="italic">operators</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {/* Past */}
            <div className="text-center p-8 rounded-[2rem] border border-white/10 bg-white/5 opacity-60">
              <div className="uppercase tracking-widest text-xs text-white/40 mb-4">2022-2024</div>
              <div className="text-3xl font-serif mb-4">Chatbots</div>
              <div className="text-white/40 font-serif italic">Say things</div>
              <div className="mt-6 h-1 bg-white/10 rounded-full">
                <div className="h-full w-1/3 bg-white/30 rounded-full" />
              </div>
            </div>

            {/* Present */}
            <div className="text-center p-8 rounded-[2rem] border border-white/20 bg-white/10">
              <div className="uppercase tracking-widest text-xs text-orange-400 mb-4">2025-2026</div>
              <div className="text-3xl font-serif mb-4">Agents</div>
              <div className="text-white/60 font-serif italic">Do things</div>
              <div className="mt-6 h-1 bg-white/10 rounded-full">
                <div className="h-full w-2/3 bg-orange-500 rounded-full" />
              </div>
            </div>

            {/* Future */}
            <div className="text-center p-8 rounded-[2rem] border-2 border-orange-500 bg-orange-500/10 relative">
              <div className="absolute -top-3 -right-3">
                <Sparkles className="text-orange-400" size={24} />
              </div>
              <div className="uppercase tracking-widest text-xs text-orange-300 mb-4">2027+</div>
              <div className="text-3xl font-serif mb-4">Cyborgs</div>
              <div className="text-orange-200 font-serif italic">Own everything</div>
              <div className="mt-6 h-1 bg-white/10 rounded-full">
                <div className="h-full w-full bg-gradient-to-r from-orange-500 to-amber-400 rounded-full" />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 right-0 w-full h-1/2 bg-gradient-to-t from-orange-500/10 to-transparent pointer-events-none" />
      </section>

      {/* The Living Lab Section */}
      <section className="py-32 bg-white border-y border-slate-100" id="experiment">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading subtitle="The residency is structured as a living prototype — a village where survival depends on the agents built by its participants.">
            The Living Residency Lab
          </SectionHeading>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-20">
            <div className="group space-y-8 p-10 rounded-[3rem] border border-transparent hover:border-slate-100 hover:bg-slate-50/50 transition-all">
              <div className="w-14 h-14 bg-[#F9F7F2] rounded-2xl flex items-center justify-center border border-slate-100 group-hover:scale-110 transition-transform">
                <Radio className="text-orange-600" />
              </div>
              <div>
                <h3 className="text-2xl font-serif italic mb-4">Infrastructure as Prototype</h3>
                <p className="text-slate-600 leading-relaxed">
                  Residents do not build agents for "clients." All internal operations — logistics, group coordination, and project "shipping" — are managed by an interconnected mesh of agents.
                </p>
              </div>
            </div>

            <div className="group space-y-8 p-10 rounded-[3rem] border border-transparent hover:border-slate-100 hover:bg-slate-50/50 transition-all">
              <div className="w-14 h-14 bg-[#F9F7F2] rounded-2xl flex items-center justify-center border border-slate-100 group-hover:scale-110 transition-transform">
                <Fingerprint className="text-orange-600" />
              </div>
              <div>
                <h3 className="text-2xl font-serif italic mb-4">The Shadow Molt</h3>
                <p className="text-slate-600 leading-relaxed">
                  A private, agent-only social protocol where participants' agents negotiate and collaborate using MCP (Model Context Protocol). A shadow layer of the residency.
                </p>
              </div>
            </div>

            <div className="group space-y-8 p-10 rounded-[3rem] border border-transparent hover:border-slate-100 hover:bg-slate-50/50 transition-all">
              <div className="w-14 h-14 bg-[#F9F7F2] rounded-2xl flex items-center justify-center border border-slate-100 group-hover:scale-110 transition-transform">
                <Microchip className="text-orange-600" />
              </div>
              <div>
                <h3 className="text-2xl font-serif italic mb-4">Personal OS Switch</h3>
                <p className="text-slate-600 leading-relaxed">
                  A two-week experiment shifting from traditional human coordination to an "Agent Council" representing focus, health, and social priorities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experiments Section */}
      <section id="experiments" className="py-32 bg-[#F9F7F2]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left - Experiment Selector */}
            <div className="space-y-6 lg:sticky lg:top-32">
              <div className="uppercase tracking-[0.3em] text-orange-600 text-xs font-bold">THE 2026 EXPERIMENTS</div>
              <h2 className="text-4xl md:text-5xl font-serif leading-tight">
                Three trials.<br />
                <span className="italic text-slate-400">Two weeks.</span>
              </h2>

              <div className="space-y-4 pt-8">
                {experiments.map((exp, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveExperiment(i)}
                    className={`w-full text-left p-6 rounded-2xl border-2 transition-all ${
                      activeExperiment === i
                        ? 'border-orange-500 bg-orange-50'
                        : 'border-slate-200 hover:border-slate-300 bg-white'
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <div className={`text-xs font-bold uppercase tracking-widest mb-2 ${activeExperiment === i ? 'text-orange-600' : 'text-slate-400'}`}>
                          {exp.subtitle}
                        </div>
                        <div className="text-xl font-serif">{exp.title}</div>
                      </div>
                      <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                        activeExperiment === i ? 'border-orange-500 bg-orange-500' : 'border-slate-300'
                      }`}>
                        {activeExperiment === i && <div className="w-2 h-2 bg-white rounded-full" />}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Right - Experiment Detail */}
            <div className="lg:min-h-[500px]">
              <div className="bg-slate-900 text-white rounded-[3rem] p-10 md:p-12 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-orange-600/20 to-transparent rounded-full blur-3xl" />

                <div className="relative z-10">
                  <div className="uppercase tracking-widest text-orange-400 text-xs font-bold mb-6">
                    EXPERIMENT {String(activeExperiment + 1).padStart(2, '0')}
                  </div>

                  <h3 className="text-3xl md:text-4xl font-serif mb-6">
                    {experiments[activeExperiment].title}
                  </h3>

                  <p className="text-xl text-white/60 font-serif leading-relaxed mb-12">
                    {experiments[activeExperiment].description}
                  </p>

                  {/* Visual Representation */}
                  <div className="bg-white/10 border border-white/10 rounded-2xl p-8 text-center">
                    <div className="font-mono text-2xl text-orange-300 tracking-wider">
                      {experiments[activeExperiment].visual}
                    </div>
                  </div>

                  {/* Progress Dots */}
                  <div className="flex justify-center gap-3 mt-12">
                    {experiments.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveExperiment(i)}
                        className={`h-2 rounded-full transition-all ${
                          activeExperiment === i ? 'w-8 bg-orange-500' : 'w-2 bg-white/20'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Sovereign Root */}
      <section className="py-32 bg-slate-900 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div>
              <SectionHeading dark subtitle="We address the 'Lethal Trifecta' of agentic risk: access to private data, untrusted content, and unauthorized actions.">
                The Sovereign Root
              </SectionHeading>

              <div className="space-y-8">
                <div className="flex gap-6 items-start">
                  <div className="mt-1 w-6 h-6 rounded-full border border-orange-500 flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-orange-500" />
                  </div>
                  <div>
                    <h4 className="text-xl font-serif mb-2">Local-First Architecture</h4>
                    <p className="text-slate-400">Prioritizing privacy through local execution while balancing API-based intelligence for power.</p>
                  </div>
                </div>

                <div className="flex gap-6 items-start">
                  <div className="mt-1 w-6 h-6 rounded-full border border-orange-500 flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-orange-500" />
                  </div>
                  <div>
                    <h4 className="text-xl font-serif mb-2">Defense Acceleration (d/acc)</h4>
                    <p className="text-slate-400">Innovation that strengthens human agency and resilience without concentrating power in major hyperscalers.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-[3rem] p-10 backdrop-blur-sm">
              <h3 className="text-2xl font-serif italic mb-8">2027 Launchpad Outcomes</h3>
              <ul className="space-y-6">
                <li className="flex items-center gap-4 text-slate-300">
                  <ArrowRight size={18} className="text-orange-500 flex-shrink-0" />
                  <span>A Deployed Agent System running real processes</span>
                </li>
                <li className="flex items-center gap-4 text-slate-300">
                  <ArrowRight size={18} className="text-orange-500 flex-shrink-0" />
                  <span>A Sovereign Operational Stack you own, not rent</span>
                </li>
                <li className="flex items-center gap-4 text-slate-300">
                  <ArrowRight size={18} className="text-orange-500 flex-shrink-0" />
                  <span>Working Multi-Agent Workflow (MCP & A2A)</span>
                </li>
              </ul>
              <div className="mt-12 pt-12 border-t border-white/10 text-center">
                <p className="text-orange-400 font-serif text-lg italic">"The Napster moment for agentic AI."</p>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 right-0 w-full h-1/2 bg-gradient-to-t from-orange-500/10 to-transparent pointer-events-none" />
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-br from-orange-600 to-orange-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIyMCIgY3k9IjIwIiByPSIxIiBmaWxsPSJ3aGl0ZSIgZmlsbC1vcGFjaXR5PSIwLjMiLz48L3N2Zz4=')]" />
        </div>

        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-serif mb-6">
            Join the<br /><span className="italic">Experiment.</span>
          </h2>
          <p className="text-xl text-white/80 font-serif max-w-2xl mx-auto mb-12">
            Building independent companies, not mere clients of the majors. The future is a Web of Agents as sovereign as the humans who built them.
          </p>

          <button className="bg-white text-orange-700 hover:bg-orange-50 px-10 py-5 rounded-full font-bold text-lg transition-all inline-flex items-center gap-3 shadow-xl">
            Apply for the Residency
            <ArrowRight size={20} />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#F9F7F2] pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12 border-b border-slate-200 pb-20">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 border border-slate-900 rounded-full flex items-center justify-center">
                  <span className="font-serif italic font-bold">CH</span>
                </div>
                <span className="font-serif text-xl">Cyborg Horizon</span>
              </div>
              <p className="text-slate-500 max-w-xs">A mission-driven residency for builders shaping how AI operates in work and life.</p>
            </div>

            <div className="grid grid-cols-2 gap-16">
              <div>
                <h4 className="font-bold text-xs uppercase tracking-widest mb-6">The Lab</h4>
                <ul className="space-y-4 text-slate-600">
                  <li><a href="#" className="hover:text-orange-600 transition-colors">Healdsburg, CA</a></li>
                  <li><a href="#" className="hover:text-orange-600 transition-colors">June 8 – 21, 2026</a></li>
                  <li><a href="https://www.edgeesmeralda.com" className="hover:text-orange-600 transition-colors flex items-center gap-2">Edge Esmeralda <ExternalLink size={14} /></a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-xs uppercase tracking-widest mb-6">Connect</h4>
                <ul className="space-y-4 text-slate-600">
                  <li><a href="#" className="hover:text-orange-600 transition-colors">Twitter</a></li>
                  <li><a href="#" className="hover:text-orange-600 transition-colors">Farcaster</a></li>
                  <li><a href="#" className="hover:text-orange-600 transition-colors">Apply Now</a></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center mt-12 gap-6 text-slate-400 text-sm">
            <p>© 2026 Cyborg Horizon · A Sovereign Mesh Project</p>
            <div className="flex items-center gap-2">
              <Terminal size={14} /> /dev/sovereign-infrastructure
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
