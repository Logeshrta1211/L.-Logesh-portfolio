import React from 'react';
import { 
  FileCode2, 
  Code, 
  Palette, 
  Sparkles, 
  Brain, 
  GitBranch, 
  Globe, 
  CheckCircle, 
  Layers,
  Terminal
} from 'lucide-react';
import { SKILLS_DATA } from '../data/portfolioData';

// Map icon for each skill
const getSkillIcon = (name: string) => {
  switch (name) {
    case 'Python':
      return <Terminal className="w-5 h-5 text-blue-600" />;
    case 'HTML':
      return <FileCode2 className="w-5 h-5 text-amber-600" />;
    case 'CSS':
      return <Palette className="w-5 h-5 text-sky-600" />;
    case 'JavaScript':
      return <Code className="w-5 h-5 text-yellow-600" />;
    case 'Web Development':
      return <Globe className="w-5 h-5 text-emerald-600" />;
    case 'Generative AI':
      return <Sparkles className="w-5 h-5 text-indigo-600" />;
    case 'AI Fundamentals':
      return <Brain className="w-5 h-5 text-purple-600" />;
    case 'Git & GitHub':
      return <GitBranch className="w-5 h-5 text-slate-700" />;
    default:
      return <Code className="w-5 h-5 text-blue-600" />;
  }
};

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-[#fafbfc]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 font-mono">
            02 · Tech Stack &amp; Fundamentals
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mt-2">
            Skills I&apos;m Actively Learning &amp; Practicing
          </h2>
          <p className="text-slate-500 text-sm mt-1">
            Represented honestly as beginner and student-level competencies—no exaggerated percentages or fake mastery bars.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {SKILLS_DATA.map((category, catIdx) => (
            <div
              key={catIdx}
              className="bg-white rounded-xl border border-slate-200/90 p-6 flex flex-col justify-between shadow-2xs hover:shadow-xs transition-shadow"
            >
              <div>
                <div className="pb-4 border-b border-slate-100">
                  <h3 className="text-base font-semibold text-slate-900">
                    {category.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    {category.description}
                  </p>
                </div>

                {/* Skill Cards inside Category */}
                <div className="mt-5 space-y-3.5">
                  {category.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-3.5 rounded-lg border border-slate-100 bg-slate-50/50 hover:bg-slate-50 transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                          <div className="p-1.5 bg-white rounded-md border border-slate-200/60 shadow-2xs">
                            {getSkillIcon(skill.name)}
                          </div>
                          <div>
                            <h4 className="text-sm font-semibold text-slate-800">
                              {skill.name}
                            </h4>
                            <p className="text-[11px] text-slate-500 mt-0.5">
                              {skill.focus}
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      {/* Honest Status Label */}
                      <div className="mt-2.5 pt-2 border-t border-slate-200/40 flex items-center justify-between text-[11px]">
                        <span className="text-slate-400 font-mono">STATUS</span>
                        <span className="text-blue-700 font-medium font-mono text-[10px] bg-blue-50 px-2 py-0.5 rounded">
                          {skill.level}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Category footer note */}
              <div className="mt-6 pt-3 border-t border-slate-100 text-[11px] text-slate-400 font-mono flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-blue-500" />
                Regular coursework &amp; practical exercises
              </div>
            </div>
          ))}
        </div>

        {/* Learning Ethos Banner */}
        <div className="mt-10 p-5 bg-white rounded-xl border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="text-xs font-semibold text-slate-800 uppercase tracking-wide font-mono">
              Approach to Technology
            </span>
            <p className="text-xs text-slate-600 max-w-2xl">
              I believe in strong programming basics over superficial framework hopping. As a first-semester fresher, my priority is writing clean code, understanding time complexity, and learning how AI models can solve meaningful problems.
            </p>
          </div>
          <div className="shrink-0 flex items-center gap-2 text-xs font-mono text-slate-500 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200">
            <Layers className="w-4 h-4 text-blue-600" />
            <span>8 Technologies in Active Study</span>
          </div>
        </div>

      </div>
    </section>
  );
};
