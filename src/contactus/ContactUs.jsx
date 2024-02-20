import './connect.css'
import img3 from '../assets/rowan-heuvel-sAB4BWrQ4Y4-unsplash 1.png'
import icon1 from '../assets/icons/phone.svg'
import icon2 from '../assets/icons/email.svg'
import icon3 from '../assets/icons/map-marker.svg'
import icon4 from '../assets/icons/instagram.svg'
const ContactUs = () => {
    return ( 
    <div className="contact container-fluid">
        <div className="row connect">
            <div className="col-6">
                <div className="main">
                    
                <img src={img3}  alt="" />

                </div>
            </div>
            <div className="col-6 ">
                <div className="left">
                <div className="card1">
                    <h1>Contact Us</h1>
                    <ul>
                        <li><img src={icon1} className='icon' alt="" />
                        <div className="phones">
                        <span>(225) 555-0118</span>
                        <span>(808) 555-0111</span>
                            </div>
                            </li>
                        <li><img src={icon2} className='icon' alt="" />
                        <span>2715 Ash Dr. San Jose, South Dakota 83475</span>
                        </li>
                        <li><img src={icon3} className='icon' alt="" />
                        <div className="phones">
                        <span>curtis.weaver@example.com</span>
                        <span>jackson.graham@example.com</span>
                            </div>
                            </li>
                        <li><img src={icon4} className='icon' alt="" /><span>@username</span></li>

                    </ul>
                </div>

                </div>
               

            </div>
        </div>
    </div>
);
}
 
export default ContactUs;