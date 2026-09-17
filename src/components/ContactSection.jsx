// ============================================================
// CONTACTSECTION.JSX — Contact Page with Form (Day 11-12)
// ============================================================
// A full contact section with a message form, info cards
// (location, hours, email, phone), social links, and
// interactive effects (tilt cards, mouse-follow glow).
//
// THIS IS THE MOST COMPLEX COMPONENT IN THE PROJECT.
// Take your time and build it section by section.
//
// WHAT YOU WILL LEARN:
// - Managing complex form state with useState
// - Form validation and submission handling
// - useRef for DOM references
// - useEffect for global event listeners (mouse tracking)
// - Advanced framer-motion: useMotionValue, useSpring, useTransform
// - Building a reusable TiltCard sub-component
// - SVG icons inline in JSX
// - Conditional rendering for form states (sending, sent, error)
//
// CONCEPTS COVERED:
// - Multiple useState hooks in one component
// - Event handling: onChange, onBlur, onSubmit, onMouseMove
// - Controlled form inputs with validation
// - Async/await with try/catch
// - Component composition (sub-components in same file)
// - Inline styles with dynamic values
//
// ============================================================

// STEP 1: Imports
// From "react": import { useState, useEffect, useRef }
// From "framer-motion": import { motion, useMotionValue, useSpring, useTransform }
// Import UI components: ScrollReveal, StaggerContainer, StaggerItem,
//   Separator, Input (+ Textarea), Button

/* --- YOUR IMPORTS GO HERE --- */


// STEP 2: Contact channels data (outside the component)
// Define an array of contact info objects:
// const contactChannels = [
//   {
//     name: "Visit Our Roastery",
//     icon: <svg>...</svg>,  // Map pin icon
//     gradient: "from-amber-700 to-amber-500",
//     accentColor: "var(--amber)",
//     detail: "Beans Place, Strasburg, CO 80136",
//     action: "Get Directions",
//     href: "https://maps.google.com/?q=Beans+Place+Strasburg+CO"
//   },
//   // Add: Opening Hours, Email Us, Call Us
// ];

/* --- YOUR CONTACT DATA GOES HERE --- */


// STEP 3: TiltCard sub-component (ADVANCED)
// This creates a 3D tilt effect that follows the mouse.
//
// function TiltCard({ children, className, href, target, rel }) {
//   - Use useRef for the card element
//   - useMotionValue(0) for x and y mouse positions
//   - useSpring + useTransform to convert mouse position to rotation
//   - handleMouse: calculate mouse position relative to card
//   - handleLeave: reset to center
//   - Render as <motion.a> if href provided, <motion.div> otherwise
//   - Apply rotateX, rotateY, and transformPerspective styles
// }

/* --- YOUR TILTCARD COMPONENT GOES HERE --- */


// STEP 4: ContactFormInline sub-component
// An animated contact form with validation.
//
// function ContactFormInline() {
//   State:
//     - formData: { name, email, subject, message }
//     - status: null | 'sending' | 'sent' | 'error'
//     - touched: {} (tracks which fields have been visited)
//
//   Handlers:
//     - handleChange: updates formData with spread operator
//     - handleBlur: marks field as touched
//     - handleSubmit: validates, simulates send, updates status
//
//   JSX: <motion.form> with:
//     - Header (title + subtitle)
//     - Name + Email inputs (2-column grid)
//     - Subject input (full width)
//     - Message textarea (full width)
//     - Submit button with 3 states:
//       sending: spinner + "Sending..."
//       sent: checkmark + "Message Sent!"
//       default: "Send Message"
//     - Error message (conditional)
// }

/* --- YOUR CONTACTFORMINLINE COMPONENT GOES HERE --- */


// STEP 5: Create and export ContactSection (main component)
// export default function ContactSection() { ... }
//
// State:
//   - mousePos: { x: 0, y: 0 } for the glowing cursor effect
//   - sectionRef: useRef(null)
//
// useEffect: track mouse position globally
//   window.addEventListener("mousemove", ...)
//
// JSX Structure:
//   <div className="contact-section-wrap" ref={sectionRef}>
//
//     Background effects:
//       - Three animated orbs (div elements)
//       - Grid overlay pattern
//
//     Content (className="contact-inner"):
//       Header:
//         - Animated pill: "Connect & Collaborate"
//         - <h1>: "GET IN" / "TOUCH"
//         - Subtitle paragraph
//         - Separator
//
//       Two-column layout (className="contact-layout"):
//         Left: <ContactFormInline />
//         Right: Contact info cards + social links
//           - Map over contactChannels with TiltCard
//           - Social links row (Instagram, Facebook, X)
//
//     Mouse glow effect:
//       <div className="contact-mouse-glow"
//         style={{ left: mousePos.x - 192, top: mousePos.y - 192 }} />
//   </div>

/* --- YOUR COMPONENT CODE GOES HERE --- */
