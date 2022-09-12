import React , {useEffect,useState}from 'react'
import AppointmentList from './AppointmentList';
import CreateAppointment from './CreateAppointment';
function Appointments() {

    const [appointments,setAppointments]= useState([])
    useEffect(() => {
        fetch("https://appointmentmos.herokuapp.com/appointments")
          .then((r) => r.json())
          .then((data) => setAppointments(data));
      }, []);
    
    function handleDeleteItem (id){
        const updatedItems = appointments.filter((item)=> item.id !== id)
        setAppointments(updatedItems)
      }    

      function handleAddAppointment(newAppointment){
        setAppointments([...appointments,newAppointment])
      }
  return (
  
            <div >
                <CreateAppointment
                onAddAppointment={handleAddAppointment}
                />
      
      <h3>Appointments</h3>

  <AppointmentList
  appointments={appointments}
  //funcs
  onItemDelete={handleDeleteItem}
  />   


        </div>
  )
}

export default Appointments