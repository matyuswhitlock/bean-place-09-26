// ============================================================
// RIBBONTICKER.JSX — Scrolling Text Banner (Day 6)
// ============================================================
// A continuously scrolling horizontal ribbon that displays
// coffee blend names. This is a common UI pattern for
// marquee/ticker effects.
//
// WHAT YOU WILL LEARN:
// - Declaring arrays of data
// - Spreading arrays to duplicate content: [...arr, ...arr]
// - Rendering lists with .map()
// - The key prop and why React needs it
// - CSS animations (the scroll is done in CSS, not JS)
// - Using framer-motion's whileHover for micro-interactions
//
// CONCEPTS COVERED:
// - Array declaration and manipulation
// - .map() with index parameter
// - Component reusability (used twice in App.jsx!)
//
// ============================================================

// STEP 1: Import motion from "framer-motion"

/* --- YOUR IMPORTS GO HERE --- */


// STEP 2: Create and export the RibbonTicker component
// export default function RibbonTicker() { ... }
//
// STEP 3: Define the blends array (inside the component)
//   const blends = [
//     "Jamaican Blue Mountain", "Yirgacheffe", "Tanzania Peaberry",
//     "Panama Geisha", "Vietnamese Robusta", "Brazilian Santos",
//     "Costa Rica Tarrazu", "Guatemala Antigua", "Kenya AA",
//     "Sumatra Mandheling", "Kona", "Colombian Supremo",
//     "Ethiopian Harrar", "Arabian Mocha", "Red Sulawesi"
//   ];
//
// STEP 4: Double the array for seamless looping
//   const items = [...blends, ...blends];
//
//   DISCUSSION: Why duplicate the array?
//   The CSS animation scrolls the content to the left.
//   When it reaches the halfway point (the original list),
//   it resets — and the duplicate creates a seamless loop.
//
// STEP 5: Build the JSX
//   <div className="ribbon-ticker-container">
//     <div className="ribbon-ticker">
//       <div className="ribbon-track">
//         {items.map((name, i) => (
//           <motion.span
//             key={i}
//             className="ribbon-item"
//             whileHover={{ scale: 1.1, color: "#f0b955" }}
//             transition={{ type: "spring", stiffness: 300 }}>
//             {name} <span className="ribbon-dot">diamond symbol here</span>
//           </motion.span>
//         ))}
//       </div>
//     </div>
//   </div>
//
// NOTE: The scrolling animation is handled by CSS in index.css
// Look for the @keyframes ribbon-scroll rule.

/* --- YOUR COMPONENT CODE GOES HERE --- */
