import axios from "axios";
import React from "react";
import { useState } from "react";
import UserNav from "./usernav";
import { useNavigate,useLocation } from "react-router-dom";


const Formd= () => {
   
    const [payslipFile, setpayslipFile] = useState(null);
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const submissionId = searchParams.get('submissionId');
    const [errorMessage, setErrorMessage] = useState(null);

    const [successMessage,setSuccessMessage]=useState('')
    const clearSuccessMessage = () => {
      setSuccessMessage('');
      navigate('/userprofile')
      
    };

    const handleSubmit = async (event) => {
      event.preventDefault();
      const userId = localStorage.getItem('id');
      const formData = new FormData();
  
      // const clearSuccessMessage = () => {
      
      //   navigate('/success')
        
      // };
      
      // const getModifiedFileName = (file, label) => {
      //   const extension = file.name.split('.').pop();
      //   return `${label}.${extension}`;
      // };
      const getModifiedFileName = (file, label) => {
        const extension = file.name.split('.').pop();
        if (label === "Any one payslip of last year (1st April 2022 to 31st March 2023)") {
          return `payslip.${extension}`;
        } else {
          return `${label}.${extension}`;
        }
      };
  
      if (payslipFile && payslipFile.size > 1 * 1024 * 1024) {
        setErrorMessage('Playslip File size exceeds 1 MB');
        return;
      }
    

      formData.append('payslip', payslipFile, getModifiedFileName(payslipFile, 'payslip'));
      formData.append('userId', userId);
      formData.append('submissionId',submissionId)
  
      try {
        console.log(formData)
        const delteresponse = await axios.delete(`http://jayakrishnanodejs.ap-south-1.elasticbeanstalk.com/user/formd/${submissionId}`);


        console.log(delteresponse)

        let response
        if(delteresponse.status===200)
        {
            response = await axios.post('http://jayakrishnanodejs.ap-south-1.elasticbeanstalk.com/submit-files/formd', formData);
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

          setSuccessMessage('Your payslip file is updated successfully.');
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
                        {errorMessage && (
                  <div className="text-red-500 mt-2">{errorMessage}</div>
                )}
            

                       <div className="mb-4 mt-28">
                       {successMessage && <div className="text-green-500">{successMessage}</div>}
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-lime-500" htmlFor="payslip">
                            Any one payslip of last year (1st April 2022 to 31 march 2023):
                            </label>
                            <input
                            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:bg-gray-100 dark:text-black  focus:outline-none dark:border-gray-600 dark:placeholder-gray-400"
                            type="file"
                            name="payslip"
                            accept=".pdf,.png"
                            required
                            onChange={(event) => setpayslipFile(event.target.files[0])}
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
    
  
  export default Formd