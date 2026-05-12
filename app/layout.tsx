import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Company Brain MVP',
  description: 'AI onboarding and company operations assistant',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
