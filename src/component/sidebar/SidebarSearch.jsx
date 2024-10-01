import { ImSearch } from "react-icons/im";



const SidebarSearch = () => (
    <div className="p-2 sm:p-4 border-r ">
      <div className="w-full rounded-full border p-2 flex items-center gap-2">
      <ImSearch className="text-[#8D8F93]"/>
      <input 
        type="text"
        placeholder="Search Messenger"
        className="w-full text-sm sm:text-base"
        />
        </div>
    </div>
  );

export default SidebarSearch