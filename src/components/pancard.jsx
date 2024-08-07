import axios from "axios";
import React from "react";
import { useState } from "react";
import UserNav from "./usernav";
import { useNavigate,useLocation } from "react-router-dom";


const Pancard= () => {
    const [panCardFile, setPanCardFile] = useState(null);
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const submissionId = searchParams.get('submissionId');
    const [errorMessage, setErrorMessage] = useState(null);

    const [successMessage,setSuccessMessage]=useState('')
    const clearSuccessMessage = () => {
      // setSuccessMessage('');
      navigate('/submission')
      
    };

    const handleSubmit = async (event) => {
      event.preventDefault();
      const userId = localStorage.getItem('id');
      const formData = new FormData();
  
      // const clearSuccessMessage = () => {
      
      //   navigate('/success')
        
      // };
      
      const getModifiedFileName = (file, label) => {
        const extension = file.name.split('.').pop();
        return `${label}.${extension}`;
      };
  
      // Check the size of each file before appending to formData
      if (panCardFile && panCardFile.size > 5 * 1024 * 1024) {
        setErrorMessage('Pancard File size exceeds 1 MB');
        return;
      }
     

      formData.append('panCard', panCardFile, getModifiedFileName(panCardFile, 'pancard'));
      formData.append('userId', userId);
      formData.append('submissionId',submissionId)
  
      try {
        console.log(formData)
        const delteresponse = await axios.delete(`http://localhost:3000/user/pancard/${submissionId}`);


        console.log(delteresponse)

        let response
        if(delteresponse.status===200)
        {
            response = await axios.post('http://localhost:3000/submit-files/pancard', formData);
        }
        
        console.log(response.data);
          
        console.log(response.message)
        console.log(response.status)
        // if(response.status===201)
        // {
        //   navigate('/success')
        // }
        if(response.status===201)
        {

          setSuccessMessage('Your Pancard is updated successfully.');
          setTimeout(clearSuccessMessage, 1000);
          // navigate('/success')
        }
        
      } catch (error) {
        console.error(error);
        // Handle error if the request fails
      }
    };
  
    const navigate = useNavigate();
  
    return (
      <>
        {/* Your navigation component (UserNav) here */}
        <UserNav />
      
        <form onSubmit={handleSubmit}>
          <div className="grid justify-center">
          {/* <div className="flex justify-between mb-4">
                      <h1 className="mt-20">User Profile</h1>
                      {successMessage && <div className="text-green-500 mt-20">{successMessage}</div>}
                        
                      </div> */}
            
            <div className="mb-4 mt-28">
            {errorMessage && (
                  <div className="text-red-500 mt-2">{errorMessage}</div>
                )}
            
            {successMessage && <div className="text-green-500">{successMessage}</div>}
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-lime-500" htmlFor="panCard">
              PAN Card:
            </label>
            <input
              className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:bg-gray-100 dark:text-black  focus:outline-none dark:border-gray-600 dark:placeholder-gray-400"
              type="file"
              name="panCard"
              accept=".pdf,.png"
              required
              onChange={(event) => setPanCardFile(event.target.files[0])}
            />
          </div>
            <button
            className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
            type="Update"
            
          >
            Update
          </button>
          </div>
         
        </form>
      </>
    );
  };
  
  export default Pancard