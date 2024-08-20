// Sidebar.jsx
import React, { useContext, useState } from 'react';
import { Sidebar } from 'flowbite-react';
import { HiChartPie, HiOutlineCloudUpload, HiInbox, HiLogout } from 'react-icons/hi';
import { AuthContext } from '../contexts/AuthProvider'; // Adjust the path accordingly

 const SideBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className={`flex h-screen bg-gradient-to-r from-teal-500 to-teal-700 ${sidebarOpen ? 'overflow-hidden' : ''}`}>
      <Sidebar
        aria-label="Sidebar with content separator example"
        className={`bg-teal-700 text-white w-64 min-h-screen transition-all ease-in-out duration-300 ${
          sidebarOpen ? 'transform translate-x-0' : 'transform -translate-x-full'
        }`}
      >
        <Sidebar.Logo href="#" img={user?.photoURL} imgAlt="User Logo" className="text-2xl font-bold p-4 rounded-full">
          {user ? user.displayName : 'Guest'}
        </Sidebar.Logo>
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Sidebar.Item href="/admin/dashboard" icon={HiChartPie}>
              Dashboard
            </Sidebar.Item>
            <Sidebar.Item href="/admin/dashboard/upload" icon={HiOutlineCloudUpload}>
              Upload Books
            </Sidebar.Item>
            <Sidebar.Item href="/admin/dashboard/manage" icon={HiInbox}>
              Manage Books
            </Sidebar.Item>
            <Sidebar.Item onClick={logOut} icon={HiLogout}>
              Logout
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>

      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Your main content goes here */}
        <button
          className={`fixed top-4 left-4 bg-teal-700 text-white p-2 rounded-full focus:outline-none ${
            sidebarOpen ? 'hidden' : 'block'
          }`}
          onClick={toggleSidebar}
        >
          Open Sidebar
        </button>
        {/* ... rest of your content ... */}
      </div>
    </div>
  );
};

export default SideBar
