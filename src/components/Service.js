import React from 'react'

import './Styles.css'
import heart_symbol from '../assets/heart.png'
import forword_symble from '../assets/forword.png'
import date_symble from '../assets/date.png'
import note_symble from '../assets/note.png'

const Service = () =>{
    return(
        <div className='service-bg-container'>
            <h1 className='service-heading'>At Your Service</h1>
            <div className='service-content-container-main'>
                <div  className='service-content-container'>
                    <img src={heart_symbol} alt="heart symbol" className='symbol'/>
                    <h1 className='head'>Written With Love</h1>
                    <p className='para'>
                        It is a long established fact that a reader will be distracted<br/> 
                        by the readable content of a page when looking at its<br/>
                        layout. The point of using Lorem Ipsum is that it has a<br/> 
                        more-or-less normal distribution ofletters, as opposed to<br/>
                        using 'Content here, content t,
                    </p>
                    <button type='button' className='button'>READ MORE</button>
                </div>

                <div  className='service-content-container'>
                    <img src={forword_symble} alt="forword symbol" className='symbol'/>
                    <h1 className='head'>Fast Turnaround</h1>
                    <p className='para'>
                        It is a long established fact that a reader will be distracted<br/>
                        by the readable content of a page when looking at its<br/>
                        layout. The point of using Lorem Ipsum is that it has a<br/>
                        more-or-less normal distribution ofletters, as opposed to<br/>
                        using 'Content here, content here', making it look like
                    </p>
                    <button type='button' className='button'>READ MORE</button>
                </div>

                
                <div  className='service-content-container'>
                    <img src={date_symble} alt="date symbol" className='symbol'/>
                    <h1 className='head'>Up to Date</h1>
                    <p className='para'>
                        It is a long established fact that a reader will be distracted<br/>
                        by the readable content of a page when looking at its<br/>
                        layout. The point of using Lorem Ipsum is that it has a<br/>
                        more-or-less normal distribution ofletters, as opposed to<br/>
                        using 'Content here, content here', making it look like now<br/>
                        use Lorem Ipsum astheir default model text,
                    </p>
                    <button type='button' className='button'>READ MORE</button>
                </div>

                
                <div  className='service-content-container'>
                    <img src={note_symble} alt="note symbol" className='symbol'/>
                    <h1 className='head'>Premium Content</h1>
                    <p className='para'>
                        It is a long established fact that a reader will be distracted<br/>
                        by the readable content of a page when looking at its<br/>
                        layout. The point of using Lorem Ipsum is that it has a<br/>
                        more-or-less normal distribution ofletters, as opposed to<br/>
                        using 'Content here, content here', making it look like
                    </p>
                    <button type='button' className='button'>READ MORE</button>
                </div>
            </div>
            <div className='service-quote-container'>
                <h className="quote-head">Get Your Quote Today!</h>
                <p className="quote-para">
                    It is a long established fact that a reader will be distracted by the readable content of a page
                </p>
                <div className='quote-button-container'>
                    <button type="button" className="quote-button">Get A Quote</button>
                </div> 
            </div>
        </div>
         
    )
}
export default Service