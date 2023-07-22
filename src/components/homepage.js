import React from "react";
import logo from "../images/logo.png"
import Navbar from "./navbar";
import { useState } from "react";
import Login from "./login";
import RegistrationForm from "./registration";
import Modal from 'react-modal';
import ReactModal from "react-modal";
import CreateAccountForm from "./createaccount";
import Footer from "./footer";
// import ReactDOM from 'react-dom/client';
// import {
//     createBrowserRouter,
//     RouterProvider,
//   } from "react-router-dom";
ReactModal.setAppElement('#root');

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    height:'500px',
    width:'500px',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },

overlay:{
  background:'greeen',
  }
}

const HomePage=()=>{

  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [modalContent, setModalContent] = React.useState(null);
  const[value,setValue]=React.useState("");

  console.log(value)
  function openModal(action) {
    setValue(action)
    setIsOpen(true);
    setModalContent(action);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = '#f00';
    subtitle.style.fontsize='500px'
    subtitle.style.marginRight='-900px'
    
    
  
  }

  function closeModal() {
    setIsOpen(false);
    setModalContent(null);
  }

    
    return (
    <>
    <nav>
    <div className="bg-green-600 flex justify-between fixed w-full z-50">

<h1 className="text-cyan-50 text-2xl font-mono mx-5 mt-5 pb-5"><span>Tax Filing</span></h1>
        <div className=" flex">
          <ul className="flex  ">
          
          
            <li className="p-5 text-white">Home</li>

            <button className="search-btn"
                onClick= {()=>{
                  
                  openModal("login")
                }}
            ><li className="p-5 text-white">Login</li></button>

            <button className="search-btn"
                onClick= {()=>{
                  
                  openModal("signup")
                }}
            ><li className="p-5 text-white">SingUp</li></button>
           
            {/* <li className="p-5 text-white">SignUp</li> */}
          </ul>
        </div>
    </div>
 <div className="  bg-green-600">
<div className="font-mono grid content-center ">

    <p className="flex justify-center text-cyan-50 font-bold mt-20 pt-10 pb-3 text-4xl">
    A Professsional Consultant 
    </p >
    {/* <p className="flex justify-center text-cyan-50 font-bold pb-3 text-lg">
    Professsional  
    </p>
    <p className="flex justify-center text-cyan-50 font-bold pb-3 text-lg">
    Consultant 
    </p> */}
    <p className="flex justify-center text-cyan-50 font-bold pb-3 text-4xl">
    For You Tax Needs.
    </p>
    {/* <p className="flex justify-center text-cyan-50 font-bold mb-5 pb-3 text-4xl">
    Tax Needs.  
    </p> */}
    <div>
 
    <p className="flex justify-center text-cyan-50 font-bold from-neutral-50  pt-10 pb-2">
    TaxFiling is an tax and financial consulting firm situated in Hyderabad, India. 
    </p>
    <p className="flex justify-center text-cyan-50 font-bold mb-10 pb-20">
    We consistently provide accurate and timely services to individuals and organizations.
    </p>
    </div>
    
     </div>
  
</div>

<div >

    <h1 className="mx-40 mt-10 inline-block font-bold font"><span className="text-black text-3xl"> What  We DO </span></h1>  
            
    <div className="grid w-1/12 mx-40 mt-10">
        <img className="pl-5 " alt="logo" src={logo}></img>  
    </div>
    
    <div> 
        <p className="mx-40 mt-5">
        We help you to pay your taxes and file the Tax return with in due dates including Income tax,Goods and Service Tax (GST) <br></br>and Direct, Indirect taxes and corporate Taxes seamlessly.
        </p>
    </div>
  
    <div className="grid w-11/12">
    {/* <img  className="mr-20 " alt="employee" src="https://img.freepik.com/free-vector/tax-concept-illustration_114360-5874.jpg?size=626&ext=jpg&ga=GA1.2.1732014294.1688985616&semt=ais"></img> */}
    <img  className="mr-20 ml-20 mt-10 object-cover" alt="employee1" src="https://globaltaxhome.com/images/easy-steps.jpg"></img>

    </div>

    <div>
      {/* <button onClick={openModal}>Open Modal</button> */}
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        {/* <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2> */}
        <button onClick={closeModal} style={{fontWeight: "bold",
       fontsize:500, height:10,width:5  }} ><span ref={(_subtitle) => (subtitle = _subtitle)}>x</span></button>
        {/* <div>x</div> */}
        
          {modalContent === "login" ? (
            <Login />
          ) : modalContent === "signup" ? (
            <CreateAccountForm />
          ) : null}
           {/* <RegistrationForm formType={modalContent} /> */}

       
      </Modal>
    </div>
    

</div>

</nav>
{/* 
 // this very important */}
 {/* <div className="w-full px-40 py-40 text-5xl align-middle background-image-div">
      {/* <p className="pl-52 pb-2">“We handle your Tax & Financial</p>
      <p className="pl-52">Concerns, so you can focus on the job at</p>
      <p className="pl-96">hand."</p> */}
    {/* </div>  */}
<Footer/>

</>

    )
}
export default HomePage