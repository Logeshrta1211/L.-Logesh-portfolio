import React from 'react';
import { Target, Compass, BookOpen, Lightbulb, Code2 } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white border-y border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 font-mono">
            01 · About Me
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mt-2">
            My Learning Journey &amp; Ambition
          </h2>
          <p className="text-slate-500 text-sm mt-1">
            An honest look at who I am, what I am learning, and where I want to go.
          </p>
        </div>

        {/* Core Content Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Main Narrative - Human, student-focused */}
          <div className="lg:col-span-7 space-y-6">
            <div className="text-base sm:text-lg text-slate-800 leading-relaxed font-normal space-y-4">
              <p>
                I am a B.Tech student and aspiring AI Engineer with a growing interest in Python, web development, and Generative AI. As a beginner, I enjoy learning by building small practical projects and participating in hackathons and ideathons.
              </p>
              <p className="text-slate-600 text-base">
                I am currently focused on strengthening my programming fundamentals, exploring AI technologies, and developing real-world problem-solving skills.
              </p>
              <p className="text-slate-600 text-base">
                Instead of simply memorizing concepts from textbooks, I prefer writing code right away—whether that is a terminal-based ATM simulator, a conditional voting checker, or experimenting with how modern language models generate responses.
              </p>
            </div>

            {/* Guiding Principles */}
            <div className="pt-4 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 bg-slate-50/70 rounded-lg border border-slate-200/60 space-y-1">
                <span className="text-xs font-semibold text-slate-900 flex items-center gap-1.5">
                  <Target className="w-3.5 h-3.5 text-blue-600" /> Continuous Practice
                </span>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Consistent coding habits and small experiments every week to build intuition and confidence.
                </p>
              </div>

              <div className="p-4 bg-slate-50/70 rounded-lg border border-slate-200/60 space-y-1">
                <span className="text-xs font-semibold text-slate-900 flex items-center gap-1.5">
                  <Lightbulb className="w-3.5 h-3.5 text-blue-600" /> Collaborative Spirit
                </span>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Actively engaging in ideathons and college teams to learn how to solve real problems together.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Student Milestones Card */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-[#fafbfc] border border-slate-200 rounded-xl p-6 space-y-5">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 font-mono">
                Student Snapshot
              </h3>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-md bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0 text-xs font-semibold mt-0.5">
                    1
                  </div>
                  <div>
                    <span className="font-semibold text-slate-800 block text-xs">Current Education</span>
                    <span className="text-slate-600 text-xs">Bachelor of Technology (B.Tech)</span>
                    <span className="text-slate-400 text-[11px] block">1st Semester Fresher</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-md bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0 text-xs font-semibold mt-0.5">
                    2
                  </div>
                  <div>
                    <span className="font-semibold text-slate-800 block text-xs">Aspiration &amp; Target</span>
                    <span className="text-slate-600 text-xs">Artificial Intelligence Engineer</span>
                    <span className="text-slate-400 text-[11px] block">Focusing on practical ML/GenAI pipelines</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-md bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0 text-xs font-semibold mt-0.5">
                    3
                  </div>
                  <div>
                    <span className="font-semibold text-slate-800 block text-xs">Active Engagement</span>
                    <span className="text-slate-600 text-xs">Hackathons, Ideathons &amp; Logic Building</span>
                    <span className="text-slate-400 text-[11px] block">Turning beginner concepts into working code</span>
                  </div>
                </div>
              </div>

              {/* Learning Philosophy Quote */}
              <div className="pt-4 border-t border-slate-200/80">
                <p className="text-xs italic text-slate-600">
                  &ldquo;Every complex system begins as a humble script. My goal is to build genuine understanding from first principles.&rdquo;
                </p>
              </div>
            </div>

            {/* Focus area banner */}
            <div className="p-4 bg-blue-50/60 rounded-xl border border-blue-100 text-xs text-blue-900 flex items-center justify-between">
              <div>
                <span className="font-semibold block">Currently Exploring</span>
                <span className="text-blue-700">Python OOP &amp; Foundation Web Technologies</span>
              </div>
              <Code2 className="w-5 h-5 text-blue-600 shrink-0" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
