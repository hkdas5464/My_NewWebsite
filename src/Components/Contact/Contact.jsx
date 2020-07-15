import React, { useState } from 'react'
const Contact = () => {


  const [data,setData] = useState({
    name:"",
    phone:"",
    email:"",
    message:"",
  })

  const InputEvent =(event)=>{ 
    const {name,value} = event.target;
    setData((prevVal)=>{
      return {
        ...prevVal,
        [name]:value,
      }
    })

  }

const formSubmit =(e)=>{
  e.preventDefault();
  alert("Your Name is "+`${data.name}`+" Your Mobile No is "+`${data.phone}`+" Your Email is "+`${data.email}`+" & Your Message is "+`${data.message}`)
  

}

  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact US</h1>

      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
              <div className="mb-3">
                <label className="form-label">Full Name</label>
                <input type="text" className="form-control" id="exampleDataList" placeholder="Enter Your Name" 
                   name="name"
                  value={data.name}
                  onChange={InputEvent}
                />
              </div>
              <div className="mb-3">
                <label  className="form-label">Phone</label>
                <input type="Number" className="form-control" id="exampleFormControlInput1" placeholder="Mobile Number" 
                  name="phone"
                  value={data.phone}
                  onChange={InputEvent}
                  
                />
              </div>
              <div className="mb-3">
                <label  className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" 
                 name="email"
                  value={data.email}
                  onChange={InputEvent}
                />
              </div>

              <div className="mb-3">
                <label  className="form-label">Message</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Enter Your Message"
                name="message"
                  value={data.message}
                  onChange={InputEvent}></textarea>
              </div>
              <div className="col-12">
                <button className="btn btn-outline-primary" type="submit">Submit form</button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </>
  )
}
export default Contact;