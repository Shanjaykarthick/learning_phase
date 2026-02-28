import React from "react";

const Login = () =>{
    return (
        <>
            <div className="login-card">
                <h2>Sign in with email</h2>
                <p>Make a  database with json and document with this login</p>
                  <form>
                    <div className="form-control">
                <div> 🖂  <input  type ="email" placeholder='Enter your email'/></div>
                <br/>                <div> 🔑 <input type ="password" placeholder='Enter your password'/></div>
                
                <div><a href='#' className='forget'>Forget Password?</a>
                
                <button type="submit"> Login</button>
                </div>
                </div>
                </form>
            </div>
        </>
    )
} 

export default Login