import img5 from '../assets/rowan-heuvel-sAB4BWrQ4Y4-unsplash 1 (6).png'
import iconimg1 from '../assets/icons/icon _MasterCard icon_.png'
import iconimg2 from '../assets/icons/icon _Visa icon_.png'
import './pay.css'
import { Link } from 'react-router-dom'
const Payment = () => {
    return ( <>
    <div className="container-fluid">
        <div className="row pay">
            <div className="col-5">
                <div className="credit">
                    <img src={img5} alt="" />
                </div>
            </div>
            <div className="col-7">
                <div className="credit2">
                <h1 className='pay-font'>Payment Via Card</h1>
                <form  className="form4">
                    <div className="form-group">
                        <input type="text" />
                        <label className='firstlabel'>
                            <span>card number </span>
                            <div className="imges">
                            <img src={iconimg1} alt="" className="icon-img" />
                        <img src={iconimg2} alt="" className="icon-img" />
                            </div>
                        </label>
                    </div>
                    <div className="form-group last last1">
                        <input type="text" />
                    <label >Expiration date MM/YY</label>
                    </div>
                    <div className="form-group last last2">
                        <input type="text" />
                        <label >CVV</label>
                    </div>
                    <div className="form-group btn-form">
                        
                    <button className="btn-submit">Submit payment</button>

                    </div>

                </form>
                <p>Or pay with <Link to="/payui" className='link'>Paytm & UPI </Link>  </p>

                </div>
                
            </div>
        </div>
    </div>
    </> );
}
 
export default Payment;