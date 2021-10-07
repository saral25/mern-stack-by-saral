import react from 'react'
import ReactDOM from 'react-dom'

function StudentCard(props) {
    return (
        <>
        <div class="card" style={{width: "20rem",  margin: "2rem"}}>
        <div class="card-body" style={{backgroundColor: "black", color: "white"}}>
            <h5 class="card-title">{props.name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">{props.batch}</h6>
            <p class="card-text">{props.branch}</p>
        </div>
        </div>
        </>
    )
}

export default StudentCard