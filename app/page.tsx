import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen p-8 md:p-16">
      <section className="mx-auto max-w-4xl rounded-3xl bg-white p-10 shadow-sm">
        <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-slate-500">Company Brain MVP</p>
        <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl">AI onboarding and operational memory for fast-growing teams.</h1>
        <p className="mb-8 text-lg text-slate-600">Connect company knowledge, generate onboarding workflows, and help teams provision accounts, assign tasks, and explain how the company works.</p>
        <Link href="/dashboard" className="inline-flex rounded-2xl bg-slate-900 px-5 py-3 font-medium text-white">Open dashboard</Link>
      </section>
    </main>
  );
}
