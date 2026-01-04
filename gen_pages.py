
import os

template_path = 'destinations/template.html'
with open(template_path, 'r', encoding='utf-8') as f:
    template = f.read()

pages = [
    {
        "path": "destinations/australia/cairns.html",
        "replacements": {
            "{{CITY_NAME}}": "Cairns",
            "{{COUNTRY}}": "Australia",
            "{{COUNTRY_SLUG}}": "australia",
            "{{ACTIVITY_TITLE}}": "Great Barrier Reef Day Tour",
            "{{RATING}}": "4.8",
            "{{REVIEW_COUNT}}": "3,405",
            "{{PROVIDER}}": "Reef Magic Cruises",
            "{{DURATION}}": "8 hours",
            "{{DESCRIPTION}}": "Experience the magic of the Great Barrier Reef. This full-day adventure takes you to pristine outer reef locations where you can snorkel, dive, and explore the world's largest coral reef system.",
            "{{HIGHLIGHTS}}": "<li>5 hours at the Outer Barrier Reef</li><li>Unlimited snorkeling with equipment</li><li>Glass bottom boat tour</li><li>Hot and cold buffet lunch</li>",
            "{{PRICE}}": "A$299"
        }
    },
    {
        "path": "destinations/australia/brisbane.html",
        "replacements": {
            "{{CITY_NAME}}": "Brisbane",
            "{{COUNTRY}}": "Australia",
            "{{COUNTRY_SLUG}}": "australia",
            "{{ACTIVITY_TITLE}}": "Brisbane River Cruise & Koala Sanctuary",
            "{{RATING}}": "4.7",
            "{{REVIEW_COUNT}}": "1,200",
            "{{PROVIDER}}": "Mirimar Cruises",
            "{{DURATION}}": "6 hours",
            "{{DESCRIPTION}}": "Cruise along the Brisbane River to the famous Lone Pine Koala Sanctuary. Enjoy a scenic boat ride followed by an up-close encounter with Australia's most iconic wildlife.",
            "{{HIGHLIGHTS}}": "<li>Scenic cruise on the Brisbane River</li><li>Entry to Lone Pine Koala Sanctuary</li><li>Hold a koala and hand-feed kangaroos</li><li>Commentary about local history</li>",
            "{{PRICE}}": "A$110"
        }
    },
    {
        "path": "destinations/australia/gold-coast.html",
        "replacements": {
             "{{CITY_NAME}}": "Gold Coast",
            "{{COUNTRY}}": "Australia",
            "{{COUNTRY_SLUG}}": "australia",
            "{{ACTIVITY_TITLE}}": "Surf Lesson & Theme Park Pass",
            "{{RATING}}": "4.9",
            "{{REVIEW_COUNT}}": "2,150",
            "{{PROVIDER}}": "Get Wet Surf School",
            "{{DURATION}}": "2 Days",
            "{{DESCRIPTION}}": "Catch your first wave at Surfers Paradise with a beginner lesson, then enjoy unlimited entry to Warner Bros. Movie World, Sea World, and Wet'n'Wild.",
            "{{HIGHLIGHTS}}": "<li>2-hour beginner surf lesson</li><li>3-day pass to top theme parks</li><li>Professional instructor</li><li>Equipment included</li>",
            "{{PRICE}}": "A$189"
        }
    },
    {
        "path": "destinations/australia/whitsundays.html",
        "replacements": {
            "{{CITY_NAME}}": "Whitsundays",
            "{{COUNTRY}}": "Australia",
            "{{COUNTRY_SLUG}}": "australia",
            "{{ACTIVITY_TITLE}}": "Whitehaven Beach Sailing Adventure",
            "{{RATING}}": "5.0",
            "{{REVIEW_COUNT}}": "5,600",
            "{{PROVIDER}}": "Camira Sailing",
            "{{DURATION}}": "10 hours",
            "{{DESCRIPTION}}": "Sail through the Whitsunday Islands on a high-speed catamaran. Visit the world-famous Whitehaven Beach, hike to Hill Inlet lookout, and enjoy a BBQ lunch on board.",
            "{{HIGHLIGHTS}}": "<li>Visit Whitehaven Beach</li><li>Guided hike to Hill Inlet</li><li>Snorkeling at inner reef</li><li>All-inclusive BBQ lunch and drinks</li>",
            "{{PRICE}}": "A$239"
        }
    },
    {
        "path": "destinations/australia/sydney.html",
        "replacements": {
            "{{CITY_NAME}}": "Sydney",
            "{{COUNTRY}}": "Australia",
            "{{COUNTRY_SLUG}}": "australia",
            "{{ACTIVITY_TITLE}}": "Sydney Opera House & Harbour Cruise",
            "{{RATING}}": "4.8",
            "{{REVIEW_COUNT}}": "10,230",
            "{{PROVIDER}}": "Sydney Opera House",
            "{{DURATION}}": "4 hours",
            "{{DESCRIPTION}}": "Step inside the iconic Sydney Opera House for a guided tour, then board a luxury vessel for a lunch cruise with stunning views of the Harbour Bridge.",
            "{{HIGHLIGHTS}}": "<li>Official guided tour of Opera House</li><li>2-hour premium lunch cruise</li><li>3-course a la carte dining</li><li>Unbeatable harbour views</li>",
            "{{PRICE}}": "A$175"
        }
    },
    {
        "path": "destinations/australia/melbourne.html",
        "replacements": {
            "{{CITY_NAME}}": "Melbourne",
            "{{COUNTRY}}": "Australia",
            "{{COUNTRY_SLUG}}": "australia",
            "{{ACTIVITY_TITLE}}": "Great Ocean Road Full-Day Tour",
            "{{RATING}}": "4.7",
            "{{REVIEW_COUNT}}": "8,900",
            "{{PROVIDER}}": "Go West Tours",
            "{{DURATION}}": "12 hours",
            "{{DESCRIPTION}}": "Travel one of the world's most scenic coastal drives. See the Twelve Apostles, Loch Ard Gorge, and spot wild koalas in the otway rainforest.",
            "{{HIGHLIGHTS}}": "<li>Scenic drive along Great Ocean Road</li><li>Stop at the Twelve Apostles</li><li>Rainforest walk in Maits Rest</li><li>Wildlife spotting</li>",
            "{{PRICE}}": "A$145"
        }
    },
    {
        "path": "destinations/australia/tasmania.html",
        "replacements": {
            "{{CITY_NAME}}": "Tasmania",
            "{{COUNTRY}}": "Australia",
            "{{COUNTRY_SLUG}}": "australia",
            "{{ACTIVITY_TITLE}}": "Cradle Mountain & Dove Lake",
            "{{RATING}}": "4.9",
            "{{REVIEW_COUNT}}": "980",
            "{{PROVIDER}}": "Tassie Tours",
            "{{DURATION}}": "10 hours",
            "{{DESCRIPTION}}": "Explore the untamed wilderness of Tasmania. Hike around Dove Lake at the foot of Cradle Mountain and breathe the world's cleanest air.",
            "{{HIGHLIGHTS}}": "<li>Cradle Mountain National Park entry</li><li>Guided walk at Dove Lake</li><li>Visit Sheffield town of murals</li><li>Cheese tasting at Ashgrove</li>",
            "{{PRICE}}": "A$165"
        }
    },
    {
        "path": "destinations/new-zealand/rotorua.html",
        "replacements": {
            "{{CITY_NAME}}": "Rotorua",
            "{{COUNTRY}}": "New Zealand",
            "{{COUNTRY_SLUG}}": "newzealand",
            "{{ACTIVITY_TITLE}}": "Te Puia Geothermal & Maori Culture",
            "{{RATING}}": "4.8",
            "{{REVIEW_COUNT}}": "2,400",
            "{{PROVIDER}}": "Te Puia",
            "{{DURATION}}": "4 hours",
            "{{DESCRIPTION}}": "Immerse yourself in Maori culture and witness the power of nature. See the Pohutu Geyser erupt and visit the Kiwi Conservation Centre.",
            "{{HIGHLIGHTS}}": "<li>Traditional Maori welcome & concert</li><li>Guided tour of geothermal valley</li><li>Buffet Hangi dinner</li><li>See live Kiwi birds</li>",
            "{{PRICE}}": "NZ$160"
        }
    },
    {
        "path": "destinations/new-zealand/auckland.html",
        "replacements": {
            "{{CITY_NAME}}": "Auckland",
            "{{COUNTRY}}": "New Zealand",
            "{{COUNTRY_SLUG}}": "newzealand",
            "{{ACTIVITY_TITLE}}": "America's Cup Sailing Experience",
            "{{RATING}}": "4.9",
            "{{REVIEW_COUNT}}": "1,800",
            "{{PROVIDER}}": "Explore Group",
            "{{DURATION}}": "2 hours",
            "{{DESCRIPTION}}": "Join the crew of an actual America's Cup yacht. Take the helm or grind the winches as you sail Waitemata Harbour on a racing vessel.",
            "{{HIGHLIGHTS}}": "<li>Sail on a genuine race yacht</li><li>Participate in sailing duties</li><li>Stunning views of Auckland skyline</li><li>No experience necessary</li>",
            "{{PRICE}}": "NZ$195"
        }
    },
    {
        "path": "destinations/new-zealand/christchurch.html",
        "replacements": {
            "{{CITY_NAME}}": "Christchurch",
            "{{COUNTRY}}": "New Zealand",
            "{{COUNTRY_SLUG}}": "newzealand",
            "{{ACTIVITY_TITLE}}": "TranzAlpine Train & Arthurs Pass",
            "{{RATING}}": "4.8",
            "{{REVIEW_COUNT}}": "3,100",
            "{{PROVIDER}}": "Great Journeys NZ",
            "{{DURATION}}": "10 hours",
            "{{DESCRIPTION}}": "Experience one of the world's greatest train journeys. Travel across the Canterbury Plains into the soaring Southern Alps to Arthur's Pass.",
            "{{HIGHLIGHTS}}": "<li>Return journey on TranzAlpine train</li><li>Guided tour of Arthur's Pass</li><li>Short walks in the National Park</li><li>Morning tea included</li>",
            "{{PRICE}}": "NZ$349"
        }
    }
]

for page in pages:
    content = template
    
    # Calculate relative prefix based on path depth
    depth = page['path'].count('/')
    rel_prefix = '../' * (depth - 0) if depth > 0 else ''
    # Since pages are in destinations/australia/ (depth 2), rel_prefix should be ../../
    # Let's be explicit: 
    # destinations/australia/sydney.html has depth 2. 
    # Rel path to root is ../../
    rel_prefix = '../' * depth
    
    # Add REL_PREFIX to replacements
    page['replacements']["{{REL_PREFIX}}"] = rel_prefix
    
    for key, value in page['replacements'].items():
        content = content.replace(key, value)
    
    with open(page['path'], 'w', encoding='utf-8') as f:
        f.write(content)
        print(f"Generated {page['path']} with prefix {rel_prefix}")

print("All pages generated successfully.")
