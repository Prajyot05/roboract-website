import React from 'react'
import { Link } from "react-router-dom";

const AdminSidebar = ({toggleSidebar, isOpen}) => {
  return (
    <nav className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 md:py-4 px-6 no-scrollbar">
        <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
            <button
            className="cursor-pointer text-black opacity-60 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
            type="button"
            onClick={toggleSidebar}
            >
            <i className="fa-solid fa-bars"></i>
            </button>
            <Link
            className="md:block text-left md:pb-2 text-slate-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
            to="/admin/dashboard"
            >
            <img
                className="w-10 h-10 mr-2 inline-block"
                src='/assets/logo.png'
                alt="Logo"
            />
            Rotaract Club
            </Link>
            <ul className="md:hidden items-center flex flex-wrap list-none">
            <li className="inline-block relative">
                <Link className="text-slate-500 block" to="#pablo">
                <div className="items-center flex">
                    <span className="w-12 h-12 text-xl text-slate-800 bg-slate-100 inline-flex items-center justify-center rounded-full">
                    <i className="fa-solid fa-user"></i>
                    </span>
                </div>
                </Link>
                <div className="hidden bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48">
                <span className="text-base py-2 px-4 block w-full whitespace-nowrap bg-transparent text-slate-700 font-semibold">
                    Rahul Arade
                </span>
                <Link
                    className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700"
                    to="/profile"
                >
                    My Profile
                </Link>
                <Link
                    className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700"
                    to="/changepass"
                >
                    Change Password
                </Link>
                <div className="h-0 my-2 border border-solid border-slate-100"></div>
                <Link
                    className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700"
                    to="/"
                >
                    Sign Out <i className="fa-solid fa-right-to-bracket"></i>
                </Link>
                </div>
            </li>
            </ul>
            <div
            className={`md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-hidden overflow-x-hidden h-auto items-center flex-1 rounded ${
                isOpen ? "block" : "hidden"
            }`}
            >
            <div className="md:min-w-full md:hidden block pb-4">
                <div className="flex flex-wrap">
                <div className="w-full flex justify-end">
                    <button
                    type="button"
                    className="cursor-pointer text-black opacity-60 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                    onClick={toggleSidebar}
                    >
                    <i className="fa-solid fa-x"></i>
                    </button>
                </div>
                </div>
            </div>
            <form className="mt-6 mb-4 md:hidden">
                <div className="mb-3 pt-0">
                <input
                    type="text"
                    placeholder="Search"
                    className="px-3 py-2 h-12 border-1  border-slate-500 placeholder-slate-300 text-slate-600 bg-white rounded text-base leading-snug shadow-none outline-none focus:outline-none w-full font-normal focus:border-rose-900 focus:ring-rose-900"
                />
                </div>
            </form>
            <ul className="md:flex-col md:min-w-full flex flex-col list-none">
                <li className="items-center">
                <Link
                    className="text-xs uppercase py-3 font-bold block text-rose-700 hover:text-rose-800"
                    to="/admin/dashboard"
                >
                    <i className="fa-solid fa-tv mr-2 text-sm opacity-75"></i>{" "}
                    Dashboard
                </Link>
                </li>
            </ul>
            <hr className="my-4 md:min-w-full" />
            <h6 className="md:min-w-full text-slate-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
                Site Settings
            </h6>
            <ul className="md:flex-col md:min-w-full flex flex-col list-none">
                <li className="items-center">
                <Link
                    className="text-xs uppercase py-3 font-bold block text-slate-700 hover:text-slate-500"
                    to="/admin/events"
                >
                    <i className="fa-regular fa-calendar mr-2 text-sm text-slate-300"></i>{" "}
                    Events
                </Link>
                </li>
                {/* <li className="items-center">
                <Link
                    className="text-xs uppercase py-3 font-bold block text-slate-700 hover:text-slate-500"
                    to="/admin/settings"
                >
                    <i className="fa-solid fa-trophy mr-2 text-sm text-slate-300"></i>{" "}
                    Achievements
                </Link>
                </li> */}
                <li className="items-center">
                <Link
                    className="text-xs uppercase py-3 font-bold block text-slate-700 hover:text-slate-500"
                    to="/admin/team"
                >
                    <i className="fa-solid fa-users mr-2 text-sm text-slate-300"></i>{" "}
                    Team
                </Link>
                </li>
                <li className="items-center">
                <Link
                    className="text-xs uppercase py-3 font-bold block text-slate-700 hover:text-slate-500"
                    to="/admin/tables"
                >
                    <i className="fa-solid fa-message mr-2 text-sm text-slate-300"></i>{" "}
                    Contact Messages
                </Link>
                </li>
            </ul>
            <hr className="my-4 md:min-w-full" />
            <h6 className="md:min-w-full text-slate-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
                Rotaractors
            </h6>
            <ul className="md:flex-col md:min-w-full flex flex-col list-none md:mb-4">
                <li className="items-center">
                <Link
                    className="text-xs uppercase py-3 font-bold block text-slate-700 hover:text-slate-500"
                    to="/admin/dashboard"
                >
                    <i className="fa-regular fa-rectangle-list mr-2 text-sm text-slate-300"></i>{" "}
                    Rotaractors List
                </Link>
                </li>
                {/* <li className="items-center">
                <Link
                    className="text-xs uppercase py-3 font-bold block text-slate-700 hover:text-slate-500"
                    to="/admin/dashboard"
                >
                    <i className="fa-solid fa-user-plus mr-2 text-sm text-slate-300"></i>{" "}
                    New Rotaractors
                </Link>
                </li> */}
            </ul>
            <hr className="my-4 md:min-w-full" />
            <h6 className="md:min-w-full text-slate-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
                Alumni
            </h6>
            <ul className="md:flex-col md:min-w-full flex flex-col list-none md:mb-4">
                <li className="items-center">
                <Link
                    className="text-xs uppercase py-3 font-bold block text-slate-700 hover:text-slate-500"
                    to="/admin/dashboard"
                >
                    <i className="fa-regular fa-rectangle-list mr-2 text-sm text-slate-300"></i>{" "}
                    Alumni List
                </Link>
                </li>
                <li className="items-center">
                <Link
                    className="text-xs uppercase py-3 font-bold block text-slate-700 hover:text-slate-500"
                    to="/admin/dashboard"
                >
                    <i className="fa-solid fa-user-plus mr-2 text-sm text-slate-300"></i>{" "}
                    Add New Alumni
                </Link>
                </li>
            </ul>
            </div>
        </div>
    </nav>
  )
}

export default AdminSidebar