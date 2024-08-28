
import { SiNetflix } from 'react-icons/si'
import './Login.css'
import { useState } from 'react'


const SignIn = () =>{
    const [signState , setSignState] = useState("Sign In")
    return (
        <div className="signin">
            <span className='signin-logo'>
            <SiNetflix/>
            </span>
            <div className="signin-form">
                <h1>{signState}</h1>
                <form >
                    {signState === "Sign Up"?
                    <input type="text" placeholder='Your Name' />:<></>
                    }
                    <input type="email" placeholder='Your Email' />
                    <input type="password" placeholder='Password'/>
                    <button>
                        Sign In 
                    </button>
                <div className="form-help">
                    <div className="remember">
                        <input type="checkbox" />
                        <label htmlFor="">Remember Me</label>
                    </div>
                    <p>Need Help?</p>
                </div>
                </form>
                <div className="form-switch">
                    {signState === 'Sign In'? <p>New to Netflix? <span onClick={()=>{setSignState("Sign Up")}}>Sign Up Now</span></p>:
                     
                    <p>Already have an account? <span onClick={()=>{setSignState("Sign In")}}>Sign In Now</span></p>}
                </div>
            </div>
        </div>
    )
}

export default SignIn 