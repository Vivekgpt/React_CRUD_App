import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      act: 0,
      index: '',
      items: []
    }
  } 

  // componentDidMount(){
  //   this.refs.first_name.focus();
  // }

  fSubmit = (e) =>{
    e.preventDefault();

    let items = this.state.items;
    let first_name = this.refs.first_name.value;
    let last_name = this.refs.last_name.value;

    if(this.state.act === 0){   //new
      let data = {
        first_name, last_name
      }
      items.push(data);
    }else{                      //update
      let index = this.state.index;
      items[index].first_name = first_name;
      items[index].last_name = last_name;
    }    

    this.setState({
      items: items,
      act: 0
    });

    this.refs.myForm.reset();
    // this.refs.first_name.focus();
  }

  dataRemove = (i) => {
    let items = this.state.items;
    items.splice(i,1);
    this.setState({
      items: items
    });

    this.refs.myForm.reset();
    // this.refs.first_name.focus();
  }

  dataEdit = (i) => {
    let data = this.state.items[i];
    this.refs.first_name.value = data.first_name;
    this.refs.last_name.value = data.last_name;

    this.setState({
      act: 1,
      index: i
    });
    // this.refs.first_name.focus();
  }  

  render() {
    let items = this.state.items;
    return (
      <div className="App">
        <h2>React CRUD Application</h2>
        <form ref="myForm" className="myForm row">
          <input type="text" ref="first_name" placeholder="your first_name" className="form-control col-3 m-5" />
          <input type="text" ref="last_name" placeholder="your last_name" className="form-control col-3 m-5" />
          <button onClick={(e)=>this.fSubmit(e)} className="myButton btn btn-outline-dark m-5">submit </button>
        </form>
        <table className="table">
          <thead className="table-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Edit</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          {items.map((data, i) =>
              <tbody key={i}>
                <tr>
                  <th scope="row">{i+1}</th>
                  <td>{data.first_name}</td>
                  <td>{data.last_name}</td>
                  <td><button onClick={()=>this.dataEdit(i)} className="btn btn-outline-dark myListButton">edit </button></td>
                  <td><button onClick={()=>this.dataRemove(i)} className="btn btn-outline-danger myListButton">Delete </button></td>
                </tr>
              </tbody>
          )}
        </table>
      </div>
    );
  }
}

export default App;