import React from 'react';
import { Users, Target, Heart, Award, Clock, Shield, Truck, Phone } from 'lucide-react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

export const AboutPage: React.FC = () => {
  const teamMembers = [
    {
      name: "Dr. Priyanshu Sharma",
      role: "Chief Medical Officer",
      image: "https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=300",
      description: "15+ years in pharmaceutical industry, ensuring medicine quality and safety."
    },
    {
      name: "Akash Kumar",
      role: "CEO & Founder",
      image: "https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=300",
      description: "Tech entrepreneur passionate about revolutionizing healthcare delivery."
    },
    {
      name: "Anita Desai",
      role: "Head of Operations",
      image: "https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=300",
      description: "Logistics expert ensuring seamless 15-minute delivery across cities."
    },
    {
      name: "Suryansh Singh",
      role: "CTO",
      image: "https://images.pexels.com/photos/1080213/pexels-photo-1080213.jpeg?auto=compress&cs=tinysrgb&w=300",
      description: "Building cutting-edge technology for healthcare accessibility."
    }
  ];

  const values = [
    {
      icon: Heart,
      title: "Patient First",
      description: "Every decision we make prioritizes patient health and well-being above all else."
    },
    {
      icon: Clock,
      title: "Speed & Reliability",
      description: "Committed to delivering medicines in 15 minutes without compromising quality."
    },
    {
      icon: Shield,
      title: "Trust & Safety",
      description: "Verified medicines from licensed pharmacies with complete transparency."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Continuously improving our services to exceed customer expectations."
    }
  ];

  const milestones = [
    {
      year: "2023",
      title: "Medollo Founded",
      description: "Started with a vision to revolutionize medicine delivery in India."
    },
    {
      year: "2023",
      title: "First City Launch",
      description: "Successfully launched in Mumbai with 50+ partner pharmacies."
    },
    {
      year: "2024",
      title: "Multi-City Expansion",
      description: "Expanded to Delhi, Bangalore, and Pune with 500+ pharmacies."
    },
    {
      year: "2024",
      title: "1M+ Deliveries",
      description: "Achieved milestone of 1 million successful medicine deliveries."
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300 pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-green-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            About{' '}
            <span className="bg-gradient-to-r from-blue-600 to-green-600 dark:from-cyan-400 dark:to-green-400 bg-clip-text text-transparent">
              Medollo
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            We're on a mission to make healthcare accessible to everyone by delivering medicines 
            to your doorstep in just 15 minutes, 24/7.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                To revolutionize healthcare accessibility by providing ultra-fast, reliable medicine 
                delivery services that ensure no one has to wait when their health is at stake. 
                We believe healthcare should be instant, accessible, and affordable for everyone.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-lg">
                    <Clock className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">15-Min Delivery</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Lightning fast service</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-lg">
                    <Shield className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Verified Quality</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Licensed pharmacies</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative h-[450px] w-[320px]">
                <img 
                  src="https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Healthcare Mission"
                  className="rounded-2xl shadow-2xl h-[450px] w-[320px]"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-green-600/20 rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card 
                key={index}
                hover
                className="p-8 text-center bg-white dark:bg-gray-800 animate-in fade-in duration-500"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex justify-center mb-6">
                  <div className="bg-gradient-to-r from-blue-500 to-green-500 p-4 rounded-2xl">
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {value.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              The passionate people behind Medollo
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card 
                key={index}
                hover
                className="overflow-hidden bg-white dark:bg-gray-800 animate-in fade-in duration-500"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 dark:text-cyan-400 font-semibold mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Key milestones in our mission to revolutionize healthcare
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-green-500 rounded-full"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} animate-in fade-in duration-500`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <Card className="p-6 bg-white dark:bg-gray-800">
                      <div className="text-2xl font-bold text-blue-600 dark:text-cyan-400 mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        {milestone.description}
                      </p>
                    </Card>
                  </div>

                  <div className="relative z-10 w-4 h-4 bg-gradient-to-r from-blue-500 to-green-500 rounded-full border-4 border-white dark:border-gray-900"></div>

                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold">1M+</div>
              <div className="text-blue-100">Medicines Delivered</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold">500+</div>
              <div className="text-blue-100">Partner Pharmacies</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold">15 min</div>
              <div className="text-blue-100">Average Delivery</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold">4.8★</div>
              <div className="text-blue-100">Customer Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Ready to Experience Medollo?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Join thousands of satisfied customers who trust us for their healthcare needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="large" className="group">
              <span className="flex items-center">Order Now
                <Truck className="ml-2 w-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
            <Button variant="outline" size="large" className="group">
              <span className="flex gap-2 items-center">
                Contact Us 
                <Phone className="mr-2 h-5 w-5" />
              </span>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
