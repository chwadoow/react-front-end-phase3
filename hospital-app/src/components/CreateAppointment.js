 import React,{useState} from 'react'
 
 function CreateAppointment({handleAddAppointment}) {
    const[formData, setFormData] = useState({
        appointment_date:'',
        appointment_duration: '',
        appointment_reason: '',
        appointment_type: '',
        doctor_id: '',
        patient_id: '',
       
    })


    function handleChange(e){

   
        setFormData({...formData, [e.target.id]: e.target.value});
    }

    function handleSubmit(e){
        e.preventDefault()
        fetch(`http://localhost:9292/appointments`, {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(formData),
        })
        .then((r) => r.json())
        .then((data) => handleAddAppointment(data))
        setFormData(
            {   appointment_date:'',
                appointment_duration: '',
                appointment_reason: '',
                appointment_type: '',
                doctor_id: '',
                patient_id: '',
               
            }
        )
    }



   return (
     <div>
         <form className="row g-3" onSubmit={handleSubmit}>
         <div className="col-md-6">
                    <label className="form-label">Enter Datetime</label>
                    <input type="datetime-local" className="form-control" id="appointment_date"  placeholder="Enter Date"  onChange={handleChange} value={formData.appointment_date} required/>
                </div>
                  <div className="col-md-6">
                    <label className="form-label">Duration</label>
                    <input type="integer" className="form-control" id="appointment_duration"  placeholder="Enter Duration"  onChange={handleChange} value={formData.appointment_duration} required/>
                </div>
                <div className="col-md-6">
                    <label className="form-label">Reason</label>
                    <input type="text" className="form-control" id="appointment_reason" onChange={handleChange} placeholder="Enter Reason" value={formData.appointment_reason} required/>
                </div>
                <div className="col-md-6">
                    <label className="form-label">Type</label>
                    <input type="text" className="form-control" id="appointment_type" placeholder="Type" onChange={handleChange} value={formData.appointment_type} required/>
                </div>
                <div className="col-md-6">
                    <label className="form-label">Doc_id</label>
                    <input type="integer" className="form-control" id="doctor_id" placeholder="Enter doc_id" onChange={handleChange} value={formData.doctor_id} required/>
                </div>
                <div className="col-md-6">
                    <label className="form-label">Patient_id</label>
                    <input type="integer" className="form-control" id="patient_id" onChange={handleChange} value={formData.patient_id} required/>
                </div>
                <button type="submit" className="btn btn-primary">Create</button>
                </form>
        




     </div>
   )
 }
 
 export default CreateAppointment