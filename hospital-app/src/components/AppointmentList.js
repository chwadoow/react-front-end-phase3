import React from 'react'
import Appointment from './Appointment'


function AppointmentList({appointments,onItemDelete}) {

  const appointment=appointments.map((item)=>(
    <Appointment
    key={item.id}
    id={item.id}
    item={item}
    onItemDelete={onItemDelete}
    />
    
))


  return (
    <div>
          
            {/* {appointments.map((item)=>(
            <Appointment
            key={item.id}
            id={item.id}
            item={item}
            onItemDelete={onItemDelete}
            />
            
        ))} */}
        {appointment}
     
    </div>
  )
}

export default AppointmentList