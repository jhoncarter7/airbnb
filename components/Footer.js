import React from "react";

function Footer() {
  return (
    <div className=" grid grid-cols-2 md:grid-cols-4 gap-y-10 px-20 sm:px-32 py-16 bg-gray-100 text-gray-600">
      <div className="text-xs space-y-4 text-gray-800">
        <h5 className="font-bold ">ABOUT</h5>
        <p>How airbnb work</p>
        <p>Newsroom </p>
        <p>inventor</p>
        <p>Airbnb plus</p>
        <p>Airbnb lux</p>
      </div>

      <div className="text-xs space-y-4 text-gray-800">
        <h5 className="font-bold ">COMMUNITY</h5>
        <p>Accessibility</p>
        <p>This is not a real site</p>
        <p>Its pretty awesome clone</p>
        <p>fanclub</p>
      </div>

      <div className="text-xs space-y-4 text-gray-800">
        <h5 className="font-bold ">HOST</h5>
        <p>Nikhil github</p>
        <p>all project</p>
        <p>javascript</p>
        <p>React</p>
      </div>

      <div className="text-xs space-y-4 text-gray-800">
        <h5 className="font-bold ">SUPPORT</h5>
        <p>Help center</p>
        <p>Trust & safety</p>
        <p>email us</p>
        <p>chat with us</p>
      </div>
    </div>
  );
}

export default Footer;
