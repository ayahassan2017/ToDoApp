import React, {Component} from "react";
import TodoItems from "./Components/ToDoItems";
import AddItems from "./Components/AddItems";

class App extends Component{
      state={  
        items: [
          {id:1, name:"omar", age:20},
          {id:2, name:"lana", age:21},
          {id:3, name:"taleen", age:22}
        ]
      }
      AddItems = (item) =>{
        item.id = Math.random()
        let items = this.state.items
            items.push(item)
            this.setState({items})
      }
     
      deletItem = (id) => {
          let items =this.state.items.filter(item =>{
            return item.id !==id
          })

          this.setState({items})
        }

  render(){
      return (
      <div>
            <h2>Todo List</h2>
          <div  className="App">
        <TodoItems items = {this.state.items} deletItem ={this.deletItem}/>
        <AddItems newItem = {this.AddItems} />
          
          </div>
      </div>
      )
  }
}

export default App;
