import React , {useEffect,useState}from 'react'

// import AppointmentList from './AppointmentList';

function Home() {
  // const [appointments,setAppointments]= useState([])

  // useEffect(() => {
  //   fetch("http://localhost:9292/appointments")
  //     .then((r) => r.json())
  //     .then((data) => setAppointments(data));
  // }, []);
  // console.log(appointments)
  // const appointment=appointments.map((item)=>(
  //   <Item
  //   key={item.id}
  //   id={item.id}
  //   item={item} />
  // ))

  

  return (
    <div id="home">
      <h1>Home </h1>
      <h3>Appointments</h3>

  {/* <AppointmentList
  appointments={appointments}
  //funcs
  OnItemDelete={handleDeleteItem}
  />       */}


  
</div>
  )
}

export default Home