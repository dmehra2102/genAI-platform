import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { getApiLimitCount } from "@/lib/api-limit";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const DashboardLayout = async ({ children }: Props) => {
  const apiLimitCount = await getApiLimitCount();

  return (
    <div className="h-full relative">
      {/* Sidebar */}
      <div className="text-gray-500 md:w-64 hidden h-full md:flex md:flex-col md:fixed md:bg-gray-900 md:inset-y-0">
        <Sidebar apiLimitCount={apiLimitCount} />
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
