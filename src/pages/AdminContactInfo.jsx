import React, { useState } from 'react'
import AdminSidebar from '../components/AdminSidebar';
import AdminNavbar from '../components/AdminNavbar';

const AdminContactInfo = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
      setIsOpen(!isOpen);
    };
  
  return (
    <div id="admin-contacts">
        <AdminSidebar toggleSidebar={toggleSidebar} isOpen={isOpen} />
        <div className="relative md:ml-64 bg-slate-50">
            <AdminNavbar />
            <h2 className="text-6xl pt-20 font-semibold mb-4 text-center">Contact Information</h2>
            <div className="message mt-10 w-[80%] mx-auto p-6 rounded-lg bg-gradient-to-r from-[#E7301C] to-[#7F0627] shadow-lg text-white">
                <p><span className="font-bold">Name:</span> John Doe</p>
                <p><span className="font-bold">Mobile:</span> +1 234 567 8901</p>
                <p><span className="font-bold">Email:</span> john.doe@example.com</p>
                <p><span className="font-bold">Message:</span> Looking forward to connecting with you!</p>
            </div>
        </div>
    </div>
  )
}

export default AdminContactInfo