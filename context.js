import React, { Component } from "react";
import items from "./data";
const RoomContext = React.createContext();
export default class RoomProvider extends Component {
  state = {
    rooms: [],
    sortedrooms: [],

    featuredrooms: [],
    loading: true,
    type: "all",
    capacity: 1,
    price: 0,
    minprice: 0,
    maxprice: 0,
    minsize: 0,
    maxsize: 0
  };
  componentDidMount() {
    let rooms = this.formatdata(items);
    let featuredrooms = rooms.filter(room => room.featured === true);
    let maxprice = Math.max(...rooms.map(item => item.price));
    let maxsize = Math.max(...rooms.map(item => item.size));
    this.setState({
      rooms,
      featuredrooms,
      sortedrooms: rooms,
      loading: false,
      price: maxprice,
      maxprice,
      maxsize
    });
  }
  formatdata = items => {
    let tempitems = items.map(item => {
      let id = item.sys.id;
      let images = item.fields.images.map(image => image.fields.file.url);
      let room = { ...item.fields, images, id };
      return room;
    });
    return tempitems;
  };
  getroom = slug => {
    let temprooms = [...this.state.rooms];
    const room = temprooms.find(room => room.slug === slug);
    return room;
  };
  handlechange = event => {
    const target=event.target
    const name = event.target.name;
    const value = event.type==='checkbox'?target.checked:target.value
    this.setState({[name]:value},this.filterrooms)
    // console.log(type, value, name);
  };
  filterrooms = () => {
    // console.log("hello");
    let {
      rooms,type,price,minsize,maxsize
    }=this.state
    let temprooms=[...rooms]
    price=parseInt(price)
    if(type!=='all'){
      temprooms=temprooms.filter(room=>room.type===type)
    }
    temprooms=temprooms.filter(room=>room.price<=price)
    temprooms=temprooms.filter(room=>room.size>=minsize&&room.size<=maxsize)
    this.setState({
      sortedrooms:temprooms
    })
  };
  render() {
    return (
      <RoomContext.Provider
        value={{
          ...this.state,
          getroom: this.getroom,
          handlechange: this.handlechange
        }}
      >
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}
const RoomConsumer = RoomContext.Consumer;
export function withroomconsumer(Component) {
  return function ConsumerWrapper(props) {
    return (
      <RoomConsumer>
        {value => <Component {...props} context={value} />}
      </RoomConsumer>
    );
  };
}
export { RoomProvider, RoomConsumer, RoomContext };
