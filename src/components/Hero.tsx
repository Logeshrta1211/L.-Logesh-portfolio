import React from 'react';
import { ArrowDown, Code2, Terminal, Sparkles, BookOpen, Layers, ExternalLink } from 'lucide-react';
import { SOCIAL_LINKS } from '../data/portfolioData';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Heading and Intro */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Honest Status Kicker */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100/90 text-slate-700 rounded-md text-xs font-medium border border-slate-200/80">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
              <span>College Fresher · 1st Semester B.Tech</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-[1.12]">
                Hi, I&apos;m <span className="text-blue-600">Logesh.</span>
              </h1>
              <p className="text-lg sm:text-xl font-medium text-slate-700 leading-snug">
                B.Tech Student <span className="text-slate-400">|</span> Aspiring AI Engineer <span className="text-slate-400">|</span> Python &amp; GenAI Enthusiast
              </p>
            </div>

            {/* Short Introduction */}
            <p className="text-base sm:text-lg text-slate-600 max-w-xl font-normal leading-relaxed">
              Learning. Building. Exploring AI.
            </p>

            <p className="text-sm text-slate-500 max-w-xl leading-relaxed">
              Currently in my first semester of engineering, establishing a solid foundation in Python, web development, and artificial intelligence fundamentals through hands-on projects, hackathons, and ideathons.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-all shadow-xs hover:shadow-sm flex items-center gap-2"
              >
                <span>View My Projects</span>
                <ArrowDown className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                className="px-5 py-2.5 bg-white hover:bg-slate-50 text-slate-800 text-sm font-medium rounded-lg border border-slate-300 hover:border-slate-400 transition-all shadow-2xs"
              >
                Connect With Me
              </a>
            </div>

            {/* Key Quick Indicators */}
            <div className="pt-6 border-t border-slate-200/70 grid grid-cols-3 gap-4 max-w-lg text-xs text-slate-600">
              <div>
                <span className="block text-slate-400 font-mono text-[11px]">DEGREE</span>
                <span className="font-semibold text-slate-800">B.Tech 1st Sem</span>
              </div>
              <div>
                <span className="block text-slate-400 font-mono text-[11px]">PRIMARY FOCUS</span>
                <span className="font-semibold text-slate-800">Python &amp; AI</span>
              </div>
              <div>
                <span className="block text-slate-400 font-mono text-[11px]">ACTIVE IN</span>
                <span className="font-semibold text-slate-800">Hackathons</span>
              </div>
            </div>

          </div>

          {/* Right Column: Minimalist Developer & Student Terminal Card */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden transition-all hover:border-slate-300">
              {/* Window Header */}
              <div className="px-4 py-3 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                </div>
                <div className="text-[11px] font-mono text-slate-500 flex items-center gap-1.5">
                  <Terminal className="w-3 h-3 text-slate-400" />
                  student_profile.py
                </div>
                <div className="w-4" />
              </div>

              {/* Code Snippet Content */}
              <div className="p-5 font-mono text-xs text-slate-700 space-y-2 bg-[#fdfdfd]">
                <div className="text-slate-400">// Fresher &amp; Aspiring AI Engineer</div>
                <div>
                  <span className="text-blue-600 font-medium">class</span>{' '}
                  <span className="text-slate-900 font-semibold">StudentDeveloper</span>:
                </div>
                <div className="pl-4 space-y-1.5 border-l-2 border-slate-100 ml-1">
                  <div>
                    <span className="text-slate-500">name</span> = <span className="text-emerald-700">&quot;Logesh&quot;</span>
                  </div>
                  <div>
                    <span className="text-slate-500">status</span> = <span className="text-emerald-700">&quot;B.Tech 1st Semester&quot;</span>
                  </div>
                  <div>
                    <span className="text-slate-500">career_goal</span> = <span className="text-emerald-700">&quot;Aspiring AI Engineer&quot;</span>
                  </div>
                  <div>
                    <span className="text-slate-500">current_stack</span> = [
                    <span className="text-blue-700">&apos;Python&apos;</span>,{' '}
                    <span className="text-blue-700">&apos;Web Dev&apos;</span>,{' '}
                    <span className="text-blue-700">&apos;GenAI&apos;</span>]
                  </div>
                  <div>
                    <span className="text-slate-500">activities</span> = [
                    <span className="text-slate-800">&apos;Projects&apos;</span>,{' '}
                    <span className="text-slate-800">&apos;Hackathons&apos;</span>,{' '}
                    <span className="text-slate-800">&apos;Ideathons&apos;</span>]
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                  <span className="flex items-center gap-1 text-slate-600">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    Actively learning daily
                  </span>
                  <a
                    href={SOCIAL_LINKS.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 flex items-center gap-1 font-medium"
                  >
                    github.com/Logeshrta1211
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Context Card */}
            <div className="mt-4 p-3.5 bg-slate-50/80 rounded-lg border border-slate-200/70 text-xs text-slate-600 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Open for collaborative student projects &amp; hackathons</span>
              </div>
              <a
                href="#about"
                className="text-slate-500 hover:text-slate-900 font-medium shrink-0"
              >
                Learn more &rarr;
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
