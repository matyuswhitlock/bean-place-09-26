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
import {useState, useEffect, useRef} from "react";
import {motion, useMotionValue, useSpring, useTransform} from "framer-motion";
import ScrollReveal from "./ui/ScrollReveal";
import {StaggerContainer, StaggerItem} from "./ui/ScrollReveal";
import Separator from "./ui/Separator";
import Input, {TextArea} from ".ui/Input";
import Button from "./ui/Button";
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


//Data for the four "ways to reach us" cards.
// name/detail -> card text icon -> inline svg
//gradient -> icon title color accentColor -> the bar down the card's edge
//action/href -> where it links


 const contactChannels = [
    {
        name: "Visit Our Roastery",
        icon:(
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
        ),
        gradient: "from-amber-700 to-amber-500",
        accentColor: "var(--amber)",
        detail: "Beans Place, Strasburg, CO 830136",
        action: "Get Directions",
        href: "https://maps.google.com/?q=Beans+Place+Strasburg+Co"
    },
    {
        name: "Opening Hours",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
        gradient: "from-yellow-700 to-yellow-500",
        accentColor: "#ca8a04",
        detail: "Mon-Fri: 7am-6pm | Sat-Sun: 8am-4pm",
        action: "Plan Your Visit",
        href: "#contact" // link just jumps to that section of the page
    },
    {
       name: "Email Us",
       icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
       ),
       gradient: "from-orange-700 to-orange-500",
       accentColor: "#c2410c",
       detail: "hello@thebeansplace.com",
       action: "Send Email",
       href: "mailto:hello@thebeansplace.com" //opens their email app, pre-addressed
    },
    {
        name: "Call Us",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.282-.376-7.69-5.42-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.211l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
        ),
        gradient: "from-stone-700 to-stone-500",
        accentColor: "#78716c",
        detail: "(303) 555-BEAN",
        action: "Call Now",
        href: "tel:+13035552326"
    }
];


//Tiltcard
//Wrapper that its contents in 3D toward the mouse. Local to this file
// children/className -> the card content and its css Classes
//href/target/rel     -> if href is given, the wrapper becomes a link


function TiltCard({children, className, href, target, rel}){
    const ref = useRef(null);
    //mouse position inside the card as a fraction
    //(right/botton). motion values. so updating them skips a re-render.
    const x = useMotionValue(0);
    const y = useMotionValue(0);


    //rotatex is reversed [6, -6] so moving the mouse down tips the top
    //of card away from you - makes it look 3D
    const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [6,-6]), {stiffness: 200, damping: 20})
    const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-6,6]), {stiffness: 200, damping: 20})


    function handleMouse(e) {
        const rect = ref.current.getBoundingClientRect();
        //window coords -> card-relative -> 0-1 fraction -> recenterd on 0
        x.set((e.clientX - rect.left) / rect.width - 0.5);
        y.set((e.clientY - rect.top) / rect.height - 0.5);
    };

    //reset on leave so the card springs back flat
    function handleLeave(){
        x.set(0);
        y.set(0);
    };


    //<a> if we were given a link, otherwise <div>. the capital matters
    //React treats lowercase names as plain HTML tags.
    const Tag = href ? motion.a : motion.div;

    return (
    <Tag
        ref={ref}
        href={href}
        target={target}
        rel={rel}
        onMouseMove={handleMouse}
        onMouseLeave={handleLeave}
        //transforPerspective = how deep the 3d looks: smaller exaggerates it
        style={{rotateX, rotateY, transformPerspective: 600}}
        className={className}
    >
        {children}
    </Tag>
    );
};


// function ContactFormInLine(){
//     retrun ()
// }