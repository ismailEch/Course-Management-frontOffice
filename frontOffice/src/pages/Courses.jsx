//  import React from 'react'
import Navbar from "../component/Navbar";
import HeroSection from "../component/Hero-section";
import Footer from "../component/Footer";
import CoursePage from "../component/CoursePage";
import PopularCategory from "../component/PopularCategory";

function Courses() {
   return (
     <div>
       <Navbar/>
       <HeroSection/>
       <CoursePage/>
       <PopularCategory/>
       <Footer/>
       
     </div>
    );
 }

 export default Courses;