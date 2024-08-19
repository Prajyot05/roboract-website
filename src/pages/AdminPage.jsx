import React, { useState } from "react";
import { Link } from "react-router-dom";
import AdminSidebar from '../components/AdminSidebar';
import AdminNavbar from "../components/AdminNavbar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faUserPlus, faUserGraduate, faUsers } from '@fortawesome/free-solid-svg-icons';

const AdminPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div id="root">
        <AdminSidebar toggleSidebar={toggleSidebar} isOpen={isOpen} />
        <div className="relative md:ml-64 bg-slate-50">
            <AdminNavbar />
            <div className="w-full">
                <div className="absolute bg-slate-50 md:pt-10 pb-40 pt-8 z-0 w-full">
                    <div className="px-2 md:px-8 mx-auto w-full">
                    <div>
                        <div className="flex flex-wrap">
                        <Card
                            bgColor="bg-rc-blue"
                            title="ROTARACTORS"
                            value="350,897"
                            icon={faUser}
                            iconColor="text-rc-blue"
                        />
                        <Card
                            bgColor="bg-rc-red"
                            title="NEW ROTARACTORS"
                            value="2,356"
                            icon={faUserPlus}
                            iconColor="text-rc-red"
                        />
                        <Card
                            bgColor="bg-rc-yellow"
                            title="ALUMNIS"
                            value="924"
                            icon={faUserGraduate}
                            iconColor="text-rc-yellow"
                        />
                        <Card
                            bgColor="bg-rc-black"
                            title="TOTAL"
                            value="48,54,123"
                            icon={faUsers}
                            iconColor="text-rc-black"
                        />
                        </div>
                    </div>
                    </div>
                </div>
                <div className="flex flex-wrap px-4 md:px-8 mx-auto">
                    <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-2 mt-[29rem] lg:mt-64 xl:mt-44">
                    <CardChart
                        bgColor="bg-slate-700"
                        title="Sales value"
                        subtitle="Overview"
                        chartId="line-chart"
                    />
                    </div>
                    <div className="w-full xl:w-4/12 px-2 mb-12 mt-0 xl:mt-44">
                    <CardChart
                        bgColor="bg-white"
                        title="Total orders"
                        subtitle="Performance"
                        chartId="bar-chart"
                    />
                    </div>
                </div>
                <div className="flex flex-wrap mt-4 px-2 md:px-8 mx-auto">
                    <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
                    <TableCard title="Page visits" />
                    </div>
                    <div className="w-full xl:w-4/12 px-4">
                    <TableCard title="Social traffic" />
                    </div>
                </div>
            </div>
        </div>
</div>
  )
}

const Card = ({ bgColor, title, value, icon, iconColor }) => (
    <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
      <div className={`relative flex flex-col min-w-0 break-words rounded mb-6 xl:mb-0 shadow-lg ${bgColor}`}>
        <div className="flex-auto p-4">
          <div className="flex flex-wrap">
            <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
              <h5 className="uppercase font-bold text-xs text-rc-white">{title}</h5>
              <span className="font-semibold text-xl text-rc-white">{value}</span>
            </div>
            <div className="relative w-auto pl-4 flex-initial">
              <div className={`bg-rc-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full text-lg ${iconColor}`}>
                <FontAwesomeIcon icon={icon} className={iconColor} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
);
  
const CardChart = ({ bgColor, title, subtitle, chartId }) => (
    <div className={`relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded ${bgColor}`}>
      <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
        <div className="flex flex-wrap items-center">
          <div className="relative w-full max-w-full flex-grow flex-1">
            <h6 className="uppercase text-slate-100 mb-1 text-xs font-semibold">{subtitle}</h6>
            <h2 className="text-white text-xl font-semibold">{title}</h2>
          </div>
        </div>
      </div>
      <div className="p-4 flex-auto">
        <div className="relative h-350-px">
          <canvas id={chartId} className="chartjs-render-monitor"></canvas>
        </div>
      </div>
    </div>
);
  
const TableCard = ({ title }) => (
    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
      <div className="rounded-t mb-0 px-4 py-3 border-0">
        <div className="flex flex-wrap items-center">
          <div className="relative w-full px-4 max-w-full flex-grow flex-1">
            <h3 className="font-semibold text-base text-slate-700">{title}</h3>
          </div>
          <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
            <button
              className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
            >
              See all
            </button>
          </div>
        </div>
      </div>
      <div className="block w-full overflow-x-auto">
        {/* Table content goes here */}
      </div>
    </div>
);

export default AdminPage