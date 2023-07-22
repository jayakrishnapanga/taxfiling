import React from "react";




const ShimmerUI= () => {
 
      return (
        <div className="container w-auto">
          <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-between mb-4">
              <h1>Registration</h1>
        <form className="max-w-sm" >
          <div className="mb-4">
            <label
              className="block text-gray-500 font-bold mb-1 md:mb-0 pr-4"
              htmlFor="inline-email"
            >
    
            </label>
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-email"
              name="email"
              type="text"
             
            />
            </div>
        
          <div className="mb-4">
            <label
              className="block text-gray-500 font-bold mb-1 md:mb-0 pr-4"
              htmlFor="inline-password"
            >
          
            </label>
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-password"
              name="password"
              type="password"
              placeholder="******************"
              
            />
          
          </div>
  
          <div className="mb-4">
            <label
              className="block text-gray-500 font-bold mb-1 md:mb-0 pr-4"
              htmlFor="inline-firstname"
            >
              
            </label>
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-firstname"
              name="firstname"
              type="text"
             
            />
            
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-500 font-bold mb-1 md:mb-0 pr-4"
              htmlFor="inline-lastname"
            >
            
            </label>
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-lastname"
              name="lastname"
              type="text"
           
            />
            
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-500 font-bold mb-1 md:mb-0 pr-4"
             
            >
          
            </label>
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-jobtitle"
              name="jobtitle"
              type="text"
             
            />
          
          </div>
  
          <div className="mb-4">
            <label
              className="block text-gray-500 font-bold mb-1 md:mb-0 pr-4"
             
            >
              Mobile Number
            </label>
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-mobileNo"
              name="mobileNo"
              type="text"
              placeholder="Enter your mobile number"
              
            />
           
          </div>
  
          <div className="md:flex md:items-center">
            <div className="md:w-1/3"></div>
            <div className="md:w-2/3">
              <button
                className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                type="submit"
              >
               
              </button>
              
              
            </div>
          </div>
        </form>
           </div>
          </div>
        </div>
      )
      
         
    };
    export default ShimmerUI