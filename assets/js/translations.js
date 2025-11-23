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
