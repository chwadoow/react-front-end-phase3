import React from 'react'
import {Link} from 'react-router-dom'
function Appointment({item,onItemDelete}) {
const {id,appointment_date,appointment_duration,appointment_reason,appointment_type} = item


function handleDelete (){
  fetch (`http://localhost:9292/appointments/${id}`,{
      method: "DELETE",
})
  onItemDelete(id)
}
  return (
    <div>
    
       <table className="table table-striped table-hover"  >
                            <thead>
                                <tr>
                                <th scope="col">Date</th>
                                <th scope="col">Duration</th>
                                <th scope="col">Reason</th>
                                <th scope="col">Type</th>
                              
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                <td>{appointment_date}</td>
                                <td>{appointment_duration}</td>
                                <td>{appointment_reason}</td>
                                <td>{appointment_type}</td>
                               
                                <td>
                                    <button type="button" className="btn btn-danger" onClick={handleDelete}>DELETE</button>
                                    
                                </td>
                                
                                </tr>
                            
                            </tbody>
                           
                            </table>  
                            <Link to={`/appointments/${id}`}>see more</Link>
                            </div>



    



    
  )
}

export default Appointment