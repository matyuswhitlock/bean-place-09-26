// ============================================================
// ABOUTSECTION.JSX — Our Story Section (Day 10)
// ============================================================
// Tells the story of The Beans Place with a two-column layout
// featuring text and overlapping images, plus value cards.
//
// WHAT YOU WILL LEARN:
// - Two-column grid layouts with CSS Grid
// - Image stacking/overlapping with CSS positioning
// - Rendering value cards from an array of objects
// - Using the Card component with glass effect
// - Named exports: CardHeader, CardContent from Card
//
// CONCEPTS COVERED:
// - Array of objects with icon, title, description
// - .map() rendering with Card composition
// - CSS Grid for responsive layouts
// - Image imports and the <img> tag in JSX
// - ScrollReveal with different animation directions
//
// ============================================================

// STEP 1: Imports
// Import UI components: Badge, Card (+ CardHeader, CardContent),
//   Separator, ScrollReveal (+ StaggerContainer, StaggerItem)
// Import images:
//   coffeePlants from "../assets/coffee_plants.jpeg"
//   storeBarista from "../assets/store_barista.jpeg"

/* --- YOUR IMPORTS GO HERE --- */


// STEP 2: Define the values array (outside the component)
// const values = [
//   {
//     icon: "globe emoji",
//     title: "Direct Trade Origins",
//     description: "We partner directly with small farms..."
//   },
//   {
//     icon: "coffee emoji",
//     title: "Small-Batch Roasting",
//     description: "Our master roaster profiles every bean..."
//   },
//   {
//     icon: "truck emoji",
//     title: "Roast-to-Order Shipping",
//     description: "We don't pre-roast and shelve..."
//   }
// ];

/* --- YOUR VALUES DATA GOES HERE --- */


// STEP 3: Create and export AboutSection
// export default function AboutSection() { ... }
//
// JSX Structure:
//   <div className="about-content">
//
//     Header:
//       - Badge: "Founded 2012 . Roasting in-house since day one"
//       - <h1> with "OUR STORY" in muted color
//       - Separator
//
//     Two-column story grid (className="about-story-grid"):
//       Left column (text):
//         - Two paragraphs telling the brand story
//         - Use className="about-body lead--light"
//
//       Right column (images):
//         - <div className="about-image-stack">
//           - Main image: coffeePlants (className="about-image about-image-main")
//           - Overlay image: storeBarista (className="about-image about-image-overlay")
//
//     Value cards grid (className="about-cards-grid"):
//       <StaggerContainer>
//         {values.map((v) => (
//           <StaggerItem key={v.title}>
//             <Card glass className="about-value-card">
//               <CardHeader>
//                 <span>{v.icon}</span>
//                 <h3>{v.title}</h3>
//               </CardHeader>
//               <CardContent>
//                 <p>{v.description}</p>
//               </CardContent>
//             </Card>
//           </StaggerItem>
//         ))}
//       </StaggerContainer>
//   </div>

/* --- YOUR COMPONENT CODE GOES HERE --- */
