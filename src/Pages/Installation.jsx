import React from "react";

const Installation = () => {
  return (
    <div className="w-[90%] mx-auto">
      <h2 className="text-4xl text-[#001931] font-bold text-center">
        Your Installed Apps
      </h2>
      <p className="text-xs text-gray-400">
        Explore All Trending Apps on the Market developed by us
      </p>
      <div className="flex justify-between items-center">
        <p>0 Apps Found</p>
        <p>Srot By</p>
      </div>
      {/* Downloaded App Containder */}
      <div>
        <div>
          <div>
            <div>
              <img
                src={`https://images.unsplash.com/photo-1549632891-a0bea6d0355b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZ2UlMjByb3ZlcnxlbnwwfHwwfHx8MA%3D%3D&fm=jpg&q=60&w=3000`}
                alt="App Image"
              />
            </div>
            <div>
              <h2 className="text-xl font-semibold">App Name</h2>
              <div className="flex gap-2">
                <p>^5 Star</p>
                <p>0.25 md</p>
              </div>
            </div>
          </div>
          <div>
            <button className="btn text-white bg-[#07BFB0]">Unstall</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Installation;
