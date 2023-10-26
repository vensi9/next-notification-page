
export default function Home() {
  return (
    <>
      <nav className="flex items-center justify-between px-10 py-5 font-plus-jakarta-sans font-500 text-16px">
        <div className="flex items-center ">
          <span className="text-2xl  sm:font-[.625rem] text-very-dark-blue font-semibold mr-2">Notifications</span>
          <span className=" font-800  rounded-[4px] bg-Blue text-White text-xs w-6 h-5 flex items-center justify-center">
            3
          </span>
        </div>
        <span className="cursor-pointer">Mark all as read</span>
      </nav>


      <div className=" mx-10 grid gap-3">
        <div className="flex py-2 px-5 bg-very-light-grayish-blue shadow-md rounded-lg items-center">
          <div className="w-14 h-14 flex-shrink-0 rounded-full overflow-hidden">
            <img src="./assets/images/avatar-mark-webber.webp" alt="Profile Image" className="w-full h-full object-cover" />
          </div>
          <div className="m-4 flex-grow ">
            <div>
              <span className="font-800 cursor-pointer">Mark Webber </span>
              <span className="dark-grayish-blue">reacted to your recent post </span>
              <span className="font-semibold inline-flex items-center gap-1 cursor-pointer">My first tournament today!
                <span className="w-1.5 h-1.5 bg-Red rounded-full"></span>
              </span>
            </div>

            <div className="text-grayish-blue">1m ago</div>
          </div>
        </div>

        <div className="flex px-5 py-2 bg-[#cee5ed36] shadow-md rounded-lg items-center">
          <div className="w-14 h-14 flex-shrink-0 rounded-full overflow-hidden">
            <img src="./assets/images/avatar-angela-gray.webp" alt="" className="w-full h-full object-cover" />
          </div>
          <div className="m-4 flex-grow">
            <div>
              <span className="font-semibold cursor-pointer">Angela Gray </span>
              <span className="text-gray-600 text-sm inline-flex items-center gap-1">commented on your post
                <span className="w-1.5 h-1.5  bg-Red rounded-full "></span>
              </span>
            </div>
            <div className="text-gray-400 text-xs">1m ago</div>

          </div>
        </div>

        <div className="flex px-5 py-2 bg-[#cee5ed36] shadow-md rounded-lg items-center">
          <div className="w-14 h-14 flex-shrink-0 rounded-full overflow-hidden">
            <img src="./assets/images/avatar-jacob-thompson.webp" alt="" className="w-full h-full object-cover" />
          </div>
          <div className="m-4 flex-grow">
            <div>
              <span className="font-semibold cursor-pointer">Jacob Thompson</span>
              <span className="text-gray-600 text-sm">has joined your group</span>
              <span className="font-semibold inline-flex items-center gap-1 cursor-pointer">Chess Club
                <span className="w-1.5 h-1.5  bg-Red rounded-full"></span>
              </span>
            </div>
            <div className="text-gray-400 text-xs">1 day ago</div>
          </div>
        </div>

        <div className="flex flex-col px-5 py-2 rounded-lg  ">
          <div className="flex items-center">
            <div className="w-14 h-14 flex-shrink-0 rounded-full overflow-hidden">
              <img src="./assets/images/avatar-rizky-hasanuddin.webp" alt="" className="w-full h-full object-cover" />
            </div>
            <div className="m-4 flex-grow">
              <div>
                <span className="font-semibold cursor-pointer">Rizky Hasanuddin</span>
                <span className="text-gray-600 text-sm">sent you a private message</span>
              </div>
              <div className="text-gray-400 text-xs">5 days ago</div>
            </div>
          </div>
          <div className="cursor-pointer border flex ml-[4.50rem] px-5 py-3 bg-white border-gray-300 rounded-lg items-center">
            <p className="text-gray-400 text-sm">Hello, thanks for setting up the Chess Club. I've been a member for a few weeks
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
              <span className="font-semibold cursor-pointer">Kimberly Smith</span>
              <span className="text-gray-600 text-sm">commented on your picture</span>
            </div>
            <div className="text-gray-400 text-xs">1 week ago</div>
          </div>
        </div>

        <div className="flex px-5 py-2 rounded-lg items-center">
          <div className="w-14 h-14 flex-shrink-0 rounded-full overflow-hidden">
            <img src="./assets/images/avatar-nathan-peterson.webp" alt="" className="w-full h-full object-cover" />
          </div>
          <div className="m-4 flex-grow">
            <div>
              <span className="font-semibold cursor-pointer">Nathan Peterson</span>
              <span className="text-gray-600 text-sm"> reacted to your recent post</span>
              <span className="font-semibold cursor-pointer">5 end-game strategies to increase your win rate</span>
            </div>
            <div className="text-gray-400 text-xs">2 weeks ago</div>
          </div>
        </div>

        <div className="flex px-5 py-2 rounded-lg items-center">
          <div className="w-14 h-14 flex-shrink-0 rounded-full overflow-hidden">
            <img src="./assets/images/avatar-anna-kim.webp" alt="" className="w-full h-full object-cover" />
          </div>
          <div className="m-4 flex-grow">
            <div>
              <span className="font-semibold cursor-pointer">Anna Kim</span>
              <span className="text-gray-600 text-sm">left the group</span>
              <span className="font-semibold cursor-pointer">Chess Club</span>
            </div>
            <div className="text-gray-400 text-xs">2 weeks ago</div>
          </div>
        </div>

      </div>
      <div className="attribution mt-5">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
        Coded by <a href="#">Vensi Tejani</a>.
      </div>
    </>
  )
}
