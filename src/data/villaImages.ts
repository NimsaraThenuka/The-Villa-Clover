// Real Villa Clover images served locally from public/images/villa for ultra-fast instant loading

export const VILLA_IMAGES = {
  // Hero & Headers (Instant Local Loading)
  hero: '/images/villa/dsc08315-hdr.jpg', // Daytime Full Villa View
  aboutHeader: '/images/villa/dsc08686-hdr.jpg', // Rooftop Sun Terrace Day
  galleryHeader: '/images/villa/dsc09190-hdr.jpg', // Twilight Night View
  contactHeader: '/images/villa/dsc09223-hdr.jpg', // Evening Lit Villa
  reviewBg: '/images/villa/dsc09298-hdr.jpg', // Fairy Lit Rooftop

  // Featured sections
  introExterior: '/images/villa/dsc08276-hdr.jpg', // Villa Lawn & Veranda
  contactVillaCard: '/images/villa/dsc09193-hdr.jpg', // Night glowing villa
  locationCard: '/images/villa/dsc08392-hdr.jpg', // Garden swing & lake

  // Bedrooms
  bedroom1: '/images/villa/dsc09012.jpg', // Bedroom 1 with wardrobe
  bedroom1Close: '/images/villa/dsc09003.jpg', // Bedroom 1 bed
  bedroom2: '/images/villa/dsc08955.jpg', // Bedroom 2 with vanity desk
  bedroom2Angle: '/images/villa/dsc08949.jpg', // Bedroom 2 alternate

  // Living & Dining & Kitchen
  livingRoom: '/images/villa/dsc08764-hdr.jpg', // Full living room
  lounge: '/images/villa/dsc08770-hdr.jpg', // Sofa & art
  dining: '/images/villa/dsc08795-hdr.jpg', // Dining table
  kitchen: '/images/villa/dsc08932-hdr.jpg', // Kitchen
  bathroom: '/images/villa/dsc09094.jpg', // Modern bathroom

  // Garden & Outdoors
  gardenSwing: '/images/villa/dsc08392-hdr.jpg', // Garden swing & lake view
  gardenPath: '/images/villa/dsc08380-hdr.jpg', // Tropical garden path
  verandaPath: '/images/villa/dsc08321-hdr.jpg', // Veranda view
  frontPorch: '/images/villa/dsc08300-hdr.jpg', // Front porch
  nightGarden: '/images/villa/dsc09217-hdr.jpg', // Night garden
  rooftopDay: '/images/villa/dsc08686-hdr.jpg', // Rooftop terrace day
  rooftopNight: '/images/villa/dsc09298-hdr.jpg', // Rooftop terrace night
};

export interface GalleryPhoto {
  url: string;
  alt: string;
  category: 'Exterior' | 'Interior' | 'Garden' | 'Terrace' | 'Video';
  wide?: boolean;
  isVideo?: boolean;
  videoUrl?: string;
}

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    url: '/images/villa/dsc08315-hdr.jpg',
    videoUrl: 'https://drive.google.com/file/d/1n4O6iAmk777J9Q9Pwe1NkH3WGpKOeijt/preview',
    alt: 'The Villa Clover - Villa Video Tour',
    category: 'Video',
    isVideo: true,
  },
  {
    "url": "/images/villa/dsc08276-hdr.jpg",
    "alt": "Villa Clover Exterior & Entrance",
    "category": "Exterior",
    "wide": true
  },
  {
    "url": "/images/villa/dsc08279-hdr.jpg",
    "alt": "Villa Clover Exterior & Entrance",
    "category": "Exterior",
    "wide": true
  },
  {
    "url": "/images/villa/dsc08283-hdr.jpg",
    "alt": "Villa Clover Exterior & Entrance",
    "category": "Exterior",
    "wide": true
  },
  {
    "url": "/images/villa/dsc08291-hdr.jpg",
    "alt": "Villa Clover Exterior & Entrance",
    "category": "Exterior",
    "wide": true
  },
  {
    "url": "/images/villa/dsc08294-hdr.jpg",
    "alt": "Villa Clover Exterior & Entrance",
    "category": "Exterior",
    "wide": true
  },
  {
    "url": "/images/villa/dsc08297-hdr.jpg",
    "alt": "Villa Clover Exterior & Entrance",
    "category": "Exterior",
    "wide": true
  },
  {
    "url": "/images/villa/dsc08300-hdr.jpg",
    "alt": "Villa Clover Exterior & Entrance",
    "category": "Exterior",
    "wide": true
  },
  {
    "url": "/images/villa/dsc08303-hdr.jpg",
    "alt": "Villa Clover Exterior & Entrance",
    "category": "Exterior",
    "wide": true
  },
  {
    "url": "/images/villa/dsc08315-hdr.jpg",
    "alt": "Villa Clover Exterior & Entrance",
    "category": "Exterior",
    "wide": true
  },
  {
    "url": "/images/villa/dsc08321-hdr.jpg",
    "alt": "Villa Clover Exterior & Entrance",
    "category": "Exterior",
    "wide": true
  },
  {
    "url": "/images/villa/dsc08327-hdr.jpg",
    "alt": "Villa Clover Exterior & Entrance",
    "category": "Exterior",
    "wide": true
  },
  {
    "url": "/images/villa/dsc08333-hdr.jpg",
    "alt": "Villa Clover Exterior & Entrance",
    "category": "Exterior",
    "wide": true
  },
  {
    "url": "/images/villa/dsc08342-hdr.jpg",
    "alt": "Villa Clover Exterior & Entrance",
    "category": "Exterior",
    "wide": true
  },
  {
    "url": "/images/villa/dsc08348.jpg",
    "alt": "Lush Tropical Garden & Lake View",
    "category": "Garden",
    "wide": true
  },
  {
    "url": "/images/villa/dsc08353-hdr.jpg",
    "alt": "Lush Tropical Garden & Lake View",
    "category": "Garden",
    "wide": true
  },
  {
    "url": "/images/villa/dsc08354-hdr.jpg",
    "alt": "Lush Tropical Garden & Lake View",
    "category": "Garden",
    "wide": true
  },
  {
    "url": "/images/villa/dsc08360-hdr.jpg",
    "alt": "Lush Tropical Garden & Lake View",
    "category": "Garden",
    "wide": true
  },
  {
    "url": "/images/villa/dsc08365-hdr.jpg",
    "alt": "Lush Tropical Garden & Lake View",
    "category": "Garden",
    "wide": true
  },
  {
    "url": "/images/villa/dsc08371-hdr.jpg",
    "alt": "Lush Tropical Garden & Lake View",
    "category": "Garden",
    "wide": true
  },
  {
    "url": "/images/villa/dsc08372-hdr.jpg",
    "alt": "Lush Tropical Garden & Lake View",
    "category": "Garden",
    "wide": true
  },
  {
    "url": "/images/villa/dsc08372.jpg",
    "alt": "Lush Tropical Garden & Lake View",
    "category": "Garden",
    "wide": true
  },
  {
    "url": "/images/villa/dsc08380-hdr.jpg",
    "alt": "Lush Tropical Garden & Lake View",
    "category": "Garden",
    "wide": true
  },
  {
    "url": "/images/villa/dsc08384-hdr.jpg",
    "alt": "Lush Tropical Garden & Lake View",
    "category": "Garden",
    "wide": true
  },
  {
    "url": "/images/villa/dsc08389-hdr.jpg",
    "alt": "Lush Tropical Garden & Lake View",
    "category": "Garden",
    "wide": true
  },
  {
    "url": "/images/villa/dsc08392-hdr.jpg",
    "alt": "Lush Tropical Garden & Lake View",
    "category": "Garden",
    "wide": true
  },
  {
    "url": "/images/villa/dsc08396-hdr.jpg",
    "alt": "Lush Tropical Garden & Lake View",
    "category": "Garden",
    "wide": true
  },
  {
    "url": "/images/villa/dsc08399-hdr.jpg",
    "alt": "Lush Tropical Garden & Lake View",
    "category": "Garden",
    "wide": true
  },
  {
    "url": "/images/villa/dsc08404-hdr.jpg",
    "alt": "Lush Tropical Garden & Lake View",
    "category": "Garden",
    "wide": true
  },
  {
    "url": "/images/villa/dsc08405-hdr.jpg",
    "alt": "Lush Tropical Garden & Lake View",
    "category": "Garden",
    "wide": true
  },
  {
    "url": "/images/villa/dsc08408-hdr.jpg",
    "alt": "Lush Tropical Garden & Lake View",
    "category": "Garden",
    "wide": true
  },
  {
    "url": "/images/villa/dsc08411-hdr.jpg",
    "alt": "Lush Tropical Garden & Lake View",
    "category": "Garden",
    "wide": true
  },
  {
    "url": "/images/villa/dsc08416-hdr.jpg",
    "alt": "Lush Tropical Garden & Lake View",
    "category": "Garden",
    "wide": true
  },
  {
    "url": "/images/villa/dsc08419-hdr.jpg",
    "alt": "Lush Tropical Garden & Lake View",
    "category": "Garden",
    "wide": true
  },
  {
    "url": "/images/villa/dsc08423-hdr.jpg",
    "alt": "Lush Tropical Garden & Lake View",
    "category": "Garden",
    "wide": true
  },
  {
    "url": "/images/villa/dsc08426-hdr.jpg",
    "alt": "Lush Tropical Garden & Lake View",
    "category": "Garden",
    "wide": true
  },
  {
    "url": "/images/villa/dsc08429-hdr.jpg",
    "alt": "Lush Tropical Garden & Lake View",
    "category": "Garden",
    "wide": true
  },
  {
    "url": "/images/villa/dsc08432-hdr.jpg",
    "alt": "Lush Tropical Garden & Lake View",
    "category": "Garden",
    "wide": true
  },
  {
    "url": "/images/villa/dsc08441-hdr.jpg",
    "alt": "Lush Tropical Garden & Lake View",
    "category": "Garden",
    "wide": true
  },
  {
    "url": "/images/villa/dsc08453-hdr.jpg",
    "alt": "Lush Tropical Garden & Lake View",
    "category": "Garden",
    "wide": true
  },
  {
    "url": "/images/villa/dsc08468-hdr.jpg",
    "alt": "Lush Tropical Garden & Lake View",
    "category": "Garden",
    "wide": true
  },
  {
    "url": "/images/villa/dsc08480-hdr.jpg",
    "alt": "Lush Tropical Garden & Lake View",
    "category": "Garden",
    "wide": true
  },
  {
    "url": "/images/villa/dsc08491-hdr.jpg",
    "alt": "Lush Tropical Garden & Lake View",
    "category": "Garden",
    "wide": true
  },
  {
    "url": "/images/villa/dsc08494-hdr.jpg",
    "alt": "Lush Tropical Garden & Lake View",
    "category": "Garden",
    "wide": true
  },
  {
    "url": "/images/villa/dsc08535-hdr.jpg",
    "alt": "Lush Tropical Garden & Lake View",
    "category": "Garden",
    "wide": true
  },
  {
    "url": "/images/villa/dsc08536-hdr.jpg",
    "alt": "Lush Tropical Garden & Lake View",
    "category": "Garden",
    "wide": true
  },
  {
    "url": "/images/villa/dsc08551-hdr.jpg",
    "alt": "Lush Tropical Garden & Lake View",
    "category": "Garden",
    "wide": true
  },
  {
    "url": "/images/villa/dsc08557-hdr.jpg",
    "alt": "Lush Tropical Garden & Lake View",
    "category": "Garden",
    "wide": true
  },
  {
    "url": "/images/villa/dsc08560-hdr.jpg",
    "alt": "Lush Tropical Garden & Lake View",
    "category": "Garden",
    "wide": true
  },
  {
    "url": "/images/villa/dsc08680.jpg",
    "alt": "Rooftop Sun Deck & Views",
    "category": "Terrace",
    "wide": true
  },
  {
    "url": "/images/villa/dsc08683.jpg",
    "alt": "Rooftop Sun Deck & Views",
    "category": "Terrace",
    "wide": true
  },
  {
    "url": "/images/villa/dsc08686-hdr.jpg",
    "alt": "Rooftop Sun Deck & Views",
    "category": "Terrace",
    "wide": true
  },
  {
    "url": "/images/villa/dsc08687.jpg",
    "alt": "Rooftop Sun Deck & Views",
    "category": "Terrace",
    "wide": true
  },
  {
    "url": "/images/villa/dsc08717.jpg",
    "alt": "Rooftop Sun Deck & Views",
    "category": "Terrace",
    "wide": true
  },
  {
    "url": "/images/villa/dsc08725.jpg",
    "alt": "Rooftop Sun Deck & Views",
    "category": "Terrace",
    "wide": true
  },
  {
    "url": "/images/villa/dsc08728-hdr.jpg",
    "alt": "Rooftop Sun Deck & Views",
    "category": "Terrace",
    "wide": true
  },
  {
    "url": "/images/villa/dsc08728.jpg",
    "alt": "Rooftop Sun Deck & Views",
    "category": "Terrace",
    "wide": true
  },
  {
    "url": "/images/villa/dsc08735.jpg",
    "alt": "Living Room, Dining & Modern Kitchen",
    "category": "Interior",
    "wide": true
  },
  {
    "url": "/images/villa/dsc08737.jpg",
    "alt": "Living Room, Dining & Modern Kitchen",
    "category": "Interior",
    "wide": true
  },
  {
    "url": "/images/villa/dsc08746-hdr.jpg",
    "alt": "Living Room, Dining & Modern Kitchen",
    "category": "Interior",
    "wide": true
  },
  {
    "url": "/images/villa/dsc08746.jpg",
    "alt": "Living Room, Dining & Modern Kitchen",
    "category": "Interior",
    "wide": true
  },
  {
    "url": "/images/villa/dsc08753-hdr.jpg",
    "alt": "Living Room, Dining & Modern Kitchen",
    "category": "Interior",
    "wide": true
  },
  {
    "url": "/images/villa/dsc08755-hdr.jpg",
    "alt": "Living Room, Dining & Modern Kitchen",
    "category": "Interior",
    "wide": true
  },
  {
    "url": "/images/villa/dsc08764-hdr.jpg",
    "alt": "Living Room, Dining & Modern Kitchen",
    "category": "Interior",
    "wide": true
  },
  {
    "url": "/images/villa/dsc08770-hdr.jpg",
    "alt": "Living Room, Dining & Modern Kitchen",
    "category": "Interior",
    "wide": true
  },
  {
    "url": "/images/villa/dsc08774-hdr.jpg",
    "alt": "Living Room, Dining & Modern Kitchen",
    "category": "Interior",
    "wide": true
  },
  {
    "url": "/images/villa/dsc08783-hdr.jpg",
    "alt": "Living Room, Dining & Modern Kitchen",
    "category": "Interior",
    "wide": true
  },
  {
    "url": "/images/villa/dsc08786-hdr.jpg",
    "alt": "Living Room, Dining & Modern Kitchen",
    "category": "Interior",
    "wide": true
  },
  {
    "url": "/images/villa/dsc08795-hdr.jpg",
    "alt": "Living Room, Dining & Modern Kitchen",
    "category": "Interior",
    "wide": true
  },
  {
    "url": "/images/villa/dsc08799-hdr.jpg",
    "alt": "Living Room, Dining & Modern Kitchen",
    "category": "Interior",
    "wide": true
  },
  {
    "url": "/images/villa/dsc08805-hdr.jpg",
    "alt": "Living Room, Dining & Modern Kitchen",
    "category": "Interior",
    "wide": true
  },
  {
    "url": "/images/villa/dsc08814.jpg",
    "alt": "Living Room, Dining & Modern Kitchen",
    "category": "Interior",
    "wide": true
  },
  {
    "url": "/images/villa/dsc08817.jpg",
    "alt": "Living Room, Dining & Modern Kitchen",
    "category": "Interior",
    "wide": true
  },
  {
    "url": "/images/villa/dsc08820.jpg",
    "alt": "Living Room, Dining & Modern Kitchen",
    "category": "Interior",
    "wide": true
  },
  {
    "url": "/images/villa/dsc08823.jpg",
    "alt": "Living Room, Dining & Modern Kitchen",
    "category": "Interior",
    "wide": true
  },
  {
    "url": "/images/villa/dsc08826.jpg",
    "alt": "Living Room, Dining & Modern Kitchen",
    "category": "Interior",
    "wide": true
  },
  {
    "url": "/images/villa/dsc08832.jpg",
    "alt": "Living Room, Dining & Modern Kitchen",
    "category": "Interior",
    "wide": true
  },
  {
    "url": "/images/villa/dsc08835.jpg",
    "alt": "Living Room, Dining & Modern Kitchen",
    "category": "Interior",
    "wide": true
  },
  {
    "url": "/images/villa/dsc08871.jpg",
    "alt": "Living Room, Dining & Modern Kitchen",
    "category": "Interior",
    "wide": true
  },
  {
    "url": "/images/villa/dsc08874.jpg",
    "alt": "Living Room, Dining & Modern Kitchen",
    "category": "Interior",
    "wide": true
  },
  {
    "url": "/images/villa/dsc08877.jpg",
    "alt": "Living Room, Dining & Modern Kitchen",
    "category": "Interior",
    "wide": true
  },
  {
    "url": "/images/villa/dsc08880.jpg",
    "alt": "Living Room, Dining & Modern Kitchen",
    "category": "Interior",
    "wide": true
  },
  {
    "url": "/images/villa/dsc08889.jpg",
    "alt": "Living Room, Dining & Modern Kitchen",
    "category": "Interior",
    "wide": true
  },
  {
    "url": "/images/villa/dsc08898.jpg",
    "alt": "Living Room, Dining & Modern Kitchen",
    "category": "Interior",
    "wide": true
  },
  {
    "url": "/images/villa/dsc08904.jpg",
    "alt": "Living Room, Dining & Modern Kitchen",
    "category": "Interior",
    "wide": true
  },
  {
    "url": "/images/villa/dsc08908-hdr.jpg",
    "alt": "Living Room, Dining & Modern Kitchen",
    "category": "Interior",
    "wide": true
  },
  {
    "url": "/images/villa/dsc08932-hdr.jpg",
    "alt": "Living Room, Dining & Modern Kitchen",
    "category": "Interior",
    "wide": true
  },
  {
    "url": "/images/villa/dsc08943.jpg",
    "alt": "Bedroom 2 Suite with AC",
    "category": "Interior",
    "wide": true
  },
  {
    "url": "/images/villa/dsc08946.jpg",
    "alt": "Bedroom 2 Suite with AC",
    "category": "Interior",
    "wide": true
  },
  {
    "url": "/images/villa/dsc08949.jpg",
    "alt": "Bedroom 2 Suite with AC",
    "category": "Interior",
    "wide": true
  },
  {
    "url": "/images/villa/dsc08952.jpg",
    "alt": "Bedroom 2 Suite with AC",
    "category": "Interior",
    "wide": true
  },
  {
    "url": "/images/villa/dsc08955.jpg",
    "alt": "Bedroom 2 Suite with AC",
    "category": "Interior",
    "wide": true
  },
  {
    "url": "/images/villa/dsc08958.jpg",
    "alt": "Bedroom 2 Suite with AC",
    "category": "Interior",
    "wide": true
  },
  {
    "url": "/images/villa/dsc08961.jpg",
    "alt": "Bedroom 2 Suite with AC",
    "category": "Interior",
    "wide": true
  },
  {
    "url": "/images/villa/dsc08964.jpg",
    "alt": "Bedroom 2 Suite with AC",
    "category": "Interior",
    "wide": true
  },
  {
    "url": "/images/villa/dsc08967.jpg",
    "alt": "Bedroom 2 Suite with AC",
    "category": "Interior",
    "wide": true
  },
  {
    "url": "/images/villa/dsc08979.jpg",
    "alt": "Bedroom 2 Suite with AC",
    "category": "Interior",
    "wide": true
  },
  {
    "url": "/images/villa/dsc08982.jpg",
    "alt": "Bedroom 2 Suite with AC",
    "category": "Interior",
    "wide": true
  },
  {
    "url": "/images/villa/dsc08985.jpg",
    "alt": "Bedroom 2 Suite with AC",
    "category": "Interior",
    "wide": true
  },
  {
    "url": "/images/villa/dsc08994.jpg",
    "alt": "Master Bedroom 1 & Wardrobe",
    "category": "Interior",
    "wide": true
  },
  {
    "url": "/images/villa/dsc09003.jpg",
    "alt": "Master Bedroom 1 & Wardrobe",
    "category": "Interior",
    "wide": true
  },
  {
    "url": "/images/villa/dsc09006.jpg",
    "alt": "Master Bedroom 1 & Wardrobe",
    "category": "Interior",
    "wide": true
  },
  {
    "url": "/images/villa/dsc09012.jpg",
    "alt": "Master Bedroom 1 & Wardrobe",
    "category": "Interior",
    "wide": true
  },
  {
    "url": "/images/villa/dsc09015.jpg",
    "alt": "Master Bedroom 1 & Wardrobe",
    "category": "Interior",
    "wide": true
  },
  {
    "url": "/images/villa/dsc09018.jpg",
    "alt": "Master Bedroom 1 & Wardrobe",
    "category": "Interior",
    "wide": true
  },
  {
    "url": "/images/villa/dsc09021.jpg",
    "alt": "Master Bedroom 1 & Wardrobe",
    "category": "Interior",
    "wide": true
  },
  {
    "url": "/images/villa/dsc09027.jpg",
    "alt": "Master Bedroom 1 & Wardrobe",
    "category": "Interior",
    "wide": true
  },
  {
    "url": "/images/villa/dsc09030.jpg",
    "alt": "Master Bedroom 1 & Wardrobe",
    "category": "Interior",
    "wide": true
  },
  {
    "url": "/images/villa/dsc09033.jpg",
    "alt": "Master Bedroom 1 & Wardrobe",
    "category": "Interior",
    "wide": true
  },
  {
    "url": "/images/villa/dsc09043.jpg",
    "alt": "Master Bedroom 1 & Wardrobe",
    "category": "Interior",
    "wide": true
  },
  {
    "url": "/images/villa/dsc09046.jpg",
    "alt": "Master Bedroom 1 & Wardrobe",
    "category": "Interior",
    "wide": true
  },
  {
    "url": "/images/villa/dsc09049.jpg",
    "alt": "Master Bedroom 1 & Wardrobe",
    "category": "Interior",
    "wide": true
  },
  {
    "url": "/images/villa/dsc09055.jpg",
    "alt": "Master Bedroom 1 & Wardrobe",
    "category": "Interior",
    "wide": true
  },
  {
    "url": "/images/villa/dsc09058.jpg",
    "alt": "Master Bedroom 1 & Wardrobe",
    "category": "Interior",
    "wide": true
  },
  {
    "url": "/images/villa/dsc09061.jpg",
    "alt": "Master Bedroom 1 & Wardrobe",
    "category": "Interior",
    "wide": true
  },
  {
    "url": "/images/villa/dsc09064.jpg",
    "alt": "Master Bedroom 1 & Wardrobe",
    "category": "Interior",
    "wide": true
  },
  {
    "url": "/images/villa/dsc09067.jpg",
    "alt": "Master Bedroom 1 & Wardrobe",
    "category": "Interior",
    "wide": true
  },
  {
    "url": "/images/villa/dsc09070.jpg",
    "alt": "Master Bedroom 1 & Wardrobe",
    "category": "Interior",
    "wide": true
  },
  {
    "url": "/images/villa/dsc09073.jpg",
    "alt": "Master Bedroom 1 & Wardrobe",
    "category": "Interior",
    "wide": true
  },
  {
    "url": "/images/villa/dsc09076.jpg",
    "alt": "Master Bedroom 1 & Wardrobe",
    "category": "Interior",
    "wide": true
  },
  {
    "url": "/images/villa/dsc09079.jpg",
    "alt": "Master Bedroom 1 & Wardrobe",
    "category": "Interior",
    "wide": true
  },
  {
    "url": "/images/villa/dsc09094.jpg",
    "alt": "Modern Ensuite Bathroom & Amenities",
    "category": "Interior",
    "wide": true
  },
  {
    "url": "/images/villa/dsc09097.jpg",
    "alt": "Modern Ensuite Bathroom & Amenities",
    "category": "Interior",
    "wide": true
  },
  {
    "url": "/images/villa/dsc09103.jpg",
    "alt": "Modern Ensuite Bathroom & Amenities",
    "category": "Interior",
    "wide": true
  },
  {
    "url": "/images/villa/dsc09119.jpg",
    "alt": "Modern Ensuite Bathroom & Amenities",
    "category": "Interior",
    "wide": true
  },
  {
    "url": "/images/villa/dsc09125.jpg",
    "alt": "Modern Ensuite Bathroom & Amenities",
    "category": "Interior",
    "wide": true
  },
  {
    "url": "/images/villa/dsc09143.jpg",
    "alt": "Modern Ensuite Bathroom & Amenities",
    "category": "Interior",
    "wide": true
  },
  {
    "url": "/images/villa/dsc09148.jpg",
    "alt": "Modern Ensuite Bathroom & Amenities",
    "category": "Interior",
    "wide": true
  },
  {
    "url": "/images/villa/dsc09151.jpg",
    "alt": "Modern Ensuite Bathroom & Amenities",
    "category": "Interior",
    "wide": true
  },
  {
    "url": "/images/villa/dsc09154.jpg",
    "alt": "Modern Ensuite Bathroom & Amenities",
    "category": "Interior",
    "wide": true
  },
  {
    "url": "/images/villa/dsc09160.jpg",
    "alt": "Modern Ensuite Bathroom & Amenities",
    "category": "Interior",
    "wide": true
  },
  {
    "url": "/images/villa/dsc09190-hdr.jpg",
    "alt": "Villa Twilight & Night Lighting",
    "category": "Exterior",
    "wide": true
  },
  {
    "url": "/images/villa/dsc09193-hdr.jpg",
    "alt": "Villa Twilight & Night Lighting",
    "category": "Exterior",
    "wide": true
  },
  {
    "url": "/images/villa/dsc09194.jpg",
    "alt": "Villa Twilight & Night Lighting",
    "category": "Exterior",
    "wide": true
  },
  {
    "url": "/images/villa/dsc09211-hdr.jpg",
    "alt": "Villa Twilight & Night Lighting",
    "category": "Exterior",
    "wide": true
  },
  {
    "url": "/images/villa/dsc09217-hdr.jpg",
    "alt": "Villa Twilight & Night Lighting",
    "category": "Exterior",
    "wide": true
  },
  {
    "url": "/images/villa/dsc09223-hdr.jpg",
    "alt": "Villa Twilight & Night Lighting",
    "category": "Exterior",
    "wide": true
  },
  {
    "url": "/images/villa/dsc09232-hdr.jpg",
    "alt": "Villa Twilight & Night Lighting",
    "category": "Exterior",
    "wide": true
  },
  {
    "url": "/images/villa/dsc09237.jpg",
    "alt": "Villa Twilight & Night Lighting",
    "category": "Exterior",
    "wide": true
  },
  {
    "url": "/images/villa/dsc09246.jpg",
    "alt": "Villa Twilight & Night Lighting",
    "category": "Exterior",
    "wide": true
  },
  {
    "url": "/images/villa/dsc09255.jpg",
    "alt": "Villa Twilight & Night Lighting",
    "category": "Exterior",
    "wide": true
  },
  {
    "url": "/images/villa/dsc09259-hdr.jpg",
    "alt": "Villa Twilight & Night Lighting",
    "category": "Exterior",
    "wide": true
  },
  {
    "url": "/images/villa/dsc09276.jpg",
    "alt": "Villa Twilight & Night Lighting",
    "category": "Exterior",
    "wide": true
  },
  {
    "url": "/images/villa/dsc09282.jpg",
    "alt": "Villa Twilight & Night Lighting",
    "category": "Exterior",
    "wide": true
  },
  {
    "url": "/images/villa/dsc09298-hdr.jpg",
    "alt": "Rooftop Lounge Night & Fairy Lights",
    "category": "Terrace",
    "wide": true
  },
  {
    "url": "/images/villa/dsc09300.jpg",
    "alt": "Rooftop Lounge Night & Fairy Lights",
    "category": "Terrace",
    "wide": true
  },
  {
    "url": "/images/villa/dsc09303.jpg",
    "alt": "Rooftop Lounge Night & Fairy Lights",
    "category": "Terrace",
    "wide": true
  },
  {
    "url": "/images/villa/dsc09315.jpg",
    "alt": "Rooftop Lounge Night & Fairy Lights",
    "category": "Terrace",
    "wide": true
  },
  {
    "url": "/images/villa/dsc09324.jpg",
    "alt": "Rooftop Lounge Night & Fairy Lights",
    "category": "Terrace",
    "wide": true
  },
  {
    "url": "/images/villa/dsc09333.jpg",
    "alt": "Rooftop Lounge Night & Fairy Lights",
    "category": "Terrace",
    "wide": true
  },
  {
    "url": "/images/villa/dsc09339.jpg",
    "alt": "Rooftop Lounge Night & Fairy Lights",
    "category": "Terrace",
    "wide": true
  },
  {
    "url": "/images/villa/dsc09390.jpg",
    "alt": "Rooftop Lounge Night & Fairy Lights",
    "category": "Terrace",
    "wide": true
  },
  {
    "url": "/images/villa/dsc09393.jpg",
    "alt": "Rooftop Lounge Night & Fairy Lights",
    "category": "Terrace",
    "wide": true
  }
];
