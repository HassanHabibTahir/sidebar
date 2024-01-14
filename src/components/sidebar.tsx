import React, { useRef } from "react";
import classNames from "classnames";
import Link from "next/link";
import Image from "next/image";
import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
  FolderIcon,
  HomeIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

type Props = {
  collapsed: boolean;
  navItems?: any;
  setCollapsed(collapsed: boolean): void;
  shown: boolean;
};
const Sidebar = ({
  collapsed,
  navItems = [
    {
      label: "Home",
      href: "/",
      icon: <HomeIcon className="w-6 h-6" />,
    },
    {
      label: "About",
      href: "/about",
      icon: <UserGroupIcon className="w-6 h-6" />,
    },
    {
      label: "Projects",
      href: "/projects",
      icon: <FolderIcon className="w-6 h-6" />,
    },
  ],
  shown,
  setCollapsed,
}: Props) => {
  const Icon = collapsed ? ChevronDoubleRightIcon : ChevronDoubleLeftIcon;

  return (
    <div
      className={classNames({
        " bg-base-200 bg-black  text-zinc-50 fixed md:static md:translate-x-0 z-20":
          true,
        "transition-all duration-300 ease-in-out": true,
        "w-[250px]": !collapsed,
        "w-0": collapsed,
        "-translate-x-full": !shown,
      })}
    >
      <div
        className={classNames({
          "flex flex-col justify-between h-screen md:h-full sticky inset-0":
            true,
        })}
      >
        {!collapsed && (
          <div
            className={classNames({
              "flex justify-between items-center  w-full transition-none p-4 py-4 h-20":
                true,
            })}
          >
            <span className=" text-base-content  lg:ml-8 xl:ml-12  whitespace-nowrap">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/5/57/X_logo_2023_%28white%29.png"
                width={50}
                height={50}
                alt=""
              />
            </span>
            <button
              className="grid place-content-center bg-base-200 text-base-content  md:hidden lg:hidden   h-10 w-10 rounded-full "
              onClick={() => setCollapsed(!collapsed)}
            >
              <Icon className="w-5 h-5" />
            </button>
          </div>
        )}
        {!collapsed && (
          <nav className="flex-grow">
            <ul
              className={classNames({
                "ml-3": true,
              })}
            >
              {navItems.map((item: any, index: number) => {
                return (
                  <li key={index + Math.random()}>
                    <Link
                      href={item.href}
                      className={classNames({
                        "text-base-content hover:text-base-content flex gap-2":
                          true,
                      })}
                    >
                      {item.icon}
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        )}
      </div>
    </div>
  );
};
export default Sidebar;
