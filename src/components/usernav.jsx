import React from "react";
import { Link } from "react-router-dom";
import DropDown from "./dropdown";
import { useNavigate } from "react-router-dom";

const UserNav=()=>{



    
    const navigate=useNavigate()
    function handleITR(){
     navigate('/user/itr ');
 
     }

    return(
    <div className="bg-green-600 flex justify-between fixed w-full z-50">
        <h1 className="text-cyan-50 text-2xl font-mono mx-5 mt-5 pb-5"><span>Tax Filing</span></h1>
        <button className="text-cyan-50 text-2xl font-mono" onClick={handleITR}>File My ITR</button>
        <div className=" flex">
            <ul className="flex  ">
            <li className="grid content-center text-white"><Link to="/user">Home</Link></li>
            
            <li className=" grid content-center pb-3">  <DropDown/></li>
            </ul>
        </div>
    </div>

    )
}

export default UserNav