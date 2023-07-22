import React from 'react';
import { useState ,useEffect} from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Navbar from './navbar';
import Login from './login';

import axios from 'axios'






// const RegistrationForm = ({formType}) => {
 
//   const [showLogin, setShowLogin] = useState(formType === 'login');
//   const [showCreateAccount, setShowCreateAccount] = useState(formType === 'signup');
//   const[ErrorMessage,setErrorMessage]=useState('')

//   const handleCreateAccountClick = () => {
//     setShowCreateAccount(true);
//   };

//   const createAccountInitialValues = {
//     email: '',
//     password: '',
//     firstname: '',
//     lastname: '',
//     jobtitle: '',
//     mobileNo: '',
//   };

//   const validationSchema = Yup.object().shape({
//     email: Yup.string().email('Invalid email').required('Email is required'),
//     password: Yup.string().required('Password is required'),
//     firstname: Yup.string().required('First Name is required'),
//     lastname: Yup.string().required('Last Name is required'),
//     jobtitle: Yup.string().required('Job Title is required'),
//     mobileNo: Yup.string().required('Mobile Number is required').matches(/^[0-9]+$/, 'Mobile Number must contain only numbers').min(10, 'Mobile Number must be exactly 10 digits')
//     .max(10, 'Mobile Number must be exactly 10 digits'),
//   }).defined();

//   // const handleSubmit = async (values) => {
//   //   try{
//   //     const response =await axios.post('http://localhost:3000/user', values);
//   //     console.log(response)
//   //   }catch (error) {
//   //     console.error(error);
//   //     if (error.response && error.response.data && error.response.data.message ) {
//   //       setErrorMessage(error.response.data.msg);
//   //     }else if (error.response && error.response.data.errors.mobileNo) {
//   //       setErrorMessage("enter valid mobile number");
//   //     }
//   //     else {
//   //       setErrorMessage(error.response.data.msg);
//   //       console.log(error.response.data.msg)
//   //     }
//   //   }
//   // };
//   const handleSubmit = async (values) => {
//     try {
//       const response = await axios.post('http://localhost:3000/user', values);
//       console.log(response);
//     } catch (error) {
//       console.error(error);
//       if (error.response && error.response.data && error.response.data.msg) {
//         setErrorMessage(error.response.data.msg);
//       } else if (error.response && error.response.status === 409) {
//         setErrorMessage('User already exists with this email');
//       } else if (error.response && error.response.data.errors && error.response.data.errors.mobileNo) {
//         setErrorMessage('Enter a valid mobile number');
//       } else {
//         setErrorMessage('An error occurred while processing the request');
//       }
//     }
//   };
  
//   return (formType==='login')?<Login/>:(
        

//     <div className="container w-auto">
// <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded-lg shadow-md">
//   <div className="flex justify-between mb-4">
//     <h1>Registration</h1>
//     {ErrorMessage && <div className='text-red-700'>{ErrorMessage}</div>}
//   </div>

//   <Formik
//     initialValues={createAccountInitialValues}
//     validationSchema={validationSchema}
//     onSubmit={handleSubmit}
//   >
//     {(formik) => (
//       <form className="max-w-sm" onSubmit={formik.handleSubmit}>
//         <div className="mb-4">
//           <label
//             className="block text-gray-500 font-bold mb-1 md:mb-0 pr-4"
//             htmlFor="inline-email"
//           >
//             Email
//           </label>
//           <input
//             className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
//             id="inline-email"
//             name="email"
//             type="text"
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             value={formik.values.email}
//           />
//           {formik.touched.email && formik.errors.email ? (
//             <div className="text-red-500">{formik.errors.email}</div>
//           ) : null}
//         </div>
//         <div className="mb-4">
//           <label
//             className="block text-gray-500 font-bold mb-1 md:mb-0 pr-4"
//             htmlFor="inline-password"
//           >
//             Password
//           </label>
//           <input
//             className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
//             id="inline-password"
//             name="password"
//             type="password"
//             placeholder="******************"
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             value={formik.values.password}
//           />
//           {formik.touched.password && formik.errors.password ? (
//             <div className="text-red-500">{formik.errors.password}</div>
//           ) : null}
//         </div>

//         <div className="mb-4">
//           <label
//             className="block text-gray-500 font-bold mb-1 md:mb-0 pr-4"
//             htmlFor="inline-firstname"
//           >
//             First Name
//           </label>
//           <input
//             className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
//             id="inline-firstname"
//             name="firstname"
//             type="text"
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             value={formik.values.firstname}
//           />
//           {formik.touched.firstname && formik.errors.firstname ? (
//             <div className="text-red-500">{formik.errors.firstname}</div>
//           ) : null}
//         </div>
//         <div className="mb-4">
//           <label
//             className="block text-gray-500 font-bold mb-1 md:mb-0 pr-4"
//             htmlFor="inline-lastname"
//           >
//             Last Name
//           </label>
//           <input
//             className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
//             id="inline-lastname"
//             name="lastname"
//             type="text"
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             value={formik.values.lastname}
//           />
//           {formik.touched.lastname && formik.errors.lastname ? (
//             <div className="text-red-500">{formik.errors.lastname}</div>
//           ) : null}
//         </div>
//         <div className="mb-4">
//           <label
//             className="block text-gray-500 font-bold mb-1 md:mb-0 pr-4"
//             htmlFor="inline-jobtitle"
//           >
//             Job Title
//           </label>
//           <input
//             className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
//             id="inline-jobtitle"
//             name="jobtitle"
//             type="text"
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             value={formik.values.jobtitle}
//           />
//           {formik.touched.jobtitle && formik.errors.jobtitle ? (
//             <div className="text-red-500">{formik.errors.jobtitle}</div>
//           ) : null}
//         </div>

//         <div className="mb-4">
//           <label
//             className="block text-gray-500 font-bold mb-1 md:mb-0 pr-4"
//             htmlFor="inline-mobileNo"
//           >
//             Mobile Number
//           </label>
//           <input
//             className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
//             id="inline-mobileNo"
//             name="mobileNo"
//             type="text"
//             placeholder="Enter your mobile number"
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             value={formik.values.mobileNo}
//           />
//           {formik.touched.mobileNo && formik.errors.mobileNo ? (
//             <div className="text-red-500">{formik.errors.mobileNo}</div>
//           ) : null}
//         </div>

//         <div className="md:flex md:items-center">
//           <div className="md:w-1/3"></div>
//           <div className="md:w-2/3">
//             <button
//               className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
//               type="submit"
//             >
//               Sign Up
//             </button>
            
            
//           </div>
//         </div>
//       </form>
//     )}
//   </Formik>
// </div>
// </div>

  
 
//   );
// };


import CreateAccountForm from './createaccount';


// const RegistrationForm = ({ formType }) => {
//   const [showForm, setShowForm] = useState(formType); // 'login' or 'signup'
//   const [registrationSuccess, setRegistrationSuccess] = useState(false);
  

//   const handleLoginClick = () => {
//     setShowForm('login');
//     setRegistrationSuccess(false);
//   };

//   const handleCreateAccountClick = () => {
//     setShowForm('signup');
//     setRegistrationSuccess(false);
//   };


//   useEffect(() => {
//     if (registrationSuccess && showForm === 'signup') {
//       handleLoginClick();
//     }
//   }, [registrationSuccess, showForm]);
//   const handleSubmit = async (values) => {
//     console.log(values);

//     try {
//       if (showForm === 'signup') {
//         // Make a POST request to the backend API endpoint for signup
//         const response = await axios.post('http://localhost:3000/user', values);

//         // Handle the response from the backend
//         console.log(response.data);

//         // Assuming the backend sends back a success message or data for signup
//         if (response.status === 201) {
//           console.log("this is form reg sucees")
//           setRegistrationSuccess(true);
//           console.log(registrationSuccess)
//           handleLoginClick()

//         }
//       } else {
//         // Make a POST request to the backend API endpoint for login
//         const response = await axios.post('http://localhost:3000/user/login', values);

//         // Handle the response from the backend
//         console.log(response.data);

//         // Assuming the backend sends back a success message or data for login
//         if (response.status === 200) {
//           setRegistrationSuccess(true);

//         }
//       }

//       // Reset the form
//       // formik.resetForm();
//     } catch (error) {
//       // Handle errors if the request fails
//       console.error(error);
//     }
//   };

//   return (
//     <div className="container w-auto">
//       <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded-lg shadow-md">
//         {registrationSuccess ? (
//           <div>
//             <p>Your profile has been updated successfully!</p>
//             {showForm === 'login' && <Login onSubmit={handleSubmit} />}
//           </div>
//         ) : (
//           <div>
//             <div className="flex justify-between mb-4">
//               <button
//                 className={`mr-2 ${showForm === 'login' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-500'} py-2 px-4 rounded`}
//                 onClick={handleLoginClick}
//               >
//                 Login
//               </button>
//               <h1>Or</h1>
//               <button
//                 className={`ml-2 ${
//                   showForm === 'signup' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-500'
//                 } py-2 px-4 rounded`}
//                 onClick={handleCreateAccountClick}
//               >
//                 Create Account
//               </button>
//             </div>

//             {showForm === 'login' && <Login onSubmit={handleSubmit} />}
//             {showForm === 'signup' && <CreateAccountForm onSubmit={handleSubmit} />}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };



const RegistrationForm = ({ formType }) => {
  const [showForm, setShowForm] = useState(formType); // 'login' or 'signup'
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const [showLoginAfterSuccess, setShowLoginAfterSuccess] = useState(false);

  const handleLoginClick = () => {
    setShowForm('login');
    setRegistrationSuccess(false);
    setShowLoginAfterSuccess(false); // Ensure this is set to false when clicking Login
  };

  const handleCreateAccountClick = () => {
    setShowForm('signup');
    setRegistrationSuccess(false);
    setShowLoginAfterSuccess(false); // Ensure this is set to false when clicking Create Account
  };

  const handleSubmit = async (values) => {
    try {
      if (showForm === 'signup') {
        // Make a POST request to the backend API endpoint for signup
        const response = await axios.post('http://localhost:3000/user', values);

        // Handle the response from the backend
        console.log(response.data);

        // Assuming the backend sends back a success message or data for signup
        if (response.status === 201) {
          console.log('this is form reg success');
          setRegistrationSuccess(true);

          // Show the login form automatically after successful registration
          setShowLoginAfterSuccess(true);
        }
      } else {
        // Make a POST request to the backend API endpoint for login
        const response = await axios.post('http://localhost:3000/user/login', values);

        // Handle the response from the backend
        console.log(response.data);

        // Assuming the backend sends back a success message or data for login
        if (response.status === 200) {
          setRegistrationSuccess(true);

          // Show the login form automatically after successful login
          setShowLoginAfterSuccess(true);
        }
      }
    } catch (error) {
      // Handle errors if the request fails
      console.error(error);
    }
  };

  return (
    <div className="container w-auto">
      <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded-lg shadow-md">
        {registrationSuccess ? (
          <div>
            <p>Your profile has been updated successfully!</p>
            {showLoginAfterSuccess && <Login onSubmit={handleSubmit} />}
          </div>
        ) : (
          <div>
            <div className="flex justify-between mb-4">
              <button
                className={`mr-2 ${
                  showForm === 'login' && !registrationSuccess
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-200 text-gray-500'
                } py-2 px-4 rounded`}
                onClick={handleLoginClick}
              >
                Login
              </button>
              <h1>Or</h1>
              <button
                className={`ml-2 ${
                  showForm === 'signup' || registrationSuccess
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-200 text-gray-500'
                } py-2 px-4 rounded`}
                onClick={handleCreateAccountClick}
              >
                Create Account
              </button>
            </div>

            {showForm === 'login' && !registrationSuccess && <Login onSubmit={handleSubmit} />}
            {showForm === 'signup' && !registrationSuccess && <CreateAccountForm onSubmit={handleSubmit} />}
          </div>
        )}
      </div>
    </div>
  );
};




export default RegistrationForm;















// const RegistrationForm = (props) => {
//   console.log(props.value +"this is from registartion")
//   const initialValues = {
//     name: '',
//     email: '',
//     phoneNumber: '',
//     password: '',
   
//   };

//   const validationSchema = Yup.object().shape({
//     firstname: Yup.string().required('First name is required'),
//     lastname: Yup.string(),
//     email: Yup.string().email('Invalid email').required('Email is required'),
//     password: Yup.string().required('Password is required'),
//     jobtitle: Yup.string(),
//     mobileNo: Yup.number().required('Mobile number is required'),
//   });

//   const onSubmit = async (values) => {
//     // alert(JSON.stringify(values), null, 2);
//     // props.resetForm();
//     try{
//       const response=await axios.post('http://localhost:3000/user', values)
//     }catch(error){
//       console.error(error)
//     }

//   };
// const [login,setLogin]=useState("flase");
// const [signup,SetSignup]=useState("false");
//   return (props.value=="login")?<Login/>:(
//     <>
   
//     <div className="container w-auto ">
//       <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded-lg shadow-md">
//         <h1 className="text-2xl font-semibold mb-4">Sign Up</h1>
//         <p className="text-sm text-gray-500 mb-6">Fill the form to create an account</p>
//         <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
//           {(props) => (
//             <Form noValidate>
//               {/* <div className="mb-4">
//                 <Field as="div" name="role" className="flex items-center">
//                   <label className="mr-2">
//                     <Field type="radio" name="role" value="user" className="mr-1" />
//                     User
//                   </label>
//                   <label>
//                     <Field type="radio" name="role" value="admin" className="mr-1" />
//                     Admin
//                   </label>
//                 </Field>
//                 <ErrorMessage name="role" component="div" className="text-red-500 text-sm" />
//               </div> */}

//               <div className="mb-4">
//                 <Field as="input" type="text" name="firstname" placeholder="Firstname" className="w-full p-2 border border-gray-300 rounded" />
//                 <ErrorMessage name="firstname" component="div" className="text-red-500 text-sm" />
//               </div>

//               <div className="mb-4">
//                 <Field as="input" type="text" name="lastname" placeholder="Lastname" className="w-full p-2 border border-gray-300 rounded" />
//                 <ErrorMessage name="lastname" component="div" className="text-red-500 text-sm" />
//               </div>

              

//               <div className="mb-4">
//                 <Field as="input" type="text" name="jobtitle" placeholder="Job Title" className="w-full p-2 border border-gray-300 rounded" />
//                 <ErrorMessage name="jobtitle" component="div" className="text-red-500 text-sm" />
//               </div>

//               <div className="mb-4">
//                 <Field as="input" type="text" name="mobileNo" placeholder="Mobile No" className="w-full p-2 border border-gray-300 rounded" />
//                 <ErrorMessage name="mobileNo" component="div" className="text-red-500 text-sm" />
//               </div>
//               <div className="mb-4">
//                 <Field as="input" type="email" name="email" placeholder="Email" className="w-full p-2 border border-gray-300 rounded" />
//                 <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
//               </div>

//               <div className="mb-4">
//                 <Field as="input" type="password" name="password" placeholder="Password" className="w-full p-2 border border-gray-300 rounded" />
//                 <ErrorMessage name="password" component="div" className="text-red-500 text-sm" />
//               </div>

//               {/* <div className="mb-4">
//                 <Field as="input" type="password" name="confirmPassword" placeholder="Confirm Password" className="w-full p-2 border border-gray-300 rounded" />
//                 <ErrorMessage name="confirmPassword" component="div" className="text-red-500 text-sm" />
//               </div> */}

//               <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">Register</button>
//             </Form>
//           )}
//         </Formik>
//       </div>
//     </div>
//     </>
//   );
// };










