import React from "react";
import UserNav from "./usernav";
import { Link } from "react-router-dom";
import Footer from "./footer";


const  Success =()=>{

    return(
        <>
        <UserNav/>
        <div>
            <div className="pt-24">
            <h1 className="text-6xl text-center">You Have Uploaded documents <br/>Successfully to File ITR.</h1>
            <p className="text-center mt-10 text-lg">we will get back to you soon <span className="text-emerald-400 text-3xl "> :)</span><Link to='/user'><li className="text-blue-600 list-none">click here to go back </li></Link> </p>
            </div>
        </div>

        <div className='pt-96'>

                <Footer/>
                </div>
        </>

    )
}
export default Success