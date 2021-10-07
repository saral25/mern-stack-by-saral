import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import StudentCard from './StudentCard';

let studentDetails
class Display extends React.Component {
    constructor() {
        super()
        this.state = {
            name: "",
            batch: "",
            branch: "",
            students: [{}]
        }
        this.getData = this.getData.bind(this)
    }
    componentDidMount() {
        axios.get('http://localhost:8080/entry/show')
          .then(res => {
            this.setState({
              students: res.data  
            })
            this.getData()
            this.setState({
                students: [{}]
            })
          })
          .catch((err) => {
              console.log(err)
          })
    }
    getData() {
        console.log(this.state.students)
        studentDetails = this.state.students.map((student)=> {
            return (
              <StudentCard name={student.name} branch={student.branch} batch={student.batch} />
            );
        });
    }

        
    render () {
    return (
        <>
        <h1>This page is for Displaying the details of all students</h1>
        <div style={{display: "flex",flexWrap: "wrap"}}>
        {studentDetails}
        </div>
        </>
    )
    }
}

export default Display