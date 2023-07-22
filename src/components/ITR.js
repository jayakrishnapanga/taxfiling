import axios from "axios";
import React from "react";
import { useState } from "react";
import UserNav from "./usernav";
import { useNavigate } from "react-router-dom";



const ITR = () => {
  const [aadharCardFile, setAadharCardFile] = useState(null);
  const [panCardFile, setPanCardFile] = useState(null);
  const [formCFile, setFormCFile] = useState(null);
  const [payslipFile, setpayslipFile] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [isUploading, setIsUploading] = useState(false);


  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsUploading(true); 
    const userId = localStorage.getItem('id');
    const formData = new FormData();


    // const clearSuccessMessage = () => {
   
    //   navigate('/success')
      
    // };
    
    // Helper function to map filenames based on labels
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

    // Check the size of each file before appending to formData
    const MAX_FILE_SIZE = 1 * 1024 * 1024; // 1 MB

    if (aadharCardFile && aadharCardFile.size > MAX_FILE_SIZE) {
      setErrorMessage('Aadhar Card size exceeds 1 MB');
      return;
    }
    
    if (panCardFile && panCardFile.size > MAX_FILE_SIZE) {
      setErrorMessage('PAN Card size exceeds 1 MB');
      return;
    }
    
    if (formCFile && formCFile.size > MAX_FILE_SIZE) {
      setErrorMessage('Form C size exceeds 1 MB');
      return;
    }
    
    if (payslipFile && payslipFile.size > MAX_FILE_SIZE) {
      setErrorMessage('Playslip File size exceeds 1 MB');
      return;
    }
    


    formData.append('aadharCard', aadharCardFile, getModifiedFileName(aadharCardFile, 'aadharcard'));
    formData.append('panCard', panCardFile, getModifiedFileName(panCardFile, 'pancard'));
    formData.append('formC', formCFile, getModifiedFileName(formCFile, 'formc'));
    formData.append('payslip', payslipFile, getModifiedFileName(payslipFile, 'payslip'));
    formData.append('userId', userId);

    try {
      console.log(formData)
      const response = axios.post('http://jayakrishnanodejs.ap-south-1.elasticbeanstalk.com/submit-files', formData);
     
      console.log(response.data);
     
      console.log(response.message)
      console.log(response.status)
      if(response.status===201)
      {
        navigate('/success')
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
                    
          <div className="mb-4  mt-28">

                    {errorMessage && (
                  <div className="text-red-500 mt-2">{errorMessage}</div>
                )}

         {isUploading && (
            <p className="text-center mt-4">Please wait, we are uploading your documents...</p>
          )}

            
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-lime-500" htmlFor="aadharCard">
              Aadhar Card:
            </label>
            <input
              className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:bg-gray-100 dark:text-black focus:outline-none dark:border-gray-600 dark:placeholder-gray-400"
              type="file"
              name="aadharCard"
              accept=".pdf,.png,"
              required
              onChange={(event) => setAadharCardFile(event.target.files[0])}
            />
          </div>
          <div className="mb-4">
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
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-lime-500" htmlFor="formC">
              Form C:
            </label>
            <input
              className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:bg-gray-100 dark:text-black  focus:outline-none dark:border-gray-600 dark:placeholder-gray-400"
              type="file"
              name="formC"
              accept=".pdf,.png"
              required
              onChange={(event) => setFormCFile(event.target.files[0])}
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-lime-500" htmlFor="payslip">
            Any one payslip of last year (1st April 2022 to 31 march 2023):
            </label>
            <input
              className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 ddark:bg-gray-100 dark:text-black  focus:outline-none dark:border-gray-600 dark:placeholder-gray-400"
              type="file"
              name="payslip"
              accept=".pdf,.png"
              required
              onChange={(event) => setpayslipFile(event.target.files[0])}
            />
          </div>

          <button
          className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
          type="submit"
          
        >
          Submit
        </button>
        <p className="text-center mt-4">please upload all the documents less than or equal to 1MB</p>
        </div>
       
      </form>
    </>
  );
};










export default ITR



