import React from 'react';
import './styles.css';
export default class Form extends React.Component{
  state={
    name:'',
    email:'',
    message:'',
  };

onSubmit=(e)=>{
  e.preventDefault();
  console.log(this.state)
  this.setState({
    name:'',
    email:'',
    message:'',
  });
};



render(){
  return(
      <form className="box">
        <h1>CONTACT</h1>
        <input type="text" placeholder='Name'
        value={this.state.name}
        onChange={e=> this.setState({ name: e.target.value})}
        />
        <input type="text" placeholder='hello@world.com'
        value={this.state.email}
        onChange={e=> this.setState({ email: e.target.value})}
        />
        <input type="text" placeholder='Message'
        value={this.state.message}
        onChange={e=> this.setState({ message: e.target.value})}
        />
        <button onClick={e=>this.onSubmit(e)}>Submit</button>
      </form>
    );
  }
}
