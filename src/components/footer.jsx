

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






