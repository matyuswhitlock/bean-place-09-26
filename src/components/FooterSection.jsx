// ============================================================
// FOOTERSECTION.JSX — Site Footer with Map (Day 3)
// ============================================================
// The Footer contains a Leaflet map showing the store location,
// navigation columns (Shop, Company, Support), social media
// icons, and copyright info.
//
// WHAT YOU WILL LEARN:
// - Using third-party libraries (Leaflet) for interactive maps
// - useEffect with useRef to manage non-React DOM elements
// - Organizing navigation data as objects/arrays
// - Rendering lists with .map()
// - SVG icons as React components (function that returns JSX)
// - Dynamic values like currentYear with new Date().getFullYear()
//
// CONCEPTS COVERED:
// - useEffect cleanup (map.remove())
// - useRef to hold a DOM reference and a mutable value
// - Passing render functions as props (icon components)
// - ScrollReveal for scroll-triggered animations
//
// ============================================================

// STEP 1: Imports
// From "react": import { useEffect, useRef }
// From "leaflet": import L from "leaflet"
// Also import: "leaflet/dist/leaflet.css"
// Import UI components: Separator, ScrollReveal
// Import the logo: import logo from "../assets/Beans_logo.png"

/* --- YOUR IMPORTS GO HERE --- */
import {useEffect, useRef} from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import Separator from "./ui/Separator";
import ScrollReveal from "./ui/ScrollReveal";
import logo from "../assets/Beans_logo.png";




// STEP 2: Navigation data (outside the component)
// Create a `navigation` object with these keys:
//   shop: array of { name, href } objects
//     - "All Coffee" -> #shop, "Single Origin" -> #shop,
//       "Blends" -> #shop, "Subscriptions" -> #
//   company: array of { name, href } objects
//     - "About" -> #about, "Our Roastery" -> #about,
//       "Careers" -> #, "Press" -> #
//   support: array of { name, href } objects
//     - "Contact Us" -> #contact, "Shipping & Returns" -> #,
//       "FAQ" -> #, "Wholesale" -> #contact
//   social: array of { name, href, icon } objects
//     - Facebook, Instagram, X (Twitter)
//     - Each icon is a function: (props) => <svg ...>{path}</svg>
//
// Also: const currentYear = new Date().getFullYear();

/* --- YOUR DATA OBJECTS GO HERE --- */


// STEP 3: LocationMap component (helper component)
// function LocationMap() { ... }
//   - Use useRef for mapRef (DOM element) and mapInstance (Leaflet map)
//   - In useEffect, create the map at coordinates [39.7386, -104.3256]
//   - Add a dark tile layer from CARTO
//   - Add a custom marker with a popup
//   - Return cleanup function that calls map.remove()
//   - Render: <div ref={mapRef} className="footer-map" />

/* --- YOUR LOCATIONMAP COMPONENT GOES HERE --- */


// STEP 4: Create and export FooterSection
// export default function FooterSection() { ... }
//
// JSX Structure:
//   <footer className="footer">
//     <div> (container with max-width and padding)
//       - <LocationMap /> wrapped in ScrollReveal
//       - Grid with 4 columns:
//         Column 1: Logo image + description text + social icons
//         Column 2: "Shop" links rendered with .map()
//         Column 3: "Company" links rendered with .map()
//         Column 4: "Support" links rendered with .map()
//       - <Separator />
//       - Copyright line using {currentYear}

/* --- YOUR COMPONENT CODE GOES HERE --- */


const navigation = {
    shop: [
        {name:"All Coffee", href: "#shop" },
        {name:"Single Origin", href: "#shop" },
        {name:"Blends", href: "#shop" },
        {name: "Subscription" , href: "#" }
    ],
    company: [
        {name:"About", href: "#about" },
        {name:"Our Roastery", href: "#about" },
        {name:"Careers", href: "#" },
        {name: "Press" , href: "#" }
    ],
    support: [
        {name:"Contact Us", href: "#contact" },
        {name:"Shipping & Return", href: "#" },
        {name:"FAQ", href: "#" },
        {name: "Wholesale" , href: "contact" }
    ],
    social: [
        {
    name: "Facebook",
    href: "#",
    icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
            <path
                fillRule="evenodd"
                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                clipRule="evenodd"                    
            />
        </svg>
    ),
},
        {
    name: "Instagram",
    href: "#",
    icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
            <path
                fillRule="evenodd"
                d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                clipRule="evenodd"
            />
        </svg>
    ),
        },
        {
  name: "X",
  href: "#", // Replace with your link
  icon: (props) => (
    <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
      <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.0956V13.0956Z" />
    </svg>
  )
}

    ]
};


const currentYear = new Date().getFullYear();



//leaflet map
function LocationMap() {

    const mapRef = useRef(null);
    const mapInstance = useRef(null);


    useEffect(() => {
        //stop if the map already exists
        if(mapInstance.current || !mapRef.current) return;

        //map coordinates
        const lat = 39.7386;
        const lng = -104.3256;


        const map =L.map(mapRef.current, {
            center: [lat,lng],
            zoom: 14,
            scrollWheelZoom: false,
            zoomControl: true,
            attributeControl: true
        });


        L.tileLayer("https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png", {
            attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/">CARTO</a>',
            subdomains: "abcd",
            maxZoom: 19
        }).addTo(map);

        // Custom marker
        const icon = L.divIcon({
            className: "leaflet-map-pin",
            html: `<div style="
            width:36px;height:36px;border-radius:50%;
            background:linear-gradient(135deg,var(--amber),var(--amber-dark));
            display:flex;align-items:center;justify-content:center;
            box-shadow:0 4px 14px rgba(212,146,42,0.5);
            border:3px solid var(--cream);
    "><svg width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2.5'><path d='M15 10.5a3 3 0 11-6 0 3 3 0 016 0z'/><path d='M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z'/></svg></div>`,
    iconSize: [36, 36],
    iconAnchor: [18, 36],
    popupAnchor: [0, -38]
});

    //Place the marker and attach a click-to-open popup with address
    L.marker([lat, lng], { icon })
        .addTo(map)
        .bindPopup(
            `<div style="font-family:var(--font-body);text-align:center;padding:4px 0;"> 
            <strong style="font-size:15px;color:#1e1714;">Beans Place</strong><br/> 
            <span style="font-size:13px;color:#6b5c4f;">Strasburg, CO 80136</span><br/> 
            <a href="https://maps.google.com/?q=Beans+Place+Strasburg+CO" target="_blank" rel="noopener noreferrer"     
            style="font-size:12px;color:#d4922a;font-weight:600;">Get Directions →</a> 
            </div>`
        );


        mapInstance.current = map;

        //clean on mount
        return () => {
            map.remove();
            mapInstance.current = null;
        };


        }, []);

    
    //the empty div leaflet with the map
    return (
        <div ref={mapRef} className="footer-map" style={{ width: "100", overflow: "hidden"}}/>
    );

};



export default function FooterSection (){

    return (
        <footer className = "footer">
            <div className = "mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32 2x1:max-w-400">
                {/*Map - scrollReveal fades it up into view */}
                <ScrollReveal animation="fadeUp">
                    <LocationMap/>
                </ScrollReveal>
                

                {/* Link colums */}
                <div className = "mt-16 grid grid-cols-2 gap-8 md:grid-cols-4">
                    {/* Logo and social icons */}
                    <ScrollReveal animation="fadeUp" className="col-span-2 md:col-span-1 space-y-4">
                        <img
                            alt="The Beans Place Logo"
                            src={logo}
                            className="h-24 w-auto place-self-center md:place-self-auto"
                        />
                        <p className = "footer-description justify-self-center text-center md:justify-self-auto md:text-left">
                            Premium coffee beans, roasted to order and shipped fresh. From our roastery to your cup since 2012
                        </p>
                        {/* one link per social entry, icon only */}
                        <div className="flex-gap-x-6 justify-self-center md:justify-self-auto">
                            {navigation.social.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="text-white/70 transition-colors hover-text-(--amber) duration-200"
                                    aria-label={item.name}>
                                    <item.icon aria-hidden="true" className="size-6"/>
                                </a>
                            ))}
                        </div>
                    </ScrollReveal>

                    {/* The three link columns, each revealing after the last */}
                    <ScrollReveal animation="fadeUp" delay={0.1}>
                        <h4 className="footer-col">Shop</h4>
                         <ul role="list" className="footer-links mt-4">
                            {navigation.shop.map((item) => (
                                <li key={item.name}>
                                    <a href={item.href}>{item.name}</a>
                                </li>
                            ))}
                         </ul>
                    </ScrollReveal>

                    <ScrollReveal animation="fadeUp" delay={0.2}>
                        <h4 className="footer-col">Company</h4>
                        <ul role="list" className="footer-links mt-4">
                            {navigation.company.map((item) => (
                                <li key={item.name}>
                                     <a href={item.href}>{item.name}</a>
                                </li>
                             ))}
                        </ul>
                    </ScrollReveal>

                    <ScrollReveal animation="fadeUp" delay={0.3}>
                        <h4 className="footer-col">Support</h4>
                        <ul role="list" className="footer-links mt-4">
                            {navigation.support.map((item) => (
                                <li key={item.name}>
                                    <a href={item.href}>{item.name}</a>
                                </li>
                            ))}
                        </ul>
                    </ScrollReveal>
                </div>

                <Separator className = "mt-16 mb-6"/>

                {/* bottom bar for the year */}
                <div className="footer-bottom">
                    <p>&copy;{currentYear} The Beans Place, LLC. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};
