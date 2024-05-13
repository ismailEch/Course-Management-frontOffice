//  import React from 'react'
import Navbar from "../component/Navbar";
import HeroSection from "../component/Hero-section";
import EnrollPage from "../component/EnrollPage";
import Footer from "../component/Footer";
import PopularCategory from "../component/PopularCategory";

function Home() {
   return (
     <div>
       <Navbar/>
       <HeroSection/>
       <EnrollPage/>
       <PopularCategory/>
       <Footer/>
       
     </div>
    )
 }

 export default Home

