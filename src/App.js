import React,{Component} from 'react';
import { CardList } from './components/card-list/Card-list';
import { SearchBox } from './components/searchBox/SearchBox';
import './App.css';
class App extends Component{
  constructor(){
    super();
    this.state ={
      Monster: [],
      FilterSearch:''
      
    }

    

  }

  handleChange = e =>{
    this.setState({FilterSearch: e.target.value});
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({Monster:users}))
  }
  render(){
    const {Monster,FilterSearch } = this.state
    const filterMonster = Monster.filter(monster => 
      monster.name.toLowerCase().includes(FilterSearch.toLowerCase())
      )

    return (
      <div className="App">
        

        <h1 className='heading' >Monsters Rolodex</h1>
        <SearchBox placeholder='Search Monster' handleChange={this.handleChange }/>
        <CardList monster ={filterMonster}/>
        
       
       
      </div>
    );

  }
}



export default App;
