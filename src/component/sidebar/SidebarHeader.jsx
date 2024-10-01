import { IoIosMore } from "react-icons/io";
import { BiMessageSquareEdit } from "react-icons/bi";





const SidebarHeader = () => (
    <div className="flex items-center justify-between p-4 border-b border-r bg-white">
      <div className="flex items-center">
        <h3 className="w-10 h-10 rounded-full font-bold text-xl sm:text-2xl">Chats</h3>
      </div>
      <div className="flex space-x-2">
        {/* more button */}
        <button className="p-2 bg-[#D8DADF] hover:bg-gray-300 rounded-full transition-all">
          <IoIosMore className="text-lg sm:text-xl"/>
        </button>
        {/* video chat icon */}
        <button className="p-2 bg-[#D8DADF] hover:bg-gray-300 rounded-full transition-all">
        <BiMessageSquareEdit className="text-lg sm:text-xl"/>
        </button>
      </div>
    </div>
  );

export default SidebarHeader