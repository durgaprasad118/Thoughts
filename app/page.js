import { getAllBlogs } from '../lib/blog';
import ShowMoreBlogs from '../components/ShowMoreBlogs';

export default function Home() {
  const allBlogs = getAllBlogs();

  return (
    <div style={{ 
      backgroundColor: 'var(--background)',
      transition: 'background-color 0.3s ease',
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      paddingBottom: '20px'
    }}>
    
      <section style={{ 
        maxWidth: '700px', 
        margin: '0 auto', 
        padding: '0 24px',
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        width: '100%'
      }}>
        {allBlogs.length > 0 ? (
          <ShowMoreBlogs allBlogs={allBlogs} />
        ) : (
          <div style={{ 
            textAlign: 'center', 
            padding: '32px 0',
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
          }}>
            <p style={{ 
              color: 'var(--muted-foreground)', 
              fontSize: '14px',
              transition: 'color 0.3s ease'
            }}>
              no thoughts yet.
            </p>
            <p style={{ 
              color: 'var(--muted-foreground)', 
              fontSize: '12px', 
              marginTop: '8px',
              opacity: '0.7',
              transition: 'color 0.3s ease'
            }}>
              add some .md files to the blogs folder to get started.
            </p>
          </div>
        )}
      </section>
    </div>
  );
}
