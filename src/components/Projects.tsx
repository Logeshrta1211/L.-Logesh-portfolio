import React, { useState } from 'react';
import { 
  UserCheck, 
  Calculator as CalcIcon, 
  CreditCard, 
  GraduationCap, 
  Github, 
  Play, 
  ExternalLink,
  Code2,
  Terminal
} from 'lucide-react';
import { PROJECTS_DATA, Project, SOCIAL_LINKS } from '../data/portfolioData';
import { ProjectSimulatorModal } from './ProjectSimulatorModal';

export const Projects: React.FC = () => {
  const [activeSimulator, setActiveSimulator] = useState<Project | null>(null);

  const getProjectIcon = (iconName: Project['iconName']) => {
    switch (iconName) {
      case 'UserCheck':
        return <UserCheck className="w-5 h-5 text-blue-600" />;
      case 'Calculator':
        return <CalcIcon className="w-5 h-5 text-blue-600" />;
      case 'CreditCard':
        return <CreditCard className="w-5 h-5 text-blue-600" />;
      case 'GraduationCap':
        return <GraduationCap className="w-5 h-5 text-blue-600" />;
      default:
        return <Code2 className="w-5 h-5 text-blue-600" />;
    }
  };

  return (
    <section id="projects" className="py-20 bg-white border-y border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 font-mono">
              03 · Practical Projects
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mt-2">
              Foundational Python &amp; Logic Projects
            </h2>
            <p className="text-slate-500 text-sm mt-1">
              Beginner-level applications built to master control structures, user inputs, arithmetic logic, and state simulation.
            </p>
          </div>

          <a
            href={SOCIAL_LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-700 hover:text-blue-600 bg-slate-50 hover:bg-slate-100 border border-slate-200 px-3.5 py-2 rounded-lg transition-colors shadow-2xs self-start md:self-auto"
          >
            <Github className="w-4 h-4" />
            <span>View All on GitHub</span>
            <ExternalLink className="w-3 h-3 text-slate-400" />
          </a>
        </div>

        {/* Project Cards Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS_DATA.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-xl border border-slate-200 p-6 flex flex-col justify-between hover:border-blue-300 hover:shadow-md transition-all duration-200 relative"
            >
              <div>
                {/* Header: Icon + Category */}
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-100/80 flex items-center justify-center transition-transform group-hover:scale-105">
                    {getProjectIcon(project.iconName)}
                  </div>
                  <span className="text-[11px] font-mono font-medium text-slate-500 bg-slate-100/80 px-2.5 py-1 rounded">
                    {project.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-slate-900 mt-4 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>

                {/* Short Description */}
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                  {project.shortDesc}
                </p>

                {/* Learning Highlights */}
                <div className="mt-4 pt-3 border-t border-slate-100">
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-1.5">
                    Key Concepts Applied:
                  </span>
                  <ul className="space-y-1 text-xs text-slate-600">
                    {project.learningHighlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <span className="text-blue-500 font-bold">›</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies Used (clean tags) */}
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs text-slate-600 bg-slate-50 border border-slate-200/70 px-2.5 py-1 rounded-md font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons: GitHub + Interactive Simulator */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => setActiveSimulator(project)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium rounded-lg transition-colors shadow-2xs cursor-pointer"
                  title="Run interactive simulation of this project"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Try Live Demo</span>
                </button>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white hover:bg-slate-50 text-slate-700 hover:text-slate-900 border border-slate-200 rounded-lg text-xs font-medium transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub Code</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Note on Authenticity */}
        <div className="mt-10 p-4 bg-slate-50 rounded-xl border border-slate-200/70 text-xs text-slate-500 flex items-center justify-between">
          <span className="flex items-center gap-2">
            <Terminal className="w-4 h-4 text-blue-600 shrink-0" />
            <span>All projects are student-built implementations focusing on strong foundational algorithms and CLI mechanics.</span>
          </span>
          <span className="hidden sm:inline-block font-mono text-[11px] text-slate-400">Semester 1 Coursework</span>
        </div>

      </div>

      {/* Interactive Modal */}
      <ProjectSimulatorModal
        project={activeSimulator}
        onClose={() => setActiveSimulator(null)}
      />
    </section>
  );
};
