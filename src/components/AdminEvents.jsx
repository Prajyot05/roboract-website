import React, { useState } from 'react';
import AdminSidebar from './AdminSidebar';
import AdminNavbar from './AdminNavbar';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const AdminEvents = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const events = [
    {
      id: 1,
      title: 'Prakriti Marg Avhan',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas qui placeat enim ratione voluptatibus nihil, est sint debitis animi odit unde in? Cumque natus earum fuga distinctio! Cumque, consequuntur in? Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio corrupti eos provident aperiam. Eius cumque quam nesciunt tempora. Esse dignissimos voluptas, cum aut eaque quas veniam officia incidunt architecto sed!',
      date: '05/02/2024',
      fees: '$30',
      image: '/assets/slides/Slide1.jpg',
    },
    {
      id: 2,
      title: 'Another Event Title',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas qui placeat enim ratione voluptatibus nihil, est sint debitis animi odit unde in? Cumque natus earum fuga distinctio! Cumque, consequuntur in? Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio corrupti eos provident aperiam. Eius cumque quam nesciunt tempora. Esse dignissimos voluptas, cum aut eaque quas veniam officia incidunt architecto sed!',
      date: '06/15/2024',
      fees: '$50',
      image: '/assets/slides/Slide2.jpg',
    },
  ];

  return (
    <div id="admin-events">
      <AdminSidebar toggleSidebar={toggleSidebar} isOpen={isOpen} />
      <div className="relative md:ml-64 bg-slate-50">
        <AdminNavbar />
        <div className="w-full">
          <div className="flex flex-col justify-center items-center mt-5 md:mt-12">
            {events.map(event => (
              <div key={event.id} className="w-full lg:w-10/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-16 shadow-lg rounded-xl bg-white border-0">
                  <div className="flex-auto px-3 lg:px-5 py-5">
                    <div className="flex flex-wrap items-center justify-center">
                      <div className="w-full xl:w-5/12 2xl:w-4/12 px-4">
                        <div className="relative w-full">
                          <div className="w-full">
                            <img
                              src={event.image}
                              alt={event.title}
                              className="rounded-lg hover:scale-110 transition-all ease-in-out duration-500"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="w-full xl:w-7/12 2xl:w-8/12 px-4 md:px-8">
                        <div className="relative w-full mb-3">
                          <div>
                            <h1 className="uppercase font-semibold text-2xl md:text-4xl py-5 pb-1 md:py-3 text-black border-b-8 border-red-500 w-fit">
                              {event.title}
                            </h1>
                            <p className="text-justify text-base md:text-lg py-3">
                              {event.description}
                            </p>
                            <p className="text-lg pb-3 font-medium">Date: {event.date}</p>
                            <p className="text-lg pb-3 font-medium">Fees: {event.fees}</p>
                            <div className="bg-red-500 text-white hover:bg-red-400 active:bg-red-400 font-bold uppercase text-sm mt-3 px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none transition duration-700 ease-in-out text-center w-36">
                              <a href={`/admin/events/edit/${event.id}`}>
                              <FontAwesomeIcon icon={faPenToSquare} /> Edit
                              </a>
                            </div>
                          </div>
                        </div>
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
  );
};

export default AdminEvents;
