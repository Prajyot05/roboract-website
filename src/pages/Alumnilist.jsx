import { useState } from 'react'
import AdminSidebar from '../components/AdminSidebar';
import AdminNavbar from "../components/AdminNavbar";

const Alumni = ({ content }) => {
  return (
    <li className="flex items-center justify-between p-3 bg-gray-100 rounded-lg shadow-sm">
      <span className="text-gray-700">{content}</span>
      <button className="text-red-500 hover:text-red-700">Delete</button>
    </li>
  );
};

const Alumnilist = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <AdminSidebar toggleSidebar={toggleSidebar} isOpen={isOpen} />
      <div className='className="relative md:ml-64 bg-slate-50"'>
        <AdminNavbar />
        <div className=" mt-[4vw] flex items-center justify-center p-6">
          <div className="bg-slate-200  rounded-lg shadow-lg p-6 w-full max-w-md">
            <h1 className="text-2xl font-bold mb-4 text-center">Alumnilist</h1>

            <div className="flex items-center border-b border-gray-300 py-2">
              <input
                type="text"
                placeholder="Add a new Alumni"
                className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              />
              <button className="flex-shrink-0 bg-blue-500 hover:bg-blue-700 border-blue-500 hover:border-blue-700 text-sm border-4 text-white py-1 px-2 rounded">
                Add
              </button>
            </div>

            <ul className="mt-6 space-y-4 h-[45vh] overflow-scroll">
              <Alumni content="Alumni 1" />
              <Alumni content="Alumni 2" />
              <Alumni content="Alumni 3" />
              <Alumni content="Alumni 3" />
              <Alumni content="Alumni 3" />
              <Alumni content="Alumni 3" />
              <Alumni content="Alumni 3" />
              <Alumni content="Alumni 3" />
              <Alumni content="Alumni 3" />
              <Alumni content="Alumni 3" />
              <Alumni content="Alumni 3" />
              <Alumni content="Alumni 3" />
              <Alumni content="Alumni 3" />
      

            </ul>
          </div>
        </div>


      </div>

    </div>
  )
}

export default Alumnilist




