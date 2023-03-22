import React, { useState } from "react";
import Image from "next/image";
import {
  MagnifyingGlassIcon,
  GlobeAltIcon,
  Bars3Icon,
  UserCircleIcon,
  UsersIcon,
} from "@heroicons/react/24/solid";

import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { useRouter } from "next/router";

function Header({placeholder}) {
  const [searchInput, setSearchInput] = useState();
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [noOfGuest, setNoOfGuest] = useState(1)
  const router = useRouter()

  
  const searchPage = () => {
    router.push({
      pathname: "/search",
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        noOfGuest,


      }
    })
  }

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

const resetInput = () => {
  setSearchInput('')
}

  return (
    <header className="sticky z-50 shadow-md grid grid-cols-3 p-5 md:px-10">
      {/* left */}
      <div className="relative flex items-center h-10 cursor-pointer my-auto">
        <Image
          style={{ objectFit: "contain", objectPosition: "left" }}
          src="https://links.papareact.com/qd3"
          fill
          alt=""
          onClick={() => router.push("/")}
        />
      </div>

      {/* mid */}
      <div className="flex md:border-2  rounded-full py-2 md:shadow-sm">
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="pl-5 bg-transparent outline-none flex-grow text-sm text-gray-600 placeholder-gray-400"
          type="text"
          placeholder={ placeholder || "start your search"}
        />
        <MagnifyingGlassIcon className="hidden lg:inline-flex h-8 bg-red-400 rounded-full p-2 cursor-pointer text-white mx-2" />
      </div>

      {/* right */}
      <div className="flex space-x-4 items-center justify-end">
        <p className="hidden md:inline cursor-pointer">Become a host</p>
        <GlobeAltIcon className="h-6 cursor-pointer" />
        <div className="flex space-x-2 border-2 p-2 rounded-full cursor-pointer">
          <Bars3Icon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>

      {searchInput && (
        <div className="flex flex-col col-span-3 mx-auto mt-1">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            onChange={handleSelect}
            rangeColors={["#FD5B61"]}
          />
          <div className="flex items-center border-b mb-4">
            <h2 className="text-2xl font-semibold flex-grow">
              Number of Guests
            </h2>
            <UsersIcon className="h-5" />
            <input
              value={noOfGuest}
              className="w-14 pl-2 text-lg outline-none text-red-400"
              type="number"
              onChange={(e) => setNoOfGuest(e.target.value)}
              min={1}
            />
          </div>
          <div className="flex">
            <button onClick={resetInput} className="flex-grow text-gray-600">cancel</button>
            <button onClick={searchPage} className="flex-grow text-red-400">search</button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
