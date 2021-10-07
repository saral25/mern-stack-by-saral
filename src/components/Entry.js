import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'

class Entry extends React.Component {
    constructor() {
        super()
        this.state = {
            name: "",
            batch: "",
            branch: ""
        }

        this.handleName=this.handleName.bind(this)
        this.handleBatch=this.handleBatch.bind(this)
        this.handleBranch=this.handleBranch.bind(this)

        this.onSubmit=this.onSubmit.bind(this)
    }
    handleName(e) {
        this.setState({
            name: e.target.value
        })
    }
    handleBatch(e) {
        this.setState({
            batch: e.target.value
        })
    }
    handleBranch(e) {
        this.setState({
            branch: e.target.value
        })
    }
    onSubmit(e) {
        e.preventDefault()
        
        const student = {
            name: this.state.name,
            batch: this.state.batch,
            branch: this.state.branch
        }
        if(student.name.length == 0 || student.batch.length ==0 || student.branch.length === 0)
        alert("Field(s) can't be empty.")
        else {
        console.log(student)
        
        axios.post('http://localhost:8080/entry', student).
        then(res => console.log(res.data))
        
        alert("Student Details Added")
        this.setState({
            name: "",
            batch: "",
            branch: ""
        })
        }
    }
    render() {
    return (
        <>
        <h1>This page is for entering the details of students.</h1>
        <form action="POST" onSubmit={this.onSubmit} style={{margin: "5rem", marginRight:  "10rem"}}>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Full Name</label>
    <input type="text" onChange={this.handleName} className="form-control" value={this.state.name} id="exampleInputEmail1" aria-describedby="emailHelp" /> 
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Batch</label>
    <input type="text" onChange={this.handleBatch} value={this.state.batch} className="form-control" id="exampleInputPassword1" /> 
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Branch</label>
    <input type="text" onChange={this.handleBranch} value={this.state.branch} className="form-control" id="exampleInputPassword1" /> 
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
        </>
    )
    }
}

export default Entry