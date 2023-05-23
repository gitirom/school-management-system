import React, {useEffect, useState} from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import "./mix.css";

export default function AdminLogin() {
    const [passShow, setpassShow] = useState(false);

    const [inpval, setinpval] = useState({       
        email: "",
        password: "",
    });
    

    const setVal = (e) => {
        //console.log(e.target.value);
        const {name, value} = e.target;
        setinpval(() => {
            return {
                ...inpval,
                [name]:value                             // this function setVal take the setInpVal function and return all the object inpVal name and value
            }
        })
    };
    const navigate = useNavigate();

    useEffect(() => {
        const userToken = localStorage.getItem("usersdatatoken")
        if (userToken) {
            navigate("/admindash")
        }
    }, [navigate]);

    const LoginUser = async(e) => {
        e.preventDefault(); 
        const {email, password} = inpval;
        if(email === ""){
            alert("Please Enter Your Email");
        }else if(!email.includes("@")){
            alert(" Enter A Valid Email");
        }else if(password === ""){
            alert("Please Enter Your password");
        }else if(password.length < 6){
            alert("password must be 6 char");
        }else{
            
            const data = await fetch("http://localhost:8009/adminlogin", {       // connect react and nodejs app
                method:"POST",
                headers:{
                    "Content-type":"application/json"
                },
                body:JSON.stringify({
                    email, password
                })
            });

            const res = await data.json();
            console.log(res);
            if(res.status === 201){
                toast.success("User Login success");
                setinpval({...inpval,email:"",password:""});
                navigate("/admindash");

            }
        }

    }
    return (
        <>
            <section>
                <div className="form_data">
                    <div className="form_heading">
                        <h1>Welcome Back, Log In </h1>
                        <p>Login As Admin Here.</p>
                    </div>
                    <form>
                        <div className="form_input">
                            <label htmlFor="email">Email</label>
                            <input type="email" onChange={setVal} name="email" id="email" placeholder='Enter Your Email Address' />
                        </div>
                        <div className="form_input">
                            <label htmlFor="password">Password</label>
                            <div className="two">
                                <input type={!passShow ? "password" : "text"} onChange={setVal} name="password" id="password" placeholder='Enter Your password' />
                                <div className="showpass" onClick={() => setpassShow(!passShow)} >
                                    {!passShow ? "Show" : "Hide"}                     
                                </div>
                            </div>
                        </div>
                        <button className='btn' onClick={LoginUser} >Login</button>
                        {/* <p>Don't have an Account? <NavLink to="/register">Sign Up</NavLink>  </p> */}
                    </form>
                    
                </div>
            </section>
        </>
    )
}
