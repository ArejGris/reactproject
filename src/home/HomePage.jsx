import img1 from '../assets/rowan-heuvel-sAB4BWrQ4Y4-unsplash 1 (2).png'
import './home.css'
import { Link } from 'react-router-dom';
const HomePage = () => {
    return ( 
    <div className="home">
        <div className="container-fluid">
        <div className="row">
            <div className="col-5 login">
                <h1>welcome</h1>
                <form className="form1">
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
            </div>
            <div className="col-7">
                <div className="img">
                <img src={img1} alt="" />

                </div>
            </div>
        </div>

        </div>
       
    </div>
    );
}
 
export default HomePage;