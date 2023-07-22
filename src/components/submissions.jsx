import axios from "axios";
import React from "react";
import { useLocation } from 'react-router-dom';
import { saveAs } from 'file-saver'; 
import DropDown from "./dropdown";
import { Link } from "react-router-dom";
import UserNav from "./usernav";
     

const Submissions = () => {
  const userId = localStorage.getItem('id');
  const [groupedFiles, setGroupedFiles] = useState({});
  const [loading, setLoading] = useState(true);
  const [successMessage,setSuccessMessage]=useState('')

  const location = useLocation();
  
  const clearSuccessMessage = () => {
    setSuccessMessage('');
    navigate('/user')
    
    
  };



  // const date = new Date(file.uploadDate);
  
  function formatDate(date) {
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
      }
  const navigate =useNavigate()

  useEffect(() => {
    fetchUserFiles(userId);
  }, [userId]);

  async function fetchUserFiles(userId) {
    try {
      const response = await axios.get(`http://localhost:3000/files/${userId}`);
      const files = response.data.file;
      const groupedFiles = groupFilesBySubmissionId(files);
      setGroupedFiles(groupedFiles);
      setLoading(false); // Data fetched, so set loading to false
    } catch (error) {
      console.error('Error fetching user files:', error);
      setLoading(false); // In case of error, set loading to false
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

  const handleUpdate = (submissionId) => {
    // Implement the update logic here
    console.log(submissionId)
    
    // navigate('/updatesubmission',submissionId)
    navigate(`/updatesubmission?submissionId=${submissionId}`);
    
  };
  // async function handleDelete(submissionId) {
  //   try {
      
  //     const response=await axios.delete(`http://localhost:3000/user/submission/${submissionId}`);
  //     console.log('this is from handle delete')
  //     console.log(response)
  //     console.log(response.data.file[0].submissionId)
  //     const respons = await axios.get(`http://localhost:3000/files/${userId}`)
  //     const updatedFiles = respons.data.file;
  //     const updatedGroupedFiles = groupFilesBySubmissionId(updatedFiles);
  //     setGroupedFiles(updatedGroupedFiles)
  //     setLoading(true)

      
  //   } catch (error) {
  //     console.error('Error deleting files:', error);
  //   }
  // }

  async function handleDelete(submissionId) {
    try {


      const response = await axios.delete(`http://localhost:3000/user/submission/${submissionId}`);
      console.log('this is from handle delete', response);
      if(response.status===200){
        navigate('/submissionss')
      }
     
     
    } catch (error) {
      console.error('Error deleting files:', error);
    }
  }


  // async function handleDelete(submissionId) {
  //   try {
  //     const shouldDelete = window.confirm('Are you sure you want to delete this submission?');

  //     if (shouldDelete) {
  //       const response = await axios.delete(`http://localhost:3000/user/submission/${submissionId}`);
  //       // Handle the response or any other actions after successful deletion
  //       console.log('Successfully deleted');
  //       console.log(response);
        
  //     } else {
  //       console.log('Deletion canceled');
  //     }
  //   } catch (error) {
  //     console.error('Error deleting files:', error);
  //   }
  // }

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
      {console.log(groupedFiles)}
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
                <button
                  className="text-blue-500 font-semibold"
                  onClick={() => handleDownload(aadharcardSubmission._id, aadharcardSubmission.filename)}
                >
                  {aadharcardSubmission.filename}
                  
                </button>
              ) : null}
            </td>
            <td className="border border-gray-300 px-4 py-2">
              {pancardSubmission ? (
                <button
                  className="text-blue-500 font-semibold"
                  onClick={() => handleDownload(pancardSubmission._id, pancardSubmission.filename)}
                >
                  {pancardSubmission.filename}
                </button>
              ) : null}
            </td>
            <td className="border border-gray-300 px-4 py-2">
              {formCSubmission ? (
                <button
                  className="text-blue-500 font-semibold"
                  onClick={() => handleDownload(formCSubmission._id, formCSubmission.filename)}
                >
                  {formCSubmission.filename}
                </button>
              ) : null}
            </td>
            <td className="border border-gray-300 px-4 py-2">
              {formDSubmission ? (
                <button
                  className="text-blue-500 font-semibold"
                  onClick={() => handleDownload(formDSubmission._id, formDSubmission.filename)}
                >
                  {formDSubmission.filename}
                </button>
              ) : null}
            </td>
            <td className="border border-gray-300 px-4 py-2">
              {aadharcardSubmission ? (
                <>
                  <button
                    className="text-green-500 font-semibold"
                    onClick={() => handleUpdate(submissionId)}
                  >
                    Update
                  </button>{' '}
                  |{' '}
                </>
              ) : null}
              {(aadharcardSubmission || pancardSubmission || formCSubmission || formDSubmission) ? (
                <button
                  className="text-red-500 font-semibold"
                  
                  onClick={() => handleDelete(submissionId)}
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
          </div>
        )}
      </div>
    </>
  );
};










export default Submissions;






