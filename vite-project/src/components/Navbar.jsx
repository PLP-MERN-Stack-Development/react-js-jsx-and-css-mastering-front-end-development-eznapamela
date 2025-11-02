import React from "react";
import { CircleCheck, CircleHelp, Circle } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md p-4 rounded-lg flex items-center justify-between">
      <h1 className="text-xl font-semibold">My App</h1>
      <ul className="flex space-x-6">
        <li className="flex items-center gap-1 cursor-pointer hover:text-blue-600">
          <CircleHelp size={16} /> Help
        </li>
        <li className="flex items-center gap-1 cursor-pointer hover:text-blue-600">
          <Circle size={16} /> Tasks
        </li>
        <li className="flex items-center gap-1 cursor-pointer hover:text-blue-600">
          <CircleCheck size={16} /> Done
        </li>
      </ul>
         <ThemeToggle />
    </nav>
  );
};

export default Navbar;
