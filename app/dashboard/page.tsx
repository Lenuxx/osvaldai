'use client';

import { useState } from 'react';
import { Bot, CheckCircle2, Clock, ShieldCheck, Workflow } from 'lucide-react';
import { employees, onboardingTasks } from '@/lib/mockData';

export default function Dashboard() {
  const [question, setQuestion] = useState('What should Maya complete in her first week?');
  const [answer, setAnswer] = useState('');
  const employee = employees[0];

  async function askAssistant() {
    const res = await fetch('/api/assistant', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ question, employeeId: employee.id }),
    });
    const data = await res.json();
    setAnswer(data.answer);
  }

  return (
    <main className="min-h-screen p-6 md:p-10">
      <div className="mx-auto max-w-6xl space-y-6">
        <header className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">Operational Brain</p>
            <h1 className="text-3xl font-bold tracking-tight">New hire onboarding</h1>
          </div>
          <button className="rounded-2xl bg-slate-900 px-5 py-3 font-medium text-white">Create workflow</button>
        </header>

        <section className="grid gap-4 md:grid-cols-4">
          <Metric icon={<Workflow />} label="Open workflows" value="1" />
          <Metric icon={<CheckCircle2 />} label="Tasks done" value="2/5" />
          <Metric icon={<Clock />} label="Blocked tasks" value="1" />
          <Metric icon={<ShieldCheck />} label="Approvals needed" value="2" />
        </section>

        <section className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-3xl bg-white p-6 shadow-sm lg:col-span-2">
            <h2 className="mb-4 text-xl font-semibold">{employee.name}</h2>
            <div className="mb-6 grid gap-3 text-sm text-slate-600 md:grid-cols-3">
              <p><span className="font-medium text-slate-900">Role:</span> {employee.role}</p>
              <p><span className="font-medium text-slate-900">Department:</span> {employee.department}</p>
              <p><span className="font-medium text-slate-900">Starts:</span> {employee.startDate}</p>
            </div>
            <div className="space-y-3">
              {onboardingTasks.map((task) => (
                <div key={task.id} className="flex items-center justify-between rounded-2xl border border-slate-100 p-4">
                  <div>
                    <p className="font-medium">{task.title}</p>
                    <p className="text-sm text-slate-500">Owner: {task.owner}{task.system ? ` · ${task.system}` : ''}</p>
                  </div>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-sm capitalize text-slate-700">{task.status.replace('_', ' ')}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <div className="mb-4 flex items-center gap-2">
              <Bot className="h-5 w-5" />
              <h2 className="text-xl font-semibold">AI Assistant</h2>
            </div>
            <textarea value={question} onChange={(e) => setQuestion(e.target.value)} className="mb-3 h-28 w-full rounded-2xl border border-slate-200 p-3 text-sm" />
            <button onClick={askAssistant} className="mb-4 w-full rounded-2xl bg-slate-900 px-4 py-3 font-medium text-white">Ask</button>
            {answer && <div className="rounded-2xl bg-slate-50 p-4 text-sm text-slate-700">{answer}</div>}
          </div>
        </section>
      </div>
    </main>
  );
}

function Metric({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="rounded-3xl bg-white p-5 shadow-sm">
      <div className="mb-3 text-slate-500">{icon}</div>
      <p className="text-sm text-slate-500">{label}</p>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  );
}
