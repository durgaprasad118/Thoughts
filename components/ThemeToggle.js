'use client';

import { useTheme } from './ThemeProvider';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="theme-toggle"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
      style={{
        background: 'transparent',
        border: 'none',
        color: 'var(--muted-foreground)',
        cursor: 'pointer',
        fontSize: '14px',
        transition: 'color 0.2s ease'
      }}
    >
      {theme === 'light' ? 'dark' : 'light'}
    </button>
  );
} 