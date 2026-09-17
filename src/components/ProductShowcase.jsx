// ============================================================
// PRODUCTSHOWCASE.JSX — Product Cards Grid (Day 9)
// ============================================================
// Displays a grid of coffee products with images, prices,
// descriptions, and "Add to Cart" buttons. This is a
// data-driven UI pattern.
//
// WHAT YOU WILL LEARN:
// - Defining an array of objects (product data)
// - Rendering a list of complex components with .map()
// - Accessing object properties inside JSX
// - Conditional rendering (badges only on some products)
// - Using motion.div for hover animations
// - Composing multiple UI components together
//
// CONCEPTS COVERED:
// - Array of objects as a data source
// - .map() with object destructuring
// - The key prop (using product.name)
// - Conditional rendering with && operator
// - ScrollReveal and StaggerContainer for animations
//
// ============================================================

// STEP 1: Imports
// From "framer-motion": import { motion }
// Import UI components: ScrollReveal (+ StaggerContainer, StaggerItem),
//   Badge, Button, Separator
// Import 6 coffee bag images:
//   imgEthiopianHarrar, imgColombianSupremo, imgKenyaAA,
//   imgPanamaGeisha, imgKona, imgGuatemalaAntigua

/* --- YOUR IMPORTS GO HERE --- */


// STEP 2: Define the products array (outside the component)
// Each product is an object with these properties:
//   { name, origin, price, roast, notes, image, badge }
//
// const products = [
//   {
//     name: "Ethiopian Harrar",
//     origin: "Ethiopia",
//     price: "$18.99",
//     roast: "Medium",
//     notes: "Blueberry, dark chocolate, wine",
//     image: imgEthiopianHarrar,
//     badge: "Best Seller"
//   },
//   // Add 5 more products:
//   // Colombian Supremo ($16.99, Medium-Dark, badge: null)
//   // Kenya AA ($21.99, Light, badge: "Staff Pick")
//   // Panama Geisha ($34.99, Light, badge: "Limited")
//   // Kona ($29.99, Medium, badge: null)
//   // Guatemala Antigua ($17.99, Dark, badge: "New")
// ];

/* --- YOUR PRODUCTS DATA GOES HERE --- */


// STEP 3: Create and export ProductShowcase
// export default function ProductShowcase() { ... }
//
// JSX Structure:
//   <div className="product-showcase">
//
//     Section header:
//       - Badge: "Curated Selection"
//       - <h2> title: "Shop Our" / "Finest Beans"
//       - Separator
//       - Subtitle paragraph
//
//     Product grid:
//       <StaggerContainer className="product-grid">
//         {products.map((product) => (
//           <StaggerItem key={product.name}>
//             <motion.div className="product-card" whileHover={{ y: -8 }}>
//
//               Image area:
//                 <div className="product-card-image">
//                   <img src={product.image} />
//                   Conditional badge:
//                   {product.badge && <span className="product-badge">{product.badge}</span>}
//                 </div>
//
//               Info area:
//                 <div className="product-card-info">
//                   <h3>{product.name}</h3>
//                   <span className="product-price">{product.price}</span>
//                   <p>{product.origin} . {product.roast} Roast</p>
//                   <p>{product.notes}</p>
//                   <Button>Add to Cart</Button>
//                 </div>
//
//             </motion.div>
//           </StaggerItem>
//         ))}
//       </StaggerContainer>
//
//     Bottom CTA:
//       <Button variant="accent" size="lg">View All Coffee</Button>
//   </div>

/* --- YOUR COMPONENT CODE GOES HERE --- */
