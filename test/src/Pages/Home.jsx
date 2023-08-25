import React from 'react'
import '../assets/style.css'
import Navbar from '../Components/navbar';
import Footer from '../Components/footer';
// import Header from '../components/landingPage/Header';
// import ReachOut from '../components/landingPage/ReachOut';
// import Testimonial from '../components/landingPage/Testimonial';
// import Subscription from '../components/landingPage/Subscription';
// import TakeStep from '../components/landingPage/TakeStep';

const Home = () => {
    return (
      <div>
        <Navbar/>
        <Footer/>
        {/* <Explore/>
        <ReachOut/>
        <Testimonial/>
        <Subscription/>
        <TakeStep/>
        <Footer/> */}
      </div>
    )
  }
  
  export default Home