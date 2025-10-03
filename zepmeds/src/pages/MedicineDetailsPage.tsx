import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

interface Medicine {
  _id: string;
  name: string;
  images: string[];
  price: number;
  mrp: number;
  manufacturer: string;
  composition: string;
  storage: string;
  preservative: string | null;
  description: string;
  retailer: string;
}

const MedicineDetailPage: React.FC = () => {
  const { id } = useParams();
  const [medicine, setMedicine] = useState<Medicine | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMedicine = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/medicines/${id}`);
        const data = await res.json();
        setMedicine(data);
      } catch (err) {
        console.error("Failed to fetch medicine:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchMedicine();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (!medicine) return <p>Medicine not found.</p>;

  return (
    <div className="max-w-5xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{medicine.name}</h1>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1">
          {medicine.images.length > 0 ? (
            <img
              src={medicine.images[0]}
              alt={medicine.name}
              className="w-full h-auto rounded-lg"
            />
          ) : (
            <div className="w-full h-64 bg-gray-200 flex items-center justify-center">
              No Image
            </div>
          )}
        </div>

        <div className="flex-1 space-y-4">
          <p className="text-xl font-semibold text-green-600">
            Price: ₹{medicine.price ?? 'N/A'}{' '}
            <span className="line-through text-gray-500">₹{medicine.mrp ?? 'N/A'}</span>
          </p>
          <p><strong>Manufacturer:</strong> {medicine.manufacturer ?? 'N/A'}</p>
          <p><strong>Composition:</strong> {medicine.composition ?? 'N/A'}</p>
          <p><strong>Storage:</strong> {medicine.storage ?? 'N/A'}</p>
          <p><strong>Preservative:</strong> {medicine.preservative ?? 'N/A'}</p>
          <p><strong>Retailer:</strong> {medicine.retailer ?? 'N/A'}</p>
          <p className="mt-4"><strong>Description:</strong> {medicine.description ?? 'N/A'}</p>
        </div>
      </div>
    </div>
  );
};

export default MedicineDetailPage;
