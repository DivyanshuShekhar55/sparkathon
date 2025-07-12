import React, { useState } from 'react';
import { Search, ShoppingCart, Heart, ChevronRight, Star } from 'lucide-react';

const WalmartHomepage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const deals = [
    {
      id: 1,
      image: "/api/placeholder/200/200",
      title: "Rock & Republic Women's Denim Rx Fever Pull On Jegging",
      currentPrice: "$34.79",
      originalPrice: "$59.98",
      priceRange: "Options from $34.79 - $83.23",
      isDeal: true
    },
    {
      id: 2,
      image: "/api/placeholder/200/200",
      title: "Hanes Essentials Men's Short Sleeve T-Shirt, up to Sizes 3XL",
      currentPrice: "$3.54",
      originalPrice: "$10.00",
      priceRange: "Options from $3.54 - $11.19",
      isDeal: true
    },
    {
      id: 3,
      image: "/api/placeholder/200/200",
      title: "(4 pack) Black Rifle Coffee Company Just Black Keurig K-Cup",
      currentPrice: "$44.72",
      originalPrice: "$63.88",
      priceRange: "More options from $8.97",
      isDeal: true
    },
    {
      id: 4,
      image: "/api/placeholder/200/200",
      title: "Rhino USA Heavy Duty 1\" x 10' Retractable Ratchet Straps",
      currentPrice: "$34.50",
      originalPrice: "$49.90",
      priceRange: "Options from $34.50 - $68.31",
      isDeal: true
    },
    {
      id: 5,
      image: "/api/placeholder/200/200",
      title: "Better Homes & Gardens Mira Swivel Accent Chair, Cream",
      currentPrice: "$148.00",
      originalPrice: "$248.00",
      priceRange: "Options from $148.00 - $266.00",
      isDeal: true
    },
    {
      id: 6,
      image: "/api/placeholder/200/200",
      title: "Nestl Queen Sheets Set, 1800 Series 4 Piece Deep Pocket",
      currentPrice: "$17.49",
      originalPrice: "$69.99",
      priceRange: "Options from $17.49 - $29.99",
      isDeal: true
    }
  ];

  const categories = [
    "Get it Fast", "New Arrivals", "Deals", "Dinner Made Easy", "Pharmacy Delivery", 
    "Trending", "Back to School", "My Items", "Auto Service", "Only at Walmart", 
    "Registry", "Walmart+"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-blue-600 text-white">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Logo and Location */}
            <div className="flex items-center space-x-4">
              <div className="text-2xl font-bold text-yellow-400">*</div>
              <div className="flex items-center space-x-2 bg-blue-700 rounded-full px-3 py-1">
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                </div>
                <div className="text-sm">
                  <div className="font-semibold">Pickup or delivery?</div>
                  <div className="text-xs">Sacramento, 95829 • Sacramento Supe...</div>
                </div>
              </div>
            </div>

            {/* Search Bar */}
            <div className="flex-1 max-w-2xl mx-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search everything at Walmart online and in store"
                  className="w-full px-4 py-2 rounded-full text-gray-800 pl-4 pr-12"
                />
                <Search className="absolute right-4 top-2.5 h-5 w-5 text-gray-600" />
              </div>
            </div>

            {/* Right Side */}
            <div className="flex items-center space-x-6">
              <div className="text-sm">
                <div>Reorder</div>
                <div className="font-semibold">My Items</div>
              </div>
              <div className="text-sm">
                <div>Sign in</div>
                <div className="font-semibold">Account</div>
              </div>
              <div className="relative">
                <ShoppingCart className="h-6 w-6" />
                <span className="absolute -top-2 -right-2 bg-yellow-500 text-black rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                  0
                </span>
                <div className="text-xs mt-1">$0.00</div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="bg-white text-gray-800 border-b">
          <div className="container mx-auto px-4">
            <div className="flex items-center space-x-8 py-2">
              <div className="flex items-center space-x-2 font-semibold">
                <div className="w-4 h-4 bg-gray-400"></div>
                <span>Departments</span>
              </div>
              <div className="flex items-center space-x-2 font-semibold">
                <div className="w-4 h-4 bg-gray-400"></div>
                <span>Services</span>
              </div>
              {categories.map((category, index) => (
                <div key={index} className="text-sm hover:text-blue-600 cursor-pointer">
                  {category}
                </div>
              ))}
            </div>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6">
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
          {/* Left Column - Beauty & Sports */}
          <div className="space-y-6">
            <div className="bg-cyan-200 rounded-lg p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-2">WOW-worthy beauty Deals</h2>
              <button className="text-blue-600 font-semibold underline mb-4">Shop Deals</button>
              <img src="/api/placeholder/150/150" alt="Beauty Product" className="w-full" />
            </div>
            <div className="bg-cyan-200 rounded-lg p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-2">Huge savings on sporting goods</h2>
              <button className="text-blue-600 font-semibold underline mb-4">Shop Deals</button>
              <img src="/api/placeholder/150/150" alt="Sports Equipment" className="w-full" />
            </div>
          </div>

          {/* Center - Main Promotion */}
          <div className="lg:col-span-2">
            <div className="bg-yellow-400 rounded-lg p-8 relative overflow-hidden h-full">
              <div className="relative z-10">
                <div className="text-lg font-semibold mb-2">Save big now!</div>
                <h1 className="text-4xl font-bold text-gray-800 mb-4">
                  Get a year of Walmart+ for only $49
                </h1>
                <button className="bg-white text-gray-800 px-6 py-2 rounded-full font-semibold hover:bg-gray-100">
                  Claim offer
                </button>
              </div>
              <div className="absolute right-0 top-0 w-80 h-full">
                <div className="bg-white rounded-lg shadow-lg p-6 mt-8 mr-8 transform rotate-12">
                  <div className="text-6xl font-bold text-blue-600">50%</div>
                  <div className="text-blue-600 font-semibold">off</div>
                  <div className="text-blue-600 text-sm">annual membership</div>
                </div>
              </div>
              <div className="absolute top-4 right-4">
                <div className="text-yellow-500 text-4xl">✨</div>
              </div>
            </div>
          </div>

          {/* Right Column - TVs & Food */}
          <div className="space-y-6">
            <div className="bg-cyan-200 rounded-lg p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-2">TVs up to 25% off</h2>
              <button className="text-blue-600 font-semibold underline mb-4">Shop Deals</button>
              <img src="/api/placeholder/150/100" alt="TV" className="w-full" />
            </div>
            <div className="bg-cyan-200 rounded-lg p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-2">Up to 30% off food & beverages</h2>
              <button className="text-blue-600 font-semibold underline mb-4">Shop Deals</button>
              <img src="/api/placeholder/150/150" alt="Food Products" className="w-full" />
            </div>
            <div className="bg-cyan-200 rounded-lg p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-2">Resold at Walmart: up to 20% off</h2>
            </div>
          </div>
        </div>

        {/* Bottom Banner Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-blue-400 rounded-lg p-6 text-white">
            <h3 className="text-lg font-bold mb-2">Decor up to 30% off</h3>
            <button className="text-white underline">Shop Deals</button>
            <img src="/api/placeholder/100/100" alt="Decor" className="w-20 h-20 mt-4" />
          </div>
          <div className="bg-yellow-200 rounded-lg p-6">
            <h3 className="text-lg font-bold mb-2">Up to 40% off</h3>
            <button className="text-blue-600 underline">Shop now</button>
            <img src="/api/placeholder/100/80" alt="Electronics" className="w-full mt-4" />
          </div>
          <div className="bg-cyan-200 rounded-lg p-6">
            <h3 className="text-lg font-bold mb-2">Up to 30% off food & beverages</h3>
            <button className="text-blue-600 underline">Shop Deals</button>
          </div>
        </div>

        {/* Shop Deals Section */}
        <section className="mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Shop Deals</h2>
            <button className="text-blue-600 font-semibold underline">View all</button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
            {deals.map((deal) => (
              <div key={deal.id} className="bg-white border rounded-lg p-4 hover:shadow-lg transition-shadow">
                {deal.isDeal && (
                  <div className="bg-blue-800 text-white px-2 py-1 rounded text-xs font-semibold mb-2 inline-block">
                    Deal
                  </div>
                )}
                <div className="relative mb-4">
                  <img src={deal.image} alt={deal.title} className="w-full h-40 object-cover rounded" />
                  <button className="absolute top-2 right-2 p-1 bg-white rounded-full shadow">
                    <Heart className="h-4 w-4 text-gray-600" />
                  </button>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-green-600 font-bold">Now {deal.currentPrice}</span>
                    <span className="text-gray-500 line-through text-sm">{deal.originalPrice}</span>
                  </div>
                  <div className="text-xs text-gray-600">{deal.priceRange}</div>
                  <h3 className="text-sm font-medium text-gray-800 line-clamp-3">{deal.title}</h3>
                  <button className="w-full bg-blue-600 text-white py-2 rounded font-semibold hover:bg-blue-700 transition-colors">
                    Options
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Top 100 Deals Section */}
        <section>
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-800">Top 100 Deals</h2>
              <p className="text-gray-600">The ultimate edit of can't-miss prices</p>
            </div>
            <button className="text-blue-600 font-semibold underline">View all</button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default WalmartHomepage;