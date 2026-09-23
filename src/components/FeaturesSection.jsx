// ============================================================
// FEATURESSECTION.JSX — Scroll-Driven Image Carousel (Day 7-8)
// ============================================================
// A gallery of coffee bag images arranged in three rows that
// move at different speeds as the user scrolls (parallax).
//
// WHAT YOU WILL LEARN:
// - Importing multiple images
// - Creating a helper component (ImageRow) inside the same file
// - useRef to reference a DOM element
// - useEffect with scroll event listeners
// - Mathematical calculations for scroll-based animation
// - Component props (images, speed, offset)
//
// CONCEPTS COVERED:
// - Passing props to child components
// - Default parameter values in function signatures
// - State arrays: useState([0, 0, 0])
// - getBoundingClientRect() for element position
// - Math.max() and Math.min() for clamping values
// - Inline styles with the style prop
//
// ============================================================

// STEP 1: Imports
// From "react": import { useEffect, useRef, useState }
// Import all 15 coffee bag images from ../assets/
//   imgRedSulawesi, imgUrigacheffe, imgTanzaniaPeaberry,
//   imgPanamaGeisha, imgVietnameserobusta, imgBrazilianSantos,
//   imgCostaRicaTarrazu, imgGuatemalaAntigua, imgKenyaAA,
//   imgSumatraMandheling, imgKona, imgJamaicanBlueMountain,
//   imgColombianSupremo, imgEthiopianHarrar, imgArabianMocha

/* --- YOUR IMPORTS GO HERE --- */
import { useEffect, useRef, useState } from "react";

import imgRedSulawesi from "../assets/Red-Sulawesi-Bag.png";
import imgUrigacheffe from "../assets/Urigacheffe-Bag.png";
import imgTanzaniaPeaberry from "../assets/Tanzania-Peaberry-Bag.png";
import imgPanamaGeisha from "../assets/Panama-Geisha.png";
import imgVietnameseRobusta from "../assets/Vietnamese-Robusta.png";
import imgBrazilianSantos from "../assets/Brazilian-Santos-Bag.png";
import imgCostaRicaTarrazu from "../assets/Costa-Rica-Tarrazu-Bag.png";
import imgGuatemalaAntigua from "../assets/Guatemala-Antigua-Bag.png";
import imgKenyaAA from "../assets/Kenya-AA-Bag.png";
import imgSumatraMandheling from "../assets/Sumatra-Mandheling-Bag.png";
import imgKona from "../assets/Kona-Bag.png";
import imgJamaicanBlueMountain from "../assets/Jamaican-Blue-Mountain-Bag.png";
import imgColombianSupremo from "../assets/Colombian-Supremo-Bag.png";
import imgEthiopianHarrar from "../assets/Ethiopian-Harrar-Bag.png";
import imgArabianMocha from "../assets/Arabian-Mocha-Bag.png";

// STEP 2: Define three row arrays (outside the component)
// Each row contains the same images but in different orders.
// This creates visual variety in the carousel.
//
// const row1 = [imgJamaicanBlueMountain, imgEthiopianHarrar, ...];
// const row2 = [imgKenyaAA, imgSumatraMandheling, ...];
// const row3 = [imgGuatemalaAntigua, imgJamaicanBlueMountain, ...];

/* --- YOUR ROW ARRAYS GO HERE --- */


// STEP 3: ImageRow helper component
// function ImageRow({ images, speed = -0.25, offset = 0 }) { ... }
//
// This component renders a single row of images.
//   - Double the images array: const doubled = [...images, ...images];
//   - Return a div with className="carousel-row"
//   - Use inline style to apply horizontal offset:
//     style={{ transform: `translate3d(${offset}px, 0, 0)` }}
//   - Map over doubled to render each image in a card:
//     <div className="carousel-card">
//       <img src={src} className="carousel-image" loading="lazy" />
//     </div>
//
// DISCUSSION: What does loading="lazy" do?
// It tells the browser to only load images when they're
// about to enter the viewport, improving performance.

/* --- YOUR IMAGEROW COMPONENT GOES HERE --- */


// STEP 4: Create and export FeaturesSection
// export default function FeaturesSection() { ... }
//
// Inside the component:
//   A) const sectionRef = useRef(null);
//   B) const [offsets, setOffsets] = useState([0, 0, 0]);
//
//   C) useEffect that adds a scroll listener:
//      - Get the section's bounding rect
//      - Calculate scroll progress (0 to 1) based on position
//      - Update offsets array: each row moves differently
//        Row 1: slides left
//        Row 2: slides right (starts offset left)
//        Row 3: slides left slower
//
//   D) JSX:
//      <section className="carousel-gallery-section" ref={sectionRef}>
//        <div className="carousel-gallery-container">
//          <ImageRow images={row1} offset={offsets[0]} />
//          <ImageRow images={row2} offset={offsets[1]} />
//          <ImageRow images={row3} offset={offsets[2]} />
//        </div>
//      </section>

/* --- YOUR COMPONENT CODE GOES HERE --- */
const row1 = [
    imgJamaicanBlueMountain,
    imgEthiopianHarrar,
    imgGuatemalaAntigua,
    imgTanzaniaPeaberry,
    imgColombianSupremo,
    imgVietnameseRobusta,
    imgKona,
    imgArabianMocha,
    imgKenyaAA,
    imgUrigacheffe,
    imgSumatraMandheling,
    imgPanamaGeisha,
    imgRedSulawesi,
    imgCostaRicaTarrazu,
    imgBrazilianSantos
];

const row2 = [
    imgKenyaAA,
    imgSumatraMandheling,
    imgVietnameseRobusta,
    imgArabianMocha,
    imgPanamaGeisha,
    imgGuatemalaAntigua,
    imgJamaicanBlueMountain,
    imgColombianSupremo,
    imgUrigacheffe,
    imgTanzaniaPeaberry,
    imgEthiopianHarrar,
    imgKona,
    imgRedSulawesi,
    imgBrazilianSantos,
    imgCostaRicaTarrazu
];

const row3 = [
    imgGuatemalaAntigua,
    imgJamaicanBlueMountain,
    imgEthiopianHarrar,
    imgKona,
    imgUrigacheffe,
    imgTanzaniaPeaberry,
    imgKenyaAA,
    imgColombianSupremo,
    imgVietnameseRobusta,
    imgSumatraMandheling,
    imgPanamaGeisha,
    imgArabianMocha,
    imgRedSulawesi,
    imgCostaRicaTarrazu,
    imgBrazilianSantos
];

//draw one horizontal row. local to this file since nothing else uses it.
//images -> which array of photos to show
// offset -> how far to slide the row sideways wide enough to show no gaps
function ImageRow({images, offset = 0}){
    //double the list so the row is always wide enough to show no gaps
    const doubled = [...images,...images];

    return (
        <div className = "carousel-row" style = {{transform: `translate3d(${offset}px, 0, 0)`}}>
            {doubled.map((src,index) => ( 
                <div className = "carousel-card" key={`${index}`}>
                    <img
                        src={src}
                        alt={`Coffee bag ${(index % images.length) + 1}`}
                        className = "carousel-image"
                        loading="lazy"
                    />
                </div>
                
            ))}

        </div>
    )
}



export default function FeaturesSection(){

    //points at the <section below once its on the page
    const sectionRef = useRef(null);
    //how far each row is slid sideways, in pixels - one number per row
    const [offsets,setOffsets] = useState([0,0,0,]);


    useEffect(() => {
        const handleScroll = () => {
            //bail out if the section isn't on the page yet
            if(!sectionRef.current) return;

            //element position relative to the visible window
            const rect = sectionRef.current.getBoundingClientRect();
            const viewH = window.innerHeight;

            //0 when the section enters the bottom, 1 when it leaves the top...
            const progress = 1 - rect.bottom / (viewH + rect.height);
            //..clamped so it can never go below 0 or 1
            const p = Math.max(0, Math.min(1,progress));

            //slide distance scales with the viewport, capped at 600 px
            const range = Math.min(window.innerWidth * 0.5, 600);

            //p ("how far scroll") e range = "how far to slide"
            setOffsets([
                -p * range,
                p * range - range,
                -p * range * 0.7
            ])

        }

        //run once so the row sits correctly before any scrolling
        handleScroll();

        window.addEventListener("scroll", handleScroll, {passive: true});

        return () => window.removeEventListener("scroll", handleScroll);
        
    }, []);

    return (
        <section className = "carousel-gallery-section" ref={sectionRef}>
            <div calssName = "carousel-gallery-container">
                <ImageRow images = {row1} offset= {offsets[0]}/>
                <ImageRow images = {row2} offset= {offsets[1]}/>
                <ImageRow images = {row3} offset= {offsets[2]}/>
            </div>
        </section>
    );
};