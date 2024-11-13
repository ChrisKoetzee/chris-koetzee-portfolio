// import React, { useState, useEffect } from 'react';
// import {
//   MDBContainer,
//   MDBNavbar,
//   MDBNavbarBrand,
//   MDBNavbarToggler,
//   MDBIcon,
//   MDBNavbarNav,
//   MDBNavbarItem,
//   MDBBtn,
//   MDBDropdown,
//   MDBDropdownToggle,
//   MDBDropdownMenu,
//   MDBDropdownItem,
//   MDBCollapse,
// } from 'mdb-react-ui-kit';
// import { ToastContainer } from 'react-toastify';
// import Logo from '../Images/Logo-TnT2.png';
// import ModalContact from './ModalContact';
// import 'react-toastify/dist/ReactToastify.css';

// function Navbar() {
//   const [openBasic, setOpenBasic] = useState(false);
//   const [logoVisible, setLogoVisible] = useState(false);

//   useEffect(() => {
//     setLogoVisible(true);
//   }, []);

//   return (
//     <MDBNavbar
//       expand="lg"
//       className="navbar"
//       style={{
//         backgroundColor: '#000000',
//         color: '#7FFF00',
//       }}
//     >
//       <MDBContainer
//         fluid
//         className="nav"
//         style={{
//           backgroundColor: '#000000',
//           color: '#7FFF00',
//         }}
//       >
//         <div className="d-flex align-items-center">
//           <MDBNavbarBrand
//             href="#home"
//             style={{
//               color: '#7FFF00',
//               padding: '1rem',
//             }}
//           >
//             <img
//               src={Logo}
//               alt="TnT Logo"
//               className={`logo ${logoVisible ? 'zoom-in' : 'zoom-out'}`}
//               style={{
//                 height: '130px',
//                 width: '220px',
//                 borderColor: '#7FFF00',
//                 borderWidth: '3px',
//                 borderStyle: 'solid',
//                 borderRadius: '30px',
//                 transition: 'transform 1.5s ease-out',
//               }}
//             />
//           </MDBNavbarBrand>
//         </div>
//         <MDBCollapse
//           navbar
//           open={openBasic}
//           className="d-flex justify-content-center flex-grow-1"
//         >
//           <MDBNavbarNav>
//             <MDBNavbarItem>
//               <MDBDropdown>
//                 <MDBDropdownToggle
//                   tag="a"
//                   className="nav-link"
//                   role="button"
//                   style={{ color: '#7FFF00' }}
//                 >
//                   More about me
//                 </MDBDropdownToggle>
//                 <MDBDropdownMenu style={{ backgroundColor: '#7FFF00' }}>
//                   <MDBDropdownItem link href="#myJourney">
//                     My Journey
//                   </MDBDropdownItem>
//                   <MDBDropdownItem link href="#mySkills">
//                     My Skills
//                   </MDBDropdownItem>
//                   <MDBDropdownItem link href="#myProjects">
//                     My Projects
//                   </MDBDropdownItem>
//                 </MDBDropdownMenu>
//               </MDBDropdown>
//             </MDBNavbarItem>
//           </MDBNavbarNav>
//         </MDBCollapse>
//         <div className="d-flex align-items-center">
//           <MDBNavbarToggler
//             aria-controls="navbarSupportedContent"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//             onClick={() => setOpenBasic(!openBasic)}
//           >
//             <MDBIcon icon="bars" fas />
//           </MDBNavbarToggler>
//           <MDBBtn
//             floating
//             className="m-1"
//             style={{ backgroundColor: '#0082ca' }}
//             href="https://www.linkedin.com/in/christopherkoetzee/"
//             role="button"
//           >
//             <MDBIcon fab icon="linkedin-in" />
//           </MDBBtn>
//           <MDBBtn
//             floating
//             className="m-1"
//             style={{ backgroundColor: '#333333' }}
//             href="https://github.com/ChrisKoetzee"
//             role="button"
//           >
//             <MDBIcon fab icon="github" />
//           </MDBBtn>
//         </div>
//         <div>
//           <ModalContact />
//           <ToastContainer />
//         </div>
//       </MDBContainer>
//     </MDBNavbar>
//   );
// }

// export default Navbar;
