// import React from "react";


// const Footer=()=>{


//    return(

//     <div className="flex w-full bg-white p-6 shadow-md pt-20">

//             <div className="w-1/5">
//                 <h1 className=" ml-10"> TaxFiling</h1>
//                 <p>
//                 Taxopus was founded to provide accurate tax and financial services to society. We are a professional tax and financial consulting firm based in Hyderabad, Telangana, India.

//                 Our Holding company is Tycoon Elite Consulting Services Private Limited.
//                </p>
//             </div>
//             <div className="border bg-green-600">
//                 <h1>ContactUs</h1>
//                 <div>

//                     <h1>contact details</h1>
//                     <ul>
//                         <li>
//                             Hyderabad,Telangana, India
//                         </li>
//                         <li>
//                             +91 8688185874
//                         </li>
//                         <li>
//                             pangajayakrishna1999@gmail.com
//                         </li>
//                     </ul>
//                 </div>
//             </div>
//     </div>
//    )
   

// }

// export default Footer




// import React from 'react';
// // Import the CSS file for the Footer styles
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

// const Footer = () => {
//   return (
//     <footer className="footer">
//       <div className='flex justify-between'>
      
      

    //   <div className="w-1/5">
    //             <h1 className=" ml-10"> TaxFiling</h1>
    //            <p>
    //              Taxopus was founded to provide accurate tax and financial services to society. We are a professional tax and financial consulting firm based in Hyderabad, Telangana, India.

    //             Our Holding company is Tycoon Elite Consulting Services Private Limited.
    //            </p>
    //        </div>


    //        <div className="contact-card">
    //     <h2>Contact Us</h2>
    //     <div className="contact-details">
    //       <p>Mobile: +818688185874</p>
    //       <p>Email: pangajayakrishna1999@gmail.com</p>
    //       <p>Location: Hyderabad</p>
    //     </div>
    //   </div>
    //   </div>


//            <p className="footer-text">TaxFiling &copy; {new Date().getFullYear()}</p>
//     </footer>
//   );
// };

// export default Footer;
import { Link } from 'react-router-dom';

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope , faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons';
// Import the CSS file for the Footer styles

const Footer = () => {
  return (
    <footer className="footer ">
        <div className='flex justify-evenly'>

                <div className="w-1/2 text-white">
                            <h1 className=" ml-10 text-xl font-bold font-mono mt-10 text-white"> TaxFiling</h1>
                            <p>
                            TaxFiling was founded to provide accurate tax and financial services to society. We are a professional tax  firm based in Hyderabad, Telangana, India.
{/* 
                            Our Holding company is Tycoon Elite Consulting Services Private Limited. */}
                            </p>
                </div>

               {/* <div>
                 <h1>Quick Links</h1>
                 <ul>
                    <li>Home</li>
                    <li> <Link to='/'>Home</Link></li>
                 </ul>

               </div> */}
                <div className="contact-card">
                    <h2>Contact Us</h2>
                    <div className="contact-details">
                    <p>
                        <FontAwesomeIcon icon={faPhone} /> +91 8688185874
                    </p>
                    <a href="mailto:pangajayakrishna1999@gmail.com"><FontAwesomeIcon icon={faEnvelope} /> pangajayakrishna1999@gmail.com</a>
                    <p><FontAwesomeIcon icon={faMapMarkerAlt} /> Hyderabad</p>
               </div>

      </div>


        </div>
     
      <p className="footer-text font-bold  text-white font-mono text-2xl ">TaxFiling &copy; {new Date().getFullYear()}</p>
    </footer>
  );
};

export default Footer;






