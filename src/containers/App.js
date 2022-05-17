import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import "../components/App.css"
import Scroll from '../components/Scroll'

class App extends Component{
    constructor(){
        super()
        this.state = {
            robots:[],
            searchfield: ""
        }
    }

    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/users").then(response=>{
            return response.json(); 
        }).then(users=>{
            this.setState({robots:users})
        })
    }


    onChangeFun=(e)=>{
        this.setState({searchfield: e.target.value})
    }

    render(){
        const fiteredRobot = this.state.robots.filter((r)=> r.name.toLowerCase().includes(this.state.searchfield.toLowerCase()))
        if(this.state.robots.length == 0){
            return <h1>Loading</h1>
        }else{
            return(
                <div className="tc">
                    <h1 className="f1">RoboFriends</h1>
                    <SearchBox change={this.onChangeFun}/>
                    <Scroll>
                    <CardList robots={fiteredRobot}  />
                    </Scroll>
                </div>
            )
        }
        
    }
}

export default App