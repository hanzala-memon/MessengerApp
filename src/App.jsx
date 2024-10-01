import React, { useState, useEffect } from 'react'
import SideBar from './component/sidebar/SideBar'
import MessagesArea from './component/chatarea/MessagesArea'
import RightSidebar from './component/rightside/RightSidebar'





function App() {

  const [isMessagesVisible, setIsMessagesVisible] = useState(false);
  // const [isRightSidebarVisible, setIsRightSidebarVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);
  // const isMobile = window.innerWidth < 640;

  // console.log("isMessagesVisible:", isMessagesVisible, "isMobile:", isMobile);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  return (
  <div className="flex h-screen flex-col md:flex-row">
      <div className={`lg:w-1/4 md:w-1/3 w-full bg-gray-100 ${isMessagesVisible && isMobile ? 'hidden' : 'block'}`}>
        <SideBar 
          isMobile={isMobile} 
          setIsMessagesVisible={setIsMessagesVisible} 
          />
      </div>
      <div className={`flex-grow bg-white ${!isMessagesVisible && isMobile ? 'hidden' : 'block'}`}>
          {(!isMobile || isMessagesVisible) && (
            <MessagesArea
            isMobile={isMobile}
            setIsMessagesVisible={setIsMessagesVisible}
          />
        )}
      </div>

      
        <RightSidebar />
  </div>
  )
}

export default App
