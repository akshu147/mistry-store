import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react'
import logo from "../images/logo-title-white.svg";
import langswitch from "../images/lang-switch.svg";
import calllaling from "../images/call-calling (1).svg";
import { Link } from 'react-router-dom';

const Head = () => {
  const [changepos, setchangepos] = useState({
    position:"absolute",
  })
  window.addEventListener("scroll", ()=> {
    if(window.scrollY >= 500) {
      setchangepos({
        position:"fixed",
      })
      
    }
    else {
      setchangepos({
        position:"absolute"
      })
    }
  })
 


  return (
    <>
      <header style={{position:changepos.position}}>

        <figure>
          <img width="100%" src={logo} alt="" />
        </figure>
        <div className='nav'>
          <div className="hidediv">
            <ul className='p-0 d-flex m-0 text-white'>
              <Link className='actab' to="/"><li>Home</li></Link>
              <Link className='actab' to="/PDF-Catalog"><li>PDF Catalog</li></Link>
              <Link className='actab' to="/About"><li>About-us</li></Link>
              <Link className='actab' to="/Contact"><li>Contact-us</li></Link>
              <Link className='actab' to="/Blogs"><li>Blogs</li></Link>
            </ul>
          </div>
          <div className="iconbar">
            <i> <img src={langswitch} alt="" /></i>
            <i>  <img src={calllaling} alt="" /></i>

            <button>Login</button>

          </div>

        </div>


      </header>
    </>
  )
}

export default Head
