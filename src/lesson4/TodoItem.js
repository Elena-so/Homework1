import React from 'react'
import CheckBox from './CheckBox'

class TodoItem extends React.Component {

    /* state ={mouse:false}
    handleMouse=(flag)=>{
     return()=>{
       // console.log(flag)
     this.setState({mouse:flag})
     }
    } */
      //<div className="checkbox"  onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}> 
    /*  <button onClick={handleDelete} style={{display:mouse?'block':'none'}}  ></button> */

    render() {
        
        const { data,deleteChangeStatus, changeStatus } = this.props
        //const {mouse}=this.state
        const handleChange = (checked) => changeStatus(data.id, checked)
        const handleDelete = () =>deleteChangeStatus(data.id)
        const className = "todo-item ui-state-default " + (data.completed ? 'completed' : 'pending')
        return <li className={className}>
            <div  className="checkbox">
                
                <label style={{width:"50"}}>
                    {
                        // <input type="checkbox" value="" /> {data.text}
                    }
                    <CheckBox checked={data.completed} onChange={handleChange} />
                    {data.text}
                </label>    
            </div>
            <button  onClick={handleDelete} >删除</button>
            
            </li>
                
    }
}

export default TodoItem