'use client';

import { useState } from 'react';
import BlogCard from './BlogCard';

export default function ShowMoreBlogs({ allBlogs }) {
  const [showAll, setShowAll] = useState(false);
  
  const blogsToShow = showAll ? allBlogs : allBlogs.slice(0, 7);
  const hasMoreBlogs = allBlogs.length > 7;

  return (
    <div style={{ width: '100%' }}>
      {blogsToShow.map((blog) => (
        <BlogCard key={blog.slug} blog={blog} />
      ))}
      
      {hasMoreBlogs && !showAll && (
        <div style={{ 
          textAlign: 'center', 
          marginTop: '32px',
          paddingTop: '4px',
          width: '100%'
        }}>
          <button
            onClick={() => setShowAll(true)}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--muted-foreground)',
              cursor: 'pointer',
              fontSize: '14px',
              fontFamily: 'var(--font-space-grotesk)',
              transition: 'color 0.2s ease',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              margin: '0 auto',
              padding: '8px'
            }}
            onMouseEnter={(e) => {
              e.target.style.color = 'var(--foreground)';
            }}
            onMouseLeave={(e) => {
              e.target.style.color = 'var(--muted-foreground)';
            }}
          >
            view more
            <span style={{ fontSize: '10px', transform: 'rotate(90deg)' }}>›</span>
          </button>
        </div>
      )}
    </div>
  );
} 