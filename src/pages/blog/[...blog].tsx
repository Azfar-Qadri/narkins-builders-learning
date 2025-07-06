import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Navigation from '@/components/navigation/navigation';
import Footer from '@/components/footer/footer';
import Head from 'next/head';

interface BlogPost {
  id: number;
  title: { rendered: string };
  excerpt: { rendered: string };
  content: { rendered: string };
  slug: string;
  date: string;
}

export default function DynamicBlog() {
  const router = useRouter();
  const { blog } = router.query;
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!blog) return;

    const fetchBlogPost = async () => {
      try {
        setLoading(true);
        const slug = Array.isArray(blog) ? blog.join('/') : blog;
        
        // Fetch from WordPress API
        const response = await fetch(`https://admin.narkinsbuilders.com/wp-json/wp/v2/posts?slug=${slug}`);
        const data = await response.json();
        
        if (data && data.length > 0) {
          setPost(data[0]);
        } else {
          setError('Post not found');
        }
      } catch (err) {
        setError('Failed to load blog post');
        console.error('Error fetching blog post:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogPost();
  }, [blog]);

  if (loading) {
    return (
      <>
        <Navigation />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading blog post...</p>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  if (error || !post) {
    return (
      <>
        <Navigation />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Blog Post Not Found</h1>
            <p className="text-gray-600 mb-8">{error || 'The blog post you\'re looking for doesn\'t exist.'}</p>
            <button
              onClick={() => router.push('/blogs')}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Back to Blog
            </button>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Head>
        <title>{post.title.rendered} | Narkin's Builders Blog</title>
        <meta name="description" content={post.excerpt.rendered.replace(/<[^>]*>/g, '').slice(0, 160)} />
        <meta name="keywords" content="Karachi real estate blog, property investment, Bahria Town news, construction insights" />
        
        {/* Open Graph */}
        <meta property="og:title" content={post.title.rendered} />
        <meta property="og:description" content={post.excerpt.rendered.replace(/<[^>]*>/g, '').slice(0, 160)} />
        <meta property="og:url" content={`https://narkinsbuilders.com/blog/${Array.isArray(blog) ? blog.join('/') : blog}`} />
        <meta property="og:image" content="https://narkinsbuilders.com/images/narkins-builders-logo-30-years-experience.webp" />
        <meta property="og:type" content="article" />
        
        {/* Canonical URL */}
        <link rel="canonical" href={`https://narkinsbuilders.com/blog/${Array.isArray(blog) ? blog.join('/') : blog}`} />
      </Head>
      
      <Navigation />
      
      <div className="min-h-screen bg-white">
        <article className="max-w-4xl mx-auto px-6 py-12">
          <header className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {post.title.rendered}
            </h1>
            <div className="flex items-center text-gray-600 text-sm">
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </time>
              <span className="mx-2">•</span>
              <span>Narkin's Builders</span>
            </div>
          </header>
          
          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content.rendered }}
          />
          
          {/* Call to Action */}
          <div className="mt-12 p-6 bg-blue-50 border border-blue-200 rounded-lg">
            <h3 className="text-xl font-semibold text-blue-900 mb-2">
              Interested in Our Properties?
            </h3>
            <p className="text-blue-700 mb-4">
              Contact Narkin's Builders today to learn more about our luxury apartments in Bahria Town Karachi.
            </p>
            <button
              onClick={() => router.push('/contact')}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Contact Us
            </button>
          </div>
        </article>
      </div>
      
      <Footer />
    </>
  );
}