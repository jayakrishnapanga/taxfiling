import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import UserNav from './usernav';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Submissiond = () => {
  const userId = localStorage.getItem('id');
  const [groupedFiles, setGroupedFiles] = useState({});
  const [loading, setLoading] = useState(true);
  const [successMessage, setSuccessMessage] = useState('');
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deletionSubmissionId, setDeletionSubmissionId] = useState('');
  const navigate = useNavigate();
  
 

  useEffect(() => {
    fetchUserFiles(userId);
  },[]);

  async function fetchUserFiles(userId) {
    try {
      const response = await axios.get(`http://localhost:3000/files/${userId}`);
      const files = response.data.file;
      const groupedFiles = groupFilesBySubmissionId(files);
      setGroupedFiles(groupedFiles);
      setLoading(false); 
    } catch (error) {
      console.error('Error fetching user files:', error);
      setLoading(false); 
    }
  }

  const groupFilesBySubmissionId = (files) => {
    const groupedFiles = {};
    files.forEach((file) => {
      const submissionId = file.metadata.submissionId;
      if (!groupedFiles[submissionId]) {
        groupedFiles[submissionId] = [];
      }
      groupedFiles[submissionId].push(file);
    });
    return groupedFiles;
  };

  async function handleDownload(id, filename) {
    try {
      const response = await axios.get(`http://localhost:3000/download/${id}`, {
        responseType: 'blob',
      });

      const extension = filename.split('.').pop().toLowerCase();
      const mimeType =
        extension === 'pdf'
          ? 'application/pdf'
          : extension === 'png'
          ? 'image/png'
          : 'image/jpeg';

      const blob = new Blob([response.data], { type: mimeType });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', filename);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error downloading file:', error);
    }
  }

  async function handleUpdateAadharCard(submissionId) {
    // Implement the update logic for Aadhar Card file
    console.log('Updating Aadhar Card for submission:', submissionId);
    //   navigate('/adharupdate')
      navigate(`/adharupdate?submissionId=${submissionId}`);
  }

  async function handleUpdatePANCard(submissionId) {
    // Implement the update logic for PAN Card file
    console.log('Updating PAN Card for submission:', submissionId);
    navigate(`/pancardupdate?submissionId=${submissionId}`);
  }

  async function handleUpdateFormC(submissionId) {
    // Implement the update logic for Form C file
    navigate(`/formcupdate?submissionId=${submissionId}`);
    
  }

  async function handleUpdateFormD(submissionId) {
   
    console.log('Updating Form D for submission:', submissionId)
    navigate(`/formdupdate?submissionId=${submissionId}`);
  }

  const handleDeleteClick = (submissionId) => {
    setDeletionSubmissionId(submissionId);
    setShowDeleteModal(true);
  };

  const handleConfirmDelete = () => {
    setShowDeleteModal(false);
    handleDelete(deletionSubmissionId)
    
  };

  const handleCancelDelete = () => {
    setShowDeleteModal(false);
  };

  async function handleDelete(submissionId) {
    try {
      const response = await axios.delete(`http://localhost:3000/user/submission/${submissionId}`);
      console.log('this is from handle delete');
      console.log(response);
    

      console.log(response.status===200)
      if(response.status===200){
        navigate('/submission')
      }

    } catch (error) {
      console.error('Error deleting files:', error);
    }
  }

  return (
    <>
      <UserNav />
      <div>
        {loading ? (
          <p className="pt-20 text-center">Loading...</p>
        ) : (
          <div>
            <h1 className="pt-20 text-2xl font-bold">Your Submissions</h1>
            {successMessage && <div className="text-green-500">{successMessage}</div>}
            {Object.keys(groupedFiles).length === 0 ? (
               <>
                <p className="text-center mt-8 text-4xl">You haven't yet done any submissions</p>
               <Link to="/user/itr"> <p className='text-purple-900 mt-10 text-center font-mono text-4xl'> Lets click here to FileITR or click on File MY ITR</p></Link>
                </>
              ) : (
  
            <table className="mt-8 table-auto border-collapse w-full">
              <thead>
                <tr className="border border-gray-300">
                  <th className="px-4 py-2 text-left">Submission ID</th>
                  <th className="px-4 py-2 text-left">Aadhar Card</th>
                  <th className="px-4 py-2 text-left">PAN Card</th>
                  <th className="px-4 py-2 text-left">Form C</th>
                  <th className="px-4 py-2 text-left">Form D</th>
                  <th className="px-4 py-2 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {Object.keys(groupedFiles).map((submissionId) => {
                  const files = groupedFiles[submissionId];
                  const aadharcardSubmission = files.find((s) =>
                    s.filename.includes('aadharcard')
                  );
                  const pancardSubmission = files.find((s) =>
                    s.filename.includes('pancard')
                  );
                  const formCSubmission = files.find((s) =>
                    s.filename.includes('formc')
                  );
                  const formDSubmission = files.find((s) =>
                    s.filename.includes('formd')
                  );
  
                  return (
                    <tr key={submissionId}>
                      <td className="border border-gray-300 px-4 py-2">
                        {submissionId}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {aadharcardSubmission ? (
                          <>
                           
                           {aadharcardSubmission.filename}{' '}
                           |{' '}<button
                              className="text-blue-500 font-semibold"
                              onClick={() => handleDownload(aadharcardSubmission._id, aadharcardSubmission.filename)}
                            >
                            <i className="fas fa-download custom-purple-icon"></i>
                            </button>{' '}
                            |{' '}
                            <button
                              className="text-green-500 font-semibold"
                              onClick={() => handleUpdateAadharCard(submissionId)}
                            >
                              Update
                            </button>
                          </>
                        ) : 'N/A'}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                     
                        {pancardSubmission ? (
                          <>
                           {pancardSubmission.filename}{' '}|{' '}
                            <button
                              className="text-blue-500 font-semibold"
                              onClick={() => handleDownload(pancardSubmission._id, pancardSubmission.filename)}
                            >
                              
                               <i className="fas fa-download custom-purple-icon"></i>
                             
                            </button>{' '}
                            |{' '}
                            <button
                              className="text-green-500 font-semibold"
                              onClick={() => handleUpdatePANCard(submissionId)}
                            >
                              Update
                            </button>
                          </>
                        ) : 'N/A'}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {formCSubmission ? (
                          <>
                            {formCSubmission.filename}{' '}|{' '}
                            <button
                              className="text-blue-500 font-semibold"
                              onClick={() => handleDownload(formCSubmission._id, formCSubmission.filename)}
                            >
                               <i className="fas fa-download custom-purple-icon"></i>
                            
                            </button>{' '}
                            |{' '}
                            <button
                              className="text-green-500 font-semibold"
                              onClick={() => handleUpdateFormC(submissionId)}
                            >
                              Update
                            </button>
                          </>
                        ) : 'N/A'}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {formDSubmission ? (
                          <>
                           {formDSubmission.filename}{' '}|{' '}
                            <button
                              className="text-blue-500 font-semibold"
                              onClick={() => handleDownload(formDSubmission._id, formDSubmission.filename)}
                            >
                             
                              <i className="fas fa-download custom-purple-icon"></i>
                            </button>{' '}
                            |{' '}
                            <button
                              className="text-green-500 font-semibold"
                              onClick={() => handleUpdateFormD(submissionId)}
                            >
                              Update
                            </button>
                          </>
                        ) : 'N/A'}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {(aadharcardSubmission || pancardSubmission || formCSubmission || formDSubmission) ? (
                          <button
                            className="text-red-500 font-semibold"
                            onClick={() => handleDeleteClick(submissionId)}
                            
                          >
                            Delete
                          </button>
                        ) : null}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            )}
          </div>
        )}



      </div>

      {showDeleteModal && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-md">
            <p className="text-lg font-semibold mb-4">Are you sure you want to delete this submission?</p>
            <div className="flex justify-end">
              <button
                className="bg-red-500 text-white px-4 py-2 rounded-md mr-4"
                onClick={handleConfirmDelete}
              >
                Yes
              </button>
              <button
                className="bg-gray-500 text-white px-4 py-2 rounded-md"
                onClick={handleCancelDelete}
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
  
  
  };
  
  export default Submissiond;
  