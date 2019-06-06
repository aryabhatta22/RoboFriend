import React, {
    Component
} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll'
import {
    robots
} from '../robots.js';
import ErrorBoundry from '../components/ErrorBoundry'
import './App.css'


class App extends Component {

    constructor() {
        super()

        this.state = {
            robots: robots,
            searchfield: ''
        }

    }

    onSearchChange=(event)=> {
        this.setState({searchfield: event.target.value})
        
    }
    
    
    render() {
        
        const filterRobots=this.state.robots.filter(robot=>{
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        
        return ( <
            div className = 'tc' >
            <
            h1 className='f1' > RoboFriends < /h1> <
            SearchBox searchChange={this.onSearchChange} / >
                <Scroll>
                <ErrorBoundry>
                
            <
            CardList robots = {
                filterRobots
            }
                
            />
                </ErrorBoundry>
                </Scroll><
            /div>
        );

    }
}

export default App;
