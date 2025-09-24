import React from 'react';
import fbImg from '../assets/fb.png'
import xImg from  '../assets/x.png'
import inImg from '../assets/linkend.png'
import mailImg from '../assets/mail.png'
const Footer = () => {
    return (
        <div className='bg-black text-white '>
           <div className=' w-[100%] mx-auto grid grid-cols-5 p-[80px] '>

             <div className=''>
                <h2 className='text-2xl font-bold mb-3'>CS — Ticket System</h2>
                <p className='footer_text text-justify'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>

            <div className='text-center'>
                <h2 className='footer_title'>Company</h2>
           
                   <div className='footer_text'>
                     <p>About Us</p>
                    <p>Our Mission</p>
                    <p>Contact Saled</p>
                   </div>
                    
                
            </div>

            <div className='text-center'>
                 <h2 className='footer_title'>Services</h2>
                
                   <div className='footer_text'>
                     <p>Products & Services</p>
                    <p>Customer Stories</p>
                    <p>Download Apps</p>
                   </div>
                    
                
            </div>

            <div className='text-center'>
                <h2 className='footer_title'>Information</h2>
                
                    <div className='footer_text'>
                    <p>Privacy Policy</p>
                    <p>Terms & Conditions</p>
                    <p>Join Us</p>
                    </div>
            </div>

            <div className=''>
                <h2 className='footer_title'>Social Links</h2>
                <div className='space-y-2'>
                    <div className='flex items-center gap-2'>
                    <img src={xImg} alt="" />
                    <p className='footer_text'>@CS — Ticket System</p>
                </div>

                <div className='flex items-center gap-2'>
                    <img src={inImg} alt="" />
                    <p className='footer_text'>@CS — Ticket System</p>
                </div>

                <div className='flex items-center gap-2'>
                    <img src={fbImg} alt="" />
                    <p className='footer_text'>@CS — Ticket System</p>
                </div>

                    <div className='flex items-center gap-2'>
                    <img src={mailImg} alt="" />
                    <p className='footer_text'>support@cst.com</p>
                </div>
                </div>
            </div>
           </div>
        </div>
    );
};

export default Footer;