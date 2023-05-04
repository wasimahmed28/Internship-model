import React from 'react';
import aboutimage from '../images/about.jpg'
import phone from '../images/phone.png'
function Header() {
  return (
    <>
    <div id='main'>
        <div className='name'>
            <h1>scale your business</h1>
            <h1>lead the market</h1>
            <p className='details'>let our team, help you reach your dream</p>
            <div className='header-btns'>
             
              <button className='header-btn'>get started</button>
            </div>
        </div>
      
    </div>
    <div id='features'>
    
      <div className='half'>
            <h1 className='head'>let us build it for you</h1>
            <h2 className='details'>providing you industry level solutions to cater your needs and help you become the next big thing.</h2>
            <div className='header-btns'>
             
              <button className='header-btn'>get started</button>
            </div>
            </div>
            <div className='half-image'>
            <img className='phone' src={phone} alt="" />

        </div>
    </div>
    
    <div id='offer4'>
        <div className='pr2-heading'>
            <h1>200</h1>
            <h2 className='details'>Leading businesses</h2>
            <h1>200</h1>
            <h2 className='details'>Leading businesses</h2>
            <p>Not only do we help businesses reach their goals, but help build the empire.
<br/>-Satya Nadela</p>
            </div>
      
    </div>
    <div id='about'>
       
        <div className='about-text'>
            <h1>we are believers,</h1>
            <br/>
            <h2>of the human <span>touch.</span></h2>
            <p>That’s why, we at hubnex create solutions that matters. We are not the beasts hungry for every bit of market, but we value time, efforts and emotions as well. We create with the intention of sustaining the product in the market for longer than imagined. We are believers. We believe in you and your potential to break the trend. </p>         
        </div>
        <div className='about-image'>
            <img src={aboutimage} alt="" />

        </div>
      
    </div>
   
    </>
  )
}

export default Header;
