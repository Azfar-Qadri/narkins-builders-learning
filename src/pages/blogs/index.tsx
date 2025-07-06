import Footer from '@/components/footer/footer';
import Navigation from '@/components/navigation/navigation';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Head from 'next/head';

export default function Blogs() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Update the URL to the correct endpoint, ensure it is pointing to your specific WordPress site.
    fetch('https://admin.narkinsbuilders.com/wp-json/wp/v2/posts')
      .then(response => response.json())
      .then(data => {
        setPosts(data.map(post => ({
          id: post.id,
          title: post.title.rendered,
          link: post.link,
          date: new Date(post.date).toLocaleDateString(),
          datetime: post.date,
          description: post.excerpt.rendered,
          category: post.categories[0], // Assuming the first category; might need adjustment based on your category handling.
          author: {
            name: post._embedded?.author[0].name,
            role: post._embedded?.author[0].description, // WordPress does not typically have a 'role' field, customize as needed.
            imageUrl: post._embedded?.author[0].avatar_urls['96'], // Adjust size as needed.
          }
        })));
      })
      .catch(error => console.error('Error fetching posts:', error));
  }, []);

  return (
    <>
      <Head>
        <title>Real Estate Blog | Latest Property Insights from Narkin's Builders</title>
        <meta name="description" content="Stay updated with the latest real estate trends, property investment tips, and construction insights in Karachi. Expert advice from Narkin's Builders with 30+ years experience." />
        <meta name="keywords" content="Karachi real estate blog, property investment tips, Bahria Town news, construction insights, luxury apartments blog" />

       {/* Mobile Optimization */}
<meta name="format-detection" content="telephone=yes" />
<meta name="apple-mobile-web-app-capable" content="yes" />
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
<meta name="theme-color" content="#000000" /> 
        {/* Open Graph */}
        <meta property="og:title" content="Real Estate Blog | Narkin's Builders" />
        <meta property="og:description" content="Latest real estate insights and property investment tips from Karachi's leading construction company." />
        <meta property="og:url" content="https://narkinsbuilders.com/blogs" />
        <meta property="og:image" content="https://narkinsbuilders.com/images/narkins-builders-logo-30-years-experience.webp" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://narkinsbuilders.com/blogs" />
      </Head>
      <Navigation/>
      <div className="bg-white min-h-screen py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{`Narkin's Builders`} Blog</h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Checkout what were publishing on our blog
            </p>
          </div>
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 -border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts.map((post) => (
              <article key={post.id} className="shadow- bg-neutral-50 border p-4 rounded flex max-w-xl flex-col items-start justify-between">
                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime={post.datetime} className="text-gray-500">
                    {post.date}
                  </time>
                  {/* This assumes categories are fetched and linked correctly; you may need a separate fetch for categories. */}
                  <Link
                    href="#" // Placeholder: replace with actual category link or remove if not applicable
                    className="relative z-10 rounded-full bg-white px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                  >
                    {`Narkin's`}
                  </Link>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <Link href={`${post.link}`}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </Link>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: post.description }}></p>
                </div>
                <div className="hidden relative mt-8 flex items-center gap-x-4">
                  <img src={post.author.imageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-gray-900">
                      <a href="#">
                        <span className="absolute inset-0" />
                        {post.author.name}
                      </a>
                    </p>
                    <p className="text-gray-600">{post.author.role}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}