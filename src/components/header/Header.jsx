
import { useEffect, useState } from "react";
import {AiOutlineArrowLeft,AiOutlineArrowRight} from "react-icons/ai"
import "./header.css";

export default function Header() { 
  const sliderData = [
    {
      id:1,
      image: "https://i.ibb.co/58Mq6Mb/slide1.jpg",
      desc: "Write everything you explore everyday!!!!!....enjoy everyday with new experience..",
    },
    {
      id:2,
      image: "https://i.ibb.co/8gwwd4Q/slide2.jpg", 
      desc: "Freeze the happy moments....and celebrate everything and anything around you",
    },
    {
      id:3,
      image: "https://i.ibb.co/8r7WYJh/slide3.jpg",
      desc: "Stay connected to your friends and family and spread happiness to all around you!!!.",
    },
  ];
  const [currentSlide,setCurrentSlide]= useState(0);
  const slideLength= sliderData.length;

  const autoScroll = true;
  let slideInterval;
  let intervalTime = 5000; // in milliseconds

  const prevSlide = ()=>{
    setCurrentSlide( currentSlide === 0 ? slideLength - 1 
      :currentSlide - 1);
  }

  const nextSlide = ()=>{
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 
      : currentSlide + 1);
  }

  function auto(){
    slideInterval = setInterval(nextSlide,intervalTime)
  }

  useEffect(() => {
   if(autoScroll){
     auto()
   }
   return () => clearInterval(slideInterval);
  },[currentSlide])
  

  useEffect(() => {
    setCurrentSlide(0);
  },[])
  
 
  return (
  <div className="imgslider">
    <div className="Slider_left">
        <AiOutlineArrowLeft className="arrow_prev" onClick={prevSlide}/>
        <AiOutlineArrowRight   className="arrow_next" onClick={nextSlide}/>

        {sliderData.map((slide, index) => {
        return (
          <div
            className={index === currentSlide ? "slide_current" : "slide"}
            key={index}
          >
               {index === currentSlide && (
                 <div>
                 <img src={slide.image} alt="slide" />
                 <div className="slider_content">
                   <h2>{slide.title}</h2>
                   <p className="slide_desc">{slide.desc}</p>
                   <hr/>
                   <button className="slide_btn">Get Started</button>

                 </div>
                 </div>
               )}
            </div>
          )
        })}
    </div>

  </div>

  );
}