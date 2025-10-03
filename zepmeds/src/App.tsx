import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import Home from './pages/Home';
import MedicineListing from './pages/MedicineListing';
import Tests from './pages/Tests';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Profile from './pages/Profile';
import LoadingScreen from './components/LoadingScreen';
import { AboutPage } from './pages/About';
import DoctorsListing from './pages/DoctorListing';
import Pharmacists from './pages/Pharmacists';
import InvestorsPage from "./pages/InvestorsPage"
import ScrollToTop from './components/routeRelated/ScrollToTop';
import MedicineDetailPage from './pages/MedicineDetailsPage';
import MedicineList from './pages/MedicineList';
function App() {
  const [isLoading, setIsLoading] = useState(true);
  // set true in isLoading to add animation.. 
  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (

    <div className="App">
      {isLoading ? (
        <LoadingScreen onComplete={handleLoadingComplete} />
      ) : (
        <ThemeProvider>
            <Router>
              <ScrollToTop/>
                <div className="flex flex-col min-h-screen">
                  <Navbar />
                  <main className="flex-1">
                    <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/medicines" element={<MedicineListing />} />
                      <Route path="/doctors" element={<DoctorsListing />} />
                      <Route path="/pharmacist" element={<Pharmacists />} />
                      <Route path="/tests" element={<Tests />} />
                      <Route path="/about" element={<AboutPage />} />
                      <Route path="/medicine/:id" element={<ProductDetail />} />
                      <Route path="/test/:id" element={<ProductDetail />} />
                      <Route path="/cart" element={<Cart />} />
                      <Route path="/checkout" element={<Checkout />} />
                      <Route path="/profile" element={<Profile />} />
                      <Route path="/investorspage" element={<InvestorsPage />} />
                      <Route path="/medicines" element={<MedicineList />} />
                      <Route path="/medicine/detail/:id" element={<MedicineDetailPage />} />
                    </Routes>
                  </main>
                  <Footer />
                </div>
            </Router>
        </ThemeProvider>
      )}
    </div>
  );
}

export default App;