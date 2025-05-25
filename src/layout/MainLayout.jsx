import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => setCollapsed(!collapsed);

  return (
    <div className="flex h-screen overflow-hidden">
      <div className={`${collapsed ? "w-20" : "w-64"} transition-all duration-300`}>
        <Sidebar collapsed={collapsed} />
      </div>
      <div className="flex-1 flex flex-col">
        <Navbar collapsed={collapsed} toggleSidebar={toggleSidebar} />
        <div className="p-4 overflow-auto flex-1 bg-gray-50">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
