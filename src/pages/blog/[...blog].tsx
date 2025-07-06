import Footer from '@/components/footer/footer';
import Navigation from '@/components/navigation/navigation';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Head from 'next/head';

return (
    <>
        <Head>
            <title>{response?.title?.rendered ? `${response.title.rendered} | Narkin's Builders Blog` : 'Real Estate Blog | Narkin\'s Builders'}</title>
            <meta name="description" content={response?.excerpt?.rendered?.replace(/<[^>]*>/g, '').slice(0, 160) || 'Latest insights on real estate, construction, and property investment in Karachi from Narkin\'s Builders.'} />
            <meta name="keywords" content="Karachi real estate blog, property investment, Bahria Town news, construction insights, luxury apartments" />
            
            {/* Open Graph */}
            <meta property="og:title" content={response?.title?.rendered || 'Narkin\'s Builders Blog'} />
            <meta property="og:description" content={response?.excerpt?.rendered?.replace(/<[^>]*>/g, '').slice(0, 160) || 'Latest real estate insights from Narkin\'s Builders'} />
            <meta property="og:url" content={`https://narkinsbuilders.com/blog/${response?.slug}`} />
            <meta property="og:image" content="https://narkinsbuilders.com/images/narkins-builders-logo-30-years-experience.webp" />
            <meta property="og:type" content="article" />
            
            {/* Canonical URL */}
            <link rel="canonical" href={`https://narkinsbuilders.com/blog/${response?.slug}`} />
        </Head>
        <Navigation />
        {/* rest of your code stays the same */}

export default function Blog() {
    const router = useRouter();
    const [response, setState] = useState<Post | null>(null);
    if (router.isFallback) {
        return <div>Loading...</div>;
    }
    useEffect(() => {
        fetch('https://admin.narkinsbuilders.com/wp-json/wp/v2/posts/' + router.query.blog).then(res => res.json()).then(setState);
    }, [router.isReady]);
    return (
        <>
            <Navigation />
            <div className="bg-white min-h-screen py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <iframe src={`https://admin.narkinsbuilders.com/${response?.link}`} style={{
                        width: '100%',
                        height: '200vh'
                    }}/>
                    {/* <div className="mx-auto max-w-2xl lg:mx-0">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{response?.title.rendered}</h2>
                        <p className="mt-2 text-lg leading-8 text-gray-600">
                            {JSON.stringify(response)}
                        </p>
                    </div>
                    <div>
                        <div dangerouslySetInnerHTML={{ __html: response?.content.rendered ?? '' }} />
                    </div> */}
                </div>
            </div>
            <Footer />
        </>
    );
}

export interface Post {
    id: number;
    date: string;
    date_gmt: string;
    guid: RenderedObject;
    modified: string;
    modified_gmt: string;
    slug: string;
    status: string;
    type: string;
    link: string;
    title: RenderedObject;
    content: RenderedContent;
    excerpt: RenderedContent;
    author: number;
    featured_media: number;
    comment_status: string;
    ping_status: string;
    sticky: boolean;
    template: string;
    format: string;
    meta: MetaData;
    categories: number[];
    tags: number[];
    _links: Links;
}

export interface RenderedObject {
    rendered: string;
}

export interface RenderedContent {
    rendered: string;
    protected: boolean;
}

export interface MetaData {
    _eb_attr: string;
    footnotes: string;
}

export interface Links {
    self: LinkObject[];
    collection: LinkObject[];
    about: LinkObject[];
    author: LinkObject[];
    replies: LinkObject[];
    "version-history": LinkObject[];
    "wp:attachment": LinkObject[];
    "wp:term": LinkObject[];
    curies: CuriesObject[];
}

export interface LinkObject {
    href: string;
    embeddable?: boolean;
    taxonomy?: string;
}

export interface CuriesObject {
    name: string;
    href: string;
    templated: boolean;
}

