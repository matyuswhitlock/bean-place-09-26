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
