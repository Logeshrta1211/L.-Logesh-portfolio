import React, { useState } from 'react';
import { 
  Linkedin, 
  Github, 
  Mail, 
  Copy, 
  Check, 
  ExternalLink, 
  MessageSquare,
  Sparkles,
  ArrowUpRight
} from 'lucide-react';
import { SOCIAL_LINKS } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(SOCIAL_LINKS.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-20 bg-white border-t border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 font-mono">
            05 · Let&apos;s Connect
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Let&apos;s Connect
          </h2>
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            I&apos;m always open to learning, collaborating, and connecting with fellow students, developers, and tech enthusiasts.
          </p>
        </div>

        {/* Action Cards */}
        <div className="mt-12 max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-5">
          
          {/* LinkedIn Button Card */}
          <a
            href={SOCIAL_LINKS.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="group p-6 bg-[#fafbfc] rounded-xl border border-slate-200 hover:border-blue-400 hover:bg-white hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0077b5] flex items-center justify-center border border-blue-100 group-hover:scale-105 transition-transform">
                  <Linkedin className="w-6 h-6" />
                </div>
                <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-blue-600 transition-colors" />
              </div>

              <h3 className="text-base font-bold text-slate-900 mt-4">
                Connect on LinkedIn
              </h3>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                Connect for professional networking, internship discussions, or student tech exchange.
              </p>
            </div>

            <div className="mt-6 pt-3 border-t border-slate-200/60 flex items-center gap-1.5 text-xs font-semibold text-blue-600 group-hover:underline">
              <span>View LinkedIn Profile</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </div>
          </a>

          {/* GitHub Button Card */}
          <a
            href={SOCIAL_LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group p-6 bg-[#fafbfc] rounded-xl border border-slate-200 hover:border-slate-400 hover:bg-white hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-slate-100 text-slate-800 flex items-center justify-center border border-slate-200 group-hover:scale-105 transition-transform">
                  <Github className="w-6 h-6" />
                </div>
                <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-slate-900 transition-colors" />
              </div>

              <h3 className="text-base font-bold text-slate-900 mt-4">
                Explore on GitHub
              </h3>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                Browse my code repositories, Python scripts, practice programs, and project commits.
              </p>
            </div>

            <div className="mt-6 pt-3 border-t border-slate-200/60 flex items-center gap-1.5 text-xs font-semibold text-slate-800 group-hover:underline">
              <span>github.com/Logeshrta1211</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </div>
          </a>

        </div>

        {/* Email Direct Reach Option */}
        <div className="mt-8 max-w-xl mx-auto p-4 bg-slate-50 rounded-xl border border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-700 shrink-0">
              <Mail className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[11px] text-slate-400 block font-mono">DIRECT INBOX</span>
              <a 
                href={`mailto:${SOCIAL_LINKS.email}`} 
                className="font-medium text-slate-800 hover:text-blue-600 transition-colors font-mono"
              >
                {SOCIAL_LINKS.email}
              </a>
            </div>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
            <button
              onClick={handleCopyEmail}
              className="px-3 py-1.5 bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 rounded-lg text-xs font-medium transition-colors flex items-center gap-1.5 shadow-2xs"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-slate-500" />
                  <span>Copy</span>
                </>
              )}
            </button>
            <a
              href={`mailto:${SOCIAL_LINKS.email}?subject=Connecting%20via%20Portfolio`}
              className="px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-medium transition-colors"
            >
              Send Email
            </a>
          </div>
        </div>

        {/* Collaborative Note */}
        <div className="mt-8 text-center text-xs text-slate-400 font-mono">
          Looking for hackathon teammates or beginner collaborative projects? Let&apos;s talk!
        </div>

      </div>
    </section>
  );
};
