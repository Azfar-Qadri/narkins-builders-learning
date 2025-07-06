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
  SparklesIcon,
  BuildingOffice2Icon,
  PhoneIcon,
  StarIcon,
  SwatchIcon,
  ShieldCheckIcon
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

const luxuryFeatures = [
  {
    icon: SparklesIcon,
    title: "Premium Finishes",
    description: "Marble flooring, granite countertops, and designer fixtures throughout"
  },
  {
    icon: HomeIcon,
    title: "Smart Home Technology",
    description: "Automated lighting, climate control, and security systems"
  },
  {
    icon: BuildingOffice2Icon,
    title: "Panoramic Views",
    description: "Stunning views of Bahria Town landscapes from every apartment"
  },
  {
    icon: ShieldCheckIcon,
    title: "Premium Security",
    description: "24/7 security with CCTV monitoring and controlled access"
  }
];

const luxuryApartments = [
  {
    title: "Boutique Luxury 2-Bed Gold",
    project: "Narkin's Boutique Residency",
    size: "1547 Square Feet",
    location: "Heritage Commercial, Bahria Town",
    features: [
      "Premium marble flooring",
      "Smart home automation",
      "Designer kitchen with island",
      "Master bedroom with walk-in closet",
      "Panoramic city views",
      "Access to rooftop amenities"
    ],
    amenities: ["Indoor Swimming Pool", "Fitness Center", "Steam Bath", "Sky Villa Access"],
    image: "/images/narkins_appartment_renamed_files/narkins_appartment_slide_1.webp",
    link: "/narkins-boutique-residency",
    badge: "Most Popular"
  },
  {
    title: "Boutique Luxury 3-Bed Diamond",
    project: "Narkin's Boutique Residency", 
    size: "2184 Square Feet",
    location: "Heritage Commercial, Bahria Town",
    features: [
      "Corner unit with extra windows",
      "Premium Italian marble",
      "Smart home integration",
      "3 en-suite bedrooms",
      "Family lounge area",
      "Private balconies"
    ],
    amenities: ["Heritage Club Access", "Concierge Service", "Valet Parking", "Private Elevators"],
    image: "/images/narkins_appartment_renamed_files/narkins_appartment_slide_2.webp",
    link: "/narkins-boutique-residency",
    badge: "Corner Unit"
  },
  {
    title: "Hill Crest Premium 4-Bed",
    project: "Hill Crest Residency",
    size: "1996 Square Feet", 
    location: "Jinnah Avenue, Bahria Town",
    features: [
      "Spacious 4-bedroom layout",
      "Premium wooden flooring",
      "Modern smart home features",
      "Large family lounge",
      "Study room/home office",
      "Covered parking spaces"
    ],
    amenities: ["Swimming Pool", "Gymnasium", "Prayer Area", "Underground Parking"],
    image: "/images/hcr_appartment/hcr_apartment_slide_1.webp",
    link: "/hill-crest-residency",
    badge: "Family Friendly"
  },
  {
    title: "Sky Villa Duplex Penthouse",
    project: "Narkin's Boutique Residency",
    size: "5340 Square Feet",
    location: "Heritage Commercial, Bahria Town",
    features: [
      "Double-story luxury residence",
      "Private rooftop terrace",
      "6 bedrooms with en-suites",
      "Private elevator access",
      "360-degree panoramic views",
      "Premium imported fixtures"
    ],
    amenities: ["Private Pool Access", "Dedicated Parking", "Butler Service", "Exclusive Lounge"],
    image: "/images/narkins_appartment_renamed_files/narkins_appartment_slide_3.webp",
    link: "/narkins-boutique-residency",
    badge: "Ultra Luxury"
  }
];

const premiumAmenities = [
  {
    category: "Wellness & Recreation",
    items: ["Indoor Swimming Pool", "State-of-the-art Gym", "Steam Bath & Sauna", "Yoga Studio", "Jogging Track"]
  },
  {
    category: "Lifestyle & Convenience", 
    items: ["Concierge Service", "Valet Parking", "24/7 Security", "High-speed Elevators", "Power Backup"]
  },
  {
    category: "Social & Entertainment",
    items: ["Community Hall", "Rooftop Lounge", "BBQ Area", "Kids Play Area", "Business Center"]
  },
  {
    category: "Technology & Smart Features",
    items: ["Smart Home Automation", "High-speed Internet", "Video Door Phones", "CCTV Monitoring", "Card Access"]
  }
];

const testimonials = [
  {
    name: "Saad Arshad",
    stars: [true, true, true, true, "half"],
    testimonial: "The luxury finishes and attention to detail in our Boutique Residency apartment exceeded our expectations. Truly premium living experience.",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    name: "Umair Iqrar", 
    stars: [true, true, true, true, false],
    testimonial: "Invested in the luxury apartment during launch phase. The appreciation in value and rental yield has been fantastic. Great investment decision.",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
  },
];

export default function LuxuryApartmentsBahriaTown({ posts }: { posts: Post[] }) {
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
        <link rel="canonical" href="https://narkinsbuilders.com/luxury-apartments-bahria-town" />
        
        {/* Primary SEO Meta Tags */}
        <title>Luxury Apartments in Bahria Town Karachi - Premium Living by Narkin's Builders</title>
        <meta
          name="description"
          content="Discover ultra-luxury apartments in Bahria Town Karachi. Premium 2, 3 & 4 bedroom units with smart home features, rooftop amenities, and world-class finishes. Sky Villa Duplexes available."
        />
        <meta
          name="keywords"
          content="luxury apartments bahria town, premium apartments karachi, luxury apartments bahria town karachi, high-end apartments bahria town, luxury condos karachi, premium living bahria town, sky villa duplex"
        />
        <meta name="author" content="Narkin's Builders & Developers" />

        {/* Open Graph Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Luxury Apartments in Bahria Town Karachi - Premium Living" />
        <meta
          property="og:description"
          content="Discover ultra-luxury apartments in Bahria Town Karachi. Premium finishes, smart home features, and world-class amenities by Narkin's Builders."
        />
        <meta property="og:url" content="https://narkinsbuilders.com/luxury-apartments-bahria-town" />
        <meta property="og:image" content="https://narkinsbuilders.com/images/NBR_SLIDE_1.webp" />
        <meta property="og:site_name" content="Narkin's Builders" />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Luxury Apartments in Bahria Town Karachi - Premium Living" />
        <meta name="twitter:description" content="Discover ultra-luxury apartments in Bahria Town Karachi. Premium finishes, smart home features, and world-class amenities." />
        <meta name="twitter:image" content="https://narkinsbuilders.com/images/NBR_SLIDE_1.webp" />

        {/* Luxury Real Estate Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "RealEstateListing",
              "name": "Luxury Apartments in Bahria Town Karachi",
              "description": "Ultra-luxury apartments with premium finishes, smart home technology, and world-class amenities in Bahria Town Karachi.",
              "url": "https://narkinsbuilders.com/luxury-apartments-bahria-town",
              "image": "https://narkinsbuilders.com/images/NBR_SLIDE_1.webp",
              "datePosted": "2024-01-01",
              "validThrough": "2025-12-31",
              "price": {
                "@type": "PriceSpecification",
                "priceCurrency": "PKR",
                "price": "Premium Pricing - Contact for Details"
              },
              "numberOfRooms": "2-6",
              "floorSize": {
                "@type": "QuantitativeValue",
                "value": "1547-5340",
                "unitCode": "FTK"
              },
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Heritage Commercial & Jinnah Avenue, Bahria Town",
                "addressLocality": "Karachi",
                "addressRegion": "Sindh",
                "addressCountry": "PK"
              },
              "amenityFeature": [
                "Indoor Swimming Pool",
                "Concierge Service", 
                "Smart Home Automation",
                "Valet Parking",
                "Rooftop Amenities",
                "Premium Security",
                "Sky Villa Duplexes"
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
        <section className="bg-gradient-to-r from-amber-900 via-yellow-900 to-amber-800 text-white py-20 pt-32">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="flex items-center justify-center mb-4">
                  <SparklesIcon className="w-8 h-8 text-yellow-400 mr-2" />
                  <span className="text-xl font-semibold text-yellow-400">Ultra-Premium Living</span>
                  <SparklesIcon className="w-8 h-8 text-yellow-400 ml-2" />
                </div>
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  Luxury Apartments in <span className="text-yellow-400">Bahria Town Karachi</span>
                </h1>
                <p className="text-xl md:text-2xl mb-8 text-gray-200">
                  Experience the pinnacle of luxury living with smart home technology, 
                  premium finishes, and world-class amenities. Sky Villa Duplexes now available.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    onClick={() => setOpen(true)}
                    className="bg-yellow-400 text-black hover:bg-yellow-300 px-8 py-4 text-lg font-semibold"
                  >
                    <PhoneIcon className="w-5 h-5 mr-2" />
                    Schedule Private Tour
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg"
                  >
                    <Link href="#luxury-apartments">View Luxury Units</Link>
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Luxury Features Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                What Makes Our Apartments Ultra-Luxury?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Every detail carefully crafted to provide an unparalleled living experience with premium materials, 
                cutting-edge technology, and exclusive amenities.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {luxuryFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow bg-gradient-to-b from-yellow-50 to-white"
                >
                  <feature.icon className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Luxury Apartments Showcase */}
        <section id="luxury-apartments" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Luxury Apartment Collection
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                From sophisticated 2-bedroom units to ultra-luxury Sky Villa Duplexes, 
                each residence is designed for discerning buyers who appreciate the finest things in life.
              </p>
            </div>

            <div className="space-y-8">
              {luxuryApartments.map((apartment, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                      <CardHeader className="p-0 relative">
                        <Image
                          src={apartment.image}
                          alt={`${apartment.title} - Luxury apartment in Bahria Town`}
                          width={600}
                          height={400}
                          className="w-full h-80 lg:h-full object-cover"
                        />
                        {apartment.badge && (
                          <div className="absolute top-4 left-4 bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-semibold">
                            {apartment.badge}
                          </div>
                        )}
                      </CardHeader>
                      <CardContent className="p-8">
                        <div className="mb-4">
                          <h3 className="text-2xl font-bold text-gray-900 mb-2">{apartment.title}</h3>
                          <p className="text-lg text-yellow-600 font-semibold">{apartment.project}</p>
                          <p className="text-gray-600 flex items-center mt-1">
                            <BuildingOffice2Icon className="w-4 h-4 mr-1" />
                            {apartment.location}
                          </p>
                          <p className="text-lg font-semibold text-gray-900 mt-2">{apartment.size}</p>
                        </div>

                        <div className="mb-6">
                          <h4 className="font-semibold text-gray-900 mb-3">Luxury Features:</h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {apartment.features.map((feature, idx) => (
                              <div key={idx} className="flex items-center">
                                <CheckCircleIcon className="w-4 h-4 text-yellow-500 mr-2" />
                                <span className="text-sm text-gray-700">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="mb-6">
                          <h4 className="font-semibold text-gray-900 mb-3">Premium Amenities:</h4>
                          <div className="flex flex-wrap gap-2">
                            {apartment.amenities.map((amenity, idx) => (
                              <span key={idx} className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                                {amenity}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="flex gap-3">
                          <Button asChild className="flex-1 bg-yellow-500 hover:bg-yellow-400">
                            <Link href={apartment.link}>Explore Project</Link>
                          </Button>
                          <Button
                            onClick={() => setOpen(true)}
                            variant="outline"
                            className="flex-1 border-yellow-500 text-yellow-600 hover:bg-yellow-50"
                          >
                            Get Premium Pricing
                          </Button>
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Premium Amenities Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                World-Class Amenities & Services
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Enjoy resort-style living with comprehensive amenities designed for luxury, 
                convenience, and an elevated lifestyle.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {premiumAmenities.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-b from-yellow-50 to-white p-6 rounded-lg"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{category.category}</h3>
                  <ul className="space-y-2">
                    {category.items.map((item, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <StarIcon className="w-4 h-4 text-yellow-500 mr-2" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Investment Value Section */}
        <section className="py-16 bg-gray-900 text-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Luxury Real Estate Investment in Pakistan's Premier Location
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <CheckCircleIcon className="w-6 h-6 text-yellow-400 mr-3 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Premium Appreciation</h3>
                      <p className="text-gray-300">Luxury properties in Bahria Town show consistent value appreciation above market average.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircleIcon className="w-6 h-6 text-yellow-400 mr-3 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">High Rental Yields</h3>
                      <p className="text-gray-300">Premium apartments command premium rents from affluent tenants and expatriates.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircleIcon className="w-6 h-6 text-yellow-400 mr-3 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Exclusive Market Segment</h3>
                      <p className="text-gray-300">Limited supply of ultra-luxury apartments ensures exclusivity and value retention.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircleIcon className="w-6 h-6 text-yellow-400 mr-3 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Developer Reputation</h3>
                      <p className="text-gray-300">30+ years of construction excellence and on-time delivery track record.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <Image
                  src="/images/NBR_SLIDE_1.webp"
                  alt="Luxury apartments investment opportunity in Bahria Town"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-400">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Experience Ultra-Luxury Living Today
            </h2>
            <p className="text-xl text-black mb-8 max-w-3xl mx-auto">
              Schedule your private tour of our luxury apartments and Sky Villa Duplexes. 
              Exclusive units available for discerning buyers. Limited availability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => setOpen(true)}
                className="bg-black text-white hover:bg-gray-800 px-8 py-4 text-lg font-semibold"
              >
                <PhoneIcon className="w-5 h-5 mr-2" />
                Book Private Tour
              </Button>
              <Button
                onClick={() => setOpen(true)}
                variant="outline"
                className="border-black text-black hover:bg-black hover:text-white px-8 py-4 text-lg font-semibold"
              >
                Get Luxury Pricing
              </Button>
            </div>
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