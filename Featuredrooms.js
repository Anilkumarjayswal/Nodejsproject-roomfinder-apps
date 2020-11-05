import React, { Component } from 'react'
import {RoomContext} from '../context'
import Room from './Room'
import Title from './Title'

export default class Featuredrooms extends Component {
    static contextType=RoomContext
    render() {
        let {loading,featuredrooms:rooms}=this.context
        rooms=rooms.map(room=>{
            return <Room key={room.id} room={room}/>
        })
        return (
           <section className="featured-rooms">
           <Title title="featured-rooms"></Title>
           <div className="featured-rooms-center">{loading?'Loading':rooms}</div>
           </section>
        )
    }
}
