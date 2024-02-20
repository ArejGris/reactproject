import { Link } from 'react-router-dom';
import './homemobile.css'
const HomeMobile = () => {
    return ( 
    <div className="homeMobile">
        <div className="hh1">
            
        <h1>WELCOME</h1>

        </div>
        <form className="form-mobile">
                    <h2>log in</h2>
                    <div className="form-group">
                        <input type="text" />
                        <label >Email</label>
                    </div>
                    <div className="form-group">
                        <input type="text" />
                        <label >Password</label>
                    </div>
                    <div className="form-group">
                        <button className='button'>log in</button>
                        <div className="last">
                            
                        <p>New here ?</p><Link to="/sign">sign up</Link>

                        </div>
                    </div>
                </form>

    </div> );
}
 
export default HomeMobile;