import React, { useEffect, useState } from "react";
import { Formik } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import UserNav from "./usernav";
import ShimmerUI from "./shimmer";
import Footer from "./footer";
const Profile=()=>{
  
  const [response, setResponse] = useState(null);
    const [profielupdated,setProfileupdate]=useState(false)
    const [loading, setLoading] = useState(true);
    const navigate=useNavigate()

    const [successMessage,setSuccessMessage]=useState('')

    // useEffect( async ()=>{
        
    //     const response=await axios.get(`http://localhost:3000/user/${localStorage.getItem('id')}`)
    //     console.log(response)
    // },[profielupdated])

    const clearSuccessMessage = () => {
        setSuccessMessage('');
        navigate('/userprofile')
        
      };
      

    useEffect(() => {
        async function fetchData() {
          try {
            const  response = await axios.get(`https://jayakrishnanodejs.ap-south-1.elasticbeanstalk.com/user/${localStorage.getItem('id')}`);
            console.log(response);
            setResponse(response.data);
            setLoading(false);
          } catch (error) {
            console.error(error);
            setLoading(false);
          }
        }
        fetchData();
        
      }, [profielupdated]);
      

  const[profilerror,setProfilerror]=useState('')
            // const createAccountInitialValues = {
            //     email: response.email,
            //     firstname: response.firstname,
            //     lastname: response.lastname,
            //     jobtitle: response.jobtitle,
            //     mobileNo: response.mobileNo,

            // };
           
            const createAccountInitialValues = response?{
                                                            email: response.email,
                                                            firstname: response.firstname,
                                                            lastname: response.lastname,
                                                            jobtitle: response.jobtitle,
                                                            mobileNo: response.mobileNo,
                                                        }
                                                        : {
                                                            email: '',
                                                            firstname: '',
                                                            lastname: '',
                                                            jobtitle: '',
                                                            mobileNo: '',
                                                        };
          
            const validationSchema = Yup.object().shape({
              email: Yup.string().email('Invalid email').required('Email is required'),
            //   password: Yup.string().required('Password is required'),
              firstname: Yup.string().required('First Name is required'),
              lastname: Yup.string().required('Last Name is required'),
              jobtitle: Yup.string().required('Job Title is required'),
              mobileNo: Yup.string().required('Mobile Number is required').matches(/^[0-9]+$/, 'Mobile Number must contain only numbers').min(10, 'Mobile Number must be exactly 10 digits')
              .max(10, 'Mobile Number must be exactly 10 digits'),
            }).defined();
             
            // const userid=localStorage.getItem('id')
            
            const handleSubmit = async (values) => {
              try {
                const response = await axios.put(`https://jayakrishnanodejs.ap-south-1.elasticbeanstalk.com/user/profile/${localStorage.getItem('id')}`, values);
                console.log(response);
                setSuccessMessage('Your profile is updated successfully.');
                setTimeout(clearSuccessMessage, 1000);
              } catch (error) {
                console.error(error);
                if (error.response && error.response.data && error.response.data.msg) {
                  setProfilerror(error.response.data.msg);
                } else if (error.response && error.response.status === 409) {
                  setProfilerror('User already exists with this email');
                } else if (error.response && error.response.data.errors && error.response.data.errors.mobileNo) {
                  setProfilerror('Enter a valid mobile number');
                } else {
                  setProfilerror('An error occurred while processing the request');
                }
              }
            };
            
            return (
<>
              <UserNav/>
                


                  <div className="pt-32">
                  <div className="container w-auto">
                  <div className="max-w-md mx-auto  bg-white  p-7 rounded-lg shadow-md">
                    <div className="flex justify-between mb-4">
                    <h1>Your Profile</h1>
                    {successMessage && <div className="text-green-500">{successMessage}</div>}
                      
                    </div>
              
                    {loading ? ( // Show shimmer/skeleton loader while loading
                      // <div className="shimmer-loader"></div>
                      <ShimmerUI/>
                    ) : (
          
                  <Formik
                    initialValues={createAccountInitialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                  >
                    {(formik) => (
                      <form className="max-w-sm" onSubmit={formik.handleSubmit}>
                        <div className="mb-4">
                          <label
                            className="block text-gray-500 font-bold mb-1 md:mb-0 pr-2"
                            htmlFor="inline-email"
                          >
                            Email
                          </label>
                          <input
                            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                            id="inline-email"
                            name="email"
                            type="text"
                             onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.email}
                          />
                          {formik.touched.email && formik.errors.email ? (
                            <div className="text-red-500">{formik.errors.email}</div>
                          ) : null}
                        </div>
                
          
                        <div className="mb-4">
                          <label
                            className="block text-gray-500 font-bold mb-1 md:mb-0 pr-4"
                            htmlFor="inline-firstname"
                          >
                            First Name
                          </label>
                          <input
                            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                            id="inline-firstname"
                            name="firstname"
                            type="text"
                          
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.firstname}
                          />
                          {formik.touched.firstname && formik.errors.firstname ? (
                            <div className="text-red-500">{formik.errors.firstname}</div>
                          ) : null}
                        </div>
                        <div className="mb-4">
                          <label
                            className="block text-gray-500 font-bold mb-1 md:mb-0 pr-4"
                            htmlFor="inline-lastname"
                          >
                            Last Name
                          </label>
                          <input
                            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                            id="inline-lastname"
                            name="lastname"
                            type="text"
                        
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.lastname}
                          />
                          {formik.touched.lastname && formik.errors.lastname ? (
                            <div className="text-red-500">{formik.errors.lastname}</div>
                          ) : null}
                        </div>
                        <div className="mb-4">
                          <label
                            className="block text-gray-500 font-bold mb-1 md:mb-0 pr-4"
                            htmlFor="inline-jobtitle"
                          >
                            Job Title
                          </label>
                          <input
                            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                            id="inline-jobtitle"
                            name="jobtitle"
                            type="text"
                          
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.jobtitle}
                          />
                          {formik.touched.jobtitle && formik.errors.jobtitle ? (
                            <div className="text-red-500">{formik.errors.jobtitle}</div>
                          ) : null}
                        </div>
          
                        <div className="mb-4">
                          <label
                            className="block text-gray-500 font-bold mb-1 md:mb-0 pr-4"
                            htmlFor="inline-mobileNo"
                          >
                            Mobile Number
                          </label>
                          <input
                            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                            id="inline-mobileNo"
                            name="mobileNo"
                            type="text"
                           
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.mobileNo}
                          />
                          {formik.touched.mobileNo && formik.errors.mobileNo ? (
                            <div className="text-red-500">{formik.errors.mobileNo}</div>
                          ) : null}
                        </div>
          
                        <div className="md:flex  pl-9 md:items-center">
                          <div className="md:w-1/3"></div>
                          <div className="md:w-2/3">
                            <button
                              className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                              type="submit"
                            >
                             update
                            </button>
                            
                            {/* {ErrorMessage && <div className='text-red-700'>{ErrorMessage}</div>} */}
                          </div>
                        </div>
                      </form>
                    )}
                  </Formik>
                     
                    )}
                  </div>
                </div>
                       </div>
                <div className='pt-96'>

                      <Footer/>
                      </div>

                              </>
              );
              
};
export default Profile
        
    








// ... rest of the component ...






//   -----------------
//   <div className="container w-auto">
//                 <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded-lg shadow-md">
//                   <div className="flex justify-between mb-4">
//                     <h1>User Profile</h1>
//                   </div>
          
//                   <Formik
//                     initialValues={createAccountInitialValues}
//                     validationSchema={validationSchema}
//                     onSubmit={handleSubmit}
//                   >
//                     {(formik) => (
//                       <form className="max-w-sm" onSubmit={formik.handleSubmit}>
//                         <div className="mb-4">
//                           <label
//                             className="block text-gray-500 font-bold mb-1 md:mb-0 pr-4"
//                             htmlFor="inline-email"
//                           >
//                             Email
//                           </label>
//                           <input
//                             className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
//                             id="inline-email"
//                             name="email"
//                             type="text"
//                              onChange={formik.handleChange}
//                             onBlur={formik.handleBlur}
//                             value={formik.values.email}
//                           />
//                           {formik.touched.email && formik.errors.email ? (
//                             <div className="text-red-500">{formik.errors.email}</div>
//                           ) : null}
//                         </div>
                
          
//                         <div className="mb-4">
//                           <label
//                             className="block text-gray-500 font-bold mb-1 md:mb-0 pr-4"
//                             htmlFor="inline-firstname"
//                           >
//                             First Name
//                           </label>
//                           <input
//                             className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
//                             id="inline-firstname"
//                             name="firstname"
//                             type="text"
                          
//                             onChange={formik.handleChange}
//                             onBlur={formik.handleBlur}
//                             value={formik.values.firstname}
//                           />
//                           {formik.touched.firstname && formik.errors.firstname ? (
//                             <div className="text-red-500">{formik.errors.firstname}</div>
//                           ) : null}
//                         </div>
//                         <div className="mb-4">
//                           <label
//                             className="block text-gray-500 font-bold mb-1 md:mb-0 pr-4"
//                             htmlFor="inline-lastname"
//                           >
//                             Last Name
//                           </label>
//                           <input
//                             className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
//                             id="inline-lastname"
//                             name="lastname"
//                             type="text"
                        
//                             onChange={formik.handleChange}
//                             onBlur={formik.handleBlur}
//                             value={formik.values.lastname}
//                           />
//                           {formik.touched.lastname && formik.errors.lastname ? (
//                             <div className="text-red-500">{formik.errors.lastname}</div>
//                           ) : null}
//                         </div>
//                         <div className="mb-4">
//                           <label
//                             className="block text-gray-500 font-bold mb-1 md:mb-0 pr-4"
//                             htmlFor="inline-jobtitle"
//                           >
//                             Job Title
//                           </label>
//                           <input
//                             className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
//                             id="inline-jobtitle"
//                             name="jobtitle"
//                             type="text"
                          
//                             onChange={formik.handleChange}
//                             onBlur={formik.handleBlur}
//                             value={formik.values.jobtitle}
//                           />
//                           {formik.touched.jobtitle && formik.errors.jobtitle ? (
//                             <div className="text-red-500">{formik.errors.jobtitle}</div>
//                           ) : null}
//                         </div>
          
//                         <div className="mb-4">
//                           <label
//                             className="block text-gray-500 font-bold mb-1 md:mb-0 pr-4"
//                             htmlFor="inline-mobileNo"
//                           >
//                             Mobile Number
//                           </label>
//                           <input
//                             className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
//                             id="inline-mobileNo"
//                             name="mobileNo"
//                             type="text"
                           
//                             onChange={formik.handleChange}
//                             onBlur={formik.handleBlur}
//                             value={formik.values.mobileNo}
//                           />
//                           {formik.touched.mobileNo && formik.errors.mobileNo ? (
//                             <div className="text-red-500">{formik.errors.mobileNo}</div>
//                           ) : null}
//                         </div>
          
//                         <div className="md:flex md:items-center">
//                           <div className="md:w-1/3"></div>
//                           <div className="md:w-2/3">
//                             <button
//                               className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
//                               type="submit"
//                             >
//                              update
//                             </button>
                            
//                             {/* {ErrorMessage && <div className='text-red-700'>{ErrorMessage}</div>} */}
//                           </div>
//                         </div>
//                       </form>
//                     )}
//                   </Formik>
//                 </div>
//               </div>