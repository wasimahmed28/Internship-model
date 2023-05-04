import React from 'react';
import { Link } from 'react-scroll';

 
import one from '../images/1.png'
import two from '../images/2.png'
import three from '../images/3.png'
import four from '../images/4.png'

function Aboutus() {

    return (
        <>
            <div id='main2'>
                <div className='name'>

                </div>

            </div>
            <div id='features2'>

                <div className='half2'>
                    <h1 className='head2'>Digital guidance expertise</h1>
                    <h2 className='details2'>We are a leading IT consultancy with expertise in innovative solutions for modern challenges. Our client-centric approach enables us to design tailored solutions that keep businesses ahead in the ever-evolving digital landscape.</h2>
                    <div className='header-btns'>

                        <button className='header-btn'>get started</button>
                    </div>
                </div>
                <div className='half-image'>


                </div>
            </div>

            <div id='offer2'>
                <div className='pr-heading'>
                    <h1>Your success is our top
                        priority -always.</h1>
                    <p className='details'>At our IT consultancy firm, we prioritize certain values and approaches that have helped us build a reputation for excellence in the industry. First and foremost, we prioritize customer satisfaction, and we always go the extra mile to ensure our clients' needs are met.</p>
                    <div className='card-component'>
                    <div class="card">
                    <img src={one} alt="Avatar" />
                    <div class="container">
                        <h4><b>Our Mission</b></h4>
                        <p>Use the power of technology and our deep understanding of the industry to solve engineering challenges of any nature, scale, or complexity</p>
                    </div>
                </div>
                <div class="card">
                    <img src={two} alt="Avatar" />
                    <div class="container">
                        <h4><b>Our Philosophy</b></h4>
                        <p>Go above and beyond to bring in new perspectives, relentless energy, and utmost dedication to driving client success</p>
                    </div>
                </div>
                <div class="card">
                    <img src={three} alt="Avatar" />
                    <div class="container">
                        <h4><b>Our Vision</b></h4>
                        <p>Harness innovation to accelerate digital transformation and drive change & client success</p>
                    </div>
                </div>
                <div class="card">
                    <img src={four} alt="Avatar" />
                    <div class="container">
                        <h4><b>Our Strategy</b></h4>
                        <p>Leverage next-gen technologies, robust internal frameworks, and defined processes to provide best-in-class services within timelines</p>
                    </div>
                </div>
                </div>
                </div>

            </div>
            <div id='offer3'>
                <div className='pr-heading'>
                    <h1>Who We Are</h1>
                    <p className='details'>Our values shape the culture of our organization and define who we are. These are at the core of how we work and what we do. We are:</p>
                    <div className='card-component2'>
                    <div class="card2">
                   
                    <div class="container2">
                        <h4><b>Your Next-Gen Technology Partner</b></h4>
                        <p>We provide industry expertise and solution IPs to help customers achieve successful business outcomes.</p>
                    </div>
                </div>
                <div class="card2">
                   
                    <div class="container2">
                        <h4><b>Team-Oriented</b></h4>
                        <p>We work together to drive change by setting the bar for future technologies and our way of working.</p>
                    </div>
                </div>
                <div class="card2">
                   
                    <div class="container2">
                        <h4><b>Client-Focused</b></h4>
                        <p>We are, above all else, customer-centric. We are in it for the long run and have an unwavering passion for client success.</p>
                    </div>
                </div>
             
                </div>
                </div>

            </div>
            <div className='partners'></div>
        </>
    )

}

export default Aboutus
