export interface Medicine {
  id: string;
  name: string;
  price: number;
  originalPrice: number;
  category: string;
  manufacturer: string;
  prescriptionRequired: boolean;
  inStock: boolean;
  deliveryTime: string;
  rating: number;
  reviews: number;
  image: string;
  description: string;
  dosage: string;
  sideEffects: string[];
  quantity: number;
}

export interface HealthTest {
  id: string;
  name: string;
  price: number;
  originalPrice: number;
  category: string;
  description: string;
  preparationRequired: boolean;
  reportTime: string;
  homeCollection: boolean;
  rating: number;
  reviews: number;
  image: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  color: string;
}

export const categories: Category[] = [
  { id: '1', name: 'Generic', icon: '🩺', color: 'bg-blue-100 text-blue-800' },
  { id: '2', name: 'Standard', icon: '💊​', color: 'bg-red-100 text-red-800' },
  { id: '3', name: 'Emergency', icon: '🚨', color: 'bg-green-100 text-green-800' },
];

export const doctorPh : Category[]=[
    { id: '1', name: 'Doctors', icon: '🧑‍⚕️', color: 'bg-green-100 text-green-800' }
]

export const medicines: Medicine[] = [
  {
    id: '1',
    name: 'Paracetamol 650mg',
    price: 45,
    originalPrice: 60,
    category: 'Generic',
    manufacturer: 'Cipla',
    prescriptionRequired: false,
    inStock: true,
    deliveryTime: '12 mins',
    rating: 4.5,
    reviews: 324,
    image: 'https://images.pexels.com/photos/3683087/pexels-photo-3683087.jpeg',
    description: 'Effective pain relief and fever reducer',
    dosage: '1-2 tablets every 6-8 hours',
    sideEffects: ['Nausea', 'Skin rash', 'Allergic reactions'],
    quantity: 10
  },
  {
    id: '2',
    name: 'Crocin Advance',
    price: 28,
    originalPrice: 35,
    category: 'Generic',
    manufacturer: 'GSK',
    prescriptionRequired: false,
    inStock: true,
    deliveryTime: '8 mins',
    rating: 4.3,
    reviews: 156,
    image: 'https://images.pexels.com/photos/3683087/pexels-photo-3683087.jpeg',
    description: 'Fast acting fever and pain relief',
    dosage: '1 tablet every 4-6 hours',
    sideEffects: ['Drowsiness', 'Upset stomach'],
    quantity: 10
  },
  {
    id: '3',
    name: 'Cough Syrup 100ml',
    price: 85,
    originalPrice: 110,
    category: 'Generic',
    manufacturer: 'Mankind',
    prescriptionRequired: false,
    inStock: true,
    deliveryTime: '15 mins',
    rating: 4.2,
    reviews: 89,
    image: 'https://images.pexels.com/photos/3683087/pexels-photo-3683087.jpeg',
    description: 'Relief from dry and wet cough',
    dosage: '10ml three times daily',
    sideEffects: ['Drowsiness', 'Dizziness'],
    quantity: 1
  },
  {
    id: '4',
    name: 'Insulin Glargine',
    price: 45,
    originalPrice: 500,
    category: 'Emergency',
    manufacturer: 'Sanofi',
    prescriptionRequired: true,
    inStock: true,
    deliveryTime: '10 mins',
    rating: 4.8,
    reviews: 67,
    image: 'https://images.pexels.com/photos/3683087/pexels-photo-3683087.jpeg',
    description: 'Long-acting insulin for diabetes management',
    dosage: 'As prescribed by doctor',
    sideEffects: ['Low blood sugar', 'Injection site reactions'],
    quantity: 1
  },
  {
    id: '5',
    name: 'Amoxicillin 500mg',
    price: 12,
    originalPrice: 160,
    category: 'Standard',
    manufacturer: 'Sun Pharma',
    prescriptionRequired: true,
    inStock: true,
    deliveryTime: '20 mins',
    rating: 4.6,
    reviews: 212,
    image: 'https://images.pexels.com/photos/3683087/pexels-photo-3683087.jpeg',
    description: 'Broad-spectrum antibiotic for bacterial infections',
    dosage: '1 capsule every 8 hours',
    sideEffects: ['Nausea', 'Diarrhea', 'Allergy'],
    quantity: 10
  },
  {
    id: '6',
    name: 'Metformin 500mg',
    price: 60,
    originalPrice: 80,
    category: 'Standard',
    manufacturer: 'Cipla',
    prescriptionRequired: true,
    inStock: true,
    deliveryTime: '18 mins',
    rating: 4.7,
    reviews: 198,
    image: 'https://images.pexels.com/photos/3683087/pexels-photo-3683087.jpeg',
    description: 'Used for managing type 2 diabetes',
    dosage: '1 tablet with food',
    sideEffects: ['Stomach upset', 'Metallic taste'],
    quantity: 15
  },
  {
    id: '7',
    name: 'Epinephrine Auto-Injector',
    price: 120,
    originalPrice: 1500,
    category: 'Emergency',
    manufacturer: 'Pfizer',
    prescriptionRequired: true,
    inStock: true,
    deliveryTime: '9 mins',
    rating: 4.9,
    reviews: 53,
   image: 'https://images.pexels.com/photos/3683087/pexels-photo-3683087.jpeg',
    description: 'Emergency treatment for severe allergic reactions',
    dosage: 'As directed (usually one injection in thigh)',
    sideEffects: ['Palpitations', 'Anxiety', 'Sweating'],
    quantity: 1
  },
  {
    id: '8',
    name: 'ORS Sachets',
    price: 15,
    originalPrice: 20,
    category: 'Generic',
    manufacturer: 'Dabur',
    prescriptionRequired: false,
    inStock: true,
    deliveryTime: '6 mins',
    rating: 4.4,
    reviews: 74,
   image: 'https://images.pexels.com/photos/3683087/pexels-photo-3683087.jpeg',
    description: 'Oral rehydration salts for dehydration and diarrhea',
    dosage: 'Dissolve 1 sachet in water and consume',
    sideEffects: ['None usually', 'Mild nausea'],
    quantity: 5
  }
];

// mockData.ts (Doctor Data)
export const doctors = [
  {
    id: '1',
    name: 'Dr. Priya Sharma',
    specialization: 'Cardiologist',
    department: 'Cardiology',
    category: 'Cardiologists', // updated
    rating: 4.9,
    experience: 12,
    consultationFee: 50,
    originalFee: 700,
    hospital: 'Apollo Hospital, Delhi',
    available: true,
    image: 'https://images.pexels.com/photos/6749771/pexels-photo-6749771.jpeg'
  },
  {
    id: '2',
    name: 'Dr. Rajeev Kumar',
    specialization: 'General Physician',
    department: 'General Medicine',
    category: 'Cardiologists',
    rating: 4.6,
    experience: 8,
    consultationFee: 30,
    originalFee: 400,
    hospital: 'Fortis Hospital, Noida',
    available: true,
    image: 'https://images.pexels.com/photos/8376293/pexels-photo-8376293.jpeg'
  },
  {
    id: '3',
    name: 'Dr. Neha Verma',
    specialization: 'Emergency Medicine Specialist',
    department: 'Emergency Care',
    category: 'Cardiologists',
    rating: 4.8,
    experience: 10,
    consultationFee: 70,
    originalFee: 900,
    hospital: 'Max Super Specialty Hospital, Lucknow',
    available: true,
    image: 'https://images.pexels.com/photos/8460095/pexels-photo-8460095.jpeg'
  },
  {
    id: '4',
    name: 'Dr. Arjun Mehta',
    specialization: 'Neurologist',
    department: 'Neurology',
    category: 'Neurologists', // updated
    rating: 4.7,
    experience: 15,
    consultationFee: 65,
    originalFee: 800,
    hospital: 'AIIMS, Delhi',
    available: true,
    image: 'https://images.pexels.com/photos/1170979/pexels-photo-1170979.jpeg'
  },
  {
    id: '5',
    name: 'Dr. Meera Iyer',
    specialization: 'Pediatrician',
    department: 'Pediatrics',
    category: 'Neurologists',
    rating: 4.5,
    experience: 6,
    consultationFee: 25,
    originalFee: 350,
    hospital: 'Rainbow Hospital, Hyderabad',
    available: true,
    image: 'https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg'
  },
  {
    id: '6',
    name: 'Dr. Vivek Chatterjee',
    specialization: 'Orthopedic Surgeon',
    department: 'Orthopedics',
    category: 'Orthopedists', // updated
    rating: 4.4,
    experience: 9,
    consultationFee: 55,
    originalFee: 700,
    hospital: 'Medanta Hospital, Gurugram',
    available: true,
    image: 'https://images.pexels.com/photos/8376316/pexels-photo-8376316.jpeg'
  },
  {
    id: '7',
    name: 'Dr. Kavita Das',
    specialization: 'Gynecologist',
    department: 'Obstetrics & Gynecology',
    category: 'Neurologists',
    rating: 4.6,
    experience: 11,
    consultationFee: 40,
    originalFee: 550,
    hospital: 'Cloudnine Hospital, Bangalore',
    available: true,
    image: 'https://images.pexels.com/photos/8460157/pexels-photo-8460157.jpeg'
  },
  {
    id: '8',
    name: 'Dr. Anuj Bansal',
    specialization: 'Trauma Specialist',
    department: 'Emergency & Trauma',
    category: 'Orthopedists',
    rating: 4.9,
    experience: 14,
    consultationFee: 80,
    originalFee: 950,
    hospital: 'Sir Ganga Ram Hospital, Delhi',
    available: true,
    image: 'https://images.pexels.com/photos/8460049/pexels-photo-8460049.jpeg'
  }
];



export const doctorCategories = [
  
  { id: 1, name: 'Orthopedists' },
  { id: 2, name: 'Cardiologists' },
  { id: 3, name: 'Dermatologists' },
  { id: 4, name: 'Neurologists' },

];


export const healthTests: HealthTest[] = [
  {
    id: '1',
    name: 'Complete Blood Count (CBC)',
    price: 400,
    originalPrice: 600,
    category: 'Blood Test',
    description: 'Comprehensive blood analysis including RBC, WBC, platelets',
    preparationRequired: false,
    reportTime: '4 hours',
    homeCollection: true,
    rating: 4.6,
    reviews: 234,
    image: 'https://images.pexels.com/photos/3683087/pexels-photo-3683087.jpeg'
  },
  {
    id: '2',
    name: 'Blood Sugar Test',
    price: 150,
    originalPrice: 200,
    category: 'Sugar',
    description: 'Fasting and post-meal blood glucose levels',
    preparationRequired: true,
    reportTime: '2 hours',
    homeCollection: true,
    rating: 4.4,
    reviews: 156,
    image: 'https://images.pexels.com/photos/3683087/pexels-photo-3683087.jpeg'
  },
  {
    id: '3',
    name: 'COVID-19 RT-PCR Test',
    price: 800,
    originalPrice: 1200,
    category: 'COVID',
    description: 'Gold standard COVID-19 detection test',
    preparationRequired: false,
    reportTime: '6 hours',
    homeCollection: true,
    rating: 4.7,
    reviews: 445,
    image: 'https://images.pexels.com/photos/3683087/pexels-photo-3683087.jpeg'
  }
];