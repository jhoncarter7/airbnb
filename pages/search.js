import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useRouter } from "next/router";
import React from "react";
import format from "date-fns/format";
import InfoCard from "@/components/InfoCard";

function Search({ searchResults }) {
  const router = useRouter();
  // console.log(searchResults);
  const { location, startDate, endDate, noOfGuest } = router.query;

  const startingDate = format(new Date(startDate), "dd MMMM yy");
  const endingDate = format(new Date(endDate), "dd MMMM yy");
  const range = `${startingDate} -- ${endingDate}`;

  return (
    <div>
      <Header placeholder={`${location} | ${range} | ${noOfGuest} Guest`} />

      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">
            300+ stays -{range}- for {noOfGuest} Guests
          </p>
          <h1 className="text-2xl font-semibold mt-2 mb-6 ">
            {" "}
            Stay in {location}
          </h1>

          <div className="hidden md:inline-flex gap-x-3 mb-5 text-gray-800">
            <p className="button">Cancellation Flexibility</p>
            <p className="button">Type of Place</p>
            <p className="button">Price</p>
            <p className="button">Rooms and Beds</p>
            <p className="button">More filters</p>
          </div>

          <div>
        {searchResults?.map(
          ({ photos, location, pricing, stars, address, name, numberOfGuests, description, url }) => (
            <InfoCard
              key={url}
              image={photos[0]}
              location={location}
              title={name}
              address={address}
              star={stars}
              price={pricing}
              total={numberOfGuests}
              description={description}
            />
          )
        )}
      </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}

export default Search;

export async function getServerSideProps() {
  const searchResults = await fetch(
    "https://airbnb-5be6a-default-rtdb.firebaseio.com/rooms.json"
  );
  const response = await searchResults.json();
  console.log(response);

  return {
    props: {
      searchResults: response,
    },
  };
}
