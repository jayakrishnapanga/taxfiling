// import React, { useState } from 'react';

// const BenefitsOfFilingITR = () => {
//   const benefitsData = [
//     {
//       title: 'Easy Loan Approval',
//       content: 'Filing your ITR can be beneficial when applying for various loans...',
//     },
//     {
//       title: 'Claim Tax Refund',
//       content: 'There may be instances where tax has been deducted (TDS) from your income...',
//     },
//     // Add other benefit sections here...
//   ];

//   const itemsPerPage = 2; // Number of items to display per page
//   const totalPages = Math.ceil(benefitsData.length / itemsPerPage);

//   const [currentPage, setCurrentPage] = useState(1);

//   const handlePageChange = (page) => {
//     setCurrentPage(page);
//   };

//   const startIndex = (currentPage - 1) * itemsPerPage;
//   const endIndex = startIndex + itemsPerPage;
//   const currentBenefits = benefitsData.slice(startIndex, endIndex);

//   return (
//     <div>
//       <h1 className="pt-20 pl-10 font-mono text-2xl font-bold underline">Benefits of filing ITR</h1>
//       {currentBenefits.map((benefit, index) => (
//         <div key={index}>
//           <h1 className="text-lg pl-10 font-mono mt-5">{benefit.title}</h1>
//           <p className="mt-5 ml-20 font-mono">{benefit.content}</p>
//         </div>
//       ))}
//       <div className="pagination">
//         {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
//           <button
//             key={page}
//             className={`pagination-button ${currentPage === page ? 'active' : ''}`}
//             onClick={() => handlePageChange(page)}
//           >
//             {page}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default BenefitsOfFilingITR;



import React, { useState } from 'react';

const benefitsData = [
  {
    title: 'Easy Loan Approval',
    content: 'Filing your ITR can be beneficial when applying for various loans...',
  },
  {
    title: 'Claim Tax Refund',
    content: 'There may be instances where tax has been deducted (TDS) from your income...',
  },
  // Add more benefit sections below
  {
    title: 'Income & Address Proof',
    content: 'Your Income Tax Return can serve as proof of your income and address.',
  },
  {
    title: 'Quick Visa Processing',
    content: 'When applying for a visa, most embassies and consultants require copies of your tax returns from the past couple of years...',
  },
  {
    title: 'Carry Forward Your Losses',
    content: 'By filing your return within the original due date, you can carry forward losses to subsequent years...',
  },
  {
    title: 'Avoid Penalty',
    content: 'If you are required to file your tax returns according to the income tax act but fail to do so, the tax officer has the right to impose a penalty of up to Rs. 5,000...',
  },
  {
    title: 'For Buying Term Insurance',
    content: 'To approve term insurance plans, insurance providers often require applicants to submit their Income Tax Return (ITR) records as proof of their annual income...',
  },
  {
    title: 'Claim Refund of Excess Tax Payments',
    content: 'Even if your income is below the taxable threshold, taxes may still be deducted from sources such as your salary, fixed deposit (FD), or other income...',
  },
];

const BenefitsOfFilingITR = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const benefitsPerPage = 2; // Number of benefits to display per page

  // Get the current benefits to display
  const indexOfLastBenefit = currentPage * benefitsPerPage;
  const indexOfFirstBenefit = indexOfLastBenefit - benefitsPerPage;
  const currentBenefits = benefitsData.slice(indexOfFirstBenefit, indexOfLastBenefit);

  // Function to handle pagination
  const handlePagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <h1 className="mt-20 pl-10 font-mono text-2xl font-bold underline">Benefits of Filing ITR</h1>
      <div className="grid content-center">
        {currentBenefits.map((benefit, index) => (
          <div key={index}>
            <h1 className="text-lg pl-10 font-mono mt-5">{benefit.title}</h1>
            <p className="mt-5 ml-20 font-mono">{benefit.content}</p>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-5">
        {Array.from({ length: Math.ceil(benefitsData.length / benefitsPerPage) }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            className={`mx-1 py-1 px-2 rounded-lg ${currentPage === page ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'}`}
            onClick={() => handlePagination(page)}
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  );
};

export default BenefitsOfFilingITR;



// import React, { useState } from 'react';
// import ReactPaginate from 'react-paginate';
// import 'react-paginate/dist/react-paginate.css';


// const benefitsData = [
//   {
//     title: 'Easy Loan Approval',
//     content: 'Filing your ITR can be beneficial when applying for various loans...',
//   },
//   {
//     title: 'Claim Tax Refund',
//     content: 'There may be instances where tax has been deducted (TDS) from your income...',
//   },
//   // Add more benefit sections below
//   {
//     title: 'Income & Address Proof',
//     content: 'Your Income Tax Return can serve as proof of your income and address.',
//   },
//   {
//     title: 'Quick Visa Processing',
//     content: 'When applying for a visa, most embassies and consultants require copies of your tax returns from the past couple of years...',
//   },
//   {
//     title: 'Carry Forward Your Losses',
//     content: 'By filing your return within the original due date, you can carry forward losses to subsequent years...',
//   },
//   {
//     title: 'Avoid Penalty',
//     content: 'If you are required to file your tax returns according to the income tax act but fail to do so, the tax officer has the right to impose a penalty of up to Rs. 5,000...',
//   },
//   {
//     title: 'For Buying Term Insurance',
//     content: 'To approve term insurance plans, insurance providers often require applicants to submit their Income Tax Return (ITR) records as proof of their annual income...',
//   },
//   {
//     title: 'Claim Refund of Excess Tax Payments',
//     content: 'Even if your income is below the taxable threshold, taxes may still be deducted from sources such as your salary, fixed deposit (FD), or other income...',
//   },
// ];

// const BenefitsOfFilingITR = () => {
//   const [currentPage, setCurrentPage] = useState(1);
//   const benefitsPerPage = 2; // Number of benefits to display per page

//   // Get the current benefits to display
//   const indexOfLastBenefit = currentPage * benefitsPerPage;
//   const indexOfFirstBenefit = indexOfLastBenefit - benefitsPerPage;
//   const currentBenefits = benefitsData.slice(indexOfFirstBenefit, indexOfLastBenefit);

//   // Function to handle pagination change
//   const handlePageChange = ({ selected }) => {
//     setCurrentPage(selected + 1);
//   };

//   return (
//     <div>
//       <h1 className="mt-20 pl-10 font-mono text-2xl font-bold underline">Benefits of Filing ITR</h1>
//       <div className="grid content-center">
//         {currentBenefits.map((benefit, index) => (
//           <div key={index}>
//             <h1 className="text-lg pl-10 font-mono mt-5">{benefit.title}</h1>
//             <p className="mt-5 ml-20 font-mono">{benefit.content}</p>
//           </div>
//         ))}
//       </div>

//       {/* Pagination using react-paginate */}
//       <div className="flex justify-center mt-5">
//         <ReactPaginate
//           previousLabel={'Previous'}
//           nextLabel={'Next'}
//           breakLabel={'...'}
//           pageCount={Math.ceil(benefitsData.length / benefitsPerPage)}
//           marginPagesDisplayed={2}
//           pageRangeDisplayed={5}
//           onPageChange={handlePageChange}
//           containerClassName={'pagination'}
//           previousLinkClassName={'pagination__link'}
//           nextLinkClassName={'pagination__link'}
//           disabledClassName={'pagination__link--disabled'}
//           activeClassName={'pagination__link--active'}
//         />
//       </div>
//     </div>
//   );
// };

// export default BenefitsOfFilingITR;

