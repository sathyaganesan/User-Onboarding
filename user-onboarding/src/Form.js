import React, { useState } from "react";
import * as yup from 'yup';
import axios from 'axios';

const formSchema = yup.object().shape({
    name: yup.string().required("Name is a required feild"),
    email: yup.string().email().required("Email is mandatory"),
    password: yup.string().required("Password is required"),
    role: yup.string(),
    terms: yup.boolean().oneOf([true], "Please agree to terms and condition"),
});

const Form = (props) => {
  const [formstate, setFormstate] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
    terms: false
  });
    
    const [errorstate, setErrorstate] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
    terms: ""
    })
    // validaform variable was not working 
    const validate = e => {
        yup.reach(formSchema, e.target.name)
            .validate(e.target.value)
            .then(valid => {
                setErrorstate({...errorstate, [e.target.name]: ""})
            
            })
            .catch(err => {
                setErrorstate({ ...errorstate, [e.target.name]: err.errorstate });
            console.log(err.errors)
        })
    };

  const formSubmit = (e) => {
      e.preventDefault();
    //   props.formattr(formstate);
      console.log("form Submitted");
      axios.post(`https://reqres.in/api/users`, formstate)
          .then(res => console.log(res))
          .catch(err => console.log(err));
  };

    const changeHandler = (e) => {
        console.log(e.target.value, e.target.checked);
        e.persist();
        validate(e);
        let anyvariable = e.target.type === "checkbox" ? e.target.checked : e.target.value
    setFormstate({ ...formstate, [e.target.name]: anyvariable });
  };

  return (
    <div>
      <h2> Form </h2>
      <form onSubmit = {formSubmit}>
        <p><label htmlFor="name">Name:  </label>
        <input type="text" name="name" id = "name" value = {formstate.name} onChange={changeHandler} /></p>
              
        <p><label htmlFor="email">E-mail:
            {/* {errorstate.email.length > 0 ? (<p>{errorstate.email}</p>) : null} */}
              </label>
        <input type="email" name="email" id = "email" value = {formstate.email} onChange={changeHandler} /></p>
              
        <p><label htmlFor = "password"> Password: </label>
        <input type="password" name="password" id = "password" value = {formstate.password} onChange={changeHandler} /></p>
        
        <p><label htmlFor = "role">Role of User: </label>
            <select value={formstate.role} name="role" id="role" onChange={changeHandler}>
                <option value = "">--Please Select--</option>
                <option value = "senior_software_engineer">Senior Software Engineer</option>
                <option value = "software_engineer">Software Engineer</option>
                <option value = "software_developer">Software Developer</option>
                <option value = "junior_developer">Junior Developer</option>
                <option value = "programmer_analyst">Programmer Analyst</option>
                <option value = "software_testing_officer">Software Testing Officer</option>
                <option value = "quality_testing_officer">Quality Testing Officer</option>
                <option value = "team_lead">Team Lead</option>
            </select></p>
              
              <p><label htmlFor="terms">I agree the terms and conditions<input type="checkbox" id="terms" name="terms" onChange = {changeHandler} checked={formstate.terms}/></label></p>    
        <button>Submit</button>
      </form>
    </div>
  );
}; 

export default Form;
