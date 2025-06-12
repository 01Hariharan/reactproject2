import axios from 'axios'
import React,{useEffect,useState} from 'react'
import { Link } from 'react-router-dom'


function Userlist() {
    const [datas,setDatas] = useState([])

    useEffect(()=>{
        getUsers();
    },[]);

    const getUsers = async()=>{
        const userData = await axios.get(
            "https://683de27e199a0039e9e7335c.mockapi.io/EMP/EMP"
        );
        setDatas(userData.data);
    };

    const handleDelete=async(id)=>{
      const deletedData=await axios.delete(
        `https://683de27e199a0039e9e7335c.mockapi.io/EMP/EMP/${id}`
      )
      if(deletedData){
        getUsers()
      }
    }

  return (
    <div>
        <Link to={"/create"} className="btn btn-primary m-4">
        Create User
        </Link>
      <table class="table table-stripped">
  <thead>
    <tr>
      <th scope='col'>#</th>
      <th scope="col">name</th>
      <th scope="col">Age</th>
      <th scope="col">Phone</th>
      <th scope="col">mail</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
    {datas.map((item) => {
        return(
            <tr>
                <th scope="row">{item.id}</th>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.phone}</td>
                <td>{item.mail}</td>
                <td>
                  <Link to={`/edit/${item.id}`}
                  className='btn btn-success btn-sm'>
                    Edit
                    </Link>
                </td>
                <td>
                  <button className='btn btn-danger btn-sm'
                  onClick={()=>handleDelete(item.id)}>
                    Remove
                  </button>
                </td>
                
            </tr>
        );
    })}
  </tbody>

</table>
    </div>
  )
}

export default Userlist;
