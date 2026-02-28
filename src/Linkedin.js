import React from "react";


const Linkedin =()=>{
    return(
   <>
        <div className="login-page">
            
            <h2 className="h2">Sign in</h2>
            <p>Stay updated on your professional world</p>
            <form className="form-control">
                <div><input type="Email" placeholder="Email or Phone"/></div>
               
                <div><input type="password"placeholder="Password"/></div>
                <div><a href='#' className='forget'>Forget Password?</a></div>
                <div className="button">
                    <button type="submit">Sign in</button>
                </div>
                 <p>-----------or-------------</p>
                <div><button type="select">🌎 Sign in with Google</button></div>
                <br/>
                <div><button type="select"> ❦ Sign in with Apple </button></div>
                
                </form>
               </div>
      
        </>
    );
}
export default Linkedin;