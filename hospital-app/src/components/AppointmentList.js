import React from 'react'
import Appointment from './Appointment'

function AppointmentList({appointments,onItemDelete}) {
  return (
    <div>
            {appointments.map((item)=>(
            <Appointment
            key={item.id}
            id={item.id}
            item={item}
            onItemDelete={onItemDelete}
            />
        ))}
    </div>
  )
}

export default AppointmentList