import React, { Component } from 'react';
class Counter extends Component {

    componentDidUpdate(prevProps, prevState){
        console.log("Previous Props : ",prevProps);
        console.log("Previous State : ",prevState);
    }

    componentWillUnmount(){
        console.log("Counter - Unmount");
    }

    styles = {
        fontSize : 10,
        fontWeight : "bold"
    }

    /*constructor(){
        super();
        this.handleIncrement = this.handleIncrement.bind(this);
    }*/

    /*handleIncrement = () => {
        this.setState({ value: this.state.value + 1 })
    }*/

    /*renderTags(){
        if(this.state.tags.length === 0) return <p>There are no tags</p>;
        return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>;
    }*/

    render() { 

        console.log("props",this.props);
        return (
            <div>
                <span style={this.styles} className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button 
                    onClick={() => this.props.onIncrement(this.props.counter)}
                    style={{fontSize:20}} 
                    className="btn btn-primary btn-sm">
                    Increment
                </button>

                <button 
                    onClick={() => this.props.onDelete(this.props.counter.id)}
                    style={{fontSize:20}} 
                    className="btn btn-danger btn-sm m-2">
                    Delete
                </button>
                
                {/*this.state.tags.length === 0 && "Please add tags"*/}
                {/*{this.renderTags()}*/}
            </div>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const { value } = this.props.counter;
        return value === 0 ? "Zero" : value;
    }
}
 
export default Counter;