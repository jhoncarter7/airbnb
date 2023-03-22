import React from "react";
import Image from "next/image";
function Banner() {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[450px] xl:h-[500px] 2xl:h-[600px]">
      <Image
        style={{ objectFit: "cover" }}
        src="https://links.papareact.com/0fm"
        alt=""
        fill
      />
      <div className="absolute w-full top-1/2 text-center ">
      <p className="text-sm sm:text-lg">Not sure where to go? Perfect</p>
      <button className="text-purple-500 bg-white px-10 py-4 rounded-full shadow-md hover:shadow-xl active:scale-90 transition duration-150 mt-4">I am flexible</button>
      </div>
    </div>
  );
}

export default Banner;
