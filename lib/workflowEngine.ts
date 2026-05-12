import { OnboardingTask } from './mockData';

export type NewHireInput = {
  employeeId: string;
  role: string;
  department: string;
};

export function generateOnboardingWorkflow(input: NewHireInput): OnboardingTask[] {
  const baseTasks: Omit<OnboardingTask, 'id' | 'employeeId'>[] = [
    { title: 'Create Google Workspace account', owner: 'IT', status: 'todo', system: 'Google Workspace' },
    { title: 'Invite to Slack workspace', owner: 'IT', status: 'todo', system: 'Slack' },
    { title: 'Share company overview and values', owner: 'HR', status: 'todo', system: 'Notion' },
    { title: 'Prepare first-week onboarding checklist', owner: 'Manager', status: 'todo' },
    { title: 'Create 30/60/90 day objectives', owner: 'Manager', status: 'todo' },
  ];

  const roleTasks: Omit<OnboardingTask, 'id' | 'employeeId'>[] = [];

  if (input.department.toLowerCase().includes('engineering')) {
    roleTasks.push(
      { title: 'Grant GitHub repository access', owner: 'IT', status: 'todo', system: 'GitHub' },
      { title: 'Assign engineering handbook', owner: 'Manager', status: 'todo', system: 'Notion' },
      { title: 'Schedule architecture walkthrough', owner: 'Manager', status: 'todo' },
    );
  }

  if (input.department.toLowerCase().includes('sales')) {
    roleTasks.push(
      { title: 'Grant CRM access', owner: 'IT', status: 'todo', system: 'CRM' },
      { title: 'Assign sales playbook', owner: 'Manager', status: 'todo', system: 'Notion' },
      { title: 'Schedule product demo training', owner: 'Manager', status: 'todo' },
    );
  }

  return [...baseTasks, ...roleTasks].map((task, index) => ({
    ...task,
    id: `generated_${index + 1}`,
    employeeId: input.employeeId,
  }));
}
