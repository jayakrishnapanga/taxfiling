import React from "react";


import { useNavigate } from "react-router-dom";
import Carousel from "./Carousel";

import UserNav from "./usernav";
import Footer from "./footer";
const UserInterface=()=>{


 const username=localStorage.getItem('name')
    
    const navigate=useNavigate()
   function handleITR(){
    navigate('/user/itr ');

    }

    
    return (
        <>
        
          <UserNav/>
            
            <div >
                <div className="font-mono grid content-center">

                    <p className="flex justify-center font-bold pb-3 mt-20 text-lg">
                    Welcome {username}
                    </p>
                </div>
            </div>

            
       
         

   <div className="flex    " >
        
        <div className="grid content-center max-w-4xl">
            <h1 className="mt-20   pl-10 font-mono text-2xl font-bold underline">Benfits of filing ITR</h1>
            
             <div  >
             <h1 className=" text-lg pl-10 font-mono mt-5">1. Easy Loan Approval</h1>
                <p className="mt-5 ml-20 font-mono">
                Filing your ITR can be beneficial when applying for various loans such as vehicle loans  (2-wheelers or 4-wheelers) or home loans.<br/> Major banks often require a copy of your tax returns as proof of your income statement. This is a mandatory document for loan approval.   
                </p>
             </div>

             <div >
             <h1 className=" text-lg  pl-10 font-mono mt-5">2. Claim Tax Refund</h1>
                <p className=" mt-5 ml-20 font-mono">
                There may be instances where tax has been deducted (TDS) from your income, even if your total taxable income is below the basic exemption limit, or you have no tax liability for that year. In such cases, you must file an Income Tax Return to claim a refund of the TDS.
               </p>
             </div>

             <div >
             <h1 className="text-lg pl-10 font-mono mt-5">3. Income & Address Proof</h1>
                <p className="  mt-5 ml-20 font-mono">
                Your Income Tax Return can serve as proof of your income and address.</p>
             </div>

             <div >
             <h1 className=" text-lg pl-10 font-mono mt-5">4. Quick Visa Processing</h1>
                <p className="  mt-5 ml-20 font-mono">
                When applying for a visa, most embassies and consultants require copies of your tax returns from the past couple of years. These documents are among the mandatory requirements. Therefore, it is advisable to file your ITR in a timely manner.</p>
             </div>

             <div >
             <h1 className=" text-lg pl-10 font-mono mt-5">5. Carry Forward Your Losses</h1>
                <p className="mt-5 ml-20  font-mono">
                By filing your return within the original due date, you can carry forward losses to subsequent years. These losses can be offset against the income of future years, thereby reducing your tax liability. Without filing an income tax return, this benefit would not be possible.</p>   
             </div>
             <div >
             <h1 className=" text-lg pl-10 font-mono mt-5">6. Avoid Penalty</h1>
                <p className=" mt-5  ml-20 font-mono">
                If you are required to file your tax returns according to the income tax act but fail to do so, the tax officer has the right to impose a penalty of up to Rs. 5,000.</p>
             </div>
             <div >
             <h1 className=" text-lg pl-10 font-mono mt-5">7. For Buying Term Insurance</h1>
                <p className=" mt-5 ml-20 font-mono">
                To approve term insurance plans, insurance providers often require applicants to submit their Income Tax Return (ITR) records as proof of their annual income. The coverage amount is determined based on the individual's earnings, and presenting the ITR helps insurance providers assess a person's higher income level.</p>
             </div>
             <div >
             <h1 className="text-lg pl-10 font-mono mt-5">8. Claim Refund of Excess Tax Payments</h1>
                <p className=" mt-5 ml-20 font-mono">
                Even if your income is below the taxable threshold, taxes may still be deducted from sources such as your salary, fixed deposit (FD), or other income. For example, if your total income is less than Rs. 2.5 lakhs, but you received Rs. 1 lakh from an FD, the bank is required to deduct 10% tax on this amount. In such cases, individuals can claim a refund for the tax deducted by filing an Income Tax Return (ITR). In simple terms, filing a tax return allows individuals to recover any tax deducted at the source.</p>
             </div>
        </div>
        <div>
    </div> 

                <div className="mb-10  mt-20"> 
                     
                       <button className="border  bg-purple-500 hover:bg-purple-400 ml-40 p-2 mb-4 content-center rounded-md  text-white"   onClick={handleITR}>
                       Click here tofile ITR
                    </button>
                       
                      <Carousel/>
   
                </div>
       
        
</div>
<Footer/>

                </>
        
       

    )
}
export default UserInterface