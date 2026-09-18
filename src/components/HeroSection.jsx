// ============================================================
// HEROSECTION.JSX — The Hero / Landing Section (Day 2-3)
// ============================================================
// The Hero Section is the first thing visitors see. It contains
// the big headline, a tagline, call-to-action buttons, trust
// indicators, and a large hero image of coffee beans.
//
// WHAT YOU WILL LEARN:
// - Importing React hooks (useEffect, useState) and images
// - Using framer-motion for scroll-based parallax animations
// - Creating animation variants (objects that define motion)
// - Embedding JavaScript expressions in JSX with { }
// - Scroll-to-section with document.getElementById()
// - Reusing UI components (Button, Badge)
//
// CONCEPTS COVERED:
// - Named imports vs default imports
// - Motion components (motion.h1, motion.div, motion.img)
// - useScroll, useTransform hooks from framer-motion
// - Animation variants with staggerChildren
//
// ============================================================

// STEP 1: Imports
// Import hooks from react: useEffect, useState
// Import motion utilities from "framer-motion":
//   - motion, useScroll, useTransform
// Import the hero image: import heroBeans from "../assets/hero-beans.png";
// Import reusable UI components: Button and Badge

/* --- YOUR IMPORTS GO HERE --- */
import {motion, useScroll, useTransform} from "framer-motion";//named import
import heroBeans from "../assets/hero-beans.png";//default import
import Button from "./ui/Button";//defualt import
import Badge from "./ui/Badge";//defualt import


// STEP 2: Animation Variants (outside the component)
// Create two objects that define how text animates:
//
// const textVariants = {
//   hidden: {},
//   visible: { transition: { staggerChildren: 0.12 } }
// };
//
// const wordVariant = {
//   hidden: { opacity: 0, y: 60, rotateX: -40 },
//   visible: {
//     opacity: 1, y: 0, rotateX: 0,
//     transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }
//   }
// };
//
// DISCUSSION: Why do we define these OUTSIDE the component?
// Answer: They don't change, so React doesn't need to recreate them on every render.

/* --- YOUR ANIMATION VARIANTS GO HERE --- */


// STEP 3: Create the HeroSection component
// export default function HeroSection() { ... }
//
// Inside the component:
// A) Use useScroll() to get { scrollY }
// B) Use useTransform() to create parallax values:
//    - imgScale:   scrollY [0,600] -> [1.35, 0.9]
//    - imgOpacity: scrollY [0,500] -> [1, 0]
//    - imgY:       scrollY [0,600] -> [0, 100]
//
// STEP 4: Build the JSX (inside return)
// Use a React Fragment (<> ... </>) as the wrapper
//
// LEFT COLUMN (className="hero-text-column", id="home"):
//   - Badge component with text: "Premium Coffee Beans — Roasted Fresh Daily"
//   - Animated h1 with three lines: "YOUR PLACE", "FOR COFFEE", "BREWING"
//     Use motion.h1 with textVariants, and motion.span for each word
//     The middle line gets className="muted" for lighter color
//   - Subtitle paragraph (motion.p, className="lead")
//   - Two buttons: "SHOP COFFEE" (accent) and "OUR STORY" (outline)
//     Each button scrolls to a section using:
//     document.getElementById("shop")?.scrollIntoView({ behavior: "smooth" })
//   - Trust indicators: star rating and free shipping note
//
// RIGHT COLUMN (className="hero-art-container"):
//   - motion.img with the hero beans image
//     Apply parallax: style={{ scale: imgScale, opacity: imgOpacity, y: imgY }}
//   - Floating price badge (circular badge showing "FROM $14.99 per bag")

/* --- YOUR COMPONENT CODE GOES HERE --- */
const textVariants = {
    hidden: {}, //starting state
    visible: {transition:{staggerChildren: 0.12}},

};


const wordVariant = {
    hidden: {opacity: 0, y: 60, rotateX: -40},
    visible: {
        opacity: 1,
        y: 0,
        rotateX: 0,
        transition: {duration: 0.7, ease:[0.25, 0.46, 0.45, 0.94]}    
    }
};


// main component --> export defualt (one is allowed per page)
export default function HeroSection(){

    const {scrollY} = useScroll();

    //scroll-linked values for the hero image
    //scrtoll it shrinks, fades out, and drifts down
    const imgScale = useTransform(scrollY, [0,600], [1.35, 0.9]);
    const imgOpacity = useTransform(scrollY, [0,500], [1,0]);
    const imgY = useTransform(scrollY, [0,600], [0,100]);



    
    return(
        //this is a fragment - groups elements without an extra wrapper
        <>
        {/* text content */}
        <div id="home" className= "hero-text-column">
            {/* badge; initial = where it starts, animate = where it ends up */}
            <motion.div
            initial={{opacity: 0, Y: 20}}
            animate={{opacity: 1, Y: 0}}
            transtion={{duration: 0.5, delay: 0.1}}
            >
                <Badge variant = "outline" className="mb-5">
                    ✦ Premium Coffee Beans - Roasted Fresh Daily
                </Badge>
            </motion.div>

            {/* headline. vairable + initial/animate tie to the states about 
            persceptive gives the words rotateX a realistic depth */}

            <motion.h1
                className="h1-stack"
                style= {{margin: 0, perscpective: "600px"}}
                variants = {textVariants}
                initial ="hidden"
                animate = "visible"
            >
                {/* one animated word each- inline-block is required */}
                <motion.span variants = {wordVariant} style = {{display: "inline-block"}}>
                    Your Place
                </motion.span>
                <br/>
                <motion.span
                    variants = {wordVariant}
                    className = "muted"
                    style = {{ display : "inline-block" }}
                >
                    For Coffee
                </motion.span>
                <br/>
                <motion.span
                    variants = {wordVariant} 
                    style = {{ display: "inline-block" }}
                >
                    Brewing
                </motion.span>
            </motion.h1>


            {/* Paragraph - delayed so it is lands after the healine */}

            <motion.p
                className="lead"
                style= {{marginTop: 18}}
                initial={{ opacity: 0, y: 20}}
                animate={{ opacity: 1, y: 0}}
                transition={{ duration: 0.6, delay: 0.6}}
            >
                Farm-to-cup single-origin beans from Ethiopia, Colombia & beyond. Freshly 
                roasted in small batches and shipped to your door within 48 hrs.
            </motion.p>

            <motion.div
                className="hero-actions"
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                transition= {{duration: 0.5, delay: 0.8}}
            >
                <Button
                    variant = "accent"
                    size = "lg"
                    className = "shadow-lg"
                    onClick= {() => document.getElementById("shop")?.scrollIntoView({behavior: "smooth"
                     })}
                >
                    SHOP COFFEE ☕
                </Button>

            </motion.div>
            {/* trust indicators - appear last, after the buttons */}
            <motion.div
               className= "hero-trust"
               initial= {{opacity: 0}}
               animate= {{opacity: 1}}
               transition= {{ duration: 0.6, delay: 1.1}} 
            >
            <span>★★★★★ 4.9/5 from 2,400+ customers</span>    
            <span className = "hero-trust-divider"></span>    
            <span>Free Shipping over $50</span>    
            </motion.div>
        </div>


        {/* right - beans image + floating price tag */}
        <div className = "hero-art-container">
            <motion.img
                className="hero-art"
                src={heroBeans}
                alt="Premium coffee Beans"
                style= {{
                    scale: imgScale,
                    opcaity: imgOpacity,
                    y: imgY
                }}
                initial= {{ opacity: 0, scale: 0.8, x: 60}}
                animate = {{ opacity: 1, scale: 1.35, x: 0}}
                transition = {{duration: 1.2, ease:[0.25, 0.46, 0.45, 0.94]}}
            />

            {/* price badge - springs in bouncily once the image has arrived */}
            <motion.div
                className = "hero-floating-badge"
                initial = {{opacity: 0, scale: 0.5}}
                animate = {{opacity: 1, scale: 1}}
                transition = {{
                    duration: 0.5,
                    delay: 1.2,
                    type: "spring",
                    stiffness: 200
            }}>

            <span className = "hero-floating-badge-label">FROM</span>
            <span className = "hero-floating-badge-price">$14.99</span>
            <span className = "hero-floating-badge-label">per bag</span>
            </motion.div> 
        </div> 
        </>
    );
};