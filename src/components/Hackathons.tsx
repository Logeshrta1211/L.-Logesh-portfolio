import React from 'react';
import { 
  Trophy, 
  Lightbulb, 
  Users, 
  Rocket, 
  Puzzle, 
  TrendingUp, 
  CheckCircle2, 
  Compass 
} from 'lucide-react';
import { HACKATHON_PILLARS } from '../data/portfolioData';

const getPillarIcon = (idx: number) => {
  switch (idx) {
    case 0:
      return <Rocket className="w-5 h-5 text-blue-600" />;
    case 1:
      return <Lightbulb className="w-5 h-5 text-amber-600" />;
    case 2:
      return <Users className="w-5 h-5 text-emerald-600" />;
    case 3:
      return <Puzzle className="w-5 h-5 text-indigo-600" />;
    default:
      return <Trophy className="w-5 h-5 text-blue-600" />;
  }
};

export const Hackathons: React.FC = () => {
  return (
    <section id="hackathons" className="py-20 bg-[#fafbfc]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 font-mono">
            04 · Competitions &amp; Community
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mt-2">
            Hackathons &amp; Ideathons
          </h2>
          {/* Exact required content quote */}
          <p className="text-slate-700 text-base sm:text-lg mt-3 leading-relaxed font-normal">
            &ldquo;I actively participate in hackathons and ideathons to improve my problem-solving skills, explore emerging technologies, and turn ideas into practical solutions.&rdquo;
          </p>
        </div>

        {/* 4 Clean Pillars / Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {HACKATHON_PILLARS.map((pillar, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl border border-slate-200 p-6 flex flex-col justify-between hover:border-slate-300 hover:shadow-xs transition-all"
            >
              <div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center shrink-0">
                    {getPillarIcon(idx)}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900">
                      {pillar.title}
                    </h3>
                    <span className="text-xs font-mono text-slate-500">
                      {pillar.subtitle}
                    </span>
                  </div>
                </div>

                <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                  {pillar.description}
                </p>

                {/* Focus points */}
                <div className="mt-4 pt-3 border-t border-slate-100">
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-2">
                    Learning Outcomes:
                  </span>
                  <ul className="space-y-2 text-xs text-slate-600">
                    {pillar.focusPoints.map((point, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom tag */}
              <div className="mt-6 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                <span>Core Pillar 0{idx + 1}</span>
                <span className="text-slate-500">Active Participation</span>
              </div>
            </div>
          ))}
        </div>

        {/* Learning Through Competitions Timeline / Process Flow */}
        <div className="mt-12 bg-white rounded-xl border border-slate-200 p-6 sm:p-8">
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 font-mono mb-6 flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-blue-600" />
            My Hackathon Growth Cycle
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            <div className="p-4 bg-slate-50 rounded-lg border border-slate-200/80 space-y-1.5">
              <span className="text-xs font-mono font-semibold text-blue-600">STAGE 01</span>
              <h4 className="text-sm font-semibold text-slate-800">Problem Deconstruction</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Breaking complex prompts into straightforward logic components and user stories.
              </p>
            </div>

            <div className="p-4 bg-slate-50 rounded-lg border border-slate-200/80 space-y-1.5">
              <span className="text-xs font-mono font-semibold text-blue-600">STAGE 02</span>
              <h4 className="text-sm font-semibold text-slate-800">Team Ideation</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Brainstorming potential tech approaches, selecting feasible frameworks, and delegating roles.
              </p>
            </div>

            <div className="p-4 bg-slate-50 rounded-lg border border-slate-200/80 space-y-1.5">
              <span className="text-xs font-mono font-semibold text-blue-600">STAGE 03</span>
              <h4 className="text-sm font-semibold text-slate-800">Sprint Prototyping</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Rapidly implementing functional modules, testing edge cases, and connecting components.
              </p>
            </div>

            <div className="p-4 bg-slate-50 rounded-lg border border-slate-200/80 space-y-1.5">
              <span className="text-xs font-mono font-semibold text-blue-600">STAGE 04</span>
              <h4 className="text-sm font-semibold text-slate-800">Post-Event Reflection</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Cataloging new insights, reviewing peer solutions, and filling knowledge gaps.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
