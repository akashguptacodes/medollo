import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

interface Medicine {
  _id: string;
  name: string;
  price: number;
  mrp: number;
  images: string[];
}

const MedicineList: React.FC = () => {
  const [medicines, setMedicines] = useState<Medicine[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  // Get query from URL
  const params = new URLSearchParams(location.search);
  const searchQuery = params.get("search") || "";

  useEffect(() => {
    const fetchMedicines = async () => {
      setLoading(true);
      try {
        const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/search?q=${searchQuery}`);
        const data = await res.json();
        setMedicines(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchMedicines();
  }, [searchQuery]);

  if (loading) return <p className="p-4">Loading...</p>;
  if (medicines.length === 0) return <p className="p-4">No medicines found for "{searchQuery}"</p>;

  return (
    <div className="max-w-7xl mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {medicines.map((med) => (
        <div
          key={med._id}
          className="border rounded-lg p-4 shadow hover:shadow-lg cursor-pointer"
          onClick={() => navigate(`/medicine/detail/${med._id}`)}
        >
          <img
            src={med.images?.[0] || "/placeholder.png"}
            alt={med.name}
            className="w-full h-48 object-cover rounded"
          />
          <h3 className="mt-2 font-semibold">{med.name}</h3>
          <p className="text-green-600 font-bold">
            ₹{med.price} <span className="line-through text-gray-500">₹{med.mrp}</span>
          </p>
        </div>
      ))}
    </div>
  );
};

export default MedicineList;
