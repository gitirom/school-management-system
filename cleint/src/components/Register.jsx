
import React, {useState} from "react";
import { NavLink } from "react-router-dom";
import "./mix.css";

const Register = () => {
    const [passShow, setpassShow] = useState(false);
    const [cpassShow, setCpassShow] = useState(false);
return (
    <>
    <section>
        <div className="form_data">
            <div className="form_heading">
                <h1>Sing Up</h1>
                    <p >
                        We are glad that you will be using Project Cloud to manage your <br />
                        tasks! We hope that you will get like it.
                    </p>
            </div>
            <form>
                        <div className="form_input">
                            <label htmlFor="text">Name</label>
                            <input type="text" name="name" id="name" placeholder='Enter Your Name ' />
                        </div>
                        <div className="form_input">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="email" placeholder='Enter Your Email Address' />
                        </div>
                        <div className="form_input">
                            <label htmlFor="password">Password</label>
                            <div className="two">
                                <input type={!passShow ? "password" : "text"} name="password" id="password" placeholder='Enter Your password' />
                                <div className="showpass" onClick={() => setpassShow(!passShow)} >
                                    {!passShow ? "Show" : "Hide"}                    
                                </div>
                            </div>
                            
                        </div>
                        <div className="form_input">
                            <label htmlFor="password">Confirm Password</label>
                            <div className="two">
                                <input type={!cpassShow ? "password" : "text"} name="cpassword" id="cpassword" placeholder='Confirm password' />
                                <div className="showpass" onClick={() => setCpassShow(!cpassShow)} >
                                    {!cpassShow ? "Show" : "Hide"}                    
                                </div>
                            </div>
                            
                        </div>
                        <button className='btn' >Sign Up</button>
                        <p>Already have an Account? <NavLink to="/">Log In</NavLink> </p>
            </form>
        </div>
    </section>
    </>
);
};

export default Register;
