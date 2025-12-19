import { useState } from "react";
import API from "../../api/api";
import "../../styles/landing.css";

function ContactForm() {
  const [form, setForm] = useState({ fullName:"", email:"", mobile:"", city:"" });

  const submit = async (e) => {
    e.preventDefault();
    await API.post("/contact", form);
    alert("Submitted");
    setForm({ fullName:"", email:"", mobile:"", city:"" });
  };

  return (
    <section id="contact">
      <h2>Contact Us</h2>
      <form className="contact-form" onSubmit={submit}>
        <input placeholder="Full Name" onChange={(e)=>setForm({...form,fullName:e.target.value})}/>
        <input placeholder="Email" onChange={(e)=>setForm({...form,email:e.target.value})}/>
        <input placeholder="Mobile" onChange={(e)=>setForm({...form,mobile:e.target.value})}/>
        <input placeholder="City" onChange={(e)=>setForm({...form,city:e.target.value})}/>
        <button>Submit</button>
      </form>
    </section>
  );
}

export default ContactForm;
