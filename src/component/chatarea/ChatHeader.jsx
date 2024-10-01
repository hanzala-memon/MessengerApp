// import { useState } from "react";
import { AiFillInfoCircle } from "react-icons/ai";
import { FaVideo } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { useSelector } from "react-redux";





const ChatHeader = ({ isMobile }) => {

  // const [showSidebar, setShowSidebar] = useState(false);
  const selectedUser = useSelector(state => state.chat.selectedUser);

  // const toggleSidebar = () => {
  //   setShowSidebar(!showSidebar)
  //   console.log(showSidebar)
  // }

  return (
    <div className={`flex items-center justify-between p-4 border-b bg-white ${isMobile ? 'fixed right-0 left-0 z-20' : ''}`}>
      <div className="flex items-center space-x-4">
        <img 
          src={selectedUser.img} 
          alt="Contact" 
          className="w-10 h-10 rounded-full cursor-pointer"
        />
        <div>
          <h2 className="text-sm md:text-lg font-semibold cursor-pointer">{selectedUser.name}</h2>
          <span className="text-xs md:text-sm text-gray-500">{selectedUser.lastActive}</span>
        </div>
      </div>
      <div className="flex space-x-4">
        <button className="p-2 hover:bg-gray-200 rounded-full">
          {/* Phone Icon */}
          <FaPhoneAlt size={20} color="#3b82f6"/>
        </button>
        <button className="p-2 hover:bg-gray-200 rounded-full">
          {/* Video Icon */}
          <FaVideo size={20} color="#3b82f6"/>
        </button>
        <button className="p-2 hover:bg-gray-200 rounded-full" 
        // onClick={() => setIsRightSidebarVisible((prev) => !prev)}
        >
          {/* Info Icon */}
          <AiFillInfoCircle size={20} color="#3b82f6"/>
        </button>
      </div>
    </div>
);
};

export default ChatHeader