import React, {Component} from 'react';
import CardList from '../components/CardList'
import 'tachyons';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

class App extends Component {

    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users').then(response => {
            return response.json();
        })
        .then(users => {
            this.setState({robots: users});
        });
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value});
    }

    render(){
        //We can also do destructuring 'const {robots, searchfield} = this.state; and use robots and searchfield without this.state'
        const filteredRobos = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        });

        if(this.state.robots.length===0){
           return <h1 className='tc f1'>LOADING</h1>     
        }

        else {
            return(
            <div className='tc'>
                <h1 className='f1'>RoboFriends</h1>
                <SearchBox searchChange = {this.onSearchChange}/>
                <Scroll>
                    <CardList Robots = {filteredRobos} />
                </Scroll>
            </div>
        );
        }
    } 
}

export default App;