import React, { useState } from "react";
import { Link } from "react-router-dom";
import AdminSidebar from '../components/AdminSidebar';
import AdminNavbar from "../components/AdminNavbar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faUserPlus, faUserGraduate, faUsers, faPenToSquare } from '@fortawesome/free-solid-svg-icons';

const AdminPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const teamMembers = [
    {
      id: 1,
      name: 'Jenna Stones',
      location: 'Los Angeles, California',
      image: '/assets/team/President.jpg',
    },
    {
      id: 2,
      name: 'John Doe',
      location: 'New York, New York',
      image: '/assets/team/Secretary.jpg',
    },
    {
      id: 3,
      name: 'Jane Smith',
      location: 'Chicago, Illinois',
      image: '/assets/team/Treasurer.jpg',
    },
  ];

  return (
    <div id="admin-team">
        <AdminSidebar toggleSidebar={toggleSidebar} isOpen={isOpen} />
        <div className="relative md:ml-64 bg-slate-50">
            <AdminNavbar />
            <div className="w-full">
                <div className="flex flex-wrap lg:h-[90vh] justify-center items-center px-10">
                {teamMembers.map((member) => (
                    <div key={member.id} className="w-full lg:w-4/12 px-4 flex justify-center">
                        <div className="relative flex flex-col min-w-0 break-words bg-rc-white w-full md:w-10/12 lg:w-full xl:w-10/12 h-full mb-6 shadow-2xl rounded-xl mt-10">
                        <div className="p-6">
                            <div className="flex flex-wrap justify-center">
                                <div className="w-full text-center mt-1">
                                <div className="flex justify-center items-center h-full">
                                    <img
                                    src={member.image}
                                    alt={member.name}
                                    className="rounded-full border-4 border-rc-blue"
                                    style={{
                                        width: '150px',
                                        height: '150px',
                                        objectFit: 'cover',
                                    }}
                                    />
                                </div>
                                </div>
                            </div>
                            <div className="text-center -mt-1">
                                <h3 className="text-xl font-semibold leading-normal mb-2 text-rc-black">
                                {member.name}
                                </h3>
                                <div className="text-sm leading-normal mb-2 text-rc-black font-bold uppercase">
                                {member.location}
                                </div>
                                <div className="mt-5 mb-9">
                                <a href="/admin/team">
                                    <button
                                    className="bg-rc-white text-rc-blue active:bg-rc-blue hover:bg-rc-blue hover:text-rc-white text-sm font-semibold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150 tracking-wider border-[1.5px] border-rc-blue"
                                    type="button"
                                    >
                                    <FontAwesomeIcon icon={faPenToSquare} /> EDIT
                                    </button>
                                </a>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                ))}
                </div>
                <footer className="block py-4">
                    <div className="container mx-auto px-4">
                    <hr className="mb-4 border-b-1 border-slate-200" />
                    <div className="flex flex-wrap items-center md:justify-between justify-center">
                        <div className="w-full md:w-4/12 px-4">
                        <div className="text-sm text-slate-500 font-semibold py-1 text-center md:text-left">
                            Copyright © 2024{' '}
                            <a
                            className="text-slate-500 hover:text-slate-700 text-sm font-semibold py-1"
                            href="/"
                            >
                            Rotaract Club
                            </a>
                        </div>
                        </div>
                        <div className="w-full md:w-8/12 px-4">
                        <ul className="flex flex-wrap list-none md:justify-end justify-center">
                            <li>
                            <a
                                className="text-slate-600 hover:text-slate-800 text-sm font-semibold block py-1 px-3"
                                href="/"
                            >
                                Rotaract Club
                            </a>
                            </li>
                            <li>
                            <a
                                href="https://www.creative-tim.com/presentation?ref=nr-footer-admin"
                                className="text-slate-600 hover:text-slate-800 text-sm font-semibold block py-1 px-3"
                            >
                                About Us
                            </a>
                            </li>
                            <li>
                            <a
                                href="http://blog.creative-tim.com?ref=nr-footer-admin"
                                className="text-slate-600 hover:text-slate-800 text-sm font-semibold block py-1 px-3"
                            >
                                Blog
                            </a>
                            </li>
                        </ul>
                        </div>
                    </div>
                    </div>
                </footer>
            </div>
        </div>
    </div>
  )
}

export default AdminPage