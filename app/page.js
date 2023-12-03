export default function Home() {
  return (
    <>
      <nav className="flex items-center justify-between px-5 py-5 sm:px-10 font-plus-jakarta-sans font-500 text-16px">
        <div className="flex items-center ">
          <span className="sm:text-2xl text-[1.2rem]  sm:font-[.625rem] text-very-dark-blue font-semibold mr-2">Notifications</span>
          <span className=" font-800  rounded-[4px] bg-Blue text-White text-xs w-6 h-5 flex items-center justify-center">
            3
          </span>
        </div>
        <span className="cursor-pointer text-[0.9rem] sm:text-[1rem] text-dark-grayish-blue hover:text-[#0a317b]">Mark all as read</span>
      </nav>


      <div className=" mx-5 sm:mx-10 grid gap-3 font-plus-jakarta-sans ">
        <div className="flex py-2 px-5 bg-very-light-grayish-blue  rounded-lg items-center">
          <div className="w-14 h-14 flex-shrink-0 rounded-full overflow-hidden">
            <img src="./assets/images/avatar-mark-webber.webp" alt="Profile Image" className="w-full h-full object-cover" />
          </div>
          <div className="m-4 flex-grow ">
            <div>
              <span className="hover:text-[#0a317b] font-800  text-[0.95rem] sm:text-[1rem] text-very-dark-blue cursor-pointer ">Mark Webber </span>
              <span className="text-dark-grayish-blue font-500 text-[0.95rem] sm:text-[1rem]">reacted to your recent post </span>
              <span className="hover:text-[#0a317b] font-800 text-dark-grayish-blue text-[0.95rem] sm:text-[1rem] inline-flex items-center gap-1 cursor-pointer">My first tournament today!
                <span className="sm:[w-1.5 h-1.5] w-2 h-2 bg-Red rounded-full"></span>
              </span>
            </div>

            <div className="text-grayish-blue">1m ago</div>
          </div>
        </div>

        <div className="flex px-5 py-2 bg-[#cee5ed36]  rounded-lg items-center">
          <div className="w-14 h-14 flex-shrink-0 rounded-full overflow-hidden">
            <img src="./assets/images/avatar-angela-gray.webp" alt="" className="w-full h-full object-cover" />
          </div>
          <div className="m-4 flex-grow">
            <div>
              <span className="hover:text-[#0a317b] font-800 text-[0.95rem] sm:text-[1rem] text-very-dark-blue cursor-pointer">Angela Gray </span>
              <span className="text-dark-grayish-blue font-500 text-[0.95rem] sm:text-[1rem] inline-flex items-center gap-1">commented on your post
                <span className="sm:[w-1.5 h-1.5] w-2 h-2 bg-Red rounded-full "></span>
              </span>
            </div>
            <div className="text-grayish-blue font-500 text-[0.95rem] sm:text-[1rem]">1m ago</div>

          </div>
        </div>

        <div className="flex px-5 py-2 bg-[#cee5ed36]  rounded-lg items-center">
          <div className="w-14 h-14 flex-shrink-0 rounded-full overflow-hidden">
            <img src="./assets/images/avatar-jacob-thompson.webp" alt="" className="w-full h-full object-cover" />
          </div>
          <div className="m-4 flex-grow">
            <div>
              <span className="hover:text-[#0a317b] font-800 text-very-dark-blue cursor-pointer">Jacob Thompson</span>
              <span className="text-dark-grayish-blue font-500 text-[0.95rem] sm:text-[1rem]"> has joined your group </span>
              <span className="hover:text-[#0a317b] font-800 text-dark-grayish-blue text-[0.95rem] sm:text-[1rem] inline-flex items-center gap-1 cursor-pointer"> Chess Club
                <span className="sm:[w-1.5 h-1.5] w-2 h-2 bg-Red rounded-full"></span>
              </span>
            </div>
            <div className="text-grayish-blue font-500 text-[0.95rem] sm:text-[1rem]">1 day ago</div>
          </div>
        </div>

        <div className="flex flex-col px-5 py-2 rounded-lg  ">
          <div className="flex items-center">
            <div className="w-14 h-14 flex-shrink-0 rounded-full overflow-hidden">
              <img src="./assets/images/avatar-rizky-hasanuddin.webp" alt="" className="w-full h-full object-cover" />
            </div>
            <div className="m-4 flex-grow">
              <div>
                <span className="hover:text-[#0a317b] font-800 text-very-dark-blue cursor-pointer">Rizky Hasanuddin</span>
                <span className="text-dark-grayish-blue font-500 text-[0.95rem] sm:text-[1rem]"> sent you a private message</span>
              </div>
              <div className="text-grayish-blue font-500 text-[0.95rem] sm:text-[1rem]">5 days ago</div>
            </div>
          </div>
          <div className="cursor-pointer border flex ml-[4.50rem] px-5 py-3 bg-white hover:bg-light-grayish-blue-1 border-light-grayish-blue-2 rounded-lg items-center">
            <p className="font-500 text-[0.95rem] sm:text-[1rem] text-dark-grayish-blue">Hello, thanks for setting up the Chess Club. I've been a member for a few weeks
              now and
              I'm already having lots of fun and improving my game.</p>
          </div>
        </div>




        <div className="flex px-5 py-2 rounded-lg items-center">
          <div className="w-14 h-14 flex-shrink-0 rounded-full overflow-hidden">
            <img src="./assets/images/avatar-kimberly-smith.webp" alt="" className="w-full h-full object-cover" />
          </div>
          <div className="m-4 flex-grow">
            <div>
              <span className="hover:text-[#0a317b] font-800 text-very-dark-blue cursor-pointer">Kimberly Smith</span>
              <span className="text-dark-grayish-blue font-500 text-[0.95rem] sm:text-[1rem]"> commented on your picture</span>
            </div>
            <div className="text-grayish-blue font-500 text-[0.95rem] sm:text-[1rem] ">1 week ago</div>
          </div>
          <div className="w-14 h-14 flex-shrink-0 overflow-hidden order-last md:order-last">
            <img src="./assets/images/image-chess.webp" alt="" className="w-full h-full object-cover cursor-pointer" />
          </div>
        </div>

        <div className="flex px-5 py-2 rounded-lg items-center">
          <div className="w-14 h-14 flex-shrink-0 rounded-full overflow-hidden">
            <img src="./assets/images/avatar-nathan-peterson.webp" alt="" className="w-full h-full object-cover" />
          </div>
          <div className="m-4 flex-grow">
            <div>
              <span className="hover:text-[#0a317b] font-800 text-very-dark-blue cursor-pointer">Nathan Peterson</span>
              <span className="text-dark-grayish-blue font-500 text-[0.95rem] sm:text-[1rem]"> reacted to your recent post</span>
              <span className="hover:text-[#0a317b] font-800 text-dark-grayish-blue text-[0.95rem] sm:text-[1rem] cursor-pointer"> 5 end-game strategies to increase your win rate</span>
            </div>
            <div className="text-grayish-blue font-500 text-[0.95rem] sm:text-[1rem]">2 weeks ago</div>
          </div>
        </div>

        <div className="flex px-5 py-2 rounded-lg items-center">
          <div className="w-14 h-14 flex-shrink-0 rounded-full overflow-hidden">
            <img src="./assets/images/avatar-anna-kim.webp" alt="" className="w-full h-full object-cover" />
          </div>
          <div className="m-4 flex-grow">
            <div>
              <span className="hover:text-[#0a317b] font-800 text-very-dark-blue cursor-pointer">Anna Kim </span>
              <span className="text-dark-grayish-blue font-500 text-[0.95rem] sm:text-[1rem]">left the group </span>
              <span className="hover:text-[#0a317b] font-800 text-dark-grayish-blue text-[0.95rem] sm:text-[1rem] cursor-pointer">Chess Club</span>
            </div>
            <div className="text-grayish-blue font-500 text-[0.95rem] sm:text-[1rem]">2 weeks ago</div>
          </div>
        </div>
      </div>

      <div className="none sm:flex justify-center align-items-center my-10 text-[0.9rem]">
        Challenge by
        <a className="text-[#3e52a3] hover:text-[#0a317b] font-800 ml-1" href="https://www.frontendmentor.io?ref=challenge" target="_blank"> Frontend Mentor</a>. 
        Coded by 
        <a href="https://github.com/vensi9/next-notification-page"  className="ml-1 text-[#3e52a3] hover:text-[#0a317b] font-800"> Vensi Tejani</a>.
      </div>
    </>
  )
}
