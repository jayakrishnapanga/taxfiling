

import axios from "axios";
import React from "react";
import { useState,useEffect } from "react";
import UserNav from "./usernav";
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';





const ITRupdate = () => {
  const [aadharCardFile, setAadharCardFile] = useState(null);
  const [panCardFile, setPanCardFile] = useState(null);
  const [formCFile, setFormCFile] = useState(null);
  const [formDFile, setFormDFile] = useState(null);
  const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const submissionId = searchParams.get('submissionId');

  const [successMessage,setSuccessMessage]=useState('')

  const handleSubmit = async (event) => {
    event.preventDefault();
    const userId = localStorage.getItem('id');
    const formData = new FormData();

    const clearSuccessMessage = () => {
      setSuccessMessage('');
      navigate('/success')
      
    };
    
    const getModifiedFileName = (file, label) => {
      const extension = file.name.split('.').pop();
      return `${label}.${extension}`;
    };

   
    if (aadharCardFile && aadharCardFile.size > 5 * 1024 * 1024) {
      console.error('Aadhar Card size exceeds 5MB');
      return;
    }

    if (panCardFile && panCardFile.size > 5 * 1024 * 1024) {
      console.error('PAN Card size exceeds 5MB');
      return;
    }

    if (formCFile && formCFile.size > 5 * 1024 * 1024) {
      console.error('Form C size exceeds 5MB');
      return;
    }

    if (formDFile && formDFile.size > 5 * 1024 * 1024) {
      console.error('Form D size exceeds 5MB');
      return;
    }

    formData.append('aadharCard', aadharCardFile, getModifiedFileName(aadharCardFile, 'aadharcard'));
    formData.append('panCard', panCardFile, getModifiedFileName(panCardFile, 'pancard'));
    formData.append('formC', formCFile, getModifiedFileName(formCFile, 'formc'));
    formData.append('formD', formDFile, getModifiedFileName(formDFile, 'formd'));
    formData.append('userId', userId);

    try {
      console.log(formData)
      const response = await axios.put(`http://localhost:3000/submit-files/${submissionId}`, formData);
      console.log(response.data);
        
      console.log(response.message)
      console.log(response.status)
      if(response.status===200)
      {
        navigate('/success')
      }
      
    } catch (error) {
      console.error(error);
     
    }
  };

  const navigate = useNavigate();

  return (
    <>
      <UserNav />
    
      <form onSubmit={handleSubmit}>
        <div className="grid justify-center">
      
          <div className="mb-4  mt-20">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-lime-500" htmlFor="aadharCard">
              Aadhar Card:
            </label>
            <input
              className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:bg-gray-700 dark:text-gray-400 focus:outline-none dark:border-gray-600 dark:placeholder-gray-400"
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
              className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:bg-gray-700 dark:text-gray-400 focus:outline-none dark:border-gray-600 dark:placeholder-gray-400"
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
              className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:bg-gray-700 dark:text-gray-400 focus:outline-none dark:border-gray-600 dark:placeholder-gray-400"
              type="file"
              name="formC"
              accept=".pdf,.png"
              required
              onChange={(event) => setFormCFile(event.target.files[0])}
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-lime-500" htmlFor="formD">
              Form D:
            </label>
            <input
              className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:bg-gray-700 dark:text-gray-400 focus:outline-none dark:border-gray-600 dark:placeholder-gray-400"
              type="file"
              name="formD"
              accept=".pdf,.png"
              required
              onChange={(event) => setFormDFile(event.target.files[0])}
            />
          </div>

          <button
          className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
          type="submit"
          
        >
          Submit
        </button>
        </div>
       
      </form>
    </>
  );
};


  export default ITRupdate