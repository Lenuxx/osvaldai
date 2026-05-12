import { NextResponse } from 'next/server';
import { z } from 'zod';
import { generateOnboardingWorkflow } from '@/lib/workflowEngine';

const schema = z.object({
  employeeId: z.string(),
  role: z.string(),
  department: z.string(),
});

export async function POST(req: Request) {
  const body = await req.json();
  const input = schema.parse(body);
  const tasks = generateOnboardingWorkflow(input);
  return NextResponse.json({ tasks });
}
