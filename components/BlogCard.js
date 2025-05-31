import Link from 'next/link';
import { format } from 'date-fns';

export default function BlogCard({ blog }) {
  const formatDate = (dateString) => {
    try {
      return format(new Date(dateString), 'MMM dd, yyyy');
    } catch (error) {
      return 'Unknown date';
    }
  };

  return (
    <Link href={`/blog/${blog.slug}`} style={{ 
      textDecoration: 'none',
      display: 'block',
      width: '100%'
    }}>
      <article style={{ 
        paddingTop: '16px',
        paddingBottom: '16px',
        cursor: 'pointer',
        transition: 'all 0.2s ease',
        width: '100%'
      }}>
        <div style={{ 
          display: 'flex', 
          alignItems: 'flex-start', 
          justifyContent: 'space-between', 
          gap: '24px',
          width: '100%'
        }}>
          <div style={{ flex: 1, minWidth: 0 }}>
            <h2 style={{ 
              fontSize: '16px',
              fontWeight: '500',
              color: 'var(--foreground)',
              marginBottom: '4px',
              lineHeight: '1.4',
              transition: 'color 0.2s ease'
            }}>
              {blog.title}
            </h2>
            {blog.description && (
              <p style={{ 
                fontSize: '13px',
                color: 'var(--muted-foreground)',
                lineHeight: '1.5',
                transition: 'color 0.2s ease'
              }}>
                {blog.description}
              </p>
            )}
          </div>
          
          <div style={{ 
            fontSize: '11px',
            color: 'var(--muted-foreground)',
            whiteSpace: 'nowrap',
            flexShrink: 0,
            paddingTop: '2px',
            opacity: '0.7',
            transition: 'color 0.2s ease'
          }}>
            {formatDate(blog.date)}
          </div>
        </div>
      </article>
    </Link>
  );
} 