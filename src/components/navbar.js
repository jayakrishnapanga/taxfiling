import React, { useState } from "react";



const Navbar=(user)=>{
      
    //  const[User, setUser]=useState(true)

    return(
        <>

    <div className="bg-green-900 flex justify-between fixed w-full">

    <h1 className="text-cyan-50 text-2xl font-mono mx-5 mt-5 pb-5"><span>Tax Filing</span></h1>
            <div className=" flex">
              <ul className="flex  ">
              
              {user?
                <>
                <li className="p-5 text-white">Home</li>
                <li className="p-5 text-white">Login</li>
                <li className="p-5 text-white">SignUp</li>
                </>
                :
               <>
                <li className="p-5 text-white">Home</li>
                <li className="p-5 text-white">logout</li>
               </>
               }
                 
              </ul>
            </div>
        </div>
       


        </>
    )
}

export default Navbar