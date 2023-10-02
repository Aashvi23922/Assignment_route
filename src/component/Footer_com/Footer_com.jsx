import React from 'react'
import './Footer_com.css'
import { Facebook, Instagram, Twitter } from "lucide-react";
import { NavLink } from 'react-router-dom';
function Footer_com() {
    return (
        <>
            <div className="footer-main" style={{paddingTop:"150px"}}>
                <div className="footer-bg">
                    <div className="line-1">
                        <li><NavLink to={"/"}>Home</NavLink></li>
                        <li><NavLink>About</NavLink></li>
                        <li><NavLink>Contact</NavLink></li>
                    </div>
                    <div className="box-2">
                        <div className="line-2">
                            <h4>Enter Your Categories</h4>
                        </div>
                        <div className="line-3">
                            <div>
                                <input type="text" placeholder='Your Product Name....' />
                            </div>
                           
                        </div>
                        <div className="line-4">
                            <a href=""><Instagram size={40} color="gray" strokeWidth={1.5} /></a>
                            <a href=""><Facebook size={40} color="gray" strokeWidth={1.5} /></a>
                            <a href=""><Twitter size={40} color="gray" strokeWidth={1.5} /></a>
                        </div>

                        <div className="footer-bottom">
                            <p className='para'>
                                © 2023 CARATLANE.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer_com;