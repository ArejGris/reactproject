import './about.css'
import imgicon from '../assets/icons/icon _menu icon_.png'

import rec0 from '../assets/Rectangle 34.png'
import rec1 from '../assets/Rectangle 36.png'
import rec2 from '../assets/Rectangle 35.png'
import rec4 from '../assets/Rectangle 37.png'
import arrowLeft from '../assets/icons/icon _arrow right alt_ (1).png'
import arrowRight from '../assets/icons/icon _arrow right alt_.png'
import instagram from '../assets/icons/icon _instagram.png'
import facebook from '../assets/icons/icon _facebook.png'
import phone from '../assets/icons/icon _phone.png'
import twitter from '../assets/icons/icon _twitter.png'
import letter from '../assets/icons/Group 26.png'
const About = () => {
    return ( 
    <div className="about">
        <section  className="the-first-sec">
                <div className="left"><h1>About Us</h1></div>
                <div className="right">
                    <div className="card">
                        <div className="card-head">
                        A brief about the company

                        </div>
                    </div>
                    </div>
           
        </section>
        <section className='services'>
        <div className="header">
                    <img src={imgicon} alt="" /><h1>Our Services </h1>
                </div>
            <div className="container">
               <div className="row">
                <div className="col-12">
                    <div className="service">
                        <div className="story">
                            <img src={rec0} alt="" />
                        </div>
                        <div className="arrow">
                            <img src={arrowLeft} alt="" />
                        </div>
                        <div className="concept">
                        Airplane ticket
                            </div> 
                        
                    </div>
                </div>
                <div className="col-12">
                <div className="service">
                       <div className="concept">
                       Hotel reservation
                            </div>
                        <div className="arrow">
                            <img src={arrowRight} alt="" />
                        </div>
                        <div className="story">
                            <img src={rec1} alt="" />
                        </div> 
                        
                    </div>

                </div>
                <div className="col-12">
                <div className="service">
                        <div className="story">
                            <img src={rec2} alt="" />
                        </div>
                        <div className="arrow">
                            <img src={arrowLeft} alt="" />
                        </div>
                        <div className="concept">
                        Visa exportation
                            </div> 
                        
                    </div>
                </div>
                <div className="col-12">
                <div className="service">
                       <div className="concept">
                       Tourism trips
                            </div>
                        <div className="arrow">
                            <img src={arrowRight} alt="" />
                        </div>
                        <div className="story">
                            <img src={rec4} alt="" />
                        </div> 
                        
                    </div>
                </div>
               </div>
            </div>


        </section>
        <section className='question'>
            <div className="container">
                <div className="row">
                    <div className="col-4 center">
                        <h1 className='hc'>
                        Frequently Asked Questions
                        </h1>
                    </div>
                    <div className="col-8 center">
                        <div className="card question-section">
                            <div className="card-body">
                                <ul>
                                    <li>
                                        <h2>Question no1</h2>
                                        <h4>Answer no1</h4>
                                    </li>
                                    <li>
                                        <h2>Question no2</h2>
                                        <h4>Answer no2</h4>
                                    </li>
                                    <li>
                                        <h2>Question no3</h2>
                                        <h4>Answer no3</h4>
                                    </li>
                                    <li>
                                        <h2>Question no4</h2>
                                        <h4>Answer no4</h4>
                                    </li>
                                </ul>


                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
        <div className="footer">
            <ul className='footer-list'>
               
                <li>
                    
                <img src={facebook} alt="" />
                <img src={twitter} alt="" />
                    <img src={instagram} alt="" />
                    @username
                </li>
                <li>
                    <img src={phone} alt="" />
                    (225) 555-0118
                </li>
                <li>
                    <img src={letter} alt="" />
                    mail@example.com
                </li>


            </ul>
        </div>
    </div> );
}
 
export default About;