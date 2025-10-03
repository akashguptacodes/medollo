
import React from "react";
import Card from "../components/ui/Card";

const InvestorSection: React.FC = () => {

  const investors = [
    {
      id: 1,
      name: "Neha Agarwal",
      title: "Partner at Sequoia Capital",
      firm: "Sequoia Capital",
      bio: "Neha has backed multiple successful health-tech startups across India. With over a decade of VC experience, she brings strategic guidance, deep domain knowledge, and a powerful network to support Medollo' scale.",
      avatar:
        "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100",
    },
    {
      id: 2,
      name: "Amit Tandon",
      title: "General Partner at Blume Ventures",
      firm: "Blume Ventures",
      bio: "Amit focuses on early-stage investments and scaling operational models in the Indian startup ecosystem. His mentorship has been key in Medollo’s go-to-market strategy and team expansion.",
      avatar:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100",
    },
    {
      id: 3,
      name: "Anjali Mehta",
      title: "Angel Investor & HealthTech Advisor",
      firm: "Independent",
      bio: "With a strong medical background and experience advising startups, Anjali bridges healthcare expertise with tech-driven innovation. She has been an early and active supporter of Medollo.",
      avatar:
        "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100",
    },
    {
      id: 4,
      name: "Ravi Kapoor",
      title: "Partner at Accel",
      firm: "Accel",
      bio: "Ravi specializes in digital-first ventures and has helped scale startups across South Asia. He supports Medollo’ expansion with strategic partnerships and fundraising insights.",
      avatar:
        "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=100",
    },
  ];

  


  

  return (
    <section
      id="investors"
      className="py-20 bg-gradient-to-br from-blue-50 via-white to-green-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Meet Our{" "}
            <span className="bg-gradient-to-r from-blue-600 to-green-600 dark:from-cyan-400 dark:to-green-400 bg-clip-text text-transparent">
              Investors
            </span>
          </h2>
        </div>

        {/* Introduction Section */}
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            At Medollo, we are honored to be backed by a diverse group of
            investors who bring much more than capital. They contribute decades
            of experience, strategic insights, and industry leadership to help
            us reshape the healthcare landscape in India and beyond. Their
            belief in our mission fuels our innovation and growth.
          </p>
          <p className="mt-4 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            From early-stage guidance to scaling support, our investors are
            active collaborators in building solutions that make affordable
            healthcare accessible to millions.
          </p>
        </div>

        {/* Investors */}
        <section
          id="investors"
          className="py-20 px-4 bg-gradient-to-b from-blue-50 to-green-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300"
        >
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12"></div>

            <div className="space-y-12">
              {investors.map((investor) => (
                <Card
                  key={investor.id}
                  
                  className="p-6 md:p-10 flex flex-col md:flex-row items-center bg-white/80 backdrop-blur dark:bg-gray-800/80 space-y-6 md:space-y-0 md:space-x-8"
                >
                  <img
                    src={investor.avatar}
                    alt={investor.name}
                    className="w-28 h-28 md:w-32 md:h-32 rounded-full object-cover border-2 border-blue-200 dark:border-cyan-400"
                  />
                  <div className="text-center md:text-left">
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                      {investor.name}
                    </h3>
                    <p className="text-md text-gray-600 dark:text-gray-400">
                      {investor.title} @ {investor.firm}
                    </p>
                    <p className="mt-3 text-gray-700 dark:text-gray-300 leading-relaxed">
                      {investor.bio}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default InvestorSection;
