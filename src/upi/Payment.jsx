import { Link } from 'react-router-dom';
import img6 from '../assets/rowan-heuvel-sAB4BWrQ4Y4-unsplash 1 (4).png'
import './Payment.css'
const Payment = () => {
    return ( 
    <div className="container-fluid">
        <div className="row payment">
            <div className="head"><h1>Payment with Paytm & UPI</h1></div>
            <div className="col-5">
                <div className="up">
                    <img src={img6} alt="" />
                </div>

            </div>
            <div className="col-7">
                <div className="up-left">
                <form  className="form5">
                    <div className="form-group">
                    <label >Company number</label>
                        <input type="text" placeholder='(225) 555-0118'/>
                        
                    </div>
                    <div className="form-group">
                    <label>Add screenshot</label>
                        <input type="text" placeholder='Upload file' />
                        
                    </div>

                </form>
                
                <p>Or pay with <Link to='/pay' className='link3'>Visa card or Mastercard  </Link></p>

                </div>
                

            </div>
        </div>
    </div> );
}
 
export default Payment;