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
