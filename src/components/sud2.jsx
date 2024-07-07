import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import UserNav from './usernav';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Footer from './footer';


// const Submissiond = () => {
//   const userId = localStorage.getItem('id');
//   const [groupedFiles, setGroupedFiles] = useState({});
//   const [loading, setLoading] = useState(true);
//   const [successMessage, setSuccessMessage] = useState('');
//   const navigate = useNavigate();
//   const [showDeleteModal, setShowDeleteModal] = useState(false);
//   const [deletionSubmissionId, setDeletionSubmissionId] = useState('');
//   const [currentPage, setCurrentPage] = useState(1);
//   const submissionsPerPage = 10;

//   useEffect(() => {
//     fetchUserFiles(userId);
//   }, [userId]);

//   async function fetchUserFiles(userId) {
//     try {
//       const response = await axios.get(`http://localhost:3000/files/${userId}`);
//       const files = response.data.file;
//       const groupedFiles = groupFilesBySubmissionId(files);
//       setGroupedFiles(groupedFiles);
//       setLoading(false);
//     } catch (error) {
//       console.error('Error fetching user files:', error);
//       setLoading(false);
//     }
//   }

//   const groupFilesBySubmissionId = (files) => {
//     const groupedFiles = {};
//     files.forEach((file) => {
//       const submissionId = file.metadata.submissionId;
//       if (!groupedFiles[submissionId]) {
//         groupedFiles[submissionId] = [];
//       }
//       groupedFiles[submissionId].push(file);
//     });
//     return groupedFiles;
//   };

//   const paginate = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

//   async function handleDownload(id, filename) {
//     try {
//       const response = await axios.get(`http://localhost:3000/download/${id}`, {
//         responseType: 'blob',
//       });

//       const extension = filename.split('.').pop().toLowerCase();
//       const mimeType =
//         extension === 'pdf'
//           ? 'application/pdf'
//           : extension === 'png'
//           ? 'image/png'
//           : 'image/jpeg';

//       const blob = new Blob([response.data], { type: mimeType });
//       const url = window.URL.createObjectURL(blob);
//       const link = document.createElement('a');
//       link.href = url;
//       link.setAttribute('download', filename);
//       document.body.appendChild(link);
//       link.click();
//       document.body.removeChild(link);
//     } catch (error) {
//       console.error('Error downloading file:', error);
//     }
//   }

//   async function handleUpdateAadharCard(submissionId) {
//     console.log('Updating Aadhar Card for submission:', submissionId);
//     navigate(`/adharupdate?submissionId=${submissionId}`);
//   }

//   async function handleUpdatePANCard(submissionId) {
//     console.log('Updating PAN Card for submission:', submissionId);
//     navigate(`/pancardupdate?submissionId=${submissionId}`);
//   }

//   async function handleUpdateFormC(submissionId) {
//     navigate(`/formcupdate?submissionId=${submissionId}`);
//   }

//   async function handleUpdateFormD(submissionId) {
//     console.log('Updating Form D for submission:', submissionId)
//     navigate(`/formdupdate?submissionId=${submissionId}`);
//   }

//   const handleDeleteClick = (id) => {
//     setDeletionSubmissionId(id);
//     setShowDeleteModal(true);
//   };

//   const handleConfirmDelete = () => {
//     setShowDeleteModal(false);
//     handleDelete(deletionSubmissionId);
//   };

//   const handleCancelDelete = () => {
//     setShowDeleteModal(false);
//   };

//   async function handleDelete(submissionId) {
//     try {
//       const response = await axios.delete(`http://localhost:3000/user/submission/${submissionId}`);
//       if (response.status === 200) {
//         navigate('/submission');
//       }
//     } catch (error) {
//       console.error('Error deleting files:', error);
//     }
//   }

//   // Get the current page's submissions from groupedFiles
//   const indexOfLastSubmission = currentPage * submissionsPerPage;
//   const indexOfFirstSubmission = indexOfLastSubmission - submissionsPerPage;
//   const currentSubmissions = Object.values(groupedFiles).slice(
//     indexOfFirstSubmission,
//     indexOfLastSubmission
//   );

//   const totalPages = Math.ceil(Object.keys(groupedFiles).length / submissionsPerPage);

//   return (
//     <>
//       <UserNav />
//       <div>
//         {loading ? (
//           <div className="pt-32 items-center">
//             <div className="w-full flex justify-evenly p-6 bg-white border border-gray-200 rounded-lg shadow-lg dark:border-gray-700 animate-pulse ">
//               <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-1/3 mt-2 mr-2 mb-2" />
//               <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-1/3 mt-2  mr-2  mb-2" />
//               <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-1/3 mt-2 mr-2 mb-2" />
//               <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-1/3 mt-2 mr-2 mb-2" />
//               <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-1/3 mt-2 mr-2 mb-4" />
//             </div>
//           </div>
//         ) : (
//           <div>
//             <h1 className="pt-20 text-2xl font-bold">Your Submissions</h1>
//             {successMessage && <div className="text-green-500">{successMessage}</div>}
//             {currentSubmissions.length === 0 ? (
//               <>
//                 <p className="text-center mt-8 text-4xl">You haven't yet done any submissions</p>
//                 <Link to="/user/itr">
//                   <p className="text-purple-900 mt-10 text-center font-mono text-4xl">
//                     Let's click here to FileITR or click on File MY ITR
//                   </p>
//                 </Link>
//               </>
//             ) : (
//               <table className="mt-8 table-auto border-collapse w-full">
//                 <thead>
//                   <tr className="border border-gray-300">
//                     <th className="px-4 py-2 text-left">Submission ID</th>
//                     <th className="px-4 py-2 text-left">Aadhar Card</th>
//                     <th className="px-4 py-2 text-left">PAN Card</th>
//                     <th className="px-4 py-2 text-left">Form C</th>
//                     <th className="px-4 py-2 text-left">payslip</th>
//                     <th className="px-4 py-2 text-left">Actions</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {currentSubmissions.map((submission, index) => {
//                     const submissionId = Object.keys(groupedFiles)[index + indexOfFirstSubmission];
//                     const files = groupedFiles[submissionId];
//                     const aadharcardSubmission = files.find((s) =>
//                       s.filename.includes('aadharcard')
//                     );
//                     const pancardSubmission = files.find((s) =>
//                       s.filename.includes('pancard')
//                     );
//                     const formCSubmission = files.find((s) =>
//                       s.filename.includes('formc')
//                     );
//                     const formDSubmission = files.find((s) =>
//                       s.filename.includes('payslip')
//                     );

//                     return (
//                       <tr key={submissionId}>
//                         <td className="border border-gray-300 px-4 py-2">{submissionId}</td>
//                         <td className="border border-gray-300 px-4 py-2">
//                           {aadharcardSubmission ? (
//                             <>
//                               {aadharcardSubmission.filename}{' '}
//                               |{' '}
//                               <button
//                                 className="text-blue-500 font-semibold"
//                                 onClick={() =>
//                                   handleDownload(aadharcardSubmission._id, aadharcardSubmission.filename)
//                                 }
//                               >
//                                 <i className="fas fa-download custom-purple-icon"></i>
//                               </button>{' '}
//                               |{' '}
//                               <button
//                                 className="text-green-500 font-semibold"
//                                 onClick={() => handleUpdateAadharCard(submissionId)}
//                               >
//                                 Update
//                               </button>
//                             </>
//                           ) : 'N/A'}
//                         </td>
//                         <td className="border border-gray-300 px-4 py-2">
//                           {pancardSubmission ? (
//                             <>
//                               {pancardSubmission.filename}{' '}|{' '}
//                               <button
//                                 className="text-blue-500 font-semibold"
//                                 onClick={() =>
//                                   handleDownload(pancardSubmission._id, pancardSubmission.filename)
//                                 }
//                               >
//                                 <i className="fas fa-download custom-purple-icon"></i>
//                               </button>{' '}
//                               |{' '}
//                               <button
//                                 className="text-green-500 font-semibold"
//                                 onClick={() => handleUpdatePANCard(submissionId)}
//                               >
//                                 Update
//                               </button>
//                             </>
//                           ) : 'N/A'}
//                         </td>
//                         <td className="border border-gray-300 px-4 py-2">
//                           {formCSubmission ? (
//                             <>
//                               {formCSubmission.filename}{' '}|{' '}
//                               <button
//                                 className="text-blue-500 font-semibold"
//                                 onClick={() =>
//                                   handleDownload(formCSubmission._id, formCSubmission.filename)
//                                 }
//                               >
//                                 <i className="fas fa-download custom-purple-icon"></i>
//                               </button>{' '}
//                               |{' '}
//                               <button
//                                 className="text-green-500 font-semibold"
//                                 onClick={() => handleUpdateFormC(submissionId)}
//                               >
//                                 Update
//                               </button>
//                             </>
//                           ) : 'N/A'}
//                         </td>
//                         <td className="border border-gray-300 px-4 py-2">
//                           {formDSubmission ? (
//                             <>
//                               {formDSubmission.filename}{' '}|{' '}
//                               <button
//                                 className="text-blue-500 font-semibold"
//                                 onClick={() =>
//                                   handleDownload(formDSubmission._id, formDSubmission.filename)
//                                 }
//                               >
//                                 <i className="fas fa-download custom-purple-icon"></i>
//                               </button>{' '}
//                               |{' '}
//                               <button
//                                 className="text-green-500 font-semibold"
//                                 onClick={() => handleUpdateFormD(submissionId)}
//                               >
//                                 Update
//                               </button>
//                             </>
//                           ) : 'N/A'}
//                         </td>
//                         <td className="border border-gray-300 px-4 py-2">
//                           {(aadharcardSubmission || pancardSubmission || formCSubmission || formDSubmission) ? (
//                             <button
//                               className="text-red-500 font-semibold"
//                               onClick={() => handleDeleteClick(submissionId)}
//                             >
//                               Delete
//                             </button>
//                           ) : null}
//                         </td>
//                       </tr>
//                     );
//                   })}
//                 </tbody>
//               </table>
//             )}
//           </div>
//         )}
//       </div>

//       <div className="flex justify-center mt-4">
//         <button
//           className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
//           onClick={() => setCurrentPage(currentPage - 1)}
//           disabled={currentPage === 1}
//         >
//           Prev
//         </button>
//         <button
//           className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
//           onClick={() => setCurrentPage(currentPage + 1)}
          
//           disabled={currentPage === totalPages || currentSubmissions.length === 0}
//         >
//           Next
//         </button>
//       </div>

//       {showDeleteModal && (
//         <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
//           <div className="bg-white p-8 rounded-md">
//             <p className="text-lg font-semibold mb-4">Are you sure you want to delete this submission?</p>
//             <div className="flex justify-end">
//               <button
//                 className="bg-red-500 text-white px-4 py-2 rounded-md mr-4"
//                 onClick={handleConfirmDelete}
//               >
//                 Yes
//               </button>
//               <button
//                 className="bg-gray-500 text-white px-4 py-2 rounded-md"
//                 onClick={handleCancelDelete}
//               >
//                 No
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       <div className='pt-96'>
//         {/* Footer */}
//         <Footer />
//       </div>
//     </>
//   );
// };

const Submissiond = () => {
  const userId = localStorage.getItem('id');
  const [groupedFiles, setGroupedFiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [successMessage, setSuccessMessage] = useState('');
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deletionSubmissionId, setDeletionSubmissionId] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const[nofiles,setnofiles]=useState(0);
  const submissionsPerPage = 10;
  const navigate = useNavigate();


  useEffect(() => {
    const fetchGroupedFiles = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/files/${userId}?page=${currentPage}`);
        if (response.status === 200) {
          const { currentSubmissions } = response.data;
          setLoading(false);
          setGroupedFiles(currentSubmissions);
          
        }
      } catch (error) {
        console.error('Error fetching user files:', error);
      }
    };

    fetchGroupedFiles(); 
  }, [currentPage]);

  useEffect(()=>{
    console.log('Grouped Files: ', groupedFiles)
    console.log(groupedFiles.length)
    setnofiles(groupedFiles.length)
  },[groupedFiles])

  
  const paginate = async (pageNumber) => {
      setCurrentPage(pageNumber);
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
    console.log('Updating Aadhar Card for submission:', submissionId);
    navigate(`/adharupdate?submissionId=${submissionId}`);
  }

  async function handleUpdatePANCard(submissionId) {
    console.log('Updating PAN Card for submission:', submissionId);
    navigate(`/pancardupdate?submissionId=${submissionId}`);
  }

  async function handleUpdateFormC(submissionId) {
    navigate(`/formcupdate?submissionId=${submissionId}`);
  }

  async function handleUpdateFormD(submissionId) {
    console.log('Updating Form D for submission:', submissionId)
    navigate(`/formdupdate?submissionId=${submissionId}`);
  }

  const handleDeleteClick = (id) => {
    setDeletionSubmissionId(id);
    setShowDeleteModal(true);
  };

  const handleConfirmDelete = () => {
    setShowDeleteModal(false);
    handleDelete(deletionSubmissionId);
  };

  const handleCancelDelete = () => {
    setShowDeleteModal(false);
  };

  async function handleDelete(submissionId) {
    try {
      const response = await axios.delete(`http://localhost:3000/user/submission/${submissionId}`);
      if (response.status === 200) {
        navigate('/submission');
      }
    } catch (error) {
      console.error('Error deleting files:', error);
    }
  }

  // Get the current page's submissions from groupedFiles
  // const indexOfLastSubmission = currentPage * submissionsPerPage;
  // const indexOfFirstSubmission = indexOfLastSubmission - submissionsPerPage;
  // const currentSubmissions = Object.values(groupedFiles).slice(
  //   indexOfFirstSubmission,
  //   indexOfLastSubmission
  // );
// console.log(currentSubmissions)
  const TotalPages = Math.ceil(Object.keys(groupedFiles).length / submissionsPerPage);

  return (
    <>
      <UserNav />
      <div>
        {loading? (
          <div className="pt-32 items-center">
            <div className="w-full flex justify-evenly p-6 bg-white border border-gray-200 rounded-lg shadow-lg dark:border-gray-700 animate-pulse ">
              <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-1/3 mt-2 mr-2 mb-2" />
              <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-1/3 mt-2  mr-2  mb-2" />
              <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-1/3 mt-2 mr-2 mb-2" />
              <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-1/3 mt-2 mr-2 mb-2" />
              <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-1/3 mt-2 mr-2 mb-4" />
            </div>
          </div>
        ) : (
          <div>
            <h1 className="pt-20 text-2xl font-bold">Your Submissions</h1>
            {successMessage && <div className="text-green-500">{successMessage}</div>}
            {groupedFiles.length === 0 ? (
              <>
                <p className="text-center mt-8 text-4xl">You haven't yet done any submissions</p>
                <Link to="/user/itr">
                  <p className="text-purple-900 mt-10 text-center font-mono text-4xl">
                    Let's click here to FileITR or click on File MY ITR
                  </p>
                </Link>
              </>
            ) : (
              <>
              <table className="mt-8 table-auto border-collapse w-full">
                <thead>
                  <tr className="border border-gray-300">
                    <th className="px-4 py-2 text-left">Submission ID</th>
                    <th className="px-4 py-2 text-left">Aadhar Card</th>
                    <th className="px-4 py-2 text-left">PAN Card</th>
                    <th className="px-4 py-2 text-left">Form C</th>
                    <th className="px-4 py-2 text-left">payslip</th>
                    <th className="px-4 py-2 text-left">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {groupedFiles.map((submission, index) => {
                    // const submissionId = Object.keys(groupedFiles)[index + indexOfFirstSubmission];
                    const submissionId = submission[0]['metadata']['submissionId'];
                    const aadharcardSubmission = submission.find((s) => {
                      let splittedName = s.filename.split('.');
                      splittedName.pop()
                      let patchedName = splittedName.join('.');
                      return patchedName == 'aadharcard';
                    }
                    );
                    const pancardSubmission = submission.find((s) => {
                      let splittedName = s.filename.split('.');
                      splittedName.pop()
                      let patchedName = splittedName.join('.');
                      return patchedName == 'pancard';
                    }
                    );
                    const formCSubmission = submission.find((s) => {
                      let splittedName = s.filename.split('.');
                      splittedName.pop()
                      let patchedName = splittedName.join('.');
                      return patchedName == 'formc';
                    }
                    );
                    const formDSubmission = submission.find((s) => {
                      let splittedName = s.filename.split('.');
                      splittedName.pop()
                      let patchedName = splittedName.join('.');
                      return patchedName == 'payslip';
                    }
                    );

                    return (
                      <tr key={submissionId}>
                        <td className="border border-gray-300 px-4 py-2">{submissionId}</td>
                        <td className="border border-gray-300 px-4 py-2">
                          {aadharcardSubmission ? (
                            <>
                              {aadharcardSubmission.filename}{' '}
                              |{' '}
                              <button
                                className="text-blue-500 font-semibold"
                                onClick={() =>
                                  handleDownload(aadharcardSubmission._id, aadharcardSubmission.filename)
                                }
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
                                onClick={() =>
                                  handleDownload(pancardSubmission._id, pancardSubmission.filename)
                                }
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
                                onClick={() =>
                                  handleDownload(formCSubmission._id, formCSubmission.filename)
                                }
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
                                onClick={() =>
                                  handleDownload(formDSubmission._id, formDSubmission.filename)
                                }
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
                         

        <div className="flex justify-center mt-4">
                <button
                  className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
                  onClick={() => paginate(currentPage - 1)} // Use the paginate function here for Prev button
                  disabled={currentPage === 1}
                >
                  Prev
                </button>
                <div className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 ">
                  {currentPage}

                </div>
                <button
                  className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
                  onClick={() => paginate(currentPage + 1)} // Use the paginate function here for Next button
                  disabled={nofiles<10}
                >
                  Next
                </button>
              </div>
                  
              </>
              
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

      <div className='pt-96'>
        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};
  export default Submissiond;
  