import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{ 
      marginTop: '2px',
      backgroundColor: 'var(--background)',
      transition: 'all 0.3s ease',
    }}>
      <div style={{ 
        maxWidth: '700px', 
        margin: '0 auto', 
        padding: '20px 12px',
        textAlign: 'center'
      }}>
        <div style={{ marginBottom: '4px' }}>
          <p style={{ 
            fontSize: '14px',
            color: 'var(--muted-foreground)',
            lineHeight: '1.5',
            transition: 'color 0.3s ease'
          }}>
            say hi on{' '}
            <Link 
              href="https://x.com/obito_twt" 
              style={{ 
                color: 'var(--accent)',
                textDecoration: 'underline',
                transition: 'color 0.2s ease'
              }}
              target="_blank"
              rel="noopener noreferrer"
            >
              x
            </Link>
           {" "} I&apos;ll be happy to reply :)
          </p>
        </div>

        <div style={{ 
          fontSize: '12px',
          color: 'var(--muted-foreground)',
          opacity: '0.7',
          transition: 'color 0.3s ease'
        }}>
          <p>&copy; {new Date().getFullYear()} thoughts. all rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 