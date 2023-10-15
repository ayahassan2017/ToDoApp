
import React  from 'react';
 
const TodoItems =  (props) => {
    const {items , deletItem} = props;
    let length =items.length
    let listItems = length ?  items.map(item => {
        return(
            <div key={item.id}>
                <span className='name'>{item.name}</span>
                <span className='age'>{item.age}</span>
                <span className='action icon' onClick={()=> deletItem(item.id) }>Delete</span>

            </div>
        )
    })
      : 
      <p className='p'> there is no items</p>
        return (
            <div className='listitem'>
                <div>
                    <span className='name title'>Name</span>
                    <span className='age title'>Age</span>
                    <span className='action title'>Action</span>

                </div>
                {listItems}
            </div>
        )
    }

export default TodoItems;