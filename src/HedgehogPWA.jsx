import React, { useState, useEffect } from 'react'; // Added useEffect
import { Moon, Sun, Menu, X, Phone, Heart, Info, Home, DollarSign, MessageCircle, HelpCircle, AlertTriangle } from 'lucide-react';

const HedgehogPWA = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');
  const [isDonateModalOpen, setIsDonateModalOpen] = useState(false); // State for modal

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const navigateTo = (page) => {
    setCurrentPage(page);
    setMenuOpen(false);
  };

  // Main app container with conditional dark mode class
  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md`}>
        <div className="flex items-center justify-between px-4 py-3">
          <button 
            onClick={toggleMenu} 
            className="p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-green-600"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          
          <h1 className="text-lg font-bold text-green-600">Hartford Hedgehog Rescue</h1>
          
          <button 
            onClick={toggleDarkMode} 
            className="p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-green-600"
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </header>

      {/* Mobile Nav Menu Overlay */}
      {menuOpen && (
        <div className={`fixed inset-0 z-40 pt-16 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
          <nav className="p-4">
            <ul className="space-y-4">
              <li>
                <button 
                  onClick={() => navigateTo('home')}
                  className={`flex items-center w-full p-3 rounded-lg ${currentPage === 'home' ? 'bg-green-600 text-white' : 'hover:bg-green-100 dark:hover:bg-gray-800'}`}
                >
                  <Home size={20} className="mr-3" />
                  <span className="text-lg">Home</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigateTo('emergency')}
                  className={`flex items-center w-full p-3 rounded-lg ${currentPage === 'emergency' ? 'bg-green-600 text-white' : 'hover:bg-green-100 dark:hover:bg-gray-800'}`}
                >
                  <AlertTriangle size={20} className="mr-3" />
                  <span className="text-lg">Emergency Help</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigateTo('about')}
                  className={`flex items-center w-full p-3 rounded-lg ${currentPage === 'about' ? 'bg-green-600 text-white' : 'hover:bg-green-100 dark:hover:bg-gray-800'}`}
                >
                  <Info size={20} className="mr-3" />
                  <span className="text-lg">About Us</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigateTo('donate')}
                  className={`flex items-center w-full p-3 rounded-lg ${currentPage === 'donate' ? 'bg-green-600 text-white' : 'hover:bg-green-100 dark:hover:bg-gray-800'}`}
                >
                  <Heart size={20} className="mr-3" />
                  <span className="text-lg">Donate</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigateTo('help')}
                  className={`flex items-center w-full p-3 rounded-lg ${currentPage === 'help' ? 'bg-green-600 text-white' : 'hover:bg-green-100 dark:hover:bg-gray-800'}`}
                >
                  <HelpCircle size={20} className="mr-3" />
                  <span className="text-lg">Hedgehog Help</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigateTo('contact')}
                  className={`flex items-center w-full p-3 rounded-lg ${currentPage === 'contact' ? 'bg-green-600 text-white' : 'hover:bg-green-100 dark:hover:bg-gray-800'}`}
                >
                  <MessageCircle size={20} className="mr-3" />
                  <span className="text-lg">Contact</span>
                </button>
              </li>
            </ul>
          </nav>
        </div>
      )}

      {/* Page Content */}
      <main className="pt-16 pb-20">
        {currentPage === 'home' && <HomePage darkMode={darkMode} navigateTo={navigateTo} />}
        {currentPage === 'emergency' && <EmergencyPage darkMode={darkMode} />}
        {currentPage === 'about' && <AboutPage darkMode={darkMode} />}
        {currentPage === 'donate' && <DonatePage darkMode={darkMode} />}
        {currentPage === 'help' && <HelpInfoPage darkMode={darkMode} />}
        {currentPage === 'contact' && <ContactPage darkMode={darkMode} />}
      </main>

      {/* Footer Action Bar */}
      <footer className={`fixed bottom-0 left-0 right-0 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
        <div className="flex justify-around items-center px-2 py-3">
          <a 
            href="tel:07782398235" 
            className="flex flex-col items-center p-2 text-green-600"
            aria-label="Call for emergency help"
          >
            <Phone size={24} />
            <span className="text-xs mt-1">Call Us</span>
          </a>
          
          <button 
            onClick={() => navigateTo('home')}
            className={`flex flex-col items-center p-2 ${currentPage === 'home' ? 'text-green-600' : 'text-gray-500'}`}
            aria-label="Go to homepage"
          >
            <Home size={24} />
            <span className="text-xs mt-1">Home</span>
          </button>
          
          <button 
            onClick={() => setIsDonateModalOpen(true)} // Open modal instead of navigating
            className={`flex flex-col items-center p-2 text-gray-500 hover:text-green-600`} // Simplified class, always gray unless hovered
            aria-label="Open donation modal"
          >
            <Heart size={24} />
            <span className="text-xs mt-1">Donate</span>
          </button>
          
          <button 
            onClick={() => navigateTo('emergency')}
            className={`flex flex-col items-center p-2 ${currentPage === 'emergency' ? 'text-green-600' : 'text-gray-500'}`}
            aria-label="Get emergency help"
          >
            <AlertTriangle size={24} />
            <span className="text-xs mt-1">Emergency</span>
          </button>
        </div>
      </footer>

      {/* Donate Modal */}
      <DonateModal
        isOpen={isDonateModalOpen}
        onClose={() => setIsDonateModalOpen(false)}
        darkMode={darkMode}
      />
    </div>
  );
};

// --- Donate Modal Component ---
const DonateModal = ({ isOpen, onClose, darkMode }) => {
  const [selectedAmount, setSelectedAmount] = useState(10);
  const [customAmount, setCustomAmount] = useState('');
  const [isCustom, setIsCustom] = useState(false);

  useEffect(() => {
    // Reset state when modal opens/closes
    if (isOpen) {
      setSelectedAmount(10);
      setCustomAmount('');
      setIsCustom(false);
    }
  }, [isOpen]);

  const handleAmountClick = (amount) => {
    setSelectedAmount(amount);
    setCustomAmount('');
    setIsCustom(false);
  };

  const handleCustomClick = () => {
    setIsCustom(true);
    setSelectedAmount(null); // Deselect predefined amounts
  };

  const handleCustomChange = (e) => {
    const value = e.target.value;
    // Allow only numbers and limit length for safety
    if (/^\d*$/.test(value) && value.length <= 6) {
      setCustomAmount(value);
    }
  };

  const finalAmount = isCustom ? customAmount : selectedAmount;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-end justify-center transition-opacity duration-300 ease-out ${
        isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      onClick={onClose} // Close on overlay click
      aria-modal="true"
      role="dialog"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Modal Content */}
      <div
        className={`relative w-full max-w-md p-5 rounded-t-2xl shadow-xl transform transition-transform duration-300 ease-out ${
          darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
        } ${isOpen ? 'translate-y-0' : 'translate-y-full'}`}
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className={`absolute top-3 right-3 p-1 rounded-full ${darkMode ? 'text-gray-400 hover:bg-gray-700' : 'text-gray-500 hover:bg-gray-200'} focus:outline-none focus:ring-2 focus:ring-green-500`}
          aria-label="Close donation modal"
        >
          <X size={20} />
        </button>

        <h2 className="text-xl font-bold text-green-600 mb-3 text-center">Support Our Hedgehogs</h2>
        <p className={`mb-5 text-center text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          Your donation helps us provide food, shelter, and vital medical care for injured and orphaned hedgehogs.
        </p>

        {/* Donation Amount Selection */}
        <div className="mb-5">
          <h3 className={`font-medium mb-2 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Choose an amount:</h3>
          <div className="grid grid-cols-3 gap-2 mb-3">
            {[10, 25, 50].map((amount) => (
              <button
                key={amount}
                onClick={() => handleAmountClick(amount)}
                className={`py-2.5 rounded-lg font-semibold text-sm transition-colors ${
                  !isCustom && selectedAmount === amount
                    ? 'bg-green-600 text-white ring-2 ring-green-400'
                    : `${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'}`
                } focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-1 ${darkMode ? 'focus:ring-offset-gray-800' : 'focus:ring-offset-white'}`}
              >
                £{amount}
              </button>
            ))}
          </div>
          
          {/* Custom Amount */}
          <button
            onClick={handleCustomClick}
            className={`w-full py-2.5 rounded-lg font-semibold text-sm mb-3 transition-colors ${
              isCustom
                ? 'bg-green-600 text-white ring-2 ring-green-400'
                : `${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'}`
            } focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-1 ${darkMode ? 'focus:ring-offset-gray-800' : 'focus:ring-offset-white'}`}
          >
            Enter Custom Amount
          </button>

          {isCustom && (
            <div className="relative">
              <span className={`absolute inset-y-0 left-3 flex items-center text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>£</span>
              <input
                type="number"
                id="custom-donation-amount"
                value={customAmount}
                onChange={handleCustomChange}
                className={`block w-full rounded-lg pl-8 pr-4 py-2.5 text-sm border ${
                  darkMode
                    ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400'
                    : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                } focus:ring-green-500 focus:border-green-500`}
                placeholder="e.g., 5"
                min="1"
                step="1"
                aria-label="Custom donation amount in pounds"
              />
            </div>
          )}
        </div>

        {/* Payment Method Buttons */}
        <div className="space-y-3">
           <p className={`text-center text-xs mb-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
             Selected amount: £{finalAmount || '0'}
           </p>
          <button
            disabled={!finalAmount || finalAmount <= 0}
            className={`flex items-center justify-center w-full py-3 px-4 text-white font-bold rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors ${
              !finalAmount || finalAmount <= 0
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-blue-600 hover:bg-blue-700 focus:ring-blue-500'
            } ${darkMode ? 'focus:ring-offset-gray-800' : 'focus:ring-offset-white'}`}
            aria-label={`Donate £${finalAmount || 0} with PayPal`}
          >
            <DollarSign size={18} className="mr-1.5" /> Donate £{finalAmount || '0'} with PayPal
          </button>
          
          <button
            disabled={!finalAmount || finalAmount <= 0}
            className={`flex items-center justify-center w-full py-3 px-4 text-white font-bold rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors ${
              !finalAmount || finalAmount <= 0
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-green-600 hover:bg-green-700 focus:ring-green-500'
            } ${darkMode ? 'focus:ring-offset-gray-800' : 'focus:ring-offset-white'}`}
             aria-label={`Donate £${finalAmount || 0} with Card`}
         >
            <DollarSign size={18} className="mr-1.5" /> Donate £{finalAmount || '0'} with Card
          </button>
        </div>
      </div>
    </div>
  );
};


// HOME PAGE
const HomePage = ({ darkMode, navigateTo }) => {
  return (
    <div className="px-4 py-6">
      <div className={`rounded-xl overflow-hidden shadow-lg mb-6 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <img 
          src={process.env.PUBLIC_URL + "/images/main-image.jpeg"}
          alt="Cute hedgehog"
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h2 className="text-xl font-bold text-green-600 mb-2">Welcome to Hartford Hedgehog Rescue</h2>
          <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Est. 2016, and based in Alconbury Weald, Cambs. We rescue and rehabilitate hedgehogs in need.
          </p>
          <button 
            onClick={() => navigateTo('about')}
            className="text-green-600 font-semibold hover:underline focus:outline-none focus:ring-2 focus:ring-green-600 rounded-lg px-2 py-1"
            aria-label="Learn more about our rescue"
          >
            Learn more →
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 mb-6">
        <button
          onClick={() => navigateTo('emergency')}
          className="flex items-center p-4 rounded-xl bg-red-100 border border-red-200 hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-red-500"
          aria-label="Emergency hedgehog help"
        >
          <div className="bg-red-500 p-3 rounded-full mr-4">
            <AlertTriangle size={24} color="white" />
          </div>
          <div className="text-left">
            <h3 className="font-bold text-red-900">Found a hedgehog in trouble?</h3>
            <p className="text-red-700 text-sm">Get emergency help now</p>
          </div>
        </button>

        <button
          onClick={() => navigateTo('donate')}
          className={`flex items-center p-4 rounded-xl ${darkMode ? 'bg-green-900' : 'bg-green-100'} border ${darkMode ? 'border-green-800' : 'border-green-200'} hover:bg-green-200 focus:outline-none focus:ring-2 focus:ring-green-500`}
          aria-label="Make a donation"
        >
          <div className="bg-green-600 p-3 rounded-full mr-4">
            <Heart size={24} color="white" />
          </div>
          <div className="text-left">
            <h3 className={`font-bold ${darkMode ? 'text-green-300' : 'text-green-900'}`}>Support our work</h3>
            <p className={`text-sm ${darkMode ? 'text-green-400' : 'text-green-700'}`}>Make a donation</p>
          </div>
        </button>
      </div>

      <div className={`p-4 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md mb-6`}>
        <h2 className="text-xl font-bold text-green-600 mb-3">Recently Rescued</h2>
        <div className="flex overflow-x-auto space-x-4 pb-2">
          <div className="flex-none w-32">
            <img src={process.env.PUBLIC_URL + "/images/hedgehog1.jpeg"} alt="Rescued hedgehog Spike" className="w-full h-32 rounded-lg object-cover" />
            <p className="text-center text-sm mt-1">Spike</p>
          </div>
          <div className="flex-none w-32">
            <img src={process.env.PUBLIC_URL + "/images/hedgehog2.jpeg"} alt="Rescued hedgehog Holly" className="w-full h-32 rounded-lg object-cover" />
            <p className="text-center text-sm mt-1">Holly</p>
          </div>
          <div className="flex-none w-32">
            <img src={process.env.PUBLIC_URL + "/images/hedgehog3.jpeg"} alt="Rescued hedgehog Prickles" className="w-full h-32 rounded-lg object-cover" />
            <p className="text-center text-sm mt-1">Prickles</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// EMERGENCY PAGE
const EmergencyPage = ({ darkMode }) => {
  return (
    <div className="px-4 py-6">
      <div className={`p-4 rounded-xl ${darkMode ? 'bg-red-900' : 'bg-red-100'} border ${darkMode ? 'border-red-800' : 'border-red-200'} mb-6`}>
        <h2 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-red-800'} flex items-center`}>
          <AlertTriangle className="mr-2" /> Emergency Contact
        </h2>
        <p className={`my-3 ${darkMode ? 'text-red-100' : 'text-red-800'}`}>
          If you've found a hedgehog that needs help, please call immediately:
        </p>
        <a 
          href="tel:07782398235" 
          className="flex items-center justify-center w-full py-3 px-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
        >
          <Phone className="mr-2" /> 07782 398235
        </a>
        <p className={`text-sm ${darkMode ? 'text-red-200' : 'text-red-700'}`}>
          If no answer, please leave a voicemail with your contact details. 
          Don't message or text as these may not be seen in time.
        </p>
      </div>

      <div className={`p-4 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md mb-6`}>
        <h2 className="text-xl font-bold text-green-600 mb-3">When to call for help</h2>
        <ul className="space-y-3">
          {[
            "Hedgehog out during daylight hours",
            "Hedgehog that looks injured or sick",
            "Baby hedgehogs without a mother",
            "Hedgehog caught in netting or trap",
            "Hedgehog making unusual noises",
            "Hedgehog that appears lethargic"
          ].map((item, index) => (
            <li key={index} className="flex items-start">
              <span className="text-red-500 mr-2">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className={`p-4 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md mb-6`}>
        <h2 className="text-xl font-bold text-green-600 mb-3">While you wait</h2>
        <ol className="space-y-4">
          <li className="flex">
            <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2 flex-shrink-0">1</span>
            <p>Place the hedgehog in a high-sided box with a towel or fleece.</p>
          </li>
          <li className="flex">
            <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2 flex-shrink-0">2</span>
            <p>Provide a shallow dish of water (no milk).</p>
          </li>
          <li className="flex">
            <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2 flex-shrink-0">3</span>
            <p>Keep in a quiet, warm place away from pets.</p>
          </li>
          <li className="flex">
            <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2 flex-shrink-0">4</span>
            <p>You can offer cat/dog food if available (no bread or milk).</p>
          </li>
        </ol>
      </div>
    </div>
  );
};

// ABOUT PAGE
const AboutPage = ({ darkMode }) => {
  return (
    <div className="px-4 py-6">
      <div className={`p-4 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md mb-6`}>
        <h2 className="text-xl font-bold text-green-600 mb-3">About Hartford Hedgehog Rescue</h2>
        <img 
          src={process.env.PUBLIC_URL + "/images/hedgehog1.jpeg"}
          alt="Hartford Hedgehog Rescue" 
          className="w-full h-48 object-cover rounded-lg mb-4"
        />
        <div className="space-y-3">
          <p>Est. 2016, and based in Alconbury Weald, Cambs, Hartford Hedgehog Rescue started due to a love of wildlife and not knowing what to do with the baby hedgehogs coming into our garden in late Autumn.</p>
          <p>I was lucky to find two local rescues who helped guide me in the early days, and wanting to be more hands on I completed a course at Vale Wildlife to learn the basics.</p>
        </div>
      </div>

      <div className={`p-4 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md mb-6`}>
        <h2 className="text-xl font-bold text-green-600 mb-3">Our Expertise</h2>
        <p className="mb-3">Since then I have gained experience and completed training in treating the following issues:</p>
        <ul className="space-y-2">
          {[
            "Identifying and treating a variety of parasites",
            "Hand rearing hoglets",
            "Fluid therapy for dehydration",
            "Respiratory issues",
            "Hypothermia",
            "Wound treatment"
          ].map((skill, index) => (
            <li key={index} className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span>{skill}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className={`p-4 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md mb-6`}>
        <h2 className="text-xl font-bold text-green-600 mb-3">Our Team</h2>
        <p className="mb-3">I have a fantastic relationship with Cromwells veterinary group who assist with x-rays, scans and sedation.</p>
        <p className="mb-3">I have learned so much since I started, and have met some amazing people, some of whom have got involved as carers, rehabilitaters or in an overwintering role.</p>
        <p>It's wonderful to be part of a local team of like-minded people.</p>
        <p className="mt-4 font-medium">- Suzanne x</p>
      </div>
    </div>
  );
};

// DONATE PAGE
const DonatePage = ({ darkMode }) => {
  const [donationAmount, setDonationAmount] = useState(10);
  const [customAmount, setCustomAmount] = useState(false);
  
  const handleSetAmount = (amount) => {
    setDonationAmount(amount);
    setCustomAmount(false);
  };
  
  const handleCustomAmount = () => {
    setCustomAmount(true);
    setDonationAmount('');
  };
  
  return (
    <div className="px-4 py-6">
      <div className={`p-4 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md mb-6`}>
        <h2 className="text-xl font-bold text-green-600 mb-3">Support Our Rescue</h2>
        <p className="mb-4">Your donations help us rescue and rehabilitate hedgehogs in need. Every pound makes a difference!</p>
        
        <div className="mb-6">
          <h3 className="font-medium mb-2">Choose donation amount:</h3>
          <div className="grid grid-cols-3 gap-2 mb-3">
            {[5, 10, 20].map((amount) => (
              <button
                key={amount}
                onClick={() => handleSetAmount(amount)}
                className={`py-2 rounded-lg font-medium ${
                  donationAmount === amount && !customAmount 
                    ? 'bg-green-600 text-white' 
                    : `${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'}`
                } focus:outline-none focus:ring-2 focus:ring-green-500`}
              >
                £{amount}
              </button>
            ))}
          </div>
          
          <div className="mb-4">
            <button
              onClick={handleCustomAmount}
              className={`w-full py-2 rounded-lg font-medium ${
                customAmount 
                  ? 'bg-green-600 text-white' 
                  : `${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'}`
              } focus:outline-none focus:ring-2 focus:ring-green-500`}
            >
              Custom Amount
            </button>
          </div>
          
          {customAmount && (
            <div className="mb-4">
              <label htmlFor="custom-amount" className="sr-only">Enter custom amount</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <span className="text-gray-500">£</span>
                </div>
                <input
                  type="number"
                  id="custom-amount"
                  value={donationAmount}
                  onChange={(e) => setDonationAmount(e.target.value)}
                  className={`block w-full rounded-lg pl-8 pr-4 py-2.5 ${
                    darkMode 
                      ? 'bg-gray-700 border-gray-600 text-white' 
                      : 'bg-white border-gray-300 text-gray-900'
                  } border focus:ring-green-500 focus:border-green-500`}
                  placeholder="Enter amount"
                  min="1"
                  step="1"
                />
              </div>
            </div>
          )}
        </div>
        
        <div className="space-y-3 mb-6">
          <a
            href="#paypal"
            className="flex items-center justify-center w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            <DollarSign className="mr-2" /> Donate with PayPal
          </a>
          
          <button
            className="flex items-center justify-center w-full py-3 px-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          >
            <DollarSign className="mr-2" /> Card Payment
          </button>
        </div>
        
        <div className={`p-3 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
          <h3 className="font-medium mb-2">What your donation provides:</h3>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-green-500 mr-2">•</span>
              <span>£5 feeds a hedgehog for a week</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">•</span>
              <span>£10 provides medical supplies</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">•</span>
              <span>£20 supports a full rescue and rehabilitation</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className={`p-4 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md mb-6`}>
        <h2 className="text-xl font-bold text-green-600 mb-3">Other Ways to Help</h2>
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="text-green-500 mr-2">•</span>
            <span>Volunteer as a carer or rehabilitator</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2">•</span>
            <span>Donate supplies (fleece blankets, cat food, etc.)</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2">•</span>
            <span>Spread awareness on social media</span>
          </li>
        </ul>
        <button className="mt-4 text-green-600 font-medium hover:underline focus:outline-none focus:ring-2 focus:ring-green-500 rounded px-2 py-1">
          Contact us to learn more →
        </button>
      </div>
    </div>
  );
};

// HELP INFO PAGE
const HelpInfoPage = ({ darkMode }) => {
  return (
    <div className="px-4 py-6">
      <div className={`p-4 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md mb-6`}>
        <h2 className="text-xl font-bold text-green-600 mb-3">Hedgehog Help Guide</h2>
        <img 
          src={process.env.PUBLIC_URL + "/images/hedgehog2.jpeg"}
          alt="Hedgehog in nature" 
          className="w-full h-48 object-cover rounded-lg mb-4"
        />
        <p className="mb-3">Hedgehogs are nocturnal animals. If you see one out during the day, it likely needs help.</p>
      </div>
      
      <div className={`p-4 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md mb-6`}>
        <h2 className="text-xl font-bold text-green-600 mb-3">Signs a Hedgehog Needs Help</h2>
        <ul className="space-y-2">
          {[
            "Out during daylight (unless nest has been disturbed)",
            "Lying on its side, not moving but still alive",
            "Obviously injured or bleeding",
            "Trapped or caught in something",
            "Making sneezing/coughing sounds",
            "Seems wobbly, disoriented or circling",
            "Baby hedgehogs alone (hoglets)",
            "Fly eggs or maggots visible on the hedgehog"
          ].map((sign, index) => (
            <li key={index} className="flex items-start">
              <span className="text-red-500 mr-2">•</span>
              <span>{sign}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <div className={`p-4 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md mb-6`}>
        <h2 className="text-xl font-bold text-green-600 mb-3">How to Help a Hedgehog</h2>
        <ol className="space-y-4">
          <li className="flex">
            <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2 flex-shrink-0">1</span>
            <div>
              <p className="font-medium">Approach carefully</p>
              <p className="text-sm">Wear gloves if possible. Hedgehogs may carry fleas and other parasites.</p>
            </div>
          </li>
          <li className="flex">
            <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2 flex-shrink-0">2</span>
            <div>
              <p className="font-medium">Contain safely</p>
              <p className="text-sm">Place in a high-sided box with air holes and a towel or fleece for comfort.</p>
            </div>
          </li>
          <li className="flex">
            <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2 flex-shrink-0">3</span>
            <div>
              <p className="font-medium">Provide water</p>
              <p className="text-sm">Offer a shallow dish of water. Never give milk as it causes diarrhea.</p>
            </div>
          </li>
          <li className="flex">
            <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2 flex-shrink-0">4</span>
            <div>
              <p className="font-medium">Keep warm and quiet</p>
              <p className="text-sm">Place box in a warm, quiet area away from direct heat.</p>
            </div>
          </li>
          <li className="flex">
            <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2 flex-shrink-0">5</span>
            <div>
              <p className="font-medium">Call for help</p>
              <p className="text-sm">Contact us immediately at 07782 398235.</p>
            </div>
          </li>
        </ol>
      </div>
      
      <div className={`p-4 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md mb-6`}>
        <h2 className="text-xl font-bold text-green-600 mb-3">Make Your Garden Hedgehog-Friendly</h2>
        <ul className="space-y-2">
          {[
            "Create a hedgehog highway (13cm x 13cm hole in fences)",
            "Leave wild areas with leaves and logs for shelter",
            "Put out water in shallow dishes",
            "Avoid using slug pellets and pesticides",
            "Check areas before strimming or mowing",
            "Cover drains and deep holes",
            "Keep netting raised off the ground"
          ].map((tip, index) => (
            <li key={index} className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span>{tip}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// CONTACT PAGE
const ContactPage = ({ darkMode }) => {
  return (
    <div className="px-4 py-6">
      <div className={`p-4 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md mb-6`}>
        <h2 className="text-xl font-bold text-green-600 mb-3">Contact Us</h2>
        <p className="mb-4">Get in touch with Hartford Hedgehog Rescue for non-emergency inquiries.</p>
        
        <div className="space-y-4 mb-6">
          <div>
            <h3 className="font-medium mb-2">Phone (Emergencies only)</h3>
            <a 
              href="tel:07782398235" 
              className="flex items-center text-blue-600 hover:underline"
            >
              <Phone size={18} className="mr-2" /> 07782 398235
            </a>
            <p className="text-sm mt-1">Please call for emergencies rather than sending messages.</p>
          </div>
          
          <div>
            <h3 className="font-medium mb-2">Location</h3>
            <p>Alconbury Weald, Cambridgeshire, UK</p>
          </div>
          
          <div>
            <h3 className="font-medium mb-2">Social Media</h3>
            <a 
              href="https://www.facebook.com/hartfordhedgehogrescue" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Visit our Facebook Page
            </a>
          </div>
        </div>
      </div>
      
      <div className={`p-4 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md mb-6`}>
        <h2 className="text-xl font-bold text-green-600 mb-3">Send a Message</h2>
        <p className="mb-4 text-sm font-medium">For non-emergency inquiries only. For emergencies, please call directly.</p>
        
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block mb-1 font-medium">Your Name</label>
            <input 
              type="text" 
              id="name" 
              className={`w-full rounded-lg border ${
                darkMode 
                  ? 'bg-gray-700 border-gray-600 text-white' 
                  : 'bg-white border-gray-300 text-gray-900'
              } p-2.5 focus:ring-green-500 focus:border-green-500`}
              required
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block mb-1 font-medium">Email Address</label>
            <input 
              type="email" 
              id="email" 
              className={`w-full rounded-lg border ${
                darkMode 
                  ? 'bg-gray-700 border-gray-600 text-white' 
                  : 'bg-white border-gray-300 text-gray-900'
              } p-2.5 focus:ring-green-500 focus:border-green-500`}
              required
            />
          </div>
          
          <div>
            <label htmlFor="subject" className="block mb-1 font-medium">Subject</label>
            <select 
              id="subject" 
              className={`w-full rounded-lg border ${
                darkMode 
                  ? 'bg-gray-700 border-gray-600 text-white' 
                  : 'bg-white border-gray-300 text-gray-900'
              } p-2.5 focus:ring-green-500 focus:border-green-500`}
            >
              <option>General Question</option>
              <option>Volunteering</option>
              <option>Donation Query</option>
              <option>Hedgehog Advice</option>
              <option>Other</option>
            </select>
          </div>
          
          <div>
            <label htmlFor="message" className="block mb-1 font-medium">Your Message</label>
            <textarea 
              id="message" 
              rows="4" 
              className={`w-full rounded-lg border ${
                darkMode 
                  ? 'bg-gray-700 border-gray-600 text-white' 
                  : 'bg-white border-gray-300 text-gray-900'
              } p-2.5 focus:ring-green-500 focus:border-green-500`}
              required
            ></textarea>
          </div>
          
          <button 
            type="submit" 
            className="w-full py-3 px-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default HedgehogPWA;