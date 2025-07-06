import { GetServerSideProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/navigation/navigation";
import Footer from "@/components/footer/footer";
import BlogsSection from "@/components/blogs-section/blogs-section";
import Testimonials from "@/components/testimonials/testimonials";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useGlobalLeadFormState } from "@/zustand";
import { 
  CheckCircleIcon, 
  HomeIcon, 
  MapPinIcon, 
  CurrencyDollarIcon,
  PhoneIcon,
  StarIcon
} from "@heroicons/react/24/solid";

interface Post {
  id: number;
  title: string;
  link: string;
  date: string;
  datetime: string;
  description: string;
  category: string;
  author: {
    name: string;
    role: string;
    imageUrl: string;
  };
}

const apartmentTypes = [
  {
    type: "2 Bedroom Apartments",
    project: "Hill Crest Residency",
    sizes: ["697 sq ft", "933 sq ft", "1009 sq ft"],
    features: ["2 Bedrooms", "2 Bathrooms", "Living Room", "Kitchen", "Balcony"],
    location: "Jinnah Avenue, Bahria Town",
    image: "/images/hcr_appartment/hcr_apartment_slide_1.webp",
    link: "/hill-crest-residency"
  },
  {
    type: "3 Bedroom Apartments",
    project: "Hill Crest Residency",
    sizes: ["1490 sq ft"],
    features: ["3 Bedrooms", "3 Bathrooms", "Living Room", "Kitchen", "Balcony", "Study Room"],
    location: "Jinnah Avenue, Bahria Town",
    image: "/images/hcr_appartment/hcr_apartment_slide_2.webp",
    link: "/hill-crest-residency"
  },
  {
    type: "4 Bedroom Apartments",
    project: "Hill Crest Residency",
    sizes: ["1388 sq ft", "1996 sq ft"],
    features: ["4 Bedrooms", "4 Bathrooms", "Living Room", "Kitchen", "Balcony", "Study Room", "Family Lounge"],
    location: "Jinnah Avenue, Bahria Town",
    image: "/images/hcr_appartment/hcr_apartment_slide_3.webp",
    link: "/hill-crest-residency"
  },
  {
    type: "Luxury 2-4 Bedroom Apartments",
    project: "Narkin's Boutique Residency",
    sizes: ["1547 sq ft", "2184 sq ft", "2670 sq ft"],
    features: ["Premium Finishes", "Smart Home Features", "Panoramic Views", "Indoor Pool Access", "Gym"],
    location: "Heritage Commercial, Bahria Town",
    image: "/images/narkins_appartment_renamed_files/narkins_appartment_slide_1.webp",
    link: "/narkins-boutique-residency"
  }
];

const keyFeatures = [
  {
    icon: CheckCircleIcon,
    title: "30+ Years Experience",
    description: "Trusted construction company with proven track record"
  },
  {
    icon: HomeIcon,
    title: "Modern Amenities",
    description: "Swimming pools, gyms, underground parking, and smart home features"
  },
  {
    icon: MapPinIcon,
    title: "Prime Locations",
    description: "Strategic locations in Bahria Town Karachi with easy access"
  },
  {
    icon: CurrencyDollarIcon,
    title: "Flexible Payment Plans",
    description: "Easy installment options and competitive pricing"
  }
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

export default function ApartmentsForSaleBahriaTown({ posts }: { posts: Post[] }) {
  const setOpen = useGlobalLeadFormState((state: { setOpen: any }) => state.setOpen);

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Mobile Optimization */}
        <meta name="format-detection" content="telephone=yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="theme-color" content="#000000" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://narkinsbuilders.com/apartments-for-sale-bahria-town-karachi" />
        
        {/* Primary SEO Meta Tags */}
        <title>Apartments for Sale in Bahria Town Karachi - Premium Properties by Narkin's Builders</title>
        <meta
          name="description"
          content="Discover luxury apartments for sale in Bahria Town Karachi. Premium 2, 3 & 4 bedroom units with modern amenities, smart home features, and flexible payment plans. 30+ years construction experience."
        />
        <meta
          name="keywords"
          content="apartments for sale bahria town karachi, luxury apartments bahria town, 2 bedroom apartments bahria town, 3 bedroom apartments bahria town, 4 bedroom apartments bahria town, property investment bahria town, apartments karachi"
        />
        <meta name="author" content="Narkin's Builders & Developers" />

        {/* Open Graph Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Apartments for Sale in Bahria Town Karachi - Premium Properties" />
        <meta
          property="og:description"
          content="Discover luxury apartments for sale in Bahria Town Karachi. Premium 2, 3 & 4 bedroom units with modern amenities and flexible payment plans."
        />
        <meta property="og:url" content="https://narkinsbuilders.com/apartments-for-sale-bahria-town-karachi" />
        <meta property="og:image" content="https://narkinsbuilders.com/images/hcr_new.webp" />
        <meta property="og:site_name" content="Narkin's Builders" />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Apartments for Sale in Bahria Town Karachi - Premium Properties" />
        <meta name="twitter:description" content="Discover luxury apartments for sale in Bahria Town Karachi. Premium 2, 3 & 4 bedroom units with modern amenities and flexible payment plans." />
        <meta name="twitter:image" content="https://narkinsbuilders.com/images/hcr_new.webp" />

        {/* Real Estate Listing Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "RealEstateListing",
              "name": "Apartments for Sale in Bahria Town Karachi",
              "description": "Premium luxury apartments for sale in Bahria Town Karachi. 2, 3 & 4 bedroom units with modern amenities by Narkin's Builders.",
              "url": "https://narkinsbuilders.com/apartments-for-sale-bahria-town-karachi",
              "image": "https://narkinsbuilders.com/images/hcr_new.webp",
              "datePosted": "2024-01-01",
              "validThrough": "2025-12-31",
              "price": {
                "@type": "PriceSpecification",
                "priceCurrency": "PKR",
                "price": "Contact for pricing"
              },
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Bahria Town",
                "addressLocality": "Karachi",
                "addressRegion": "Sindh",
                "addressCountry": "PK"
              },
              "amenityFeature": [
                "Swimming Pool",
                "Gymnasium",
                "Underground Parking",
                "24/7 Security",
                "Smart Home Features",
                "Prayer Area"
              ],
              "seller": {
                "@type": "Organization",
                "name": "Narkin's Builders & Developers",
                "url": "https://narkinsbuilders.com"
              }
            })
          }}
        />
      </Head>

      <Navigation />

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-black to-gray-900 text-white py-20 pt-32">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  Apartments for Sale in <span className="text-yellow-400">Bahria Town Karachi</span>
                </h1>
                <p className="text-xl md:text-2xl mb-8 text-gray-300">
                  Discover premium 2, 3 & 4 bedroom luxury apartments with modern amenities. 
                  30+ years of construction excellence by Narkin's Builders.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    onClick={() => setOpen(true)}
                    className="bg-yellow-400 text-black hover:bg-yellow-300 px-8 py-4 text-lg font-semibold"
                  >
                    <PhoneIcon className="w-5 h-5 mr-2" />
                    Get Price Details
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg"
                  >
                    <Link href="#available-apartments">View Apartments</Link>
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Key Features Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Our Bahria Town Apartments?
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Premium quality construction with modern amenities in the most sought-after location in Karachi.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {keyFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow"
                >
                  <feature.icon className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Available Apartments Section */}
        <section id="available-apartments" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Available Apartments in Bahria Town Karachi
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Choose from our premium selection of 2, 3 & 4 bedroom apartments in two luxury projects.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {apartmentTypes.map((apartment, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                    <CardHeader className="p-0">
                      <Image
                        src={apartment.image}
                        alt={`${apartment.type} in ${apartment.project}`}
                        width={600}
                        height={400}
                        className="w-full h-64 object-cover"
                      />
                    </CardHeader>
                    <CardContent className="p-6">
                      <div className="mb-4">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{apartment.type}</h3>
                        <p className="text-lg text-yellow-600 font-semibold">{apartment.project}</p>
                        <p className="text-gray-600 flex items-center mt-1">
                          <MapPinIcon className="w-4 h-4 mr-1" />
                          {apartment.location}
                        </p>
                      </div>

                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 mb-2">Available Sizes:</h4>
                        <div className="flex flex-wrap gap-2">
                          {apartment.sizes.map((size, idx) => (
                            <span key={idx} className="bg-gray-100 px-3 py-1 rounded-full text-sm font-medium">
                              {size}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-2">Features:</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {apartment.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center">
                              <CheckCircleIcon className="w-4 h-4 text-green-500 mr-2" />
                              <span className="text-sm text-gray-700">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <Button asChild className="flex-1">
                          <Link href={apartment.link}>View Details</Link>
                        </Button>
                        <Button
                          onClick={() => setOpen(true)}
                          variant="outline"
                          className="flex-1"
                        >
                          Get Price
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Bahria Town Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Why Bahria Town Karachi is Perfect for Your Investment
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <CheckCircleIcon className="w-6 h-6 text-green-500 mr-3 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Secure Gated Community</h3>
                      <p className="text-gray-600">24/7 security with controlled access points ensuring safety for families.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircleIcon className="w-6 h-6 text-green-500 mr-3 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Complete Infrastructure</h3>
                      <p className="text-gray-600">Well-planned roads, reliable utilities, and comprehensive facilities.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircleIcon className="w-6 h-6 text-green-500 mr-3 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Investment Growth</h3>
                      <p className="text-gray-600">Proven track record of property appreciation and strong rental yields.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircleIcon className="w-6 h-6 text-green-500 mr-3 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Modern Lifestyle</h3>
                      <p className="text-gray-600">Shopping malls, restaurants, schools, and recreational facilities nearby.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <Image
                  src="/images/hcr_new.webp"
                  alt="Bahria Town Karachi luxury apartments"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-yellow-400 to-yellow-500">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Ready to Own Your Dream Apartment?
            </h2>
            <p className="text-xl text-black mb-8 max-w-2xl mx-auto">
              Get detailed pricing, floor plans, and schedule your site visit today. 
              Limited units available in both projects!
            </p>
            <Button
              onClick={() => setOpen(true)}
              className="bg-black text-white hover:bg-gray-800 px-8 py-4 text-lg font-semibold"
            >
              <PhoneIcon className="w-5 h-5 mr-2" />
              Contact Us Now
            </Button>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-gray-50">
          <Testimonials testimonials={testimonials} />
        </section>

        {/* Blog Section */}
        <BlogsSection posts={posts} />
      </main>

      <Footer />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const response = await fetch('https://admin.narkinsbuilders.com/wp-json/wp/v2/posts?per_page=3');
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
