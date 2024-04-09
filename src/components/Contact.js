import React from 'react'

import './Styles.css'
import contact from '../assets/contact-img.jpg'
import client_profile from '../assets/client.jpg'
import location_img from '../assets/location.png'
import call_img from '../assets/call.png'
import envelope_img from '../assets/envelope.png'
import { useState } from 'react'


const Contact = () =>{

    const [userName, setFormName]=useState('')
    const [email, setFormEmail]=useState('')
    const [password, setFormPassword]=useState('')

    const [errors, setErrors] = useState({
        userName: "",
        email: "",
        password: ""

    })

    function handleSend(){
        if(userName.trim()===""){
            setErrors((errors) => ({...errors,userName: "Enter Username"}))
        }

        else if(userName.trim()===""){
            setErrors((errors)=>({...errors,userName: "Enter Currect Username"}))
        }

        else{
            setErrors((errors) => ({...errors,userName: ""}))
        }



        if(email.trim()===""){
            setErrors((errors) => ({...errors,email: "Enter Email Address"}))
        }

        else if(email.trim()===""){
            setErrors((errors)=>({...errors,email: "Enter Valid Email Address"}))
        }

        else{
            setErrors((errors) => ({...errors,email: ""}))
        }

        if(password.trim()===""){
            setErrors((errors) => ({...errors,password: "Enter Password"}))
        }

        else if(email.trim()===""){
            setErrors((errors)=>({...errors,password: "Password Is A Minumum 8 Characters"}))
        }

        else{
            setErrors((errors) => ({...errors,password: ""}))
        }


    }


    
    return(
        <>
        <h1 className='contact-head'>Let's Get In Touch!</h1>
        <div className='contact-bg-container'>
            <div>
                <div className='input-container'>
                    <input type="text" placeholder='Name' className='name-input' value={userName} 
                    onChange={(event)=>{setFormName(event.target.value)}}
                    />
                    {errors.userName && <span className='text-danger'>{errors.userName}</span>}
                </div>
                <div className='input-container'>
                    <input type="email" placeholder='Email' className='name-input' value={email}
                    onChange={(event)=>{setFormEmail(event.target.value)}}
                    />
                    {errors.email && <span className='text-danger'>{errors.email}</span>}
                </div>
                <div className='input-container'>
                    <input type="password" className='name-input' placeholder='Password' value={password}
                    onChange={(event)=>{setFormPassword(event.target.value)}}
                    />
                    {errors.password && <span className='text-danger'>{errors.password}</span>}
                </div>
                <button type="button" className='contact-button' onClick={handleSend}>Send</button>
            </div>
            <img src={contact} alt="contact" className='contact-img'/>
        </div>


        <h1 className='contact-head'>Testimonial</h1>
        <div className='user-profile-content-container'>
            <div className='user-profile-container'>
                <img src={client_profile} alt="pfofile" className='client-img'/>
                    <h1 className='client-name'>JOHNDUE <br/>
                        <span className='color-text'>Farm & Co</span>
                    </h1> 
            </div>
            <div className='client-description-container'>
            <p className='client-description'>
                ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore<br/>
                magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea<br/>
                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            </p>
            </div>
        </div>

        <div className='contact-us-container'>
            <h1 className='contact-details'>Contact Us</h1>
            <img src={location_img} alt='location' className='details-logo'/>
            <img src={call_img} alt='call' className='details-logo'/>
            <img src={envelope_img} alt='mail' className='details-logo'/>
            <div className='footer-container'>
                <p className='footer-text'>Copyright © 2045 All Rights Reserved. By HTML Design</p>
            </div>
        </div>
       
        </>
    )
    
}




export default Contact