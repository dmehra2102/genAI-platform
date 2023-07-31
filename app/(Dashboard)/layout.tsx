import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const DashboardLayout = ({ children }: Props) => {
  return (
    <div className="h-full relative">
      {/* Sidebar */}
      <div className="text-gray-500 md:w-64 hidden h-full md:flex md:flex-col md:fixed md:bg-gray-900 md:inset-y-0 md:z-[80]">
        <Sidebar />
      </div>
      {/* Main Content */}
      <main className="md:pl-64">
        <Navbar />
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
