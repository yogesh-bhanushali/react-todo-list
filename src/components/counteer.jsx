import React, { Component } from 'react';
class Counteer extends Component {
    state = {
        count: 0,
        tags : ["Item 1","Item 2","Item 3"]
    };

    styles = {
        fontSize : 10,
        fontWeight : "bold"
    }

    render() { 

        return (
            <div>
                <span style={this.styles} className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button style={{fontSize:20}} className="btn btn-primary">Increment</button>
                <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
            </div>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const { count } = this.state;
        return count === 0 ? "Zero" : count;
    }
}
 
export default Counteer;