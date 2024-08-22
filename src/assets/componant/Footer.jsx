import React from 'react';
import logo from "../images/logo.svg";
import youtube from '../images/youtube.svg';
import facebook from '../images/facebook.svg';
import whatsapp from '../images/whatsapp.svg';
import insta from '../images/instagram.svg';
import linkdin from '../images/linkedin.svg';

const Footer = () => {
  return (
    <>
    <footer>
        <div className="footer">
        <div className="fitem">
            <figure className='p-0 m-0 m-auto'>
                <img width="100%" src={logo} alt="" />
            </figure>
        
        </div>
        <div className="fitem">
        <ul>
                <li>Home</li>
                <li>About-us</li>
                <li>Partner with us</li>
                <li>Contact us</li>
                <li>FAQ's</li>
                <li>Expert inspection</li>
            </ul>
        </div>
        <div className="fitem">
            <ul>
                <li>Privecy policy</li>
                <li>Tern & conditions</li>
                <li>Return policy</li>
                <li>Shipping & Delivery policy</li>
                <li>Term of Trade</li>
                <li>Smart cradit program</li>
            </ul>
        </div>
        <div className="fitem">
            <h4>Contact-us</h4>
            <p><span>91+ 9352027040</span></p>
            <p><span>Marketing: Sumsajangid2002@gmail.com</span></p>
            <p><span>Sales: StarkIndustreis.in</span></p>
            <p><span>Plot no.34 sangriya phanta jodhpur (raj)</span></p>

            <p></p>

        </div>
        </div>
        <div className="social-icons d-flex justify-content-around">
            <h6 className='m-0'>Copyright © 2023 Infraequity Technologies Private Limited</h6>
            <div className='d-flex gap-3'>
                <i><img width="100%" src={youtube} alt="" /></i>
                <i><img width="100%" src={facebook} alt="" /></i>
                <i><img width="100%" src={whatsapp} alt="" /></i>
                <i><img width="100%" src={insta} alt="" /></i>
                <i><img width="100%" src={linkdin} alt="" /></i>


            </div>

        </div>
   
    </footer>
      
    </>
  )
}

export default Footer
