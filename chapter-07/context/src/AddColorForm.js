import React, { Component } from "react"

export default class AddColorForm extends Component{
    constructor(props){
        super(props)
        this.submit = this.submit.bind(this)

    }

    submit(e){
        const {_title,_color} = this.refs;
        e.prevenetDefault();
        _title.value = ""
        _color.value = '#000000'
        _title.focus()
    }

    render(){
        return(
            <form onSubmit={this.submit}>
                <input type="text" ref="_title"></input>
                <input type="color" ref="_color">Add</input>
                <button>Add</button>
            </form>
        )
    }
}
