import React, { useState } from "react";
import UserNav from "./usernav";
import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const UserDetails=()=>{

const [loading,setLoading]=useState(true);
const [response,setResponse]=useState({})

    useEffect(() => {
        async function fetchData() {
          try {
            const  res = await axios.get(`http://localhost:3000/user/${localStorage.getItem('id')}`);
            console.log(res);
            console.log(res.data)
            setResponse(res)
            setLoading(false);
            console.log(res.data.firstname)
            console.log(localStorage.setItem('name',res.data.firstname))
            localStorage.setItem('name',res.data.firstname)
          } catch (error) {
            console.error(error);
            setLoading(false);
            
          }
        }
        fetchData();
      }, []);


    return(

        <>
        <UserNav/>
              <div>

                {loading?(<div>loading...</div>
                    ):(

                      <>
                      {/* <div> 
                        <ul className="pt-40 text-center">
                          <li>firstname:{response.data.firstname}</li>
                          <li>lastname:{response.data.lastname}</li>
                          <li>profression:{response.data.jobtitle}</li>
                          <li>email:{response.data.email}</li>
                          <li>mobileNo:{response.data.mobileNo}</li>
                        </ul>
                      </div> */}
    <div></div>



                      <div className="pt-40  grid content-center w-full  ml-16 px-96">
                      <div className="flex max-w-full p-6  bg-white border border-gray-200 rounded-lg shadow  dark:border-gray-700">
                          {/* <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                          <p class="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p> */}
                          <div classname> 
                        <ul className="  text-left text-2xl text-black font-mono" >
                          <li className="pl-14">Firstname-<span className="text-orange-500">{response.data.firstname}</span></li>
                          <li className="pl-14">Lastname-{response.data.lastname}</li>
                          <li className="pl-14">Profession-{response.data.jobtitle}</li>
                          <li className="pl-14">Email-{response.data.email}</li>
                          <li className="pl-14">MobileNo-{response.data.mobileNo}</li>
                          <Link to='/profile'><li className="border bg-purple-500 hover:bg-purple-400 w-1/3 ml-24 p-2 mt-4  text-center rounded-lg">Update </li></Link>
                        </ul>
                      </div>
</div>
</div>
  
                      </>

                    )

                }
                
              </div>
        
        
        </>
    )
}
export default UserDetails