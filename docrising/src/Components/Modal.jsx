// import React, { useState } from "react";

// const Modal = () => {
//   const [isopen, setisopen] = useState(true);
//   const openme = () => {
//     setisopen(!isopen);
//   };
//   return (
//     <>
//       <button
//         type="button"
//         className="btn btn-primary"
//         data-toggle="modal"
//         data-target="#exampleModal"
//         onClick={openme}
//       >
//         Launch demo modal
//       </button>

//       {isopen ? (
//         <div
//           className="modal fade"
//           id="exampleModal"
//           tabindex="-1"
//           role="dialog"
//           aria-labelledby="exampleModalLabel"
//           aria-hidden="true"
//         >
//           <div className="modal-dialog" role="document">
//             <div className="modal-content">
//               <div className="modal-header">
//                 <h5 className="modal-title" id="exampleModalLabel">
//                   Modal title
//                 </h5>
//                 <button
//                   type="button"
//                   className="close"
//                   data-dismiss="modal"
//                   aria-label="Close"
//                 >
//                   <span aria-hidden="true">&times;</span>
//                 </button>
//               </div>
//               <div className="modal-body">...</div>
//               <div className="modal-footer">
//                 <button
//                   type="button"
//                   className="btn btn-secondary"
//                   data-dismiss="modal"
//                 >
//                   Close
//                 </button>
//                 <button type="button" className="btn btn-primary">
//                   Save changes
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       ) : (
//         <span>hjjnjhbdshjbsdfbsdfjsdbfhjbdfsd</span>
//       )}
//     </>
//   );
// };

// export default Modal;
