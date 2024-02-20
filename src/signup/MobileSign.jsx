import { Link } from 'react-router-dom';
import './mobilesign.css'
const MobileSign = () => {
    return ( 
    <div className="mysign">
        <div className="sign-up-mobile">
            <div className="sign-logo">
              logo

            </div>
            <form className='form-sign'>
                    
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

    </div> );
}
 
export default MobileSign;