import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { 
  Award, 
  Users, 
  Target, 
  Heart, 
  Shield, 
  TrendingUp, 
  Star,
  CheckCircle,
  Building2,
  HomeIcon,
  Key
} from "lucide-react";

export default function About() {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "20+ years in real estate with a passion for helping families find their dream homes."
    },
    {
      name: "Michael Chen",
      role: "Head of Sales",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "Expert negotiator with a track record of securing the best deals for our clients."
    },
    {
      name: "Emily Rodriguez",
      role: "Property Specialist",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "Local market expert with deep knowledge of neighborhood trends and property values."
    },
    {
      name: "David Thompson",
      role: "Investment Advisor",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "Specializes in investment properties and helping clients build wealth through real estate."
    }
  ];

  const stats = [
    { number: "500+", label: "Happy Families", icon: Heart },
    { number: "15+", label: "Years Experience", icon: Award },
    { number: "1000+", label: "Properties Sold", icon: HomeIcon },
    { number: "98%", label: "Client Satisfaction", icon: Star }
  ];

  const values = [
    {
      icon: Shield,
      title: "Trust & Integrity",
      description: "We build lasting relationships based on honesty, transparency, and ethical business practices."
    },
    {
      icon: Target,
      title: "Client Focus",
      description: "Your success is our success. We&apos;re committed to exceeding your expectations every time."
    },
    {
      icon: TrendingUp,
      title: "Excellence",
      description: "We strive for excellence in everything we do, from property selection to customer service."
    },
    {
      icon: Users,
      title: "Community",
      description: "We&apos;re proud to be part of the communities we serve and invest in their growth."
    }
  ];

  const services = [
    {
      icon: HomeIcon,
      title: "Residential Sales",
      description: "Expert guidance through every step of buying or selling your home."
    },
    {
      icon: Building2,
      title: "Commercial Properties",
      description: "Strategic commercial real estate solutions for businesses of all sizes."
    },
    {
      icon: Key,
      title: "Property Management",
      description: "Comprehensive property management services for landlords and investors."
    },
    {
      icon: TrendingUp,
      title: "Investment Advisory",
      description: "Strategic investment advice to help you build wealth through real estate."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Navigation />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            About MPR Real Estate
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Your trusted partner in finding the perfect property. We&apos;ve been helping families 
            find their dream homes for over 15 years.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Story Section */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Our Story
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Founded in 2009, MPR Real Estate began with a simple mission: to make the home-buying 
              and selling process as smooth and enjoyable as possible. What started as a small family 
              business has grown into one of the most trusted names in real estate.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              We believe that finding the right property isn&apos;t just about four walls and a roof—it&apos;s 
              about finding a place where memories are made, families grow, and dreams come true. 
              That&apos;s why we go above and beyond to understand your unique needs and preferences.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-10 h-10 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-property p-8 hover:shadow-property-hover transition-all duration-300">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                  <value.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Services Section */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-property p-6 text-center hover:shadow-property-hover transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-property overflow-hidden hover:shadow-property-hover transition-all duration-300 group">
                <div className="relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-white rounded-2xl shadow-property p-8 mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Why Choose MPR Real Estate?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Local Market Expertise</h4>
                  <p className="text-gray-600 text-sm">Deep knowledge of local neighborhoods and market trends</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Personalized Service</h4>
                  <p className="text-gray-600 text-sm">Tailored approach to meet your unique needs</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Proven Track Record</h4>
                  <p className="text-gray-600 text-sm">15+ years of successful transactions</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Full-Service Support</h4>
                  <p className="text-gray-600 text-sm">From search to closing, we&apos;re with you every step</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Technology-Driven</h4>
                  <p className="text-gray-600 text-sm">Modern tools and platforms for seamless experience</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">24/7 Availability</h4>
                  <p className="text-gray-600 text-sm">Always here when you need us</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Find Your Dream Home?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let our experienced team guide you through the process of finding the perfect property.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/properties"
              className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Browse Properties
            </a>
            <a
              href="/contact"
              className="border-2 border-blue-500 text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
