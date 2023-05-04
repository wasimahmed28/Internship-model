import React, { useRef, useState } from "react";
import arrow from '../images/arrow.png'
function Contact() {
  const formRef = useRef();
  const [form, setForm] = useState({
    fname: "",
    lname: "",
    email: "",
    number: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
   
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

   
  };
  return (
    <div id='contact'>
    <div className="text">
      <h1>let's talk</h1>
      <p>have some great idea or brand to develop? Let's build it together!</p>
      <span>Our team will reach out to you as soon as possible</span>
    </div>
    <div>
    <form  ref={formRef}
        onSubmit={handleSubmit}>
      <input  type='text'
            name='fname'
            value={form.fname}
            onChange={handleChange} placeholder='FIRST NAME ' required/>
              <input  type='text'
            name='lname'
            value={form.lname}
            onChange={handleChange} placeholder='LAST NAME ' required/>
      <input  type='email'
            name='email'
            value={form.email}
            onChange={handleChange} placeholder='EMAIL ' required/>
              <input  type='number'
            name='number'
            value={form.number}
            onChange={handleChange} placeholder='PHONE NUMBER ' required/>
      <textarea  rows={4}
            name='message'
            value={form.message}
            onChange={handleChange} placeholder='MESSAGE '  id="" cols="30" ></textarea>
      <button value="Send"  type='submit' > <img src={arrow} alt="" /></button>
    </form>
    </div>
  </div>
  )
}

export default Contact
