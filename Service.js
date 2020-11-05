import React, { Component } from "react";
import Title from "./Title";
import { FaWifi,FaHome,FaChair,FaCarBattery } from "react-icons/fa";
export default class Service extends Component {
  state = {
    services: [
      {
        icon: <FaWifi />,
        title: "Free Wifi",
        info:
          "Free High Speed wifi available for upto 5GB/day"
      },
      {
        icon: <FaCarBattery />,
        title: "24*7 Power backup",
        info:
          "All residences come with power backup insuring uninterrrupted power supply 24*7"
      },
      {
        icon: <FaChair />,
        title: "Well Furnished",
        info:
          "Pre-furnished rooms with all essential furniture"
      },
      {
        icon: <FaHome />,
        title: "Spacious rooms",
        info:
          "All rooms are large enough to accomoddate 2-4 people"
      }
    ]
  };
  render() {
    return (
      <section className="services">
        <Title title="services"></Title>
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
