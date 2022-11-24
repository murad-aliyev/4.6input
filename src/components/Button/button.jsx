import React,{Component} from 'react'
import './style.css'

class SubscribeButton extends Component {
 
  state = { name: "Murad",
            email: "murad.aliev.2003m@gmail.com",
            password: "12345678",
            ischecked: false
          };

  handleChange = (event) => {
      this.setState({[ event.target.name] : event.target.value});
  }

  handleCheckboxChange = (event) => {
    this.setState({ ischecked: !this.state.ischecked });
  }

  handleClick1 = () => this.setState({ name: ""});
  handleClick2 = () => this.setState({ email: ""});
  handleClick3 = () => this.setState({ password: "" });

  render() {
    return (
      <div className='app'>
        <p>{JSON.stringify(this.state)}</p>
        <label htmlFor="name">Name:<br></br>
        <input
          value={this.state.name} 
          id="name"
          name="name"
          onChange={this.handleChange}/><button onClick={this.handleClick1}>x</button><br></br>
        </label>
        <label htmlFor="email">Email:<br></br>
        <input
        value={this.state.email} 
          type="email"
          id="email"
          name="email"
          onChange={this.handleChange}/><button onClick={this.handleClick2}>x</button><br></br>
        </label>
        <label htmlFor="password">Password:<br></br>
        <input
          value={this.state.password} 
          type={this.state.ischecked?"text":"password"}
          id="password"
          name="password"
          onChange={this.handleChange}/><button onClick={this.handleClick3}>x</button><br></br>
        <label> Show password
        <input
           type="checkbox"
           checked={this.state.ischecked}
           onChange={this.handleCheckboxChange}
         />
       </label>
      </label>
      </div>
    );
  }
 }

 export default SubscribeButton