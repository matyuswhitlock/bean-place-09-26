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
import {motion} from "framer-motion";

import ScrollReveal, { StaggerContainer, StaggerItem } from "./ui/ScrollReveal";
import Badge from "./ui/Badge";
import Button from "./ui/Button";
import Separator from "./ui/Separator";

import imgEthiopianHarrar from "../assets/Ethiopian-Harrar-Bag.png";
import imgColombianSupremo from "../assets/Colombian-Supremo-Bag.png";
import imgKenyaAA from "../assets/Kenya-AA-Bag.png";
import imgPanamaGeisha from "../assets/Panama-Geisha.png";
import imgKona from "../assets/Kona-Bag.png";
import imgGuatemalaAntigua from "../assets/Guatemala-Antigua-Bag.png";
 

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


//data for the grid --> text card
//image --> which photo to show
//badge --> corner label, or null for none




const products = [

   {
        name: "Ethiopian Harrar",
        origin: "Ethiopia",
        price: "$18.99",
        roast: "Medium",
        notes: "Blueberry, dark choclate,wine",
        image: imgEthiopianHarrar,
        badge: "Best Seller"
   }, 
   {
        name: "Colombian Supremo",
        origin: "Colomia",
        price: "$16.99",
        roast: "Medium-Dark",
        notes: "Caramel, nutty, smooth finish",
        image: imgColombianSupremo,
        badge: "Classic"
   }, 
   {
        name: "Kenya AA",
        origin: "Kenya",
        price: "$21.99",
        roast: "Light",
        notes: "Bright citrus, black currant, floral",
        image: imgKenyaAA,
        badge: "Staff Pick"
   }, 
   {
        name: "Panama Geisha",
        origin: "Panama",
        price: "$34.99",
        roast: "Light",
        notes: "Jasmine, bergamot, tropical fruit",
        image: imgPanamaGeisha,
        badge: "Limited"
   }, 
   {
        name: "Guatemala Antigua",
        origin: "Guatemala",
        price: "$17.99",
        roast: "Dark",
        notes: "Cocoa, spice, smoky sweetness",
        image: imgGuatemalaAntigua,
        badge: "New"
   }, 
   {
        name: "Kona",
        origin: "Hawaii",
        price: "$29.99",
        roast: "Medium",
        notes: "Brown sugar, macadamia, mild acidity",
        image: imgKona,
        badge: "Owner's choice"
   }
];


export default function ProductShowcase(){
    return (
        <div className = "product-showcase">
            {/* Header -rising delays build it top-tp-bottom */}
            <ScrollReveal animation="fadeUp">
                <Badge variant="accent" className= "mb-4">
                    ☕ Curated Selection
                </Badge>
            </ScrollReveal>

            <ScrollReveal animation="fadeUp" delay={.1}>
                <h2 className ="product-showcase-title">
                    Shop Our
                    <br />
                    <span className="muted">Finest Beans</span>
                </h2>
            </ScrollReveal>


            {/* Decorative divider: mx-auto centers it, max-w-48 caps the width */}
            <ScrollReveal animation="fadeIn" delay={.15}>
                <Separator className="mx-auto mb-4 max-w-48"/>
            </ScrollReveal>

            <ScrollReveal animation="fadeUp" delay={1.5}>
                <p className = "product-showcase-subtitle">
                    Hand-selected single-origin coffees, roasted to order. Each ships within 48 hours of
                    roasting for maximum freshness.
                </p>
            </ScrollReveal>



            {/* Product grid - cards cascade in 0.1s apart */}
            <StaggerContainer staggerDelay={0.1} className="product-grid">
                {products.map((product) =>(
                     //key must be unique - react uses it to track the list items
                    <StaggerItem key={product.name} animation="fadeUp">
                        <motion.div
                            className= "product-card"
                            //lift 8px while hovered, so the card feels clickable
                            whileHover ={{y: -8, transition: {duration: 0.25}}}
                        >
                            <div className="product-card-image">
                                {/* lazy - don't doownload until it's near the screen*/}
                                <img src={product.image} alt ={product.name} loading="lazy"/>
                                {/* badge renders only when the product has one */}
                                {product.badge && (
                                    <span className="product-badge">{product.badge}</span>
                                )}
                            </div>
                            <div className="product-card-info">
                                <div className="product-card-header">
                                    <h3>{product.name}</h3>
                                    <span className="product-price">{product.price}</span>
                                </div>
                                <p className="product-origin">
                                    {product.origin} · {product.roast}
                                </p>
                                <Button variant="primary" size="sm" className = "w-full mt-3">
                                    Add to Cart
                                </Button>
                            </div>

                        </motion.div>
                    </StaggerItem>
                ))}
            </StaggerContainer>

            {/* Footer Button */}
            <ScrollReveal animation="fadeUp" delay={.2}>
                <div className="product-showcase-cta">
                    <Button variant="accent" size="lg">
                        View All Coffee →
                    </Button>
                </div>
            </ScrollReveal>


        </div>
    );
};
