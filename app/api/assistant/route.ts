import { NextResponse } from 'next/server';
import { onboardingTasks } from '@/lib/mockData';

export async function POST(req: Request) {
  const body = await req.json();
  const question = String(body.question || '');
  const employeeId = String(body.employeeId || '');
  const tasks = onboardingTasks.filter((task) => task.employeeId === employeeId);
  const pending = tasks.filter((task) => task.status !== 'done');

  // MVP placeholder. Replace this with RAG over company docs + LLM generation.
  const answer = `Based on the current onboarding workflow, there are ${pending.length} remaining tasks. The highest-priority items are: ${pending
    .slice(0, 3)
    .map((task) => task.title)
    .join(', ')}. Question received: "${question}"`;

  return NextResponse.json({ answer });
}
