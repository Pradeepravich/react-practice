import React, {Component} from 'react'
import Display from "./Display"

export default class Property extends Component{

    state = {
        name: "This is Stackular Company"
    }
    render(){
        return(
            <Display input ={this.state.name} />

        )
    }

}
