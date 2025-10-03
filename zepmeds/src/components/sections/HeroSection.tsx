import React, { useEffect, useState } from "react";
import { Clock, Truck, ShieldCheck, Zap } from "lucide-react";
import Button from "../ui/Button";
import Card from "../ui/Card";
import Delivery from "../../assets/medicine-delivery-animation.gif";

const Hero: React.FC = () => {
  const [animationClass, setAnimationClass] = useState(
    "opacity-0 translate-y-8"
  );

  const handleOrderNow = () => {
    const el = document.getElementById("app-download");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationClass("opacity-100 translate-y-0");
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-blue-50 via-white to-green-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-4 h-4 bg-blue-400 rounded-full animate-float opacity-60"></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-green-400 rounded-full animate-float-delayed opacity-60"></div>
        <div className="absolute bottom-40 left-20 w-5 h-5 bg-cyan-400 rounded-full animate-float opacity-60"></div>
        <div className="absolute bottom-20 right-10 w-3 h-3 bg-blue-500 rounded-full animate-float-delayed opacity-60"></div>
        <div className="absolute top-1/2 left-1/4 w-8 h-8 bg-green-300 rounded-full animate-pulse opacity-40"></div>
        <div className="absolute top-1/3 right-1/3 w-4 h-4 bg-cyan-300 rounded-full animate-pulse opacity-40"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div
              className={`transition-all duration-1000 ease-out ${animationClass}`}
            >
              {/* Main Headline */}
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 dark:from-cyan-400 dark:via-blue-400 dark:to-green-400 bg-clip-text text-transparent">
                  Medicine in
                </span>
                <br />
                <span className="bg-gradient-to-r from-green-600 to-blue-600 dark:from-green-400 dark:to-cyan-400 bg-clip-text text-transparent">
                  15 Minutes
                </span>
              </h1>

              {/* Subheadline */}
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                Lightning-fast delivery of genuine medicines and health
                products. No more waiting, no more worrying.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
                <Button size="large" className="group" onClick={handleOrderNow}>
                  <span className="flex items-center">
                    <p> Order Now</p>
                    <Truck className="ml-2  w-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
                {/* <Button variant="outline" size="lg" className="group">
                  <Upload className="mr-2 h-5 w-5 group-hover:-translate-y-1 transition-transform" />
                  Upload Prescription
                </Button> */}
              </div>
            </div>
          </div>

          {/* Right Content - Medicine Delivery Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Main delivery illustration */}
              <div className="relative bg-gradient-to-br from-blue-100 to-green-100 dark:from-blue-900/30 dark:to-green-900/30 rounded-3xl p-8 shadow-2xl">
                <img
                  src={Delivery}
                  alt="Fast Medicine Delivery"
                  className="w-full max-w-md rounded-2xl shadow-lg"
                />

                {/* Floating delivery badge */}
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-2xl shadow-lg animate-bounce">
                  <div className="flex items-center space-x-2">
                    <Zap className="h-4 w-4" />
                    <span className="font-semibold text-sm">
                      15 min delivery
                    </span>
                  </div>
                </div>

                {/* Floating medicine icons */}
                <div className="absolute -left-6 top-1/4 bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg animate-float">
                  <div className="w-8 h-8 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                  </div>
                </div>

                <div className="absolute -right-8 bottom-1/4 bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg animate-float-delayed">
                  <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Delivery truck animation */}
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-4 py-2 rounded-2xl shadow-lg">
                <div className="flex items-center space-x-2">
                  <Truck className="h-4 w-4 animate-pulse" />
                  <span className="font-semibold text-sm">On the way!</span>
                </div>
              </div>
            </div>
            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
              <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2 animate-pulse"></div>
              </div>
              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-green-400/20 rounded-3xl blur-3xl scale-110 -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;