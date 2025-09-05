import {useEffect} from 'react'
import axios from 'axios'
import Layout from '../components/Layout'
import { useState } from 'react'
import { Row } from 'antd'
import DoctorList from '../components/DoctorList'


const HomePage = () => {
const [doctors, setDoctors] = useState([])

  //login user data
const getUserData=async()=>{
  try{
    const res=await axios.get(`${import.meta.env.VITE_SERVER}/api/v1/user/getAllDoctors`,{
      headers:{
        Authorization:"Bearer "+localStorage.getItem("token")
      }
    })
    if(res.data.success){
      setDoctors(res.data.data)
    }
  }catch(error){
    console.log(error)
  }
}

useEffect(()=>{
  getUserData()
}
,[])
return (
  <Layout>
   
    <h1 className='text-center'>Choose Your Doctor</h1>
    <Row>
      {doctors && doctors.map((doctor)=>
        <DoctorList doctor={doctor}/>
      )}
    </Row>
    </Layout>
)

}

export default HomePage
