import React, {useState} from 'react'
import './getService.css'
//import Loading from '../Component/Loading'
import GetServiceForm from '../Component/getServiceForm'
import GetServiceData from '../Component/getServiceData'

const GetService = () => {
    const [data, setData] = useState();
    const [user, setUser] = useState();
    const [type, setType] = useState();

    const assignData = (x)=>{
        setData(x)
    }
    const assignUser = (x)=>{
        setUser(x)
    }

    const assignType = (x) => {
        setType(x)
    }

    return(
        <React.Fragment>
            {!data &&<GetServiceForm assignUser={assignUser} assignData={assignData} assignType={assignType} />}
            {user && data && <GetServiceData user={user} data={data} type={type}/>}
        </React.Fragment>
        
    )
}

export default GetService