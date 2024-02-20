import img2 from '../assets/rowan-heuvel-sAB4BWrQ4Y4-unsplash 1 (3).png'
import './sign.css'
import { Link } from 'react-router-dom';
const SignUp = () => {
    return ( 
        <div className="sign">
             <div className="container-fluid">
        <div className="row sign-sec">
            <div className="col-7 ">
                <div className="img2">
                    <h1 className="hh1">welcome</h1>
                <img  src={img2} alt="" />
                </div>
            </div>
            <div className="col-5">
                <form className='form2'>
                    
                    <h1>sign up</h1>
                    <div className="form-group">
                        <input type='text'/>
                        <label >Name</label>
                    </div>
                    <div className="form-group">
                        <input type='text'/>
                        <label >Email</label>
                    </div>
                    <div className="form-group">
                        <input type='text'/>
                        <label>Password</label>
                    </div>
                    <div className="form-group">
                        <input type='text'/>
                        <label>Re-enter Password</label>
                    </div>
                    <div className="form-group">
                        <input type="text" />
                        <label >Phone</label>
                    </div>
                    <div className="form-group last">
                        <input type="checkbox" />
                        <p>i agree the term</p>
                    </div>
                    <div className="form-group">
                        <button className='button'>sign up</button>
                    </div>
                    <div className="last">
                        <p className='p'>already have account ?</p> <Link to="/">log in</Link>
                    </div>

                </form>

            </div>
        </div>
    </div>

        </div>
    );
}
 
export default SignUp;