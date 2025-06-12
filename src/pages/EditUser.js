import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

function EditUser() {
  const navigate = useNavigate();
  const{id} = useParams()

  const [userInput, setUserInput] = useState({
    
    name: "",
    age: "",
    phone: "",
    mail: "",
  })

  useEffect(()=>{
    getData();
  },[]);

  const getData = async()=>{
    const userData = await axios.get(
     `https://683de27e199a0039e9e7335c.mockapi.io/EMP/EMP/${id}`
    )
    setUserInput(userData.data);
    // console.log(userData.data);
    
  }

  const handleChange = ({ target: { name, value } }) => {
    setUserInput({...userInput, [name]:value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const {name, age, phone, mail } = userInput;

    const postData = await axios.put(
      `https://683de27e199a0039e9e7335c.mockapi.io/EMP/EMP/${id}`,
      { name, age, phone, mail }
    );

    if(postData) {
      navigate("/user");
    }
  }

  return (
    <div className='form_container'>
      <form onSubmit={handleSubmit}>
        <h1 style={{ textAlign: "center" }}>
          Edit details
        </h1>
        
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
            value={userInput.name}
            autoComplete='off'
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Age
          </label>
          <input
            type="number"
            class="form-control"
            id='exampleInputEmail1'
            aria-describedby='emailHelp'
            name='age'
            onChange={handleChange}
            value={userInput.age}
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
            value={userInput.phone}
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
            value={userInput.mail}
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

export default EditUser
