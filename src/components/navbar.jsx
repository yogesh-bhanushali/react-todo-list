import React from 'react';
//Stateless Functional Component

const NavBar = ({totalCounters}) => {
    return ( 
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="#">NavBar 
                <span className="badge badge-pill badge-primary">
                    {totalCounters}
                </span>
            </a>
        </nav>
    );
}

/*class NavBar extends Component {
    render() { 
        return ( 
            <nav className="navbar navbar-light bg-light">
                <a className="navbar-brand" href="#">NavBar 
                    <span className="badge badge-pill badge-primary">
                        {this.props.totalCounters}
                    </span>
                </a>
            </nav>
         );
    }
}*/
 
export default NavBar;