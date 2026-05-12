export type Employee = {
  id: string;
  name: string;
  email: string;
  role: string;
  department: string;
  startDate: string;
  status: 'draft' | 'in_progress' | 'complete';
};

export type OnboardingTask = {
  id: string;
  employeeId: string;
  title: string;
  owner: 'HR' | 'IT' | 'Manager' | 'Employee';
  status: 'todo' | 'blocked' | 'done';
  system?: string;
};

export const employees: Employee[] = [
  {
    id: 'emp_001',
    name: 'Maya Chen',
    email: 'maya@acme.test',
    role: 'Backend Engineer',
    department: 'Engineering',
    startDate: '2026-05-25',
    status: 'in_progress',
  },
];

export const onboardingTasks: OnboardingTask[] = [
  { id: 'task_001', employeeId: 'emp_001', title: 'Create Google Workspace account', owner: 'IT', status: 'done', system: 'Google Workspace' },
  { id: 'task_002', employeeId: 'emp_001', title: 'Invite to Slack engineering channels', owner: 'IT', status: 'done', system: 'Slack' },
  { id: 'task_003', employeeId: 'emp_001', title: 'Grant GitHub repository access', owner: 'IT', status: 'todo', system: 'GitHub' },
  { id: 'task_004', employeeId: 'emp_001', title: 'Assign engineering handbook', owner: 'Manager', status: 'todo', system: 'Notion' },
  { id: 'task_005', employeeId: 'emp_001', title: 'Create 30/60/90 day plan', owner: 'Manager', status: 'blocked' },
];
