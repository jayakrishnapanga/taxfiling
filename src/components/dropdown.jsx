

import axios from 'axios';
import React, { useState,useEffect,useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


// const DropDown = () => {
//   const [isDropdownOpen, setDropdownOpen] = useState(false);
//   const [ErrorMsg,setErrorMsg]=useState('')
//   const[Files,setFiles]=useState('');
//   const navigate=useNavigate();
//   const userid=localStorage.getItem('id')
//   console.log(userid+"hello from drop down ")

//   // useEffect(()=>{
//   //   const res=fetchFiles()
    
//   // },[])

//   // async function fetchFiles()
//   // {
//   //   try{
//   //       const response= await axios.get(`http://localhost:3000/files/${userid}`)
//   //        console.log(response)
//   //        console.log('from dropdown')
//   //        setFiles(response.data.file)
//   //        console.log(ErrorMsg)
//   //  }
//   //       catch(error){
//   //           // if(error.response &&  error.response.data && error.response.data.msg)
//   //           // setErrorMsg(error.response.data.msg)
//   //           console.log(error)

    
//   //       }
//   // }
//   async function handleSubmission(){
   
   
//     navigate('/submission')
//   }

//   const toggleDropdown = () => {
//     setDropdownOpen((prevState) => !prevState);
//   };

//   return (
//     <div className="dropdown grid pr-4 z-10 mr-10">
//       {/* Dropdown trigger */}
//       <button className='text-white' onClick={toggleDropdown}>{localStorage.getItem('name')}</button>

//       {/* Dropdown content */}
//       {isDropdownOpen && (
//         <div className="dropdown-content">
//           <ul className="flex flex-col gap-2  text-green-900 mr-1">
//             <Link to="/userprofile">Profile</Link>
        
//             <li onClick={handleSubmission}>My Submissions</li>
//             <Link to="/">logout</Link>
//           </ul>
//         </div>
//       )}
//     </div>)
  
// };




const DropDown = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [ErrorMsg, setErrorMsg] = useState('');
  const[username,setUsername]=useState('')
  const [Files, setFiles] = useState('');
  const navigate = useNavigate();
  const userid = localStorage.getItem('id');
  const dropdownRef = useRef(null);

  console.log(userid + 'hello from drop down ');

  useEffect(() => {
    // Add event listener to handle clicks outside the dropdown
    document.addEventListener('click', handleOutsideClick);

      setUsername( localStorage.getItem('name'))
      console.log(localStorage.getItem('name'))
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  const handleOutsideClick = (event) => {
    // Check if the click occurred outside the dropdown
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

  async function handleSubmission() {
    navigate('/submission');
  }

  const toggleDropdown = () => {
    setDropdownOpen((prevState) => !prevState);
  };

  return (
    <div ref={dropdownRef} className="dropdown grid pr-4 z-10 mr-10">
      {/* Dropdown trigger */}
      <button className="text-white" onClick={toggleDropdown}>
        {username}
      </button>

      {/* Dropdown content */}
      {isDropdownOpen && (
        <div className="dropdown-content">
          <ul className="flex flex-col gap-2  text-green-900 mr-1">
            <Link to="/userprofile">Profile</Link>

            <li onClick={handleSubmission}>My Submissions</li>
            <Link to="/">logout</Link>
          </ul>
        </div>
      )}
    </div>
  );
};




export default DropDown