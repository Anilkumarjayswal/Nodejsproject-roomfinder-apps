import React from "react";
import { withroomconsumer } from "../context";
import Roomsfilter from "./Roomsfilter";
import Roomslist from "./Roomslist";

function RoomContainer({ context }) {
  const {  sortedrooms, rooms } = context;
  
  return (
    <>
      
      <Roomsfilter rooms={rooms} />
      <Roomslist rooms={sortedrooms} />
    </>
  );
}
export default withroomconsumer(RoomContainer);






