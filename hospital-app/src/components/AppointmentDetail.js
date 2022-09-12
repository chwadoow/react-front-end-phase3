import React, { useEffect } from 'react'
import { useParams } from "react-router-dom"

function AppointmentDetail(id) {

  const [details,setDetails]=useState(null)
  const {id} = useParams()

  useEffect(() => {
    fetch(`https://appointmentmos.herokuapp.com/appointments/${id}`)
        .then(r => r.json())
        .then(data => console.log(data))
}, [id])


  return (
    <div>{details.id}</div>
  )
}

export default AppointmentDetail