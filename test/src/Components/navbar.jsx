import React from "react";
import '../assets/style.css'
// import search from '.././assets/img/search.svg'
// import logo from '.././assets/img/synapse.svg'
 
const Navbar = () => {
    return (
       <div>
         <div id="header" className="flex justify-around bg-black pt-2 pb-2">
                <div id="logo" className="flex gap-3">
                    <a  rel="noopener" href="#follow_me_on"><img src="./images/logo.png" alt="" className="w-[50px] h-[50px] pt-1"/></a>
                    <p className="text-4xl pt-2 font-bold">A.Z</p>
                    <button className="btn bg-emerald-800" type="button" data-bs-toggle="offcanvas" data-bs-target="#demo">
                        <img id="nav-two" src="./images/navbar.svg"  className="invisible max-[428px]:visible" alt=""/>
                      </button>
            </div>
                <div id="links" className="flex gap-9 pt-3 max-[428px]:collapse">
                    <a className="mt-[-3px]" href="index.html" type="button" data-bs-toggle="tooltip" data-bs-placement="top" title="You are currently on the homepage" id="home">Home</a>
                    <a rel="noopener" href="#coding_realization" className="id">Work</a>
                    <a  rel="noopener" href="#coding_realization" className="id">About</a>
                    <a  rel="noopener" href="#follow_me_on" className="id">Contact</a>
                </div>
                <div className="offcanvas offcanvas-end max-[428px]:collapse" id="demo">
                    <div className="offcanvas-header">
                      <h1 className="offcanvas-title">Heading</h1>
                      <button type="button" className="btn-close" data-bs-dismiss="offcanvas"></button>
                    </div>
                    <div className="offcanvas-body">
                        <a className="mt-[-3px]" href="index.html" type="button" data-bs-toggle="tooltip" data-bs-placement="top" title="You are currently on the homepage" id="home">Home</a>
                        <a rel="noopener" href="#coding_realization" className="id">Work</a>
                        <a  rel="noopener" href="#coding_realization" className="id">About</a>
                        <a  rel="noopener" href="#follow_me_on" className="id">Contact</a>
                      <button className="btn btn-secondary" type="button">A Button</button>
                    </div>
                  </div>
            </div>
       </div>
    );
};
 
export default Navbar;