import React from 'react'
import { Link } from 'react-router-dom'

const AdminNavbar = () => {
  return (
    <nav className="sticky top-0 left-0 w-full z-10 bg-rc-white md:flex-row md:flex-nowrap md:justify-start flex items-center p-0 md:p-3 shadow-md">
        <div className="w-full mx-auto items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4">
            <Link
            className="text-rc-black text-base uppercase hidden lg:inline-block font-semibold"
            to="#pablo"
            >
            Dashboard
            </Link>
            <form className="md:flex hidden flex-row flex-wrap items-center lg:ml-auto mr-3">
            <div className="relative flex w-full flex-wrap items-stretch">
                <span className="z-10 h-full leading-snug font-normal absolute text-center text-slate-300 bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3">
                <i className="fa-solid fa-search"></i>
                </span>
                <input
                type="text"
                placeholder="Search here..."
                className="border-[1.5px] border-slate-300 focus:border-slate-600 px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring-0 w-full pl-10"
                />
            </div>
            </form>
            <ul className="flex-col md:flex-row list-none items-center hidden md:flex">
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
            </ul>
        </div>
    </nav>
  )
}

export default AdminNavbar