import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import "./CreateUser.css";

function CreateUser() {

  const navigate = useNavigate();

  const [userInput, setUserInput] = useState({
    id_no: "",
    name: "",
    dob: "",
    phone: "",
    mail: ""
  })

  const handleChange = ({ target: { name, value } }) => {
    setUserInput({...userInput, [name]:value })
  }

  console.log(userInput);
  

  const handleSubmit = async (e) => {
    e.preventDefault()

    const { id_no, name, dob, phone, mail } = userInput

    const postData = await axios.post(
      "https://683de27e199a0039e9e7335c.mockapi.io/EMP/Emp_details",
      { id_no, name, dob, phone, mail }
    );

    if(postData) {
      navigate("/user")
    }
  }

  return (
    <div className='form_container'>
      <form onSubmit={handleSubmit}>
        <h1 style={{ textAlign: "center" }}>User Registration</h1>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            ID_no
          </label>
          <input
            type="number"
            class="form-control"
            id='exampleInputEmail1'
            aria-describedby='emailHelp'
            name='id_no'
            onChange={handleChange}
            autoComplete='off'
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Name
          </label>
          <input
            type="text"
            class="form-control"
            id='exampleInputEmail1'
            aria-describedby='emailHelp'
            name='name'
            onChange={handleChange}
            autoComplete='off'
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            DOB
          </label>
          <input
            type="date"
            class="form-control"
            id='exampleInputEmail1'
            aria-describedby='emailHelp'
            name='dob'
            onChange={handleChange}
            autoComplete='off'
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Phone
          </label>
          <input
            type="tel"
            class="form-control"
            id='exampleInputEmail1'
            aria-describedby='emailHelp'
            name='phone'
            onChange={handleChange}
            autoComplete='off'
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            mail
          </label>
          <input
            type="email"
            class="form-control"
            id='exampleInputEmail1'
            aria-describedby='emailHelp'
            name='mail'
            onChange={handleChange}
            autoComplete='off'
          />
        </div>

        <button type="submit" class="btn btn-primary">
          submit
        </button>

      </form>

    </div>
  )
}

export default CreateUser
