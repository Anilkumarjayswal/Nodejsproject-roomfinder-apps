import React from "react";
import { useContext } from "react";
import { RoomContext } from "../context";
import Title from "../components/Title";
// // get all unique values
const getUnique = (items, value) => {
  return [...new Set(items.map(item => item[value]))];
};
export default function RoomsFilter({ rooms }) {
  //   // react hooks
  const context = useContext(RoomContext);
  //   console.log(context)
  const {
    handlechange,
    type,
    price,
    minprice,
    maxprice,
    minsize,
    maxsize
  } = context;

  let types = getUnique(rooms, "type");
  types = ["all", ...types];
  types = types.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });
  return (
    <section className="filter-container">
      <Title title="search rooms" />
      <form className="filter-form">
        {/* select type */}

        <div className="form-group">
          <label htmlFor="type">room type</label>
          <select
            name="type"
            id="type"
            onChange={handlechange}
            className="form-control"
            value={type}
          >
            {types}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="price">Room price ${price}</label>
          <input
            type="range"
            name="price"
            min={minprice}
            max={maxprice}
            id="price"
            value={price}
            onChange={handlechange}
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label htmlFor="size">Room size</label>
          <div className="size-inputs">
            <input type="number" name="minsize" id="size" value={minsize} onChange={handlechange} className="size-input"/>
            <input type="number" name="maxsize" id="size" value={maxsize} onChange={handlechange} className="size-input"/>
            </div>
        </div>
      </form>
    </section>
  );
  // return <div>agr </div>
}
