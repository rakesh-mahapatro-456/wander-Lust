const sampleListings = [
  // --- North America ---
  {
    title: "Cozy Beachfront Cottage",
    description: "Escape to this charming beachfront cottage for a relaxing getaway.",
    image: { filename: "listing1", url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60" },
    price: 1500, location: "Malibu", country: "United States",
    reviews: [], geometry: { type: "Point", coordinates: [-118.7798, 34.0259] }, 
  },
  {
    title: "Modern Loft Downtown",
    description: "Stay in the heart of the city in this stylish loft apartment.",
    image: { filename: "listing2", url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60" },
    price: 1200, location: "New York City", country: "United States",
    reviews: [], geometry: { type: "Point", coordinates: [-74.0060, 40.7128] }, 
  },
  {
    title: "Mountain Retreat Cabin",
    description: "Peaceful cabin surrounded by mountains, perfect for a getaway.",
    image: { filename: "listing3", url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60" },
    price: 1000, location: "Aspen", country: "United States",
    reviews: [], geometry: { type: "Point", coordinates: [-106.8186, 39.1911] }, 
  },
  {
    title: "Secluded Treehouse",
    description: "Live among the treetops in this unique treehouse retreat.",
    image: { filename: "listing4", url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60" },
    price: 800, location: "Portland", country: "United States",
    reviews: [], geometry: { type: "Point", coordinates: [-122.6765, 45.5231] }, 
  },
  {
    title: "Lakefront Cabin",
    description: "Cozy cabin by the lake, perfect for fishing and kayaking.",
    image: { filename: "listing5", url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60" },
    price: 900, location: "Lake Tahoe", country: "United States",
    reviews: [], geometry: { type: "Point", coordinates: [-120.0433, 39.0968] }, 
  },
  {
    title: "Historic Brownstone",
    description: "Elegant historic brownstone in the heart of Boston.",
    image: { filename: "listing6", url: "https://images.unsplash.com/photo-1533619239233-6280475a633a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60" },
    price: 2200, location: "Boston", country: "United States",
    reviews: [], geometry: { type: "Point", coordinates: [-71.0589, 42.3601] }, 
  },
  {
    title: "Art Deco Apartment",
    description: "Glamorous 1920s-style apartment in Miami Beach.",
    image: { filename: "listing7", url: "https://plus.unsplash.com/premium_photo-1670963964797-942df1804579?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60" },
    price: 1600, location: "Miami", country: "United States",
    reviews: [], geometry: { type: "Point", coordinates: [-80.1918, 25.7617] }, 
  },
  {
    title: "Luxury Penthouse",
    description: "Penthouse with stunning city views in Los Angeles.",
    image: { filename: "listing8", url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60" },
    price: 3500, location: "Los Angeles", country: "United States",
    reviews: [], geometry: { type: "Point", coordinates: [-118.2437, 34.0522] }, 
  },

  // --- Europe ---
  {
    title: "Historic Villa in Tuscany",
    description: "Beautiful restored villa in Tuscany, Italy.",
    image: { filename: "listing9", url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60" },
    price: 2500, location: "Florence", country: "Italy",
    reviews: [], geometry: { type: "Point", coordinates: [11.2558, 43.7696] }, 
  },
  {
    title: "Historic Canal House",
    description: "Beautiful canal house in Amsterdam.",
    image: { filename: "listing10", url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60" },
    price: 1800, location: "Amsterdam", country: "Netherlands",
    reviews: [], geometry: { type: "Point", coordinates: [4.9041, 52.3676] }, 
  },
  
  {
    title: "Charming Cottage in the Cotswolds",
    description: "Quaint and charming cottage with a thatched roof.",
    image: { filename: "listing12", url: "https://images.unsplash.com/photo-1602088113235-229c19758e9f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60" },
    price: 1200, location: "Cotswolds", country: "United Kingdom",
    reviews: [], geometry: { type: "Point", coordinates: [-1.9836, 51.8336] }, 
  },
  {
    title: "Historic Castle in Scotland",
    description: "Live like royalty in this historic castle in the Highlands.",
    image: { filename: "listing13", url: "https://images.unsplash.com/photo-1585543805890-6051f7829f98?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60" },
    price: 4000, location: "Scottish Highlands", country: "United Kingdom",
    reviews: [], geometry: { type: "Point", coordinates: [-4.2026, 57.4708] }, 
  },

  // --- Asia ---
  {
    title: "Modern Apartment in Tokyo",
    description: "Centrally located modern apartment in Tokyo.",
    image: { filename: "listing14", url: "https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60" },
    price: 2000, location: "Tokyo", country: "Japan",
    reviews: [], geometry: { type: "Point", coordinates: [139.6917, 35.6895] }, 
  },
  {
    title: "Tropical Villa in Phuket",
    description: "Luxurious villa with private infinity pool in Phuket.",
    image: { filename: "listing15", url: "https://images.unsplash.com/photo-1470165301023-58dab8118cc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60" },
    price: 3000, location: "Phuket", country: "Thailand",
    reviews: [], geometry: { type: "Point", coordinates: [98.3963, 7.8804] }, 
  },
  {
    title: "Beachfront Villa in Bali",
    description: "Beautiful beachfront villa with private pool.",
    image: { filename: "listing16", url: "https://images.unsplash.com/photo-1602391833977-358a52198938?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60" },
    price: 1800, location: "Bali", country: "Indonesia",
    reviews: [], geometry: { type: "Point", coordinates: [115.1889, -8.4095] }, 
  },

  // --- Africa ---
  {
    title: "Safari Lodge in Serengeti",
    description: "Comfortable lodge for wildlife viewing in Serengeti.",
    image: { filename: "listing17", url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60" },
    price: 4000, location: "Serengeti National Park", country: "Tanzania",
    reviews: [], geometry: { type: "Point", coordinates: [34.6857, -2.3333] }, 
  },
  {
    title: "Eco-Friendly Treehouse",
    description: "Stay in a treehouse nestled in the forest of Costa Rica.",
    image: { filename: "listing18", url: "https://images.unsplash.com/photo-1488462237308-ecaa28b729d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60" },
    price: 750, location: "Costa Rica", country: "Costa Rica",
    reviews: [], geometry: { type: "Point", coordinates: [-83.7534, 9.7489] }, 
  },

  // --- Oceania ---
  {
    title: "Private Island Retreat",
    description: "Entire island for a truly exclusive vacation experience.",
    image: { filename: "listing19", url: "https://images.unsplash.com/photo-1618140052121-39fc6db33972?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60" },
    price: 10000, location: "Fiji", country: "Fiji",
    reviews: [], geometry: { type: "Point", coordinates: [178.0650, -17.7134] }, 
  },
  {
    title: "Luxury Villa in the Maldives",
    description: "Overwater villa with stunning views of the Indian Ocean.",
    image: { filename: "listing20", url: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60" },
    price: 6000, location: "Maldives", country: "Maldives",
    reviews: [], geometry: { type: "Point", coordinates: [73.2207, 3.2028] }, 
  },

  // --- Add more listings to reach 50+ ---
    // --- North America ---
    {
      title: "Ski-In/Ski-Out Chalet",
      description: "Hit the slopes right from your doorstep in the Swiss Alps.",
      image: { filename: "listing21", url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60" },
      price: 3000, location: "Verbier", country: "Switzerland",
      reviews: [], geometry: { type: "Point", coordinates: [7.2261, 46.0963] }, 
    },
    {
      title: "Desert Oasis in Dubai",
      description: "Opulent oasis in Dubai with a private pool.",
      image: { filename: "listing22", url: "https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60" },
      price: 5000, location: "Dubai", country: "United Arab Emirates",
      reviews: [], geometry: { type: "Point", coordinates: [55.2708, 25.2048] }, 
    },
    {
      title: "Rustic Log Cabin",
      description: "Cozy log cabin surrounded by Montana's nature.",
      image: { filename: "listing23", url: "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60" },
      price: 1100, location: "Montana", country: "United States",
      reviews: [], geometry: { type: "Point", coordinates: [-110.3626, 46.8797] }, 
    },
    {
      title: "Beachfront Paradise Condo",
      description: "Step out of your door onto the sandy beach.",
      image: { filename: "listing24", url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60" },
      price: 2000, location: "Cancun", country: "Mexico",
      reviews: [], geometry: { type: "Point", coordinates: [-86.8515, 21.1619] }, 
    },
    {
      title: "Rustic Cabin by the Lake",
      description: "Perfect for outdoor enthusiasts and relaxation.",
      image: { filename: "listing25", url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60" },
      price: 950, location: "Lake Placid", country: "United States",
      reviews: [], geometry: { type: "Point", coordinates: [-73.9772, 44.2794] }, 
    },
];

module.exports = { data: sampleListings };