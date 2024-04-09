import React from 'react'


import './Styles.css'
import about_img from '../assets/about-img.png'

const About = () => {

    return (
        <div className='about-container'>
            <div className='content-container'>
                <h1 className='about-heading'>About Us</h1>
                <p className='about-desription'>
                    It is a long established fact that a reader will be distracted by the<br />
                    readable content of a page when looking at its layout. The point of<br />
                    using Lorem Ipsum is that it has a more-or-less normal distribution<br />
                    ofletters, as opposed to using 'Content here, content here', making it<br />
                    look like readable English. Many desktop publishing packages and<br />
                    web page editors now use Lorem Ipsum as their
                </p>
                
                <button type="button" className="contact-button">Contact Us</button>
              
            </div>
            <img src={about_img} alt="about logo" className='about-img' />
            
        </div>
    )
}
export default About