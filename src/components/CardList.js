import React, { Component } from "react";
import Card from "./Card";

class CardList extends Component{
    render(){
        return(
            this.props.robots.map((e,i)=>{
                return <Card key={i} name={this.props.robots[i].name}  email={this.props.robots[i].email} id={this.props.robots[i].id}/>
            })
        )
    }
}

export default CardList