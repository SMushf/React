/* eslint-disable react/prop-types */

function App({userName, age, image}) {
  return (
    <>
      <div className="relative h-[400px] w-[300px] rounded-md my-5 flex flex-row bg-white">
        <img
          src={image || "./src/assets/profilePic.jpg"}
          alt="AirMax Pro"
          className="z-0 h-full w-full rounded-md object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t rounded-b-md from-red-800 to-transparent"></div>
        <div className="absolute bottom-4 left-4 text-left">
          <h1 className="text-lg font-semibold text-white">{userName || "Not Added"}</h1>
          <p className="mt-2 text-sm text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
            debitis? its age is {age || "Not Added"}
          </p>
          <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
            View Profile →
          </button>
        </div>
      </div>
    </>
  );
}

export default App
