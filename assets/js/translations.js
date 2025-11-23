// Translation data for English and Japanese
const translations = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.destinations": "Destinations",
    "nav.services": "Services",
    "nav.reviews": "Reviews",
    "nav.contact": "Contact",
    "nav.bookNow": "BOOK NOW",

    // Index Hero
    "hero.discover": "Discover Your Next Adventure",
    "hero.explore": "Explore Australia Together",
    "hero.subtitle": "Curated premium travel experiences crafted for the discerning traveler",
    "hero.enquire": "ENQUIRE NOW",

    // Featured Destinations Section
    "destinations.featured": "Featured Destinations",
    "destinations.subtitle": "Handpicked locations for unforgettable journeys",
    "destinations.luxury": "Luxury Resorts",
    "destinations.luxuryDesc": "Premium accommodations",
    "destinations.adventure": "Adventure",
    "destinations.adventureDesc": "Thrilling experiences",
    "destinations.beach": "Beach Paradise",
    "destinations.beachDesc": "Tropical escapes",
    "destinations.cultural": "Cultural",
    "destinations.culturalDesc": "Authentic experiences",

    // Gallery Section
    "gallery.title": "Gallery Moments",
    "gallery.subtitle": "Real stories from our travelers",
    "gallery.luxury": "Luxury Living",
    "gallery.adventure": "Adventure",
    "gallery.tropical": "Tropical",
    "gallery.cultural": "Cultural",
    "gallery.romance": "Romance",

    // Services Section
    "services.title": "Our Services",
    "services.subtitle": "Comprehensive travel solutions tailored to your needs",
    "services.customItineraries": "Custom Itineraries",
    "services.customDesc": "Personalized travel plans designed exclusively for you",
    "services.luxury": "Luxury Accommodations",
    "services.luxuryDesc": "Premier hotels and resorts handpicked for excellence",
    "services.guides": "Expert Guides",
    "services.guidesDesc": "Knowledgeable local experts for immersive experiences",
    "services.support": "24/7 Support",
    "services.supportDesc": "Round-the-clock assistance during your journey",

    // About Section
    "about.label": "Who We Are",
    "about.title": "Premium Travel Experiences",
    "about.text":
      "At Horizon Tours & Travels, we believe that travel is more than just visiting destinations—it's about creating unforgettable memories and experiencing the world's most beautiful places with elegance and sophistication. With over a decade of expertise, we craft bespoke journeys that exceed expectations.",
    "about.feature1": "Curated destinations",
    "about.feature2": "Expert local guides",
    "about.feature3": "Luxury accommodations",
    "about.feature4": "Personalized service",
    "about.explore": "EXPLORE MORE",

    // Reviews Section
    "reviews.label": "Client Testimonials",
    "reviews.title": "Our Travelers' Stories",
    "reviews.honeymoon": "Perfect Honeymoon Experience",
    "reviews.honeymoonText":
      '"Horizon Tours crafted the perfect honeymoon experience. Every detail was meticulously planned, from the luxury accommodations to the private sunset tour. Absolutely unforgettable!"',
    "reviews.adventure": "Thrilling Adventure Beyond Expectations",
    "reviews.adventureText":
      '"The adventure tour exceeded all my expectations. The guides were knowledgeable, accommodations were top-tier, and the experiences were truly authentic. I\'m already planning my next trip!"',
    "reviews.family": "Family Vacation Made Easy",
    "reviews.familyText":
      '"Premium service from start to finish. Horizon\'s attention to detail and personalized approach made our family vacation truly special. Worth every penny!"',
    "reviews.business": "Unmatched Luxury and Sophistication",
    "reviews.businessText":
      '"Best travel agency I\'ve worked with. Their luxury connections and local expertise opened doors to experiences I never thought possible. Highly recommended!"',
    "reviews.emily": "Emily Mitchell",
    "reviews.emily2024": "Honeymoon, 2024",
    "reviews.james": "James Anderson",
    "reviews.james2024": "Adventure Tour, 2024",
    "reviews.sarah": "Sarah Harrison",
    "reviews.sarah2024": "Family Trip, 2024",
    "reviews.michael": "Michael Chen",
    "reviews.michael2024": "Luxury Tour, 2024",

    // CTA Section
    "cta.ready": "Ready to Plan Your Dream Journey?",
    "cta.subtitle": "Let our travel experts create a personalized experience just for you",
    "cta.start": "START PLANNING TODAY",

    // Footer
    "footer.premium": "Premium travel experiences crafted with elegance and expertise.",
    "footer.quickLinks": "Quick Links",
    "footer.company": "Company",
    "footer.about": "About Us",
    "footer.contact": "Contact",
    "footer.faq": "FAQ",
    "footer.contactTitle": "Contact",
    "footer.email": "Email: hello@horizontours.com",
    "footer.phone": "Phone: +1 (800) 456-7890",
    "footer.copyright": "© 2025 Horizon Tours & Travels. All rights reserved.",

    // Destinations Page
    "destinations.collection": "Discover Our Collection",
    "destinations.handpicked": "Handpicked Destinations",
    "destinations.exploreSubtitle": "Explore the world's most breathtaking locations curated exclusively for you",
    "destinations.featured": "Our Featured Destinations",
    "destinations.featuredSubtitle": "Each destination is carefully selected for its unique charm and luxury offerings",
    "destinations.australia": "Australia",
    "destinations.australiaDesc":
      "Experience the raw beauty of Australia with luxury lodges, guided safaris, and authentic aboriginal experiences. From the stunning Great Barrier Reef to the iconic Outback, discover unforgettable adventures.",
    "destinations.australiaRating": "★★★★★ (4.9 / 5)",
    "destinations.premiumDeserts": "Premium desert lodges",
    "destinations.expertGuides": "Expert local guides",
    "destinations.sunsetExp": "Sunset experiences",
    "destinations.wildlifeSafaris": "Wildlife safaris",
    "destinations.explore": "EXPLORE",
    "destinations.newzealand": "New Zealand",
    "destinations.newzealandDesc":
      "Explore the breathtaking landscapes of New Zealand with adventure activities, luxury lodges, and stunning natural wonders. From fiords and mountains to pristine beaches, experience nature's masterpiece.",
    "destinations.newzealandRating": "★★★★★ (5.0 / 5)",
    "destinations.mountainLodges": "Mountain lodges",
    "destinations.adventureActivities": "Adventure activities",
    "destinations.scenicTours": "Scenic tours",
    "destinations.luxuryWellness": "Luxury wellness resorts",
    "destinations.ready": "Ready to Visit These Amazing Destinations?",
    "destinations.readySubtitle": "Contact our travel experts to craft your perfect itinerary",
    "destinations.startPlanning": "START PLANNING",

    // Services Page
    "services.whatOffer": "What We Offer",
    "services.premiumServices": "Premium Travel Services",
    "services.comprehensive": "Comprehensive solutions for every travel need",
    "services.ourServices": "Our Comprehensive Services",
    "services.everything": "Everything you need for an unforgettable journey",
    "services.flights": "Flight Arrangements",
    "services.flightsDesc": "First-class and business-class flights with premium airline partners worldwide",
    "services.international": "International flights",
    "services.privateCharters": "Private charters available",
    "services.loungeAccess": "Exclusive lounge access",
    "services.travelInsurance": "Travel insurance included",
    "services.accommodations": "Luxury Accommodations",
    "services.accommodationsDesc": "5-star hotels, resorts, and exclusive villas handpicked worldwide",
    "services.hotelNetwork": "5-star hotel network",
    "services.exclusiveVilla": "Exclusive villa access",
    "services.islandResorts": "Private island resorts",
    "services.complimentary": "Complimentary upgrades",
    "services.itineraries": "Custom Itineraries",
    "services.itinerariesDesc": "Personalized travel plans designed exclusively for your preferences",
    "services.bespoke": "Bespoke planning",
    "services.flexible": "Flexible schedules",
    "services.modifications": "24/7 modifications",
    "services.dining": "Dining Experiences",
    "services.diningDesc": "Michelin-starred restaurants and exclusive culinary experiences",
    "services.chefTable": "Chef's table reservations",
    "services.winePairings": "Wine pairings",
    "services.cookingClasses": "Cooking classes",
    "services.privateDining": "Private dining setups",
    "services.cultural": "Cultural Tours",
    "services.culturalDesc": "Immersive cultural experiences with expert local guides",
    "services.privateTours": "Private tours",
    "services.museumAccess": "Museum access",
    "services.culturalWorkshops": "Cultural workshops",
    "services.vipEvents": "VIP event access",
    "services.support24": "24/7 Support",
    "services.support24Desc": "Round-the-clock assistance and emergency support",
    "services.hotline": "24/7 hotline",
    "services.emergency": "Emergency assistance",
    "services.coordination": "Travel coordination",
    "services.priority": "Priority support",
    "services.whyChoose": "Why Choose Horizon?",
    "services.decades": "Decades of expertise in crafting unforgettable journeys",
    "services.expertKnowledge": "Expert Local Knowledge",
    "services.expertText": "Our guides have decades of experience and deep connections with local communities",
    "services.luxuryNetwork": "Luxury Network",
    "services.luxuryText": "Exclusive partnerships with the world's finest hotels, resorts, and restaurants",
    "services.personalizedService": "Personalized Service",
    "services.personalizedText": "Every detail is customized to your preferences and requirements",
    "services.reliability": "Reliability",
    "services.reliabilityText": "15+ years of satisfied clients and perfect travel execution record",
    "services.exploreServices": "Explore Our Complete Service Range",
    "services.contactConsultants": "Contact our travel consultants for a personalized service package",
    "services.consultation": "GET CONSULTATION",

    // Contact Page
    "contact.touch": "Get in Touch",
    "contact.contactTeam": "Contact Our Team",
    "contact.planning": "Let's start planning your unforgettable adventure",
    "contact.sendMessage": "Send us a Message",
    "contact.name": "Your Name",
    "contact.email": "Your Email",
    "contact.phone": "Phone Number",
    "contact.tourType": "Select Tour Type",
    "contact.luxury": "Luxury Tour",
    "contact.adventureOpt": "Adventure Tour",
    "contact.familyTrip": "Family Trip",
    "contact.culturalOpt": "Cultural Tour",
    "contact.honeymoonOpt": "Honeymoon",
    "contact.dreamTrip": "Tell us about your dream trip...",
    "contact.sendEnquiry": "SEND ENQUIRY",
    "contact.information": "Contact Information",
    "contact.address": "Office Address",
    "contact.sydney": "123 Travel Plaza\nSydney, NSW 2000\nAustralia",
    "contact.phoneTitle": "Phone",
    "contact.phoneDet": "General: +1 (800) 456-7890\nMobile: +1 (800) 456-7891\nAvailable 24/7",
    "contact.emailTitle": "Email",
    "contact.emailDet": "General Inquiries:\nhello@horizontours.com\n\nSupport:\nsupport@horizontours.com",
    "contact.hoursTitle": "Office Hours",
    "contact.hoursDet":
      "Monday - Friday: 9:00 AM - 6:00 PM\nSaturday: 10:00 AM - 4:00 PM\nSunday: Closed\n(Available for emergencies)",
    "contact.followUs": "Follow Us",
    "contact.facebook": "Facebook",
    "contact.instagram": "Instagram",
    "contact.twitter": "Twitter",
    "contact.linkedin": "LinkedIn",
    "contact.faq": "Frequently Asked Questions",
    "contact.faqSubtitle": "Find answers to common travel questions",
    "contact.faqQ1": "How far in advance should I book?",
    "contact.faqA1":
      "We recommend booking 2-3 months in advance for peak seasons and 4-6 weeks for other times. However, we can arrange last-minute trips depending on availability.",
    "contact.faqQ2": "What's included in your packages?",
    "contact.faqA2":
      "Most packages include flights, accommodations, transfers, and guided tours. Specific inclusions vary by package. We'll provide a detailed breakdown with your quote.",
    "contact.faqQ3": "Do you offer travel insurance?",
    "contact.faqA3":
      "Yes, comprehensive travel insurance is available and highly recommended. It covers trip cancellations, medical emergencies, and lost luggage.",
    "contact.faqQ4": "Can I customize my itinerary?",
    "contact.faqA4":
      "All our packages are customizable. Share your preferences, and our experts will create a personalized itinerary just for you.",
    "contact.faqQ5": "What if plans need to change?",
    "contact.faqA5":
      "We provide 24/7 support to modify your plans. Changes may incur additional costs depending on availability and timing.",
    "contact.faqQ6": "Are deposits refundable?",
    "contact.faqA6":
      "Our refund policy varies by package and booking date. Generally, deposits are non-refundable but can be transferred to another date within 12 months.",
    "contact.readyAdventure": "Ready to Start Your Adventure?",
    "contact.readySubtitle": "Our travel experts are ready to help you plan the perfect trip",
    "contact.consultation": "SCHEDULE A CONSULTATION",

    // Reviews Page
    "reviews.hear": "Hear From Our Clients",
    "reviews.testimonials": "Testimonials & Reviews",
    "reviews.realStories": "Real stories from travelers who experienced Horizon excellence",
    "reviews.stories": "Our Travelers' Stories",
    "reviews.storiesSubtitle": "Thousands of satisfied clients sharing their amazing experiences",
    "reviews.honeymoonTitle": "Perfect Honeymoon Experience",
    "reviews.honeymoonFull":
      '"Horizon created the most magical honeymoon imaginable. Every detail was flawlessly executed, from the beachfront villa with private pool to the sunset romantic dinner prepared by a private chef. We felt like royalty throughout our entire journey. Highly recommended!"',
    "reviews.adventureTitle": "Thrilling Adventure Beyond Expectations",
    "reviews.adventureFull":
      '"The adventure tour was absolutely incredible! Our guide had exceptional knowledge about the local wildlife, and the accommodations were surprisingly luxurious. Rock climbing, zip-lining, and hiking through pristine wilderness – everything was perfectly organized. Can\'t wait to book another trip!"',
    "reviews.familyTitle": "Family Vacation Made Easy",
    "reviews.familyFull":
      '"Traveling with children can be stressful, but Horizon made everything seamless. They arranged kid-friendly activities, ensured the hotel had excellent facilities, and provided flexible schedules. My entire family had the time of their lives. Worth every penny!"',
    "reviews.luxuryTitle": "Unmatched Luxury and Sophistication",
    "reviews.luxuryFull":
      "\"As frequent travelers, we've worked with many agencies, but Horizon stands out. Their luxury connections opened doors to exclusive experiences we couldn't have accessed ourselves. Private yacht cruises, VIP concert tickets, Michelin-starred dining – simply exceptional!\"",
    "reviews.cultural": "Cultural",
    "reviews.culturalTitle": "Authentic Cultural Immersion",
    "reviews.culturalFull":
      '"I wanted to experience authentic culture, not tourist traps. Horizon delivered! Their guides introduced us to local families, artisans, and hidden gems. We tasted real local cuisine, learned traditions firsthand, and made genuine connections. Transformative experience!"',
    "reviews.businessTitle": "Corporate Travel Perfection",
    "reviews.businessFull":
      '"Horizon handled all our corporate retreat arrangements flawlessly. Luxury accommodations, world-class venue setup, team-building activities, and seamless logistics. Our executives and team loved it, and the planning process was effortless. Fantastic partner!"',
    "reviews.amanda": "Amanda Lee",
    "reviews.amanda2024": "Vietnam Cultural Tour, 2024",
    "reviews.david": "David Roberts",
    "reviews.david2024": "Corporate Retreat, Singapore 2024",
    "reviews.averageRating": "Average Rating",
    "reviews.happyClients": "Happy Clients",
    "reviews.yearsExperience": "Years Experience",
    "reviews.destinations": "Destinations",
    "reviews.join": "Join Thousands of Satisfied Travelers",
    "reviews.joinSubtitle": "Experience the Horizon difference – book your dream journey today",
    "reviews.bookTrip": "BOOK YOUR TRIP",

    // Australia Page
    "australia.explore": "Explore Australia's Land",
    "australia.title": "Australia",
    "australia.subtitle": "Experience Unique Adventures on the World's Most Unique Continent",
    "australia.why": "Why Choose Australia?",
    "australia.whySubtitle": "A Journey of Contrast and Wonder",
    "australia.diverse": "Diverse Scenery",
    "australia.diverseDesc":
      "From red deserts to tropical rainforests and world-class beaches, Australia offers breathtaking natural diversity.",
    "australia.wildlife": "Unique Wildlife",
    "australia.wildlifeDesc": "Experience iconic Australian animals in their natural habitats.",
    "australia.luxury": "Luxury Experiences",
    "australia.luxuryDesc": "Enjoy premium experiences from luxury beachfront resorts to exclusive outback lodges.",
    "australia.cultural": "Rich Cultural Heritage",
    "australia.culturalDesc":
      "Discover ancient Aboriginal traditions, world-renowned cuisine, and vibrant cities blending adventure and culture.",
    "australia.highlights": "Must-See Highlights",
    "australia.highlightsDesc": "Discover iconic destinations in Australia.",
    "australia.reef": "Great Barrier Reef",
    "australia.reefRating": "★★★★★ World's Largest Coral System",
    "australia.reefDesc":
      "Explore the world's most beautiful coral ecosystem with crystal-clear waters, vibrant marine life, and world-class snorkeling and diving opportunities.",
    "australia.reefFeat1": "World-Class Snorkeling & Diving",
    "australia.reefFeat2": "Private Yacht Cruise",
    "australia.reefFeat3": "Marine Life Tour",
    "australia.reefFeat4": "Luxury Island Resort Stay",
    "australia.reefFeat5": "Photography Experience",
    "australia.reefFeat6": "Sunset Beach Dinner",
    "australia.uluru": "Uluru - Sacred Outback",
    "australia.uluruRating": "★★★★★ Iconic Desert Landscape",
    "australia.uluruDesc":
      "Marvel at this magnificent 348-meter monolith. A sacred site for thousands of years to the Aboriginal people.",
    "australia.uluruFeat1": "Aboriginal-Guided Tour",
    "australia.uluruFeat2": "Dramatic Sunrise/Sunset Viewing Platform",
    "australia.uluruFeat3": "Luxury Desert Lodge Stay",
    "australia.uluruFeat4": "Cultural Workshop",
    "australia.uluruFeat5": "Kangaroo Tracking",
    "australia.uluruFeat6": "Stargazing Experience",
    "australia.sydney": "Sydney Harbour",
    "australia.sydneyRating": "★★★★★ Iconic Modernity",
    "australia.sydneyDesc":
      "Experience the blend of iconic landmarks and vibrant city culture in the most famous city of Australia.",
    "australia.sydneyFeat1": "Opera House Experience",
    "australia.sydneyFeat2": "Harbour Cruise & Sailing",
    "australia.sydneyFeat3": "Beach Resort Stay",
    "australia.sydneyFeat4": "Fine Dining Experience",
    "australia.sydneyFeat5": "Art Gallery & Museum Visit",
    "australia.sydneyFeat6": "Coastal Walk",
    "australia.daintree": "Daintree Rainforest",
    "australia.daintreeRating": "★★★★★ UNESCO World Heritage Jungle",
    "australia.daintreeDesc":
      "Explore one of the world's oldest tropical rainforests with guided jungle walks, wildlife spotting, and luxurious eco-lodge stays.",
    "australia.daintreeFeat1": "Guided Jungle Walk",
    "australia.daintreeFeat2": "Wildlife Spotting Tour",
    "australia.daintreeFeat3": "Luxury Eco-Lodge Stay",
    "australia.daintreeFeat4": "River Cruise",
    "australia.daintreeFeat5": "Canopy Walk",
    "australia.daintreeFeat6": "Indigenous Culture Tour",
    "australia.experiences": "Curated Experiences",
    "australia.experiencesDesc": "Select from a premium activity selection.",
    "australia.beachResorts": "Luxury Beach Resorts",
    "australia.beachResortDesc": "World-class beachfront resorts with luxurious beachside experiences.",
    "australia.reefAdventures": "Reef Adventures",
    "australia.reefAdvDesc": "Professional snorkeling and diving tours with marine guides.",
    "australia.wildlifeEncounters": "Wildlife Encounters",
    "australia.wildlifeEncDesc": "Guided tours to spot unique Australian animals in their natural habitats.",
    "australia.outbackAdventures": "Outback Adventures",
    "australia.outbackAdvDesc":
      "Thrilling desert experiences with 4x4 safaris, kangaroo tracking, and camping under the stars in the Australian Outback.",
    "australia.gourmetDining": "Gourmet Dining",
    "australia.gourmetDesc":
      "Enjoy fine dining experiences with fresh local ingredients and modern Australian cuisine.",
    "australia.wellness": "Wellness Retreats",
    "australia.wellnessDesc": "Relax in luxurious spa and wellness treatments at picturesque coastal locations.",
    "australia.travelInfo": "Travel Information",
    "australia.travelInfoDesc": "Important details for planning your adventure in Australia.",
    "australia.visa": "Visa and Entry Requirements",
    "australia.visaDesc":
      "Most international visitors require an eTA or visa. Check with your country's Australian embassy for specific requirements. We can assist with visa document preparation.",
    "australia.bestTime": "Best Time to Visit",
    "australia.bestTimeDesc":
      "The peak season is from April to September (autumn and winter) with pleasant weather. North is ideal from May to October. Summer (December to February) is hot but perfect for beach lovers. Plan for 7-14 days for a complete experience.",
    "australia.currency": "Currency and Payment",
    "australia.currencyDesc":
      "Australian Dollar (AUD) is the official currency. Credit cards are widely accepted in cities. Carry cash for remote areas. Good exchange rates are available. Most facilities accept contactless payments.",
    "australia.language": "Language and Communication",
    "australia.languageDesc":
      "English is the common language. Excellent mobile network coverage across Australia. SIM cards and mobile services will be arranged for all guests to ensure seamless connectivity during your stay.",
    "australia.transport": "Transportation",
    "australia.transportDesc":
      "Excellent domestic flights connect major cities. Premium rental cars are available for self-drive experiences. Private transfers, domestic flights, and luxurious transportation will be arranged throughout your journey.",
    "australia.health": "Health and Safety",
    "australia.healthDesc":
      "Australia is very safe for travelers with world-class medical facilities. Comprehensive travel insurance is recommended. We provide 24/7 emergency support to all guests.",
    "australia.ready": "Ready to Experience Australia?",
    "australia.readyDesc": "Our travel experts are here to create unforgettable adventures in Australia.",
    "australia.planTrip": "Plan Your Trip",

    // New Zealand Page
    "newzealand.discover": "Discover New Zealand",
    "newzealand.title": "New Zealand",
    "newzealand.subtitle": "Experience Breathtaking Scenery and Luxury Adventures in a Paradise",
    "newzealand.why": "Why Choose New Zealand?",
    "newzealand.whySubtitle": "Adventures at the Edge of Paradise",
    "newzealand.scenery": "Breathtaking Scenery",
    "newzealand.sceneryDesc":
      "Dramatic fiords, snow-capped mountains, crystal-clear lakes, and enchanting forests create the world's most stunning landscape.",
    "newzealand.adventureCapital": "Adventure Capital",
    "newzealand.adventureCapitalDesc": "Experience thrilling adventures from bungee jumping to skydiving.",
    "newzealand.luxury": "Luxury Accommodations",
    "newzealand.luxuryDesc":
      "Experience exclusive luxury with panoramic view lodges, lakefront resorts, and boutique hotels.",
    "newzealand.cultural": "Cultural Heritage",
    "newzealand.culturalDesc":
      "Discover Maori culture, Lord of the Rings filming locations, innovative cuisine, and Kiwi hospitality.",
    "newzealand.highlights": "Must-See Highlights",
    "newzealand.highlightsDesc": "Discover iconic destinations in New Zealand.",
    "newzealand.milford": "Milford Sound",
    "newzealand.milfordRating": "★★★★★ Eighth Wonder of the World",
    "newzealand.milfordDesc":
      "Experience the most dramatic fiords in the world. Explore crystal-clear waters surrounded by towering cliffs, waterfalls, and tropical rainforests.",
    "newzealand.milfordFeat1": "Luxury Fiord Cruise",
    "newzealand.milfordFeat2": "Private Yacht Experience",
    "newzealand.milfordFeat3": "Seascape Kayaking Tour",
    "newzealand.milfordFeat4": "Waterfall Photography",
    "newzealand.milfordFeat5": "Wildlife Spotting (Dolphins, Killer Whales)",
    "newzealand.milfordFeat6": "Multi-Day Hiking Adventure",
    "newzealand.rotorua": "Rotorua - Geothermal Paradise",
    "newzealand.rotoruaRating": "★★★★★ Geothermal Paradise",
    "newzealand.rotoruaDesc":
      "Discover the natural wonders of the geothermal hotspot. Explore bubbling mud pools, geyser eruptions, and natural hot springs.",
    "newzealand.rotoruaFeat1": "Geothermal Bath and Spa Facilities",
    "newzealand.rotoruaFeat2": "Maori Cultural Performances",
    "newzealand.rotoruaFeat3": "Guided Geyser Tour",
    "newzealand.rotoruaFeat4": "Forest Canopy Walk",
    "newzealand.rotoruaFeat5": "Adventure Activities (Zip-lining, Rafting)",
    "newzealand.rotoruaFeat6": "Luxury Spa Resort Stay",
    "newzealand.bayIslands": "Bay Islands",
    "newzealand.bayIslandsRating": "★★★★★ Island Paradise",
    "newzealand.bayIslandsDesc": "Explore 144 picturesque islands with crystal-clear beaches and transparent waters.",
    "newzealand.bayIslandsFeat1": "Luxury Yacht Cruise",
    "newzealand.bayIslandsFeat2": "Killer Whale Swimming Tour",
    "newzealand.bayIslandsFeat3": "Island Hopping Adventure",
    "newzealand.bayIslandsFeat4": "Premium Beach Resort Stay",
    "newzealand.bayIslandsFeat5": "Water Sports & Fishing",
    "newzealand.bayIslandsFeat6": "Seascape Coastal Drive",
    "newzealand.queenstown": "Queenstown - Adventure Capital",
    "newzeeland.queenstownRating": "★★★★★ World's Best Adventure Destination",
    "newzealand.queenstownDesc": "Experience thrilling adventures from bungee jumping to skydiving.",
    "newzealand.queenstownFeat1": "Bungee Jumping & Skydiving",
    "newzealand.queenstownFeat2": "Jet Boat & Rafting",
    "newzealand.queenstownFeat3": "Luxury Lodge & Resort Stay",
    "newzealand.queenstownFeat4": "Fine Dining Experience",
    "newzealand.queenstownFeat5": "Wine Region Tour",
    "newzealand.queenstownFeat6": "Seascape Helicopter Tour",
    "newzealand.experiences": "Curated Experiences",
    "newzealand.experiencesDesc": "Select from a premium activity selection.",
    "newzealand.adventureSports": "Adventure Sports",
    "newzealand.adventureSportsDesc":
      "Professional guides for thrilling activities like bungee jumping, skydiving, paragliding, and more.",
    "newzealand.hiking": "Hiking & Trekking",
    "newzealand.hikingDesc": "Enjoy guided multi-day hikes along scenic trails with luxury lodge accommodations.",
    "newzealand.filmLocations": "Film Locations Tour",
    "newzealand.filmLocationsDesc": "Visit Lord of the Rings and Hobbit filming locations with expert guides.",
    "newzealand.wine": "Wine & Cuisine",
    "newzealand.wineDesc":
      "Enjoy premium wine tasting at famous wineries. Experience fine dining with fresh local ingredients and modern New Zealand cuisine.",
    "newzealand.flights": "Seascape Flights",
    "newzealand.flightsDesc":
      "Experience breathtaking views of glaciers, mountains, and fiords from the air with private helicopter tours.",
    "newzealand.wellness": "Wellness & Spa",
    "newzealand.wellnessDesc": "Relax in luxurious spa treatments at geothermal resorts with hot springs.",
    "newzealand.travelInfo": "Travel Information",
    "newzealand.travelInfoDesc": "Important details for planning your adventure in New Zealand.",
    "newzealand.visa": "Visa and Entry Requirements",
    "newzealand.visaDesc":
      "Most visitors require an eTA or visa. New Zealand offers a welcoming environment with straightforward entry requirements. Check with your country's New Zealand embassy. Our team can assist with all visa document preparation.",
    "newzealand.bestTime": "Best Time to Visit",
    "newzealand.bestTimeDesc":
      "The peak season is from December to February (summer) and September to November (spring). Autumn (March to May) is pleasant with fewer crowds. Plan for 10-14 days for a complete experience.",
    "newzealand.currency": "Currency and Payment",
    "newzealand.currencyDesc":
      "New Zealand Dollar (NZD) is the official currency. Credit cards are widely accepted in cities and towns. Use ATMs where available. Carry cash for remote areas. Good exchange rates are available across the country.",
    "newzealand.language": "Language and Communication",
    "newzealand.languageDesc":
      "English is the main language, with Maori also widely spoken. Excellent mobile and internet connectivity across New Zealand. SIM cards will be arranged for all guests to ensure seamless connectivity during your stay.",
    "newzealand.transport": "Transportation",
    "newzealand.transportDesc":
      "Developed transportation network with domestic flights, scenic drives, and premium rental cars.",
    "newzealand.health": "Health and Safety",
    "newzealand.healthDesc":
      "New Zealand is very safe with world-class medical facilities. Comprehensive travel insurance is recommended. We provide 24/7 emergency support to all guests.",
    "newzealand.ready": "Ready to Experience New Zealand?",
    "newzealand.readyDesc": "Our travel experts are here to create unforgettable adventures in New Zealand.",
    "newzealand.planTrip": "Plan Your Trip",
  },

  ja: {
    // Navigation
    "nav.home": "ホーム",
    "nav.destinations": "目的地",
    "nav.services": "サービス",
    "nav.reviews": "レビュー",
    "nav.contact": "お問い合わせ",
    "nav.bookNow": "今すぐ予約",

    // Index Hero
    "hero.discover": "次の冒険を発見する",
    "hero.explore": "オーストラリアを一緒に探索しましょう",
    "hero.subtitle": "目利きの旅人のために精選されたプレミアム旅行体験",
    "hero.enquire": "今すぐ問い合わせ",

    // Featured Destinations Section
    "destinations.featured": "厳選された目的地",
    "destinations.subtitle": "忘れられない旅のための厳選された場所",
    "destinations.luxury": "ラグジュアリーリゾート",
    "destinations.luxuryDesc": "プレミアム宿泊施設",
    "destinations.adventure": "冒険",
    "destinations.adventureDesc": "スリリングな体験",
    "destinations.beach": "ビーチパラダイス",
    "destinations.beachDesc": "トロピカル逃避行",
    "destinations.cultural": "文化",
    "destinations.culturalDesc": "本物の体験",

    // Gallery Section
    "gallery.title": "ギャラリーの瞬間",
    "gallery.subtitle": "私たちの旅行者からの実話",
    "gallery.luxury": "ラグジュアリーライフ",
    "gallery.adventure": "冒険",
    "gallery.tropical": "トロピカル",
    "gallery.cultural": "文化的",
    "gallery.romance": "ロマンス",

    // Services Section
    "services.title": "私たちのサービス",
    "services.subtitle": "あなたのニーズに合わせたスケジュール旅行ソリューション",
    "services.customItineraries": "カスタム日程表",
    "services.customDesc": "あなただけのために設計された個別旅行計画",
    "services.luxury": "ラグジュアリー宿泊",
    "services.luxuryDesc": "厳選されたプレミアムホテルとリゾート",
    "services.guides": "エキスパートガイド",
    "services.guidesDesc": "没入型体験を提供する知識豊富なローカルエキスパート",
    "services.support": "24/7 サポート",
    "services.supportDesc": "旅の途中での24時間体制のサポート",

    // About Section
    "about.label": "私たちについて",
    "about.title": "プレミアム旅行体験",
    "about.text":
      "ホライズンツアーズ&トラベルズでは、旅は単なる目的地の訪問ではなく、忘れられない思い出を作り、世界で最も美しい場所を優雅で洗練された方法で体験することだと信じています。10年以上の専門知識により、期待を超えたオーダーメイドの旅を企画します。",
    "about.feature1": "厳選された目的地",
    "about.feature2": "エキスパートローカルガイド",
    "about.feature3": "ラグジュアリー宿泊",
    "about.feature4": "パーソナライズされたサービス",
    "about.explore": "さらに詳しく",

    // Reviews Section
    "reviews.label": "クライアントの声",
    "reviews.title": "私たちの旅行者のストーリー",
    "reviews.honeymoon": "完璧なハネムーン体験",
    "reviews.honeymoonText":
      "「ホライズンツアーズが完璧なハネムーン体験を作り出してくれました。ラグジュアリーな宿泊からプライベートサンセットツアーまで、すべての詳細が完璧に計画されました。本当に忘れられません！」",
    "reviews.adventure": "期待を超えたスリリングな冒険",
    "reviews.adventureText":
      "「冒険ツアーは私のすべての期待を超えました。ガイドは知識豊富で、宿泊施設は最高級、そして体験は本当に本物でした。もう次の旅の計画を立てています！」",
    "reviews.family": "家族休暇が簡単に",
    "reviews.familyText":
      "「最初から最後までプレミアムサービス。ホライズンの細部への配慮と個人化されたアプローチが、私たちの家族休暇を本当に特別にしてくれました。価値のあるすべての費用です！」",
    "reviews.business": "比類のないラグジュアリーと洗練",
    "reviews.businessText":
      "「これまで一緒に働いてきた中で最高の旅行代理店です。彼らのラグジュアリーなつながりと現地知識が、自分たちではアクセスできなかった体験への扉を開いてくれました。本当にお勧めです！」",
    "reviews.emily": "エミリー・ミッチェル",
    "reviews.emily2024": "ハネムーン、2024年",
    "reviews.james": "ジェームス・アンダーソン",
    "reviews.james2024": "冒険ツアー、2024年",
    "reviews.sarah": "サラ・ハリソン",
    "reviews.sarah2024": "家族旅行、2024年",
    "reviews.michael": "マイケル・チェン",
    "reviews.michael2024": "ラグジュアリーツアー、2024年",

    // CTA Section
    "cta.ready": "あなたの夢の旅を計画する準備はできていますか？",
    "cta.subtitle": "私たちの旅行エキスパートがあなたのためにカスタマイズされた体験を作成します",
    "cta.start": "今日から計画を開始",

    // Footer
    "footer.premium": "優雅さと専門知識で作られたプレミアム旅行体験。",
    "footer.quickLinks": "クイックリンク",
    "footer.company": "企業",
    "footer.about": "私たちについて",
    "footer.contact": "お問い合わせ",
    "footer.faq": "よくある質問",
    "footer.contactTitle": "お問い合わせ",
    "footer.email": "メール: hello@horizontours.com",
    "footer.phone": "電話: +1 (800) 456-7890",
    "footer.copyright": "© 2025 ホライズンツアーズ&トラベルズ。著作権所有。",

    // Destinations Page
    "destinations.collection": "コレクションを発見",
    "destinations.handpicked": "厳選された目的地",
    "destinations.exploreSubtitle": "世界で最も美しい場所を独占的に精選したものを探索してください",
    "destinations.featured": "私たちの厳選された目的地",
    "destinations.featuredSubtitle": "各目的地は、その独特な魅力とラグジュアリーなオファーのために慎重に選ばれています",
    "destinations.australia": "オーストラリア",
    "destinations.australiaDesc":
      "ラグジュアリーなロッジ、ガイド付きサファリ、そして本物のアボリジニ体験でオーストラリアの素晴らしい美しさを体験してください。素晴らしいグレートバリアリーフから象徴的なアウトバックまで、忘れられない冒険を発見してください。",
    "destinations.australiaRating": "★★★★★ (4.9 / 5)",
    "destinations.premiumDeserts": "プレミアムデザートロッジ",
    "destinations.expertGuides": "エキスパートローカルガイド",
    "destinations.sunsetExp": "サンセット体験",
    "destinations.wildlifeSafaris": "野生動物サファリ",
    "destinations.explore": "探索",
    "destinations.newzealand": "ニュージーランド",
    "destinations.newzealandDesc":
      "冒険活動、ラグジュアリーロッジ、そして素晴らしい自然の不思議でニュージーランドの息を呑むほどの風景を探索してください。フィヨルドと山々から素晴らしいビーチまで、自然の傑作を体験してください。",
    "destinations.newzealandRating": "★★★★★ (5.0 / 5)",
    "destinations.mountainLodges": "マウンテンロッジ",
    "destinations.adventureActivities": "冒険活動",
    "destinations.scenicTours": "風景ツアー",
    "destinations.luxuryWellness": "ラグジュアリーウェルネスリゾート",
    "destinations.ready": "これらの素晴らしい目的地を訪問する準備はできていますか？",
    "destinations.readySubtitle": "私たちの旅行エキスパートに連絡して、完璧な日程表を作成してください",
    "destinations.startPlanning": "計画を開始",

    // Services Page
    "services.whatOffer": "何を提供するか",
    "services.premiumServices": "プレミアム旅行サービス",
    "services.comprehensive": "すべての旅のニーズのための総合ソリューション",
    "services.ourServices": "私たちの総合サービス",
    "services.everything": "忘れられない旅に必要なすべて",
    "services.flights": "フライト手配",
    "services.flightsDesc": "世界中のプレミアム航空会社パートナーとのファーストクラスとビジネスクラスのフライト",
    "services.international": "国際線",
    "services.privateCharters": "プライベートチャーターが利用可能",
    "services.loungeAccess": "専用ラウンジアクセス",
    "services.travelInsurance": "旅行保険を含む",
    "services.accommodations": "ラグジュアリー宿泊",
    "services.accommodationsDesc": "世界中から厳選されたプレミアム5つ星ホテル、リゾート、エクスクルーシブビラ",
    "services.hotelNetwork": "5つ星ホテルネットワーク",
    "services.exclusiveVilla": "エクスクルーシブビラアクセス",
    "services.islandResorts": "プライベートアイランドリゾート",
    "services.complimentary": "相互補完的なアップグレード",
    "services.itineraries": "カスタム日程表",
    "services.itinerariesDesc": "あなたのご希望に合わせて設計されたパーソナライズされた旅行計画",
    "services.bespoke": "ビスポークプランニング",
    "services.flexible": "柔軟なスケジュール",
    "services.modifications": "24/7 の変更",
    "services.dining": "ダイニング体験",
    "services.diningDesc": "ミシュラン星付きレストランと専門的な料理体験",
    "services.chefTable": "シェフテーブル予約",
    "services.winePairings": "ワインペアリング",
    "services.cookingClasses": "料理教室",
    "services.privateDining": "プライベートダイニングセットアップ",
    "services.cultural": "文化ツアー",
    "services.culturalDesc": "エキスパートローカルガイドとの没入型文化体験",
    "services.privateTours": "プライベートツアー",
    "services.museumAccess": "美術館へのアクセス",
    "services.culturalWorkshops": "文化ワークショップ",
    "services.vipEvents": "VIPイベントアクセス",
    "services.support24": "24/7 サポート",
    "services.support24Desc": "24時間体制のサポートと緊急支援",
    "services.hotline": "24/7 ホットライン",
    "services.emergency": "緊急支援",
    "services.coordination": "旅の調整",
    "services.priority": "優先サポート",
    "services.whyChoose": "なぜホライズンを選ぶのか？",
    "services.decades": "忘れられない旅を作成するための数十年の専門知識",
    "services.expertKnowledge": "エキスパート現地知識",
    "services.expertText": "私たちのガイドは数十年の経験とローカルコミュニティとの深いつながりを持っています",
    "services.luxuryNetwork": "ラグジュアリーネットワーク",
    "services.luxuryText": "世界で最も優れたホテル、リゾート、レストランとの排他的パートナーシップ",
    "services.personalizedService": "パーソナライズされたサービス",
    "services.personalizedText": "すべての詳細があなたのご希望と要件に合わせてカスタマイズされています",
    "services.reliability": "信頼性",
    "services.reliabilityText": "15年以上の満足したクライアントと完全な旅の実行記録",
    "services.exploreServices": "完全なサービス範囲を探索",
    "services.contactConsultants":
      "パーソナライズされたサービスパッケージについて、旅行コンサルタントにお問い合わせください",
    "services.consultation": "相談を取得",

    // Contact Page
    "contact.touch": "お問い合わせ",
    "contact.contactTeam": "私たちのチームに連絡",
    "contact.planning": "忘れられない冒険の計画を開始しましょう",
    "contact.sendMessage": "メッセージを送信",
    "contact.name": "あなたの名前",
    "contact.email": "あなたのメール",
    "contact.phone": "電話番号",
    "contact.tourType": "ツアーの種類を選択",
    "contact.luxury": "ラグジュアリーツアー",
    "contact.adventureOpt": "冒険ツアー",
    "contact.familyTrip": "家族旅行",
    "contact.culturalOpt": "文化ツアー",
    "contact.honeymoonOpt": "ハネムーン",
    "contact.dreamTrip": "あなたの夢の旅について教えてください...",
    "contact.sendEnquiry": "問い合わせを送信",
    "contact.information": "お問い合わせ情報",
    "contact.address": "オフィスアドレス",
    "contact.sydney": "123 トラベルプラザ\nシドニー、NSW 2000\nオーストラリア",
    "contact.phoneTitle": "電話",
    "contact.phoneDet": "一般: +1 (800) 456-7890\n携帯: +1 (800) 456-7891\n24/7 利用可能",
    "contact.emailTitle": "メール",
    "contact.emailDet": "一般的なお問い合わせ:\nhello@horizontours.com\n\nサポート:\nsupport@horizontours.com",
    "contact.hoursTitle": "営業時間",
    "contact.hoursDet": "月〜金: 午前9:00 〜 午後6:00\n土: 午前10:00 〜 午後4:00\n日: 休業\n(緊急時は対応可能)",
    "contact.followUs": "フォローする",
    "contact.facebook": "Facebook",
    "contact.instagram": "Instagram",
    "contact.twitter": "Twitter",
    "contact.linkedin": "LinkedIn",
    "contact.faq": "よくある質問",
    "contact.faqSubtitle": "一般的な旅行の質問への答えを見つける",
    "contact.faqQ1": "どのくらい前に予約する必要がありますか？",
    "contact.faqA1":
      "ピークシーズンは2〜3ヶ月前、他の時期は4〜6週間前の予約をお勧めします。ただし、可用性に応じて直前の旅行も手配できます。",
    "contact.faqQ2": "パッケージに含まれるものは？",
    "contact.faqA2":
      "ほとんどのパッケージに含まれるもの：フライト、宿泊施設、送迎、ガイド付きツアー。パッケージによって内容は異なります。見積もりと共に詳細な内訳をお知らせします。",
    "contact.faqQ3": "旅行保険は提供されていますか？",
    "contact.faqA3":
      "はい、包括的な旅行保険があります。旅のキャンセル、医療上の緊急事態、荷物の紛失などがカバーされています。",
    "contact.faqQ4": "日程表をカスタマイズできますか？",
    "contact.faqA4":
      "すべてのパッケージはカスタマイズ可能です。ご希望をお知らせいただければ、エキスパートがあなただけのための個別日程表を作成します。",
    "contact.faqQ5": "計画を変更する必要がある場合は？",
    "contact.faqA5":
      "24/7サポートで計画を変更できます。変更は可用性とタイミングに応じた追加費用がかかる場合があります。",
    "contact.faqQ6": "デポジットは返金可能ですか？",
    "contact.faqA6":
      "払い戻しポリシーはパッケージと予約日によって異なります。一般的に、デポジットは返金不可ですが、12ヶ月以内に別の日付に移すことができます。",
    "contact.readyAdventure": "冒険を開始する準備はできていますか？",
    "contact.readySubtitle": "私たちの旅行エキスパートが完璧な旅の計画をお手伝いします",
    "contact.consultation": "相談をスケジュール",

    // Reviews Page
    "reviews.hear": "クライアントの声をお聞きください",
    "reviews.testimonials": "証言とレビュー",
    "reviews.realStories": "ホライズンの卓越さを体験した旅行者からの実話",
    "reviews.stories": "私たちの旅行者のストーリー",
    "reviews.storiesSubtitle": "素晴らしい体験を共有している何千人もの満足したクライアント",
    "reviews.honeymoonTitle": "完璧なハネムーン体験",
    "reviews.honeymoonFull":
      "「ホライズンが最も魔法的なハネムーンを創り出してくれました。プライベートプールのあるビーチフロントヴィラから、プライベートシェフが準備したロマンティックなサンセットディナーまで、すべてが完璧に実行されました。旅全体を通じて王様の気分でした。強くお勧めします！」",
    "reviews.adventureTitle": "期待を超えたスリリングな冒険",
    "reviews.adventureFull":
      "「冒険ツアーは本当に素晴らしかった。ガイドは現地野生動物についての素晴らしい知識を持っており、宿泊施設も一流、体験も本当に本物でした。ロッククライミング、ジップライニング、手つかずの野生地を通るハイキング。すべてが完璧に組織されていました。もう次の旅の予約を待つことができません！」",
    "reviews.familyTitle": "家族休暇が簡単に",
    "reviews.familyFull":
      "「お子さんとのご旅行はストレスがかかることがありますが、ホライズンはすべてをシームレスにしてくれました。子供向けのアクティビティを手配し、ホテルが優れた施設を備えていることを確認し、柔軟なスケジュールを提供してくれました。家族全員が最高の時間を過ごしました。本当に価値がありました！」",
    "reviews.luxuryTitle": "比類のないラグジュアリーと洗練",
    "reviews.luxuryFull":
      "「頻繁に旅行する者として、多くの代理店と仕事をしてきましたが、ホライズンは際立っています。彼らのラグジュアリーなつながりが、自分たちではアクセスできなかった限定的な体験への扉を開いてくれました。プライベートヨット、VIPコンサートチケット、ミシュランの星、素晴らしい食事。本当に素晴らしかった！」",
    "reviews.cultural": "文化",
    "reviews.culturalTitle": "本物の文化への没入",
    "reviews.culturalFull":
      "「本物の文化を体験したかったので、観光地ではなく。ホライズンが見事に成功しました。ガイドが地元の家族、職人、隠れた宝物を紹介してくれました。本物の地元料理を味わい、伝統を直接学び、本物のつながりを作りました。本当に変革的な経験でした！」",
    "reviews.businessTitle": "企業旅行の完璧さ",
    "reviews.businessFull":
      "「ホライズンが企業レトリートの手配をすべて完璧に処理しました。ラグジュアリーな宿泊、一流の会場設営、チームビルディングアクティビティ、シームレスなロジスティクス。エグゼクティブとチームはそれを愛しました。計画プロセスも簡単でした。素晴らしいパートナーです！」",
    "reviews.amanda": "アマンダ・リー",
    "reviews.amanda2024": "ベトナム文化ツアー、2024年",
    "reviews.david": "デビッド・ロバーツ",
    "reviews.david2024": "企業レトリート、シンガポール 2024年",
    "reviews.averageRating": "平均評価",
    "reviews.happyClients": "満足したクライアント",
    "reviews.yearsExperience": "年の経験",
    "reviews.destinations": "目的地",
    "reviews.join": "何千人もの満足した旅行者に参加",
    "reviews.joinSubtitle": "ホライズンの違いを体験してください。今日あなたの夢の旅を予約してください",
    "reviews.bookTrip": "旅を予約",

    // Australia Page
    "australia.explore": "オーストラリアの地を探索する",
    "australia.title": "オーストラリア",
    "australia.subtitle": "世界で最も独特な大陸でのラグジュアリーな冒険を体験",
    "australia.why": "オーストラリアを選ぶ理由",
    "australia.whySubtitle": "コントラストと驚きの旅",
    "australia.diverse": "多様な風景",
    "australia.diverseDesc":
      "赤い砂漠や熱帯雨林から世界クラスのビーチまで、オーストラリアは訪問者を息をのむほどの比類のない自然の多様性を提供します。",
    "australia.wildlife": "ユニークな野生動物",
    "australia.wildlifeDesc":
      "地球上に他に存在しない象徴的な動物を体験してください。天然の生息地での忘れられない野生動物の出会いを体験してください。",
    "australia.luxury": "ラグジュアリー体験",
    "australia.luxuryDesc":
      "5つ星の海岸沿いリゾートから独占的なアウトバックロッジまで、世界クラスのラグジュアリー宿泊施設でおもてなしを受けてください。",
    "australia.cultural": "文化的豊かさ",
    "australia.culturalDesc":
      "古代アボリジニの伝統、世界的に有名な料理、冒険と文化が融合した活気のある大都市を発見してください。",
    "australia.highlights": "必見のハイライト",
    "australia.highlightsDesc": "オーストラリアで最も象徴的で息をのむほどの目的地を発見",
    "australia.reef": "グレートバリアリーフ",
    "australia.reefRating": "★★★★★ 世界最大のサンゴシステム",
    "australia.reefDesc":
      "透き通った水、活気に満ちた海洋生物、世界クラスのシュノーケリングとダイビングの機会を備えた世界で最も壮観なサンゴ生態系を体験してください。私たちのラグジュアリーなリーフ体験には、プライベートボートツアー、水中写真セッション、独占的なアイランドステイが含まれます。",
    "australia.reefFeat1": "世界クラスのシュノーケリング＆ダイビング",
    "australia.reefFeat2": "プライベートヨット遠足",
    "australia.reefFeat3": "海洋生物ツアー",
    "australia.reefFeat4": "ラグジュアリーアイランドリゾート",
    "australia.reefFeat5": "写真体験",
    "australia.reefFeat6": "サンセットビーチディナー",
    "australia.uluru": "ウルル - 聖なるアウトバック",
    "australia.uluruRating": "★★★★★ 象徴的な砂漠の地形",
    "australia.uluruDesc":
      "この雄大な348メートルの一枚岩に驚嘆してください。数千年の間、先住民にとって神聖である場所です。アウトバックの素晴らしい美しさを体験してください。",
    "australia.uluruFeat1": "アボリジニガイド付きツアー",
    "australia.uluruFeat2": "劇的な日の出/日没の見晴らし台",
    "australia.uluruFeat3": "ラグジュアリー砂漠ロッジ",
    "australia.uluruFeat4": "文化ワークショップ",
    "australia.uluruFeat5": "ラクダトレッキング",
    "australia.uluruFeat6": "星観察体験",
    "australia.sydney": "シドニーハーバー",
    "australia.sydneyRating": "★★★★★ 象徴的なモダンシティ",
    "australia.sydneyDesc":
      "象徴的なランドマークが活気のある都市文化と出会うオーストラリアで最も有名な都市で、充実した時間を過ごしてください。",
    "australia.sydneyFeat1": "オペラハウス体験",
    "australia.sydneyFeat2": "ハーバークルーズ＆セーリング",
    "australia.sydneyFeat3": "ビーチリゾート",
    "australia.sydneyFeat4": "ファインダイニング体験",
    "australia.sydneyFeat5": "アートギャラリー＆博物館",
    "australia.sydneyFeat6": "コースタルウォーク",
    "australia.daintree": "ダイントリーレインフォレスト",
    "australia.daintreeRating": "★★★★★ ユネスコ世界遺産ジャングル",
    "australia.daintreeDesc":
      "世界で最も古い熱帯雨林の一つを探索してください。ガイド付きジャングルウォーク、野生動物スポッティング、素晴らしい自然に囲まれたラグジュアリーなエコロッジの滞在に浸りましょう。",
    "australia.daintreeFeat1": "ガイド付きジャングルウォーク",
    "australia.daintreeFeat2": "野生動物スポッティングツアー",
    "australia.daintreeFeat3": "ラグジュアリーエコロッジ",
    "australia.daintreeFeat4": "リバークルーズ",
    "australia.daintreeFeat5": "キャノピーウォーク",
    "australia.daintreeFeat6": "インディジェナス文化ツアー",
    "australia.experiences": "厳選された体験",
    "australia.experiencesDesc": "プレミアム活動のセレクションから選択",
    "australia.beachResorts": "ラグジュアリービーチリゾート",
    "australia.beachResortDesc": "世界クラスの海岸沿いリゾート。ビーチサイドのラグジュアリーを体験してください。",
    "australia.reefAdventures": "リーフアドベンチャー",
    "australia.reefAdvDesc":
      "海洋ガイド付きの専門的なシュノーケリングとダイビング遠足。活気に満ちたサンゴ庭園とトロピカルフィッシュを探索してください。",
    "australia.wildlifeEncounters": "野生動物との出会い",
    "australia.wildlifeEncDesc":
      "コアラ、カンガルー、カモノハシなど、ユニークなオーストラリアの動物を自然の生息地で見つけるためのガイド付きツアー。",
    "australia.outbackAdventures": "アウトバックアドベンチャー",
    "australia.outbackAdvDesc":
      "4x4サファリ、ラクダトレッキング、オーストラリアンアウトバックでの星の下でのキャンプを含む、スリリングな砂漠体験。",
    "australia.gourmetDining": "グルメダイニング",
    "australia.gourmetDesc":
      "新鮮な地元の食材を特徴とした、モダンなオーストラリア料理、世界クラスのワインでのファインダイニング体験。",
    "australia.wellness": "ウェルネスリトリート",
    "australia.wellnessDesc":
      "シーニックロケーションでのラグジュアリースパとウェルネス体験。リラクゼーション、ヨガ、瞑想、ホリスティック治療を組み合わせています。",
    "australia.travelInfo": "旅の情報",
    "australia.travelInfoDesc": "オーストラリアの冒険を計画するための重要な詳細",
    "australia.visa": "ビザと入国要件",
    "australia.visaDesc":
      "ほとんどの国際的な訪問者はeTA（電子トラベル認可）またはビザが必要です。特定の要件については、お住まいの国のオーストラリア大使館に確認してください。ビザ書類作成に支援できます。",
    "australia.bestTime": "訪問に最適な時期",
    "australia.bestTimeDesc":
      "ピークシーズンは4月から9月（秋と冬）の過ごしやすい天気です。北部は5月から10月が理想的です。夏（12月から2月）は暑いですがビーチ好きに最適です。完全な体験には7～14日間を計画してください。",
    "australia.currency": "通貨と支払い",
    "australia.currencyDesc":
      "オーストラリアドル（AUD）は公式通貨です。都市ではクレジットカードが広く受け入れられています。遠隔地では現金を持参してください。良い為替レートが利用可能です。",
    "australia.language": "言語と通信",
    "australia.languageDesc":
      "英語は公用語です。オーストラリア全域でモバイルネットワークが優れています。すべてのゲストのためにSIMカードとモバイルサービスを手配し、滞在中のシームレスな接続を確保します。",
    "australia.transport": "輸送",
    "australia.transportDesc":
      "優れた国内線がメインの都市を接続しています。セルフドライブ体験用のプレミアムレンタカーが利用可能です。旅全体を通じてプライベート送迎、国内便、ラグジュアリー輸送を手配します。",
    "australia.health": "健康と安全",
    "australia.healthDesc":
      "オーストラリアは旅行者にとって非常に安全です。包括的な旅行保険をお勧めします。世界クラスの医療施設が利用可能です。すべてのゲストに対して24/7のサポートと緊急支援を提供します。",
    "australia.ready": "オーストラリアを体験する準備ができていますか？",
    "australia.readyDesc": "私たちの旅行専門家がすてきなオーストラリアの冒険を創作するためにここにいます",
    "australia.planTrip": "旅行計画",

    // New Zealand Page
    "newzealand.discover": "中つ国を発見する",
    "newzealand.title": "ニュージーランド",
    "newzealand.subtitle": "楽園でのブレステーキングな風景とラグジュアリーな冒険を体験してください",
    "newzealand.why": "ニュージーランドを選ぶ理由",
    "newzealand.whySubtitle": "楽園の端での冒険",
    "newzealand.scenery": "素晴らしい景色",
    "newzealand.sceneryDesc":
      "劇的なフィヨルド、雪をかぶった山、澄んだ湖、魅惑的な森が世界で最も壮観なランドスケープを作り出します。",
    "newzealand.adventureCapital": "冒険の首都",
    "newzealand.adventureCapitalDesc":
      "バンジージャンピング、スカイダイビングからハイキング、カヤックまで、ニュージーランドはすべてのアドレナリンレベルでスリリングな冒険を提供します。",
    "newzealand.luxury": "ラグジュアリー宿泊",
    "newzealand.luxuryDesc":
      "パノラマビューの独占的ロッジ、湖畔のリゾート、ブティックホテルは比類のないラグジュアリーと快適さを提供します。",
    "newzealand.cultural": "文化遺産",
    "newzealand.culturalDesc":
      "マオリ文化、ロード・オブ・ザ・リング撮影地、革新的な料理、旅全体を通じてのフレンドリーなキウイの親切をお探索してください。",
    "newzealand.highlights": "必見のハイライト",
    "newzealand.highlightsDesc": "ニュージーランドで最も象徴的で息をのむほどの目的地を発見してください",
    "newzealand.milford": "ミルフォードサウンド",
    "newzealand.milfordRating": "★★★★★ 世界の八番目の不思議",
    "newzealand.milfordDesc":
      "地球上で最も劇的なフィヨルドの風景を体験してください。そびえ立つ崖、滝、熱帯雨林に囲まれた澄んだ水を航海してください。ミルフォードサウンドは忘れられない景色と世界クラスの写真機会を提供します。",
    "newzealand.milfordFeat1": "ラグジュアリーフィヨルドクルーズ",
    "newzealand.milfordFeat2": "プライベートヨット体験",
    "newzealand.milfordFeat3": "シーニックカヤックツアー",
    "newzealand.milfordFeat4": "滝の写真",
    "newzealand.milfordFeat5": "野生動物スポッティング（アザラシ、イルカ）",
    "newzealand.milfordFeat6": "マルチデイハイキング冒険",
    "newzealand.rotorua": "ロトルアの地熱の不思議",
    "newzealand.rotoruaRating": "★★★★★ 地熱パラダイス",
    "newzealand.rotoruaDesc":
      "この地熱ホットスポットで地球の自然の不思議を発見してください。泡立つ泥池、噴出するガイサー、天然温泉を探索してください。ラグジュアリー地熱スパと独占的なマオリ文化体験でアドベンチャーを組み合わせてください。",
    "newzealand.rotoruaFeat1": "地熱温浴と温泉施設",
    "newzealand.rotoruaFeat2": "マオリ文化的なパフォーマンス",
    "newzealand.rotoruaFeat3": "ガイド付きガイサーツアー",
    "newzealand.rotoruaFeat4": "フォレストキャノピーウォーク",
    "newzealand.rotoruaFeat5": "アドベンチャーアクティビティ（ジップライン、ラフティング）",
    "newzealand.rotoruaFeat6": "ラグジュアリーサーマルリゾートステイ",
    "newzealand.bayIslands": "アイランドベイ",
    "newzealand.bayIslandsRating": "★★★★★ アイランドパラダイス",
    "newzealand.bayIslandsDesc":
      "144の絵のような島々を澄んだビーチと透明な水で探索してください。プライベートヨットクルーズ、アイランドホッピング、イルカとの水泳、そしてこのトロピカルパラダイスのラグジュアリービーチフロントリゾートでのリラクゼーションをお楽しみください。",
    "newzealand.bayIslandsFeat1": "ラグジュアリーヨットクルーズ",
    "newzealand.bayIslandsFeat2": "イルカ水泳ツアー",
    "newzealand.bayIslandsFeat3": "アイランドホッピング冒険",
    "newzealand.bayIslandsFeat4": "プレミアムビーチリゾート",
    "newzealand.bayIslandsFeat5": "ウォータースポーツ＆釣り",
    "newzealand.bayIslandsFeat6": "シーニックコースタルドライブ",
    "newzealand.queenstown": "クイーンズタウン - 冒険の首都",
    "newzealand.queenstownRating": "★★★★★ 世界で最高のアドベンチャー目的地",
    "newzealand.queenstownDesc":
      "素晴らしい山の景色でスリリングな冒険を体験してください。バンジージャンピングとスカイダイビングからワインテイスティングとグルメダイニングまで、クイーンズタウンはアドレナリンとラグジュアリーの完璧なブレンドを提供します。",
    "newzealand.queenstownFeat1": "バンジージャンピング＆スカイダイビング",
    "newzealand.queenstownFeat2": "ジェットボート＆ラフティング",
    "newzealand.queenstownFeat3": "ラグジュアリーロッジ＆リゾート",
    "newzealand.queenstownFeat4": "ファインダイニング体験",
    "newzealand.queenstownFeat5": "ワイン地域ツアー",
    "newzealand.queenstownFeat6": "シーニックヘリコプターツアー",
    "newzealand.experiences": "厳選された体験",
    "newzealand.experiencesDesc": "プレミアム活動のセレクションから選択",
    "newzealand.adventureSports": "アドベンチャースポーツ",
    "newzealand.adventureSportsDesc":
      "バンジージャンピング、スカイダイビング、パラグライディング、その他の世界クラスの場所でのスリリングなアクティビティ用のプロのガイド。",
    "newzealand.hiking": "ハイキング＆トレッキング",
    "newzealand.hikingDesc":
      "ラグジュアリーロッジ宿泊施設を備えたシーニックトレイル沿いのガイド付きマルチデイハイク。フィヨルドランドの最も壮観なウォーキングを体験してください。",
    "newzealand.filmLocations": "映画ロケーションツアー",
    "newzealand.filmLocationsDesc":
      "ロードオブザリング とホビット撮影地を訪問してください。エキスパートガイド付きで映画のモーメント再体験を。",
    "newzealand.wine": "ワインと料理",
    "newzealand.wineDesc":
      "有名なワイナリーでのプレミアムワインテイスティング。地元の食材と現代的なニュージーランド料理を特徴とするファインダイニング体験。",
    "newzealand.flights": "シーニックフライト",
    "newzealand.flightsDesc": "氷河、山、フィヨルドを壮観な空中視点から展示するプライベートヘリコプターツアー。",
    "newzealand.wellness": "ウェルネス＆スパ",
    "newzealand.wellnessDesc":
      "素晴らしい自然環境での地熱温泉を備えたラグジュアリースパトリートメント、ヨガリトリート、ウェルネス体験。",
    "newzealand.travelInfo": "旅の情報",
    "newzealand.travelInfoDesc": "ニュージーランドの冒険を計画するための重要な詳細",
    "newzealand.visa": "ビザと入国要件",
    "newzealand.visaDesc":
      "ほとんどの訪問者はeTAまたはビザが必要です。ニュージーランドはストレートフォーマーな入国要件を持つ歓迎的な環境を提供します。大使館で確認してください。チームがすべての書類作成に支援できます。",
    "newzealand.bestTime": "訪問に最適な時期",
    "newzealand.bestTimeDesc":
      "ピークシーズンは12月から2月（夏）および9月から11月（春）の暖かい天気です。秋（3月から5月）は過ごしやすく群衆が少ないです。完全な体験には10～14日間をお勧めします。",
    "newzealand.currency": "通貨と支払い",
    "newzealand.currencyDesc":
      "ニュージーランドドル（NZD）は公式通貨です。都市や大きな町ではクレジットカードが広く受け入れられています。ATMがいたるところに利用可能です。遠隔地では現金を持参してください。国全体で良い為替レートが利用可能です。",
    "newzealand.language": "言語と通信",
    "newzealand.languageDesc":
      "英語は主要言語で、マオリ語が広く話されています。全国で優れたモバイルとインターネット接続。すべてのゲストのためにSIMカードを手配し、24/7接続サービスを提供します。",
    "newzealand.transport": "輸送",
    "newzealand.transportDesc":
      "国内便、シーニックドライブ、プレミアムレンタカーを備えた十分に発展した輸送ネットワーク。旅全体を通じてすべての送迎、便、ラグジュアリー輸送を手配します。",
    "newzealand.health": "健康と安全",
    "newzealand.healthDesc":
      "ニュージーランドは非常に安全で優れた医療施設を持っています。包括的な旅行保険をお勧めします。すべてのゲストに24/7の緊急サポートと医療支援を提供します。",
    "newzealand.ready": "ニュージーランドを体験する準備ができていますか？",
    "newzealand.readyDesc": "私たちの旅行専門家がすてきなニュージーランドの冒険を創作するためにここにいます",
    "newzealand.planTrip": "旅行計画",
  },
}

// Initialize language from localStorage or default to English
function initLanguage() {
  const savedLanguage = localStorage.getItem("preferredLanguage") || "en"
  setLanguage(savedLanguage)
}

// Set current language and update DOM
function setLanguage(lang) {
  if (!translations[lang]) lang = "en"
  localStorage.setItem("preferredLanguage", lang)

  // Update all elements with data-i18n attribute
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n")
    if (translations[lang][key]) {
      if (element.tagName === "INPUT" || element.tagName === "TEXTAREA") {
        element.placeholder = translations[lang][key]
      } else if (element.tagName === "BUTTON" && element.classList.contains("cta-btn")) {
        element.textContent = translations[lang][key]
      } else {
        element.textContent = translations[lang][key]
      }
    }
  })

  // Update select options
  document.querySelectorAll("select option").forEach((option) => {
    const key = option.getAttribute("data-i18n")
    if (key && translations[lang][key]) {
      option.textContent = translations[lang][key]
    }
  })

  // Update language selector active state
  document.querySelectorAll(".lang-selector button").forEach((btn) => {
    btn.classList.remove("active")
    if (btn.getAttribute("data-lang") === lang) {
      btn.classList.add("active")
    }
  })

  // Update HTML lang attribute
  document.documentElement.lang = lang
}

// Initialize on page load
document.addEventListener("DOMContentLoaded", initLanguage)
