import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const blogsDirectory = path.join(process.cwd(), 'blogs');

export function getAllBlogs() {
  try {
    // Check if blogs directory exists
    if (!fs.existsSync(blogsDirectory)) {
      return [];
    }

    const fileNames = fs.readdirSync(blogsDirectory);
    const allBlogsData = fileNames
      .filter(fileName => fileName.endsWith('.md'))
      .map(fileName => {
        const slug = fileName.replace(/\.md$/, '');
        const fullPath = path.join(blogsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const matterResult = matter(fileContents);

        return {
          slug,
          title: matterResult.data.title || slug,
          date: matterResult.data.date || new Date().toISOString(),
          description: matterResult.data.description || '',
          content: matterResult.content,
          ...matterResult.data
        };
      });

    // Sort blogs by date (newest first)
    return allBlogsData.sort((a, b) => {
      if (a.date < b.date) {
        return 1;
      } else {
        return -1;
      }
    });
  } catch (error) {
    console.error('Error reading blogs:', error);
    return [];
  }
}

export function getBlogBySlug(slug) {
  try {
    const fullPath = path.join(blogsDirectory, `${slug}.md`);
    
    if (!fs.existsSync(fullPath)) {
      return null;
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    return {
      slug,
      title: matterResult.data.title || slug,
      date: matterResult.data.date || new Date().toISOString(),
      description: matterResult.data.description || '',
      content: matterResult.content,
      ...matterResult.data
    };
  } catch (error) {
    console.error('Error reading blog:', error);
    return null;
  }
}

export function getAllBlogSlugs() {
  try {
    if (!fs.existsSync(blogsDirectory)) {
      return [];
    }

    const fileNames = fs.readdirSync(blogsDirectory);
    return fileNames
      .filter(fileName => fileName.endsWith('.md'))
      .map(fileName => ({
        params: {
          slug: fileName.replace(/\.md$/, '')
        }
      }));
  } catch (error) {
    console.error('Error reading blog slugs:', error);
    return [];
  }
} 