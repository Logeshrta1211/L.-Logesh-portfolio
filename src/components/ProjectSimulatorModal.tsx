import React, { useState } from 'react';
import { X, Play, RotateCcw, CheckCircle2, AlertCircle, ArrowRight, Terminal } from 'lucide-react';
import { Project } from '../data/portfolioData';

interface Props {
  project: Project | null;
  onClose: () => void;
}

export const ProjectSimulatorModal: React.FC<Props> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs transition-opacity animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-xl shadow-2xl border border-slate-200 w-full max-w-2xl max-h-[90vh] overflow-hidden flex flex-col"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50/50">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 font-mono text-sm font-semibold">
              &gt;_
            </div>
            <div>
              <h3 id="modal-title" className="text-base font-semibold text-slate-900 flex items-center gap-2">
                {project.title}
                <span className="text-xs font-normal text-slate-500 font-mono bg-slate-100 px-2 py-0.5 rounded">
                  Live Simulation
                </span>
              </h3>
              <p className="text-xs text-slate-500">Interactive execution of the project logic</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body content based on project */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6">
          <div className="text-sm text-slate-600 bg-slate-50 p-3 rounded-lg border border-slate-100">
            <span className="font-medium text-slate-800">Project Overview: </span>
            {project.fullDesc}
          </div>

          {project.id === 'voter-eligibility' && <VoterCheckerSimulator />}
          {project.id === 'calculator' && <CalculatorSimulator />}
          {project.id === 'atm-management' && <AtmSimulator />}
          {project.id === 'grade-calculator' && <GradeCalculatorSimulator />}
        </div>

        {/* Footer */}
        <div className="px-6 py-3.5 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
          <span className="flex items-center gap-1.5 font-mono">
            <Terminal className="w-3.5 h-3.5 text-slate-400" />
            Built with beginner Python logic
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-slate-700 hover:text-slate-900 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors shadow-2xs"
          >
            Close Demo
          </button>
        </div>
      </div>
    </div>
  );
};

// 1. Voter Eligibility Simulator
const VoterCheckerSimulator: React.FC = () => {
  const [age, setAge] = useState<string>('20');
  const [name, setName] = useState<string>('Alex');
  const [result, setResult] = useState<{ eligible: boolean; message: string; diff?: number } | null>(null);

  const checkEligibility = (e: React.FormEvent) => {
    e.preventDefault();
    const numericAge = parseInt(age, 10);
    if (isNaN(numericAge) || numericAge < 0 || numericAge > 120) {
      setResult({
        eligible: false,
        message: 'Please enter a valid age between 0 and 120.'
      });
      return;
    }

    if (numericAge >= 18) {
      setResult({
        eligible: true,
        message: `Hello ${name || 'Citizen'}, you are ${numericAge} years old. You ARE ELIGIBLE to vote!`,
      });
    } else {
      const yearsLeft = 18 - numericAge;
      setResult({
        eligible: false,
        message: `Hello ${name || 'Citizen'}, you are ${numericAge} years old. You are NOT eligible to vote yet.`,
        diff: yearsLeft
      });
    }
  };

  return (
    <div className="space-y-4">
      <form onSubmit={checkEligibility} className="space-y-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label className="block text-xs font-medium text-slate-700 mb-1">Applicant Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. John Doe"
              className="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-700 mb-1">Age in Years</label>
            <input
              type="number"
              min="0"
              max="120"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              placeholder="e.g. 18"
              className="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full sm:w-auto px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium rounded-lg transition-colors flex items-center justify-center gap-1.5"
        >
          <Play className="w-3.5 h-3.5" /> Run Verification
        </button>
      </form>

      {result && (
        <div className={`p-4 rounded-lg border text-sm transition-all ${result.eligible ? 'bg-emerald-50 border-emerald-200 text-emerald-900' : 'bg-amber-50 border-amber-200 text-amber-900'}`}>
          <div className="flex items-start gap-2.5">
            {result.eligible ? (
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
            ) : (
              <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            )}
            <div>
              <p className="font-semibold">{result.eligible ? 'Status: Approved' : 'Status: Underage / Ineligible'}</p>
              <p className="text-xs mt-0.5 opacity-90">{result.message}</p>
              {result.diff && (
                <p className="text-xs mt-1 font-medium text-amber-800">
                  {result.diff} more {result.diff === 1 ? 'year' : 'years'} required to register.
                </p>
              )}
            </div>
          </div>
        </div>
      )}

      <div className="bg-slate-900 text-slate-200 p-3 rounded-lg font-mono text-xs overflow-x-auto">
        <div className="text-slate-400 border-b border-slate-800 pb-1 mb-2"># Python logic simulation</div>
        <div>age = int(input(&quot;Enter age: &quot;))</div>
        <div>if age &gt;= 18:</div>
        <div className="pl-4 text-emerald-400">print(&quot;Eligible to vote&quot;)</div>
        <div>else:</div>
        <div className="pl-4 text-amber-400">print(f&quot;Ineligible. Wait &#123;18 - age&#125; years.&quot;)</div>
      </div>
    </div>
  );
};

// 2. Calculator Simulator
const CalculatorSimulator: React.FC = () => {
  const [num1, setNum1] = useState<string>('24');
  const [num2, setNum2] = useState<string>('6');
  const [op, setOp] = useState<'+' | '-' | '*' | '/'>('+');
  const [output, setOutput] = useState<string | null>('30');
  const [error, setError] = useState<string | null>(null);

  const calculate = (operator: '+' | '-' | '*' | '/') => {
    setOp(operator);
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    if (isNaN(n1) || isNaN(n2)) {
      setError('Please provide valid numbers for both operands.');
      setOutput(null);
      return;
    }

    setError(null);
    switch (operator) {
      case '+':
        setOutput((n1 + n2).toString());
        break;
      case '-':
        setOutput((n1 - n2).toString());
        break;
      case '*':
        setOutput((n1 * n2).toString());
        break;
      case '/':
        if (n2 === 0) {
          setError('ZeroDivisionError: Cannot divide by zero.');
          setOutput(null);
        } else {
          setOutput((n1 / n2).toFixed(4).replace(/\.?0+$/, ''));
        }
        break;
    }
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <label className="block text-xs font-medium text-slate-700 mb-1">First Number</label>
          <input
            type="number"
            value={num1}
            onChange={(e) => setNum1(e.target.value)}
            className="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-slate-700 mb-1">Second Number</label>
          <input
            type="number"
            value={num2}
            onChange={(e) => setNum2(e.target.value)}
            className="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-medium text-slate-700 mb-2">Select Operation</label>
        <div className="grid grid-cols-4 gap-2">
          {(['+', '-', '*', '/'] as const).map((sign) => (
            <button
              key={sign}
              onClick={() => calculate(sign)}
              className={`py-2 px-3 text-sm font-semibold rounded-lg border transition-all ${
                op === sign
                  ? 'bg-blue-600 text-white border-blue-600 shadow-xs'
                  : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
              }`}
            >
              {sign === '*' ? '× (Multiply)' : sign === '/' ? '÷ (Divide)' : sign === '+' ? '+ (Add)' : '− (Subtract)'}
            </button>
          ))}
        </div>
      </div>

      {error ? (
        <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-lg flex items-center gap-2">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{error}</span>
        </div>
      ) : output !== null ? (
        <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg flex items-center justify-between">
          <span className="text-xs text-slate-500 font-mono">
            {num1} {op} {num2} =
          </span>
          <span className="text-xl font-bold font-mono text-blue-600">{output}</span>
        </div>
      ) : null}
    </div>
  );
};

// 3. ATM Management Simulator
const AtmSimulator: React.FC = () => {
  const [balance, setBalance] = useState<number>(1000);
  const [amount, setAmount] = useState<string>('200');
  const [history, setHistory] = useState<string[]>([
    'Account initialized with initial balance: $1,000'
  ]);
  const [feedback, setFeedback] = useState<{ message: string; isError: boolean } | null>(null);

  const handleDeposit = () => {
    const val = parseFloat(amount);
    if (isNaN(val) || val <= 0) {
      setFeedback({ message: 'Enter a valid positive amount to deposit.', isError: true });
      return;
    }
    const newBal = balance + val;
    setBalance(newBal);
    setHistory((prev) => [`Deposited: +$${val.toFixed(2)} (New Balance: $${newBal.toFixed(2)})`, ...prev.slice(0, 4)]);
    setFeedback({ message: `Successfully deposited $${val.toFixed(2)}.`, isError: false });
    setAmount('');
  };

  const handleWithdraw = () => {
    const val = parseFloat(amount);
    if (isNaN(val) || val <= 0) {
      setFeedback({ message: 'Enter a valid positive amount to withdraw.', isError: true });
      return;
    }
    if (val > balance) {
      setFeedback({ message: `Insufficient Funds! Requested $${val.toFixed(2)}, but balance is $${balance.toFixed(2)}.`, isError: true });
      return;
    }
    const newBal = balance - val;
    setBalance(newBal);
    setHistory((prev) => [`Withdrawn: -$${val.toFixed(2)} (Remaining: $${newBal.toFixed(2)})`, ...prev.slice(0, 4)]);
    setFeedback({ message: `Successfully withdrew $${val.toFixed(2)}.`, isError: false });
    setAmount('');
  };

  const handleReset = () => {
    setBalance(1000);
    setAmount('200');
    setHistory(['Account initialized with initial balance: $1,000']);
    setFeedback({ message: 'ATM session reset to starting state.', isError: false });
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between p-4 bg-slate-900 text-white rounded-xl">
        <div>
          <span className="text-xs text-slate-400 block font-mono">Current Account Balance</span>
          <span className="text-2xl font-bold font-mono text-emerald-400">${balance.toFixed(2)}</span>
        </div>
        <button
          onClick={handleReset}
          className="text-xs text-slate-300 hover:text-white flex items-center gap-1 bg-slate-800 hover:bg-slate-700 px-2.5 py-1.5 rounded-md transition-colors"
        >
          <RotateCcw className="w-3.5 h-3.5" /> Reset
        </button>
      </div>

      <div className="space-y-2">
        <label className="block text-xs font-medium text-slate-700">Transaction Amount ($)</label>
        <div className="flex gap-2">
          <input
            type="number"
            min="1"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="e.g. 100"
            className="flex-1 px-3 py-2 text-sm border border-slate-200 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleDeposit}
            className="px-3 py-2 text-xs font-medium bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition-colors"
          >
            Deposit
          </button>
          <button
            onClick={handleWithdraw}
            className="px-3 py-2 text-xs font-medium bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
          >
            Withdraw
          </button>
        </div>
      </div>

      {feedback && (
        <div className={`p-3 rounded-lg text-xs flex items-center gap-2 ${feedback.isError ? 'bg-red-50 text-red-700 border border-red-200' : 'bg-emerald-50 text-emerald-700 border border-emerald-200'}`}>
          {feedback.isError ? <AlertCircle className="w-4 h-4 shrink-0" /> : <CheckCircle2 className="w-4 h-4 shrink-0" />}
          <span>{feedback.message}</span>
        </div>
      )}

      <div>
        <span className="text-xs font-medium text-slate-700 block mb-1">Recent Activity Log (Max 5)</span>
        <ul className="text-xs font-mono bg-slate-50 border border-slate-200 rounded-lg p-2.5 space-y-1.5 text-slate-600">
          {history.map((item, idx) => (
            <li key={idx} className="flex items-center gap-2">
              <span className="text-slate-400">›</span> {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// 4. Student Grade Calculator Simulator
const GradeCalculatorSimulator: React.FC = () => {
  const [subjects, setSubjects] = useState<{ name: string; marks: number }[]>([
    { name: 'Python Programming', marks: 88 },
    { name: 'Mathematics I', marks: 78 },
    { name: 'Web Fundamentals', marks: 85 },
    { name: 'Problem Solving', marks: 92 }
  ]);

  const updateMark = (index: number, val: number) => {
    const updated = [...subjects];
    updated[index].marks = Math.max(0, Math.min(100, val));
    setSubjects(updated);
  };

  const total = subjects.reduce((acc, curr) => acc + curr.marks, 0);
  const average = total / subjects.length;

  const getGrade = (pct: number) => {
    if (pct >= 90) return { grade: 'A+', remark: 'Outstanding Performance', color: 'text-emerald-600' };
    if (pct >= 80) return { grade: 'A', remark: 'Excellent Performance', color: 'text-blue-600' };
    if (pct >= 70) return { grade: 'B', remark: 'Good Effort & Understanding', color: 'text-indigo-600' };
    if (pct >= 50) return { grade: 'C', remark: 'Satisfactory / Passing', color: 'text-amber-600' };
    return { grade: 'F', remark: 'Needs Improvement / Retest', color: 'text-red-600' };
  };

  const gradeInfo = getGrade(average);

  return (
    <div className="space-y-4">
      <div className="space-y-2.5">
        <label className="block text-xs font-medium text-slate-700">Enter Subject Marks (out of 100)</label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {subjects.map((sub, idx) => (
            <div key={idx} className="flex items-center justify-between p-2.5 bg-slate-50 rounded-lg border border-slate-200">
              <span className="text-xs text-slate-700 font-medium">{sub.name}</span>
              <div className="flex items-center gap-1.5">
                <input
                  type="number"
                  min="0"
                  max="100"
                  value={sub.marks}
                  onChange={(e) => updateMark(idx, parseInt(e.target.value, 10) || 0)}
                  className="w-16 px-2 py-1 text-xs text-right font-mono border border-slate-300 rounded focus:outline-hidden focus:ring-1 focus:ring-blue-500"
                />
                <span className="text-xs text-slate-400">/ 100</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-3">
        <div className="flex items-center justify-between border-b border-slate-200 pb-2">
          <span className="text-xs text-slate-500">Aggregate Score</span>
          <span className="text-sm font-semibold font-mono text-slate-800">
            {total} / {subjects.length * 100} ({average.toFixed(1)}%)
          </span>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <span className="text-xs text-slate-500 block">Final Result</span>
            <span className="text-xs font-medium text-slate-700">{gradeInfo.remark}</span>
          </div>
          <div className="text-right">
            <span className="text-xs text-slate-400 block font-mono">Assigned Grade</span>
            <span className={`text-2xl font-bold font-mono ${gradeInfo.color}`}>
              {gradeInfo.grade}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
