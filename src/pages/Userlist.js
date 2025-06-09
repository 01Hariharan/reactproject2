import axios from 'axios'
import React,{useEffect,useState} from 'react'
import { Link } from 'react-router-dom'


function Userlist() {
    const [datas,setDatas] = useState([])

    useEffect(()=>{
        getUsers()
    },[])

    const getUsers = async()=>{
        const userData = await axios.get(
            "https://683de27e199a0039e9e7335c.mockapi.io/EMP/Emp_details"
        );
        setDatas(userData.data);
    }
    

  return (
    <div>
        <Link to={"/create"} className="btn btn-primary m-4">
        Create User
        </Link>
      <table class="table table-stripped">
  <thead>
    <tr>
      
      <th scope="col">ID_no</th>
      <th scope="col">name</th>
      <th scope="col">DOB</th>
      <th scope="col">Phone</th>
      <th scope="col">mail</th>
      
    </tr>
  </thead>
  <tbody>
    {datas.map((item) => {
        return(
            <tr>
                <th scope="row">{item.ID_no}</th>
                <td>{item.name}</td>
                <td>{item.DOB}</td>
                <td>{item.Phone}</td>
                <td>{item.mail}</td>
                </tr>
        );
    })}
  </tbody>

</table>
    </div>
  )
}

export default Userlist
