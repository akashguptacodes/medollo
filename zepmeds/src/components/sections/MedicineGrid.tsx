import React, { useState } from "react";
import { Star } from "lucide-react";
import Card from "../ui/Card";

export const MedicineGrid: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const medicines = [
    {
      id: 1,
      name: "Paracetamol 500mg",
      category: "pain-relief",
      price: 25.99,
      originalPrice: 32.99,
      rating: 4.8,
      reviews: 156,
      image: "https://images.pexels.com/photos/3683080/pexels-photo-3683080.jpeg?auto=compress&cs=tinysrgb&w=400",
      inStock: true,
      prescription: false,
      discount: 21,
    },
    {
      id: 2,
      name: "Crocin Advance",
      category: "pain-relief",
      price: 45.5,
      originalPrice: 55.0,
      rating: 4.7,
      reviews: 203,
      image: "https://images.pexels.com/photos/3683080/pexels-photo-3683080.jpeg?auto=compress&cs=tinysrgb&w=400",
      inStock: true,
      prescription: false,
      discount: 17,
    },
    {
      id: 3,
      name: "Vicks VapoRub",
      category: "cold-flu",
      price: 89.99,
      originalPrice: 99.99,
      rating: 4.9,
      reviews: 87,
      image: "https://images.pexels.com/photos/3683080/pexels-photo-3683080.jpeg?auto=compress&cs=tinysrgb&w=400",
      inStock: true,
      prescription: false,
      discount: 10,
    },
    {
      id: 4,
      name: "Metformin 500mg",
      category: "diabetes",
      price: 156.0,
      originalPrice: 180.0,
      rating: 4.6,
      reviews: 234,
      image: "https://images.pexels.com/photos/3683080/pexels-photo-3683080.jpeg?auto=compress&cs=tinysrgb&w=400",
      inStock: true,
      prescription: true,
      discount: 13,
    }
  ];

  const filteredMedicines = medicines.filter((medicine) => {
    const matchesSearch = medicine.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || medicine.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Popular {" "}
            <span className="bg-gradient-to-r from-blue-600 to-green-600 dark:from-cyan-400 dark:to-green-400 bg-clip-text text-transparent">
              Medicines
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Browse our wide selection of medicines and healthcare products
          </p>
        </div>

        {/* Medicine Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredMedicines.map((medicine, index) => (
            <Card
              key={medicine.id}
              hover
              className="group cursor-pointer overflow-hidden bg-white dark:bg-gray-800 animate-in fade-in duration-500"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative">
                <img
                  src={medicine.image}
                  alt={medicine.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {medicine.discount > 0 && (
                  <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded-lg text-sm font-semibold">
                    -{medicine.discount}%
                  </div>
                )}
                {medicine.prescription && (
                  <div className="absolute top-3 right-3 bg-blue-500 text-white px-2 py-1 rounded-lg text-xs">
                    Rx
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
                  {medicine.name}
                </h3>

                <div className="flex items-center mb-3">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="ml-1 text-sm text-gray-600 dark:text-gray-300">
                      {medicine.rating} ({medicine.reviews})
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-gray-900 dark:text-white">
                      ₹{medicine.price}
                    </span>
                    {medicine.originalPrice > medicine.price && (
                      <span className="text-sm text-gray-500 dark:text-gray-400 line-through">
                        ₹{medicine.originalPrice}
                      </span>
                    )}
                  </div>
                  <span
                    className={`text-sm font-medium ${
                      medicine.inStock
                        ? "text-green-600 dark:text-green-400"
                        : "text-red-600 dark:text-red-400"
                    }`}
                  >
                    {medicine.inStock ? "In Stock" : "Out of Stock"}
                  </span>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {filteredMedicines.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-500 dark:text-gray-400">
              No medicines found matching your criteria.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};