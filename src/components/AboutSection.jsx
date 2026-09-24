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
import Badge from "./ui/Badge";
import Card, {CardHeader, CardContent} from "./ui/Card";
import Separator from "./ui/Separator";
import ScrollReveal, {StaggerContainer, StaggerItem} from "./ui/ScrollReveal";
import coffeePlants from "../assets/coffee_plants.jpeg";
import storeBarista from "../assets/store_barista.jpeg";

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


//data for the three "what makes us different" cards - written once here, 
//looper into markup below
const values = [
    {
        icon: "🌍",
        title: "Direct Trade Origins",
        description:
            "We partner directly with small farms in Ethiopia, Colombia, Guatemala, and Indonesia. Every bag is fully traceable to the farm it came from."
    },
    {
        icon: "☕",
        title: "Small-Batch Roasting",
        description:
            "Our master roaster profiles every bean to unlock its peak flavor. We roast in 25-lb batches for consistency and freshness you can taste."
    },
    {
        icon: "🚚",
        title: "Roast-to-Order Shipping",
        description:
            "We don't pre-roast and shelve. Your beans are roasted after you order and shipped within 1-2 business days. Free delivery on orders over $50."
    }
];


export default function AboutSection(){
    return (
        <div className= "about-content">
            {/* Header - rising delays fade the pieces in one by one */}
            <ScrollReveal animation="fadeUp">
                <Badge variant="default" className="mb-4">
                    Founded 2012 - Roasting in-house since day one
                </Badge>
            </ScrollReveal>

            <ScrollReveal animation="fadeUp" delay={0.1}>
                <h1>
                    {/* muted dims the color slightly */}
                    <span className="muted">Our Story</span>
                </h1>
            </ScrollReveal>


            <ScrollReveal animation="fadeIn" delay={.2}>
                <Separator className = "mb-8 max-w-64"/>
            </ScrollReveal>


            {/* story: text left, photos right */}
            <div className="about-story-grid">
                {/* fadeleft slides the text in from the left */}
                <ScrollReveal animation="fadeLeft" className="about-story-text">
                    <p className="about-body lead--light">
                        The beans Place started in 2012 with one simple belief: great coffee should 
                        be accessible to everyone-not just aficionados.  We work directly with
                        farming cooperatives across four continents, paying above fair-trade prices
                        to ensure quality from soil to sip.
                    </p>
                    <p className="about-body lead--light">
                        Every week, our roastmaster cups dozens of samples to select only the lots
                        that meet our standard. Whether you prefer a bright, fruity Ethiopian
                        Yirgacheffe or a deep, chocolatey Colombian Supremo, we roast each batch to
                        order so it arrives at peak freshness.
                    </p>
                </ScrollReveal>

                {/* Photos slide in form the right, just after the text */}
                <ScrollReveal animation="fadeRight" delay={.2} className="about-story-images">
                    {/* Two images stacked so the second overlaps a corder */}
                    <div className="about-image-stack">
                        {/* alt text describes the image for screen readers */}
                        <img
                            src={coffeePlants}
                            alt="Coffee plants on a farm"
                            className="about-image about-image-main"
                        />
                         <img
                            src={storeBarista}
                            alt="Barista crafting coffee"
                            className="about-image about-image-overlay"
                        />
                     </div>
                </ScrollReveal>
            </div>


            {/* value cards - each stats 0.15s after the one before */}
            <StaggerContainer staggerDelay={0.15} className="about-cards-grid">
                {values.map((v) => (

                    //keys must be unique
                    <StaggerItem key={v.title} animation="fadeUp">
                        {/* bare glass means glass={true} - the frosted-glass look */}
                        <Card glass className="about-value-card">
                            <CardHeader>
                                <span className="about-card-icon">{v.icon}</span>
                                <h3 className="text-lg font-bold text-(--cream)">{v.title}</h3>
                            </CardHeader>
                            <CardContent>
                                 <p className="text-sm leading-relaxed text-white/70">
                                     {v.description}
                                </p>
                            </CardContent>
                        </Card>
                    </StaggerItem>

                ))}
            </StaggerContainer>
        </div>
    );
};