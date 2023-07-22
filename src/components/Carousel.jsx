// import React, { useState } from "react";
// import { CarouselItem } from "./CarouselItem";

import formc from "../images/form.png"
import form2 from "../images/form2.png"

// export const Carousel = () => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const items = [
//     {
//       title: "Baseball",
//       description:
//         "Baseball is a bat-and-ball sport played between two teams of nine players each, taking turns batting and fielding. The game occurs over the course of several plays, with each play generally beginning when a player on the fielding team, called the pitcher.",
//       icon: {ex1},
//     },
//     {
//       title: "Walking",
//       description:
//         "Walking (also known as ambulation) is one of the main gaits of terrestrial locomotion among legged animals. Walking is typically slower than running and other gaits. ",
//       icon: {ex2},
//     },
//     {
//       title: "Weights",
//       description:
//         "Weightlifting generally refers to activities in which people lift weights, often in the form of dumbbells or barbells. People lift various kinds of weights for a variety of different reasons.",
//       icon: {ex3}
//     },
//   ];
//   const updateIndex = (newIndex) => {
//     if (newIndex < 0) {
//       newIndex = 0;
//     } else if (newIndex >= items.length) {
//       newIndex = items.length - 1;
//     }

//     setActiveIndex(newIndex);
//   };
//   return (
//     <div className="carousel">
//       <div
//         className="inner"
//         style={{ transform: `translate(-${activeIndex * 100}%)`
//      }}
//       >
//         {items.map((item) => {
//           return <CarouselItem item={item} width={"100%"} />;
//         })}
//       </div>

//       <div className="carousel-buttons">
//         <button
//           className="button-arrow"
//           onClick={() => {
//             updateIndex(activeIndex - 1);
//           }}
//         >
//           <span class="material-symbols-outlined">arrow_back_ios</span>{" "}
//         </button>
//         <div className="indicators">
//           {items.map((item, index) => {
//             return (
//               <button
//                 className="indicator-buttons"
//                 onClick={() => {
//                   updateIndex(index);
//                 }}
//               >
//                 <span
//                   className={`material-symbols-outlined ${
//                     index === activeIndex
//                       ? "indicator-symbol-active"
//                       : "indicator-symbol"
//                   }`}
//                 >
//                   radio_button_checked
//                 </span>
//               </button>
//             );
//           })}
//         </div>
//         <button
//           className="button-arrow"
//           onClick={() => {
//             updateIndex(activeIndex + 1);
//           }}
//         >
//           <span class="material-symbols-outlined">arrow_forward_ios</span>
//         </button>
//       </div>
//     </div>
//   );
// };

import './slick-custom.css'; 

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// const Carousel = () => {
//   // Slick carousel settings
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//   };

//   return (
//     <div style={{ maxWidth: '600px', margin: '0 auto' }}>
//       <h2 style={{ textAlign: 'center' }}>Let's know more about forms </h2>
//       <Slider {...settings}>
//         <div>
//           <img
//             src="https://i0.wp.com/komplytek.com/blogs/wp-content/uploads/2023/07/6859168_1.jpg?w=2100&ssl=1"
//             alt="Slide 1"
//             style={{ width: '100%', height: '500px', objectFit: 'contain',position: 'relative'  }}
//           />
//         </div>
//         <div style={{paddingRight:'20px'}}>
//           <img
//             src={formc}
//             alt="Slide 2"
//             style={{ width: '100%', height: '500px', objectFit: 'contain' }}
//           />
//         </div>
//         <div>
//           <img
//             src={form2}
//             alt="Slide 3"
//             style={{ width: '100%', height: '500px', objectFit: 'contain' }}
//           />
//         </div>
//       </Slider>
//     </div> 
//   );
// };


const Carousel = () => {
  // Slick carousel settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    
  };

  return (
    <div style={{ maxWidth: '500px', }}>
      <h2 style={{ textAlign: 'center',color:'green' }}>Let's know more about forms </h2>
      <Slider  {...settings}>
        <div >
          <img
            src="https://i0.wp.com/komplytek.com/blogs/wp-content/uploads/2023/07/6859168_1.jpg?w=2100&ssl=1"
            alt="Slide 1"
            style={{ width: '100%', height: '300px', objectFit: 'contain', }}
          />
        </div>
        <div >
          <img
            src={formc}
            alt="Slide 2"
            style={{ width: '100%', height: '300px', objectFit: 'contain' }}
          />
        </div>
        <div >
          <img
            src={form2}
            alt="Slide 3"
            style={{ width: '100%', height: '300px', objectFit: 'contain' }}
          />
        </div>
      </Slider>
    </div>
  );
};


export default Carousel;



// https://vakilsearch.com/blog/why-you-need-income-tax-audit/
// https://i0.wp.com/certicom.in/wp-content/uploads/2018/08/7-Reasons-to-file-ITR.png?resize=647%2C961
// https://www.jagoinvestor.com/wp-content/uploads/files/Visa-documents-checklist-2.png