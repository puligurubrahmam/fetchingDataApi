import { Component } from "react";
import './index.css';
class App extends Component
{
  state={list:[],fetched:true}
  componentDidMount()
  {
    this.fetchData()
  }
  fetchData= async ()=>
    {
      const response=await fetch('https://gorest.co.in/public/v2/users');
      const data=await response.json();
      this.setState({list:data,fetched:false})
    }
  render()
  {
    const {list,fetched}=this.state
    return (
      <div>
        {
          fetched?(<div></div>):(
            <ul>
            {
                list.map(item => (<li>{item.name}</li>))
            }
          </ul>
        )
        }
      </div>
    )
  }
}
export default App