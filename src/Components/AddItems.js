import React , {Component} from 'react';

class AddItems extends Component{
    state={
        name:'',
        age:''
    }
    handleChange = (e) => {
      this.setState({
        [e.target.id] : e.target.value

      })
        console.log(e.target.value);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if (e.target.name.value ===''){
          return false
        } else{
          this.props.newItem(this.state);
        this.setState({
            name:'',
            age:''
        })
        }
    }

    render(){
        return (
            <div className='inp'>
              <form onSubmit={this.handleSubmit}>
                <input className='inp1' type='text' placeholder='Enter name'  id='name' onChange={this.handleChange} value={this.state.name}/>
                <input className='inp2' type='number' placeholder='Enter age' id='age'  onChange={this.handleChange} value={this.state.age}/>
                <input className='inp3' type='submit' value="ADD" />
              </form>
            </div>
        )
    }
}
export default AddItems;