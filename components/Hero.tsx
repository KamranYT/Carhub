"use client";

import Image from "next/image";

import  { CustomButton}  from "./CustomButton";

function Hero() {
  const handleScroll = () => {
    const nextSection = document.getElementById("discover");

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Find, book, rent a car—quick and super easy!
        </h1>

        <p className="hero__subtitle">
          Streamline your car rental experience with our effortless booking
          process.
        </p>

        <CustomButton
          title="Explore Cars"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/car.png" alt="hero" fill className="object-contain" />
        </div>

        <div className="hero__image-overlay" />
      </div>
    </div>
  );
};

export default Hero;

// "use client";

// import React from "react";
// import Image from "next/image";
// import { CustomButton } from "@/components/CustomButton";

// const Hero: React.FC = () => {
//   // Scroll handler to move to the "discover" section
//   const handleScroll = () => {
//     const nextSection = document.getElementById("discover");

//     if (nextSection) {
//       nextSection.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   return (
//     <div className="hero">
//       {/* Main content section */}
//       <div className="flex-1 pt-36 padding-x">
//         <h1 className="hero__title">
//           Find, book, rent a car—quick and super easy!
//         </h1>

//         <p className="hero__subtitle">
//           Streamline your car rental experience with our effortless booking process.
//         </p>

//         {/* Button component */}
//         <CustomButton
//           title="Explore Cars"
//           containerStyles="bg-primary-blue text-white rounded-full mt-10"
//           handleClick={handleScroll}
//         />
//       </div>

//       {/* Image section */}
//       <div className="hero__image-container">
//         <div className="hero__image">
//           {/* Updated Image component with `fill` attribute */}
//           <Image
//             src="/hero.png"
//             alt="Car Rental Hero"
//             fill
//             className="object-contain"
//             priority // Use priority to improve loading
//           />
//         </div>

//         {/* Overlay for the image */}
//         <div className="hero__image-overlay" />
//       </div>
//     </div>
//   );
// };

// export default Hero;
