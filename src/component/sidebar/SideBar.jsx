import React from 'react'
import SidebarHeader from './SidebarHeader'
import ChatList from './ChatList'
import SidebarSearch from './SidebarSearch'

const SideBar = ({ isMobile, setIsMessagesVisible }) => {

  
  return (
    <div className="bg-white h-full flex flex-col w-full sm:w-64 md:w-80 lg:w-full">
      <SidebarHeader />
      <SidebarSearch />
      <div className="flex-1 overflow-y-auto">
            <ChatList
            isMobile={isMobile}
            setIsMessagesVisible={setIsMessagesVisible}
          />
      </div>
    </div>
  )
}
export default SideBar