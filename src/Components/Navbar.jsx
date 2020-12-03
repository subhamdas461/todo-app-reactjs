import React, { Component } from 'react';
import GitHub from '@material-ui/icons/GitHub'
class Navbar extends Component {
    
    render() {
        return (
            <>
                <div className="nav">
                    <a title="source code" href="https://github.com/subhamdas461/todo-app-reactjs.git" target="blank"><GitHub/></a>
                    <h1>To-do List</h1>
                </div>
            </>
            
        );
    }
}

export default Navbar;
