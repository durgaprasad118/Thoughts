import { getAllBlogSlugs, getBlogBySlug } from '../../../lib/blog';
import { format } from 'date-fns';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export async function generateStaticParams() {
  const paths = getAllBlogSlugs();
  return paths.map((path) => ({
    slug: path.params.slug,
  }));
}

export async function generateMetadata({ params }) {
  const blog = getBlogBySlug(params.slug);
  
  if (!blog) {
    return {
      title: 'Blog not found',
    };
  }
  
  return {
    title: `${blog.title} - thoughts`,
    description: blog.description || `Read ${blog.title} on thoughts blog`,
  };
}

export default function BlogPost({ params }) {
  const blog = getBlogBySlug(params.slug);
  
  if (!blog) {
    notFound();
  }
  
  const formatDate = (dateString) => {
    try {
      return format(new Date(dateString), 'MMMM dd, yyyy');
    } catch (error) {
      return 'Unknown date';
    }
  };
  
  return (
    <div style={{ 
      minHeight: '100vh',
      backgroundColor: 'var(--background)',
      transition: 'background-color 0.3s ease'
    }}>
      <article style={{ 
        maxWidth: '700px', 
        margin: '0 auto', 
        padding: '32px 24px 40px' 
      }}>
        {/* Back Button */}
        <Link 
          href="/" 
          style={{ 
            display: 'inline-flex',
            alignItems: 'center',
            color: 'var(--muted-foreground)',
            fontSize: '14px',
            textDecoration: 'none',
            marginBottom: '32px',
            transition: 'color 0.2s ease'
          }}
        >
          ← 
        </Link>
        
        {/* Header */}
        <header style={{ marginBottom: '32px' }}>
          <h1 style={{ 
            fontSize: '32px',
            fontWeight: '600',
            color: 'var(--foreground)',
            lineHeight: '1.2',
            marginBottom: '12px',
            letterSpacing: '-0.02em',
            transition: 'color 0.3s ease'
          }}>
            {blog.title}
          </h1>
          <div style={{ 
            color: 'var(--muted-foreground)',
            fontSize: '14px',
            transition: 'color 0.3s ease'
          }}>
            <time dateTime={blog.date}>
              {formatDate(blog.date)} • 5 min read
            </time>
          </div>
        </header>
        
        {/* Content */}
        <div className="prose">
          <ReactMarkdown 
            remarkPlugins={[remarkGfm]}
          >
            {blog.content}
          </ReactMarkdown>
        </div>
      </article>
    </div>
  );
} 