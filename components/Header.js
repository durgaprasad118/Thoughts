'use client';

import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  return (
    <header style={{ 
      backgroundColor: 'var(--background)',
      transition: 'all 0.3s ease'
    }}>
      <div style={{ 
        maxWidth: '700px', 
        margin: '0 auto', 
        padding: '0 24px', 
        marginBottom: '10px'
      }}>
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between', 
          height: '64px' 
        }}>
          <Link 
            href="/" 
            style={{ 
              fontSize: '18px',
              fontWeight: '600',
              color: 'var(--foreground)',
              transition: 'color 0.2s ease',
              fontStyle: 'italic'
            }}
          >
            Thoughts
          </Link>

          <ThemeToggle />
        </div>
      </div>
    </header>
  );
} 