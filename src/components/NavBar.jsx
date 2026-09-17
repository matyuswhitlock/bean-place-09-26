// ============================================================
// NAVBAR.JSX — Sticky Navigation Bar (Day 4)
// ============================================================
// The NavBar stays at the top of the page as the user scrolls.
// It includes a logo, navigation links, a CTA button, and a
// mobile hamburger menu with animation.
//
// WHAT YOU WILL LEARN:
// - useState for toggling the mobile menu (true/false)
// - useState for tracking scroll position
// - useEffect for adding/removing event listeners
// - Conditional CSS classes based on state
// - Framer Motion's AnimatePresence for enter/exit animations
// - Accessibility: aria-label and aria-expanded attributes
//
// CONCEPTS COVERED:
// - React Hooks: useState, useEffect
// - Side effects and cleanup (return () => ...)
// - Ternary operator for conditional rendering
// - Template literals for dynamic className strings
// - Helper functions (closeMenu)
//
// ============================================================

// STEP 1: Imports
// From "react": import { useState, useEffect }
// From "framer-motion": import { motion, AnimatePresence }
// Import the logo: import logo from "../assets/Beans_logo.png";
// Import the Button UI component from "./ui/Button"

/* --- YOUR IMPORTS GO HERE --- */


// STEP 2: Create and export the NavBar component
// export default function NavBar() { ... }
//
// STEP 3: State variables (inside the component, before return)
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//
//   DISCUSSION: What does useState(false) mean?
//   - false is the initial value
//   - menuOpen is the current value (true or false)
//   - setMenuOpen is the function to change it
//
// STEP 4: Helper function
//   const closeMenu = () => setMenuOpen(false);
//
// STEP 5: useEffect for scroll detection
//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 20);
//     window.addEventListener("scroll", handleScroll, { passive: true });
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);
//
//   DISCUSSION: Why do we return a cleanup function?
//   Answer: To remove the event listener when the component unmounts,
//   preventing memory leaks.
//
// STEP 6: Build the JSX (inside return)
//
// Use <motion.header> as the root element:
//   - className: "navbar" + conditionally add "navbar-scrolled" when scrolled is true
//   - Add initial/animate/transition props for entrance animation
//
// Inside the header, create a flex container div:
//   A) BRAND: <a href="#home"> with the logo <img>
//
//   B) DESKTOP NAV: <nav> with className="nav-links hidden items-center gap-10 md:flex"
//      Links: Home (#home), Shop Coffee (#shop), Our Story (#about), Contact (#contact)
//
//   C) DESKTOP CTA: <Button> with "Order Now" text (hidden on mobile: hidden md:inline-flex)
//
//   D) MOBILE HAMBURGER: A <button> visible only on mobile (md:hidden)
//      - Three <span> elements that form the hamburger icon
//      - When menuOpen is true, they transform into an X using CSS transforms
//      - onClick toggles menuOpen
//
// After the flex container, add the MOBILE MENU:
//   Wrap in <AnimatePresence> for smooth enter/exit
//   Conditionally render (menuOpen &&) a <motion.div>
//   Inside: nav links + Button, each calling closeMenu onClick

/* --- YOUR COMPONENT CODE GOES HERE --- */
