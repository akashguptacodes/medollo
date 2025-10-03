import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../../services/variants';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const StatsSection: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const [start, setStart] = useState(false);

  useEffect(() => {
    if (inView) {
      setStart(true);
    }
  }, [inView]);

  return (
    <section className="py-16 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-8" variants={fadeIn('up', 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            amount: 0
          }}>
          <div className="text-center">
            <div ref={ref}>
              {start && (
                <CountUp
                  className="text-4xl font-black text-blue-600 dark:text-blue-400 mb-2"
                  end={15}
                />
              )}
            </div>
            <div className="text-gray-600 dark:text-gray-300 font-medium">Minutes Delivery</div>
          </div>
          <div className="text-center">
            <div ref={ref}>
              {start && (
                <CountUp
                  className="text-4xl font-black text-blue-600 dark:text-blue-400 mb-2"
                  end={50000}
                  suffix='+'
                />
              )}
            </div>
            <div className="text-gray-600 dark:text-gray-300 font-medium">Happy Customers</div>
          </div>
          <div className="text-center">
            <div ref={ref}>
              {start && (
                <CountUp
                  className="text-4xl font-black text-blue-600 dark:text-blue-400 mb-2"
                  end={10000}
                  suffix='+'
                />
              )}
            </div>
            <div className="text-gray-600 dark:text-gray-300 font-medium">Medicines Available</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-black text-orange-600 dark:text-orange-400 mb-2">24/7</div>
            <div className="text-gray-600 dark:text-gray-300 font-medium">Service Available</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection; 