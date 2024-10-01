import React from 'react';
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaUserCircle } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { MdEnhancedEncryption } from "react-icons/md";
import { useSelector } from "react-redux";

const RightSidebar = () => {

  const selectedUser = useSelector(state => state.chat.selectedUser);

  if (!selectedUser) {
    return <div className="w-1/4 p-4">No user selected</div>;
  }

  // const visibilityClass = isVisible ? 'block' : 'hidden';

  return (
    <div className='lg:w-1/4 md:w-1/2 bg-gray-50 h-full p-4 border-l border-gray-300 hidden md:block'>
    {/* Profile Section */}
    <div className="flex flex-col items-center mb-8">
      {/* Profile Picture */}
      <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
        <img src={selectedUser.img} alt={selectedUser.name} className="w-full h-full object-cover" />
      </div>

      {/* Username and Activity Status */}
      <h2 className="text-lg font-semibold">{selectedUser.name}</h2>
      <p className="text-sm text-gray-500">{selectedUser.lastActive}</p>

      {/* Encryption Info */}
      <div className="flex items-center mt-2 bg-[#D8DADF] px-2 p-1 rounded-full">
      <MdEnhancedEncryption />
        <p className="text-xs font-bold">End-to-end encrypted</p>
      </div>
    </div>

    {/* Other Options */}
      <div className="relative mb-6">
        <div className="flex justify-center space-x-11 cursor-pointer">
            <FaUserCircle size={20}/>
            <IoIosNotifications size={20}/>
            <FaSearch size={20}/>
        </div>
        <ul className="flex justify-center space-x-6">
            <li className="font-semibold cursor-pointer">Profile</li>
            <li className="font-semibold cursor-pointer">Mute</li>
            <li className="font-semibold cursor-pointer">Search</li>
        </ul>
      </div>

      {/* Options */}
      <div className="mb-8">
        <ul>
          <li className="text-md font-semibold flex items-center justify-between cursor-pointer hover:bg-gray-100 p-2 rounded">
            Chat Info<RiArrowDropDownLine size={24}/>
          </li>
          <li className="font-semibold cursor-pointer flex items-center justify-between hover:bg-gray-100 p-2 rounded">
            Customize Chat<RiArrowDropDownLine size={24}/>
            </li>
          <li className="font-semibold cursor-pointer flex items-center justify-between hover:bg-gray-100 p-2 rounded">
            Media & Files<RiArrowDropDownLine size={24}/>
            </li>
          <li className="font-semibold cursor-pointer flex items-center justify-between hover:bg-gray-100 p-2 rounded">
            Privacy & Support<RiArrowDropDownLine size={24}/>
            </li>
        </ul>
      </div>

    </div>
  );
};

export default RightSidebar;
