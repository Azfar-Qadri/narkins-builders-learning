import { GetServerSideProps } from "next";
import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import BlogsSection from "@/components/blogs-section/blogs-section";
import Navigation from "@/components/navigation/navigation";
import Footer from "@/components/footer/footer";
import Link from "next/link";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { Post } from "../blog/[...blog]";
import { useLightboxStore } from "@/zustand";
import { PlayIcon, MagnifyingGlassCircleIcon, ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";
import Testimonials from "@/components/testimonials/testimonials";

const categories = ["2 Bed", "3 Bed", "4 Bed"];
const cards = [
  [
    {
      title: "2 Bed Gold",
      size: "1547 Square Feet",
      location: "Heritage Club & Danzoo Safari View",
      image: "/images/nbr_3d/gold_heritage _club_and_danzoo_safari_ view.webp",
    },
  ],
  [
    {
      title: "3 Bed Diamond Corner",
      size: "2184 Square Feet",
      location: "Heritage Club & Theme Park View",
      image: "/images/nbr_3d/6.diamond_corner_heritage_club_and_danzoo_safari view.webp",
    },
    {
      title: "3 Bed Diamond-A",
      size: "2121 Square Feet",
      location: "Jinnah & Theme Park View",
      image: "/images/nbr_3d/Diamond-A-blue.webp",
    },
  ],
  [
    {
      title: "4 Bed Platinum A-1 Corner",
      size: "2670 Square Feet",
      location: "Jinnah & Danzoo Safari View",
      image: "/images/nbr_3d/Platinum A-1 Corner jinnah and theme park view.webp",
    },
    {
      title: "4 Bed Platinum A-1 Boulevard",
      size: "2486 Square Feet",
      location: "Jinnah & Boulevard View",
      image: "/images/nbr_3d/platinum_a-1_jinnah_and_danzoo_safari_view.webp",
    },
  ],
];

const amenities = [
  { image: "/nbr-scaled/gym.webp", name: "Gym" },
  { image: "/nbr-scaled/play-area.webp", name: "Kids Area" },
  { image: "/nbr-scaled/steam-bath.webp", name: "Steam Bath" },
  { image: "/nbr-scaled/reception.webp", name: "Grand Reception" },
];

const galleryImages = [
  "/images/narkins_appartment_renamed_files/narkins_appartment_slide_1.webp",
  "/images/narkins_appartment_renamed_files/narkins_appartment_slide_2.webp",
  "/images/narkins_appartment_renamed_files/narkins_appartment_slide_3.webp",
  "/images/narkins_appartment_renamed_files/narkins_appartment_slide_4.webp",
];

const youtubeVideos = [
  { id: "FmEHTzdjXEc", title: "Luxury Living at Narkin's Boutique Residency", type: "youtube" },
  { id: "uzYVdqFHovs", title: "Modern Amenities and Stunning Views", type: "youtube" },
];

const testimonials = [
  {
    name: "Saad Arshad",
    stars: [true, true, true, true, "half"],
    testimonial: "Highly committed to delivering in timelines, I wholeheartedly recommend considering investment in projects by Narkin's Builders.",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    name: "Arsalan",
    stars: [true, true, true, true, true],
    testimonial: "Smooth booking experience, very transparent throughout the process.",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
  },
];

export default function NarkinsBoutiqueResidency({ posts }: { posts: Post[] }) {
  const openLightbox = useLightboxStore(state => state.openLightbox);

  return (
    <main>
      <Head>
       
       {/* Mobile Optimization */}
<meta name="format-detection" content="telephone=yes" />
<meta name="apple-mobile-web-app-capable" content="yes" />
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
<meta name="theme-color" content="#000000" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        <link rel="canonical" href="https://narkinsbuilders.com/narkins-boutique-residency" />
        
        <title>Narkin's Boutique Residency - Premium 2, 3 & 4 Bedroom Luxury Apartments in Bahria Town Karachi</title>
        <meta
          name="description"
          content="Discover Narkin's Boutique Residency in Heritage Commercial, Bahria Town Karachi. 20-floor luxury apartments with 2, 3 & 4 bedrooms, indoor swimming pools, fitness facilities, and panoramic views."
        />
        <meta
          name="keywords"
          content="Narkin's Boutique Residency, luxury apartments bahria town, 2 bedroom apartments bahria town, 3 bedroom apartments bahria town, 4 bedroom apartments bahria town, Heritage Commercial Karachi"
        />
        <meta name="author" content="Narkin's Builders & Developers" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Narkin's Boutique Residency - Premium Luxury Apartments in Bahria Town Karachi" />
        <meta property="og:description" content="Discover Narkin's Boutique Residency in Heritage Commercial, Bahria Town Karachi. 20-floor luxury apartments with premium amenities and panoramic views." />
        <meta property="og:url" content="https://narkinsbuilders.com/narkins-boutique-residency" />
        <meta property="og:image" content="https://narkinsbuilders.com/images/NBR_SLIDE_1.webp" />
        <meta property="og:site_name" content="Narkin's Builders" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Narkin's Boutique Residency - Premium Luxury Apartments in Bahria Town Karachi" />
        <meta name="twitter:description" content="Discover Narkin's Boutique Residency in Heritage Commercial, Bahria Town Karachi. 20-floor luxury apartments with premium amenities and panoramic views." />
        <meta name="twitter:image" content="https://narkinsbuilders.com/images/NBR_SLIDE_1.webp" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              "name": "Narkin's Boutique Residency Apartments",
              "description": "Luxury 2, 3 & 4 bedroom apartments in Heritage Commercial area, Bahria Town Karachi. 20-floor tower with 10+ premium amenities, indoor swimming pools, and panoramic views.",
              "brand": {
                "@type": "Brand",
                "name": "Narkin's Builders"
              },
              "offers": {
                "@type": "Offer",
                "availability": "https://schema.org/InStock",
                "price": "Contact for pricing",
                "priceCurrency": "PKR",
                "seller": {
                  "@type": "Organization",
                  "name": "Narkin's Builders & Developers"
                }
              },
              "category": "Real Estate",
              "image": "https://narkinsbuilders.com/images/NBR_SLIDE_1.webp",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Heritage Commercial, Bahria Town",
                "addressLocality": "Karachi",
                "addressRegion": "Sindh",
                "addressCountry": "PK"
              }
            })
          }}
        />
      </Head>
      
      <Navigation />
      
      <div className="bg-white pt-[6rem]">
        {/* Video Section */}
        <div className="px-4 bg-neutral-50 relative md:xl:px-0 w-full h-auto max-w-7xl mx-auto my-8 rounded-xl overflow-hidden">
          <video
            preload="yes"
            poster="/nbr_video_poster.webp"
            className="w-full h-auto rounded-xl"
            loop
            autoPlay
            playsInline
            muted
            controls
          >
            <source src="/nbr.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        
        {/* Content Section */}
        <div className="relative isolate overflow-hidden py-20 pt-5 sm:py-[28px]">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="text-4xl font-bold tracking-tight text-black sm:text-6xl">Narkin&apos;s Boutique Residency</h2>
              <p className="mt-6 text-lg leading-8 text-gray-800">
                Welcome to Narkin&apos;s Boutique Residency, where luxury meets
                bespoke design in the heart of Bahria Town Karachi&apos;s Heritage
                Commercial area. With ground + 20 floors, our premium
                high-rise apartments redefine upscale living with their
                exquisite attention to detail.
                <br /><br />
                We present a selection of 2, 3, and 4-bedroom luxury apartments,
                each boasting panoramic views of Bahria Town Karachi. Experience
                the epitome of sophistication as you unwind in your designer
                apartment.
              </p>
            </div>
          </div>
        </div>
        
        {/* Apartment Options Section */}
        <section className="bg-black py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                Explore Our Offerings
              </h2>
              <p className="mt-4 text-lg text-neutral-300 max-w-2xl mx-auto">
                Discover a range of luxurious apartments designed to meet your lifestyle needs.
              </p>
            </div>
            
            <Tabs defaultValue={categories[0]} className="w-full mt-10">
              <TabsList className="flex space-x-1 gap-2 py-2 mb-5 border-b-neutral-900 rounded-xl bg-neutral-900/20">
                {categories.map((category) => (
                  <TabsTrigger
                    key={category}
                    value={category}
                    className="w-full rounded-lg py-2.5 text-sm font-medium leading-5 data-[state=active]:bg-neutral-400 data-[state=active]:text-neutral-700 data-[state=active]:shadow text-neutral-100 hover:bg-white/[0.12] hover:text-white transition-all duration-300"
                  >
                    {category}
                  </TabsTrigger>
                ))}
              </TabsList>

              {cards.map((items, idx) => (
                <TabsContent key={idx} value={categories[idx]}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="grid mt-10 overflow-hidden min-h-[25rem] overflow-y-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                  >
                    {items.map((item, index) => (
                      <motion.div
                        key={index}
                        transition={{ duration: 0.3 }}
                        className="group"
                      >
                        <Card
                          onClick={() => openLightbox({ src: item.image, title: item.title })}
                          className="bg-neutral-900 rounded-lg overflow-hidden cursor-pointer border border-neutral-800 hover:border-neutral-400 transition-all duration-300"
                        >
                          <CardHeader className="relative">
                            <Image
                              src={item.image}
                              alt={`${item.title} - Narkin's Boutique Residency floor plan`}
                              width={500}
                              height={300}
                              className="w-full h-auto rounded-t-lg"
                              loading={idx === 0 ? "eager" : "lazy"}
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                              <MagnifyingGlassCircleIcon className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-all duration-300" />
                            </div>
                          </CardHeader>
                          <CardContent className="p-4">
                            <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                            <p className="text-sm mt-2 text-neutral-300">
                              <strong>Size</strong>: {item.size}, <strong>Location</strong>: {item.location}
                            </p>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </motion.div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>
        
        {/* Amenities Section */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold tracking-tight text-black sm:text-5xl">
                Amenities in Narkin&apos;s Boutique Residency
              </h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                Explore the top-notch amenities designed to enhance your living experience.
              </p>
            </div>

            <div className="max-w-7xl w-full mx-auto">
              <ul className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
                {amenities.map((amenity, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="group"
                  >
                    <div className="relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
                      <Image
                        src={amenity.image}
                        alt={`${amenity.name} - Narkin's Boutique Residency amenity`}
                        width={500}
                        height={300}
                        className="absolute inset-0 h-full w-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                        <span className="text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300">
                          {amenity.name}
                        </span>
                      </div>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </section>
        
        {/* Gallery Section */}
        <section className="bg-neutral-100 px-5 mx-auto py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold tracking-tight text-black sm:text-5xl">
                Gallery
              </h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                Explore the stunning visuals of Narkin&apos;s Boutique Residency.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {galleryImages.map((src, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                  className="group relative overflow-hidden rounded-lg cursor-pointer"
                  onClick={() => openLightbox({ src })}
                >
                  <Image
                    src={src}
                    alt={`Narkin's Boutique Residency Gallery Image ${index + 1}`}
                    width={500}
                    height={300}
                    className="w-full h-auto object-cover rounded-lg"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                    <span className="text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300">
                      View
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="bg-neutral-100 border-t px-5 lg:px-8 py-20">
          <Testimonials testimonials={testimonials} />
        </section>
        
        {/* YouTube Videos Section */}
        <section className="bg-white py-20 border-b border">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold tracking-tight text-black sm:text-5xl">
                What Social Media is Saying
              </h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                See what people are saying about Narkin&apos;s Boutique Residency on YouTube.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
              {youtubeVideos.map((video, index) => (
                <motion.div
                  key={video.id}
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                  className="group relative overflow-hidden min-h-[300px] shadow-lg hover:shadow-xl rounded-lg"
                >
                  <a
                    href={`https://youtube.com/watch?v=${video.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full h-full"
                  >
                    <Image
                      src={`https://i.ytimg.com/vi/${video.id}/mqdefault.jpg`}
                      alt={video.title}
                      width={500}
                      height={300}
                      className="w-full h-full object-cover rounded-lg"
                      loading="lazy"
                    />
                    <div className="absolute bottom-[4rem] left-4 flex items-center justify-center">
                      <Image alt="youtube-logo" src="/youtube.svg" width={50} height={25} style={{ height: 'auto' }} />
                    </div>
                  </a>

                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center rounded-lg">
                    <a
                      href={`https://youtube.com/watch?v=${video.id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300"
                    >
                      <PlayIcon className="w-20 h-20" />
                    </a>
                  </div>

                  <div className="absolute flex items-center bottom-0 left-0 right-0 p-4 bg-black/50 backdrop-blur-sm rounded-b-lg">
                    <p className="text-white text-lg font-semibold">{video.title}</p>
                    <div className="ml-auto mt-1">
                      <ArrowTopRightOnSquareIcon className="h-4 w-4 text-white" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Blog Section */}
        <BlogsSection posts={posts} />
      </div>
      
      <Footer />
    </main>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const response = await fetch('https://admin.narkinsbuilders.com/wp-json/wp/v2/posts?per_page=3&tag=' + process.env.NEXT_PUBLIC_NBR_BLOG_TAG);
    const data = await response.json();

    const posts: Post[] = data.map((post: any) => ({
      id: post.id,
      title: post.title.rendered,
      link: post.link,
      date: new Date(post.date).toLocaleDateString(),
      datetime: post.date,
      description: post.excerpt.rendered,
      category: post.categories?.[0] || 'Uncategorized',
      author: {
        name: post._embedded?.author?.[0]?.name || 'Unknown',
        role: post._embedded?.author?.[0]?.description || '',
        imageUrl: post._embedded?.author?.[0]?.avatar_urls?.['96'] || '',
      },
    }));

    return {
      props: { posts },
    };
  } catch (error) {
    console.error('Error fetching posts:', error);
    return { props: { posts: [] } };
  }
};