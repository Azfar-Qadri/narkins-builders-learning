import Footer from "@/components/footer/footer";
import Navigation from "@/components/navigation/navigation";
import Head from "next/head";
import { Fragment } from "react";

const Inovations = ['Reliability', 'Smart Door Locks', 'Smart Switches'];

export default function AboutUs() {
    return (
        <Fragment>
            <Head>
               
               {/* Mobile Optimization */}
<meta name="format-detection" content="telephone=yes" />
<meta name="apple-mobile-web-app-capable" content="yes" />
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
<meta name="theme-color" content="#000000" />
               
                {/* Basic SEO Meta Tags */}
                <title>About Narkin's Builders - 30+ Years of Construction Excellence in Karachi</title>
                <meta name="description" content="Learn about Narkin's Builders - 30+ years of construction excellence in Karachi. From Narkin's Textile Industries to luxury real estate development in Bahria Town." />
                <meta name="keywords" content="Narkin's Builders history, construction company Karachi, Bahria Town developers, 30 years experience, real estate Karachi" />
                <meta name="author" content="Narkin's Builders & Developers" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                
                {/* Canonical URL */}
                <link rel="canonical" href="https://narkinsbuilders.com/about" />
                
                {/* Open Graph Tags */}
                <meta property="og:type" content="website" />
                <meta property="og:title" content="About Narkin's Builders - 30+ Years of Excellence" />
                <meta property="og:description" content="Learn about Narkin's Builders - 30+ years of construction excellence in Karachi. From textile industry roots to luxury real estate development." />
                <meta property="og:url" content="https://narkinsbuilders.com/about" />
                <meta property="og:image" content="https://narkinsbuilders.com/images/narkins-builders-logo-30-years-experience.webp" />
                <meta property="og:site_name" content="Narkin's Builders" />
                
                {/* Twitter Card Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="About Narkin's Builders - 30+ Years of Excellence" />
                <meta name="twitter:description" content="Learn about Narkin's Builders - 30+ years of construction excellence in Karachi." />
                <meta name="twitter:image" content="https://narkinsbuilders.com/images/narkins-builders-logo-30-years-experience.webp" />
                
                {/* About Page Schema Markup */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "AboutPage",
                            "mainEntity": {
                                "@type": "Organization",
                                "name": "Narkin's Builders & Developers",
                                "url": "https://narkinsbuilders.com",
                                "logo": "https://narkinsbuilders.com/images/narkins-builders-logo-30-years-experience.webp",
                                "foundingDate": "1991",
                                "description": "Premium residential construction company in Karachi with 30+ years of experience. From textile industry roots to luxury real estate development in Bahria Town.",
                                "address": {
                                    "@type": "PostalAddress",
                                    "addressLocality": "Karachi",
                                    "addressRegion": "Sindh",
                                    "addressCountry": "PK"
                                },
                                "founder": {
                                    "@type": "Person",
                                    "name": "Mr. Ashraf Nara",
                                    "jobTitle": "CEO"
                                },
                                "numberOfEmployees": "50-100",
                                "areaServed": "Karachi",
                                "knowsAbout": [
                                    "Real Estate Development",
                                    "Luxury Apartments",
                                    "Smart Home Technology",
                                    "Construction Management"
                                ]
                            }
                        })
                    }}
                />
            </Head>
            
            <Navigation />
            <div className={"mt-[10rem]"}>
                <div className="mx-auto max-w-7xl pb-[5rem] gap-y-2 flex flex-col px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <h1 className="text-3xl font-bold mb-[4rem] tracking-tight text-gray-900 sm:text-7xl">
                            About Narkin's Builders
                        </h1>
                        <p className="mt-2 text-lg leading-8 text-gray-600">
                            Welcome to Narkin's Builders, where excellence meets innovation in construction and development. With a rich legacy spanning over 30 years, we have established ourselves as a leading name in the real estate development industry in Karachi, Pakistan.
                            <br /><br />
                        </p>
                    </div>
                    
                    <div className="py-[5rem]">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:max-xl:grid-cols-3 gap-4">
                            {[
                                "/images/reliability.webp",
                                "/images/smart-door-lock.webp",
                                "/images/smart-wifi-switches.webp",
                            ].map((image, index) => (
                                <div key={image} className="group">
                                    <img 
                                        src={image} 
                                        alt={`${Inovations[index]} - Narkin's Builders Innovation`}
                                        className="hover:brightness-75 transition duration-[0.5s] border cursor-pointer filter w-full h-auto bg-neutral-100 object-cover rounded-lg" 
                                    />
                                    <p className="text-lg my-2 font-medium text-gray-900">
                                        {Inovations[index]}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    <div className="py-[5rem] ml-auto">
                        <figure className="max-w-screen-md mx-auto text-right">
                            <svg className="w-10 h-10 mr-auto mb-3 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
                                <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                            </svg>
                            <blockquote>
                                <p className="text-2xl italic font-medium text-gray-900">
                                    "At Narkin's Builders, we prioritize commitment, transparency, and innovation. For over 30 years, these values have fueled our success, driving us to deliver cutting-edge construction projects and luxury living spaces that exceed expectations. Our transparent approach ensures our customers are informed and involved, while our innovative solutions push the boundaries of what's possible. Thank you for choosing Narkin's Builders as your trusted partner in building your dream home."
                                </p>
                            </blockquote>
                            <figcaption className="flex items-center justify-end mt-6 space-x-3 rtl:space-x-reverse">
                                <div className="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-500">
                                    <cite className="pe-3 font-medium text-gray-900">Mr. Ashraf Nara</cite>
                                    <cite className="ps-3 text-sm text-gray-500">CEO at Narkin's</cite>
                                </div>
                            </figcaption>
                        </figure>
                    </div>
                </div>
                
                <div className="bg-white py-[5rem] border-t border-b-">
                    <div className="mx-auto max-w-7xl gap-y-2 flex flex-col px-6 lg:px-8">
                        <h2 className="text-3xl font-bold mb-[1rem] tracking-tight text-gray-900 sm:text-5xl">
                            Hill Crest Residency Journey
                        </h2>
                        <p className="mt-2 text-lg mb-[5rem] leading-8 text-gray-600 max-w-2xl">
                            Hill Crest Residency is an example of our commitment in terms of timeline, quality and customer satisfaction. Hill Crest Residency has also pioneered smart apartments in Bahria Town Karachi. Over the years, we have successfully delivered 5 high-rise projects in the most prime areas of Karachi, each showcasing our dedication to craftsmanship and attention to detail.
                        </p>
                        <div className="grid grid-cols-1 md:lg:grid-cols-2 gap-4">
                            <img 
                                src={"/images/hill-crest-residency-launch.webp"} 
                                alt="Hill Crest Residency Launch 2021"
                                className="hidden md:lg:block w-full h-auto bg-neutral-100 rounded-xl cursor-pointer" 
                            />
                            <p className="text-lg my-2 font-medium text-gray-900 py-[1rem] hidden md:lg:block">
                                Hill Crest Residency Launch <i>2021</i>
                            </p>
                            <p className="text-lg my-2 font-medium text-gray-900 py-[1rem] hidden md:lg:block">
                                Hill Crest Residency Completion <i>2025</i>
                            </p>
                            <img 
                                src={"/images/hcr_new.webp"} 
                                alt="Hill Crest Residency Completed 2025"
                                className="w-full hidden md:lg:block h-auto bg-neutral-100 rounded-xl cursor-pointer" 
                            />
                            
                            {/* Mobile Layout */}
                            <div className="flex flex-col items-center md:lg:hidden">
                                <img 
                                    src={"/images/hill-crest-residency-launch.webp"} 
                                    alt="Hill Crest Residency Launch 2021"
                                    className="w-full h-auto bg-neutral-100 rounded-xl cursor-pointer" 
                                />
                                <p className="text-lg my-2 font-medium text-gray-900 px-[1rem]">
                                    Hill Crest Residency Launch <i>2021</i>
                                </p>
                            </div>
                            <div className="flex flex-col items-center md:lg:hidden">
                                <img 
                                    src={"/images/hcr_new.webp"} 
                                    alt="Hill Crest Residency Completed 2025"
                                    className="w-full bg-neutral-100 h-auto rounded-xl cursor-pointer" 
                                />
                                <p className="text-lg my-2 font-medium text-gray-900 px-[1rem]">
                                    Hill Crest Residency Completion <i>2025</i>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Rest of your component remains the same... */}
                <Footer />
            </div>
        </Fragment>
    )
}