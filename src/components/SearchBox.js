import React, { Component } from "react";

class SearchBox extends Component{
    render(){
        return(
            <div className="pa2">
                <input type="search" placeholder="Search"className="pa3 ba b--green bg-lightest-blue" onChange={this.props.change}/>
            </div>
        )
    }
}
export default SearchBox