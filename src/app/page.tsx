"use client";
import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import classNames from "classnames";
import React, { PropsWithChildren, useState } from "react";

const Layout = (props: PropsWithChildren) => {
  const [collapsed, setSidebarCollapsed] = useState(false);
  const [showSidebar, setShowSidebar] = useState(true);

  return (
    <div>
      <div
        className={classNames({
          " flex min-h-screen": true,
          "grid-cols-sidebar": !collapsed,
          "grid-cols-sidebar-collapsed": collapsed,
          "transition-[grid-template-columns] duration-300 ease-in-out": true,
          flex: true,
        })}
      >
        <Sidebar
          // lang={props.lang}
          collapsed={collapsed}
          setCollapsed={setSidebarCollapsed}
          shown={showSidebar}
        />
        <div className="w-full">
          <Navbar
            onMenuButtonClick={() => setShowSidebar((prev) => !prev)}
            setCollapsed={() => setSidebarCollapsed((prev) => !prev)}
          />
          <div className="">{props.children}</div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
