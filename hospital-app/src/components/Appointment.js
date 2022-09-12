import React from 'react'





function Appointment({item,onItemDelete}) {
const {id,appointment_date,appointment_duration,appointment_reason,appointment_type} = item

function handleDelete (){
  fetch (`https://appointmentmos.herokuapp.com/appointments/${id}`,{
      method: "DELETE",
})
  onItemDelete(id)
}
  return (
    <div>
    
       <table className="table table-striped table-hover" style={{padding:20}}  >
                            <thead>
                                <tr>
                                <th scope="col">Date</th>
                                <th scope="col">Duration</th>
                                <th scope="col">Reason</th>
                                <th scope="col">Type</th>
                                <th scope="col">Doctor name</th> 
                                <th scope="col">patient_firstname</th> 
                              
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                <td>{appointment_date}</td>
                                <td>{appointment_duration}</td>
                                <td>{appointment_reason}</td>
                                <td>{appointment_type}</td>
                                <td>{item.doctor.doctor_firstname} { item.doctor.doctor_lastname}</td> 
                                <td>{item.patient.patient_firstname} { item.patient.patient_lastname}</td> 
                               
                                <td>
                                    <button type="button" className="btn btn-danger" onClick={handleDelete}>DELETE</button>
                                    
                                </td>
                                
                                </tr>
                            
                            </tbody>
                           
                            </table>  
                         
                            </div>



    



    
  )
}

export default Appointment