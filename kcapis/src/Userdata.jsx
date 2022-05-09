import React,{useState, useEffect} from 'react'

const Userdata = () => {
    const [users, setUsers] = useState([]);
    useEffect(()=> {
        async function fetchUser(){
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const fetchedUsers  = await response.json(response);
            console.log(fetchedUsers);
            setUsers(fetchedUsers);
            
        }
          fetchUser();
    }, [])
  return (
      <div>
          <h1 className='text-center text-6xl font-medium text-green-900 my-5'>User Data</h1>
          <div className='grid  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4'>
        {users.map(user =>(
            <div key={user.id} className="p-6 max-w-2xl mx-auto bg-cyan-100 rounded-xl shadow-md my-3 ">
                <h1 className="text-5xl  font-medium text-gray-900 mb-9 text-justify ml-3">{user.name}</h1>
                
                <div className='max-w-l mx-auto items-center ml-3 ml-md-16'>
                    <h3 className="text-2xl font-medium text-blue-900 my-5 ">General Info</h3>
                <p className="text-sm font-medium text-gray-900 my-3 "> Username  <span className='ml-9'>{user.username}</span></p>
                    <p className="text-sm font-medium text-gray-900 flex flex-row my-3"> <span className='mr-1'>Email</span> <span className='ml-16 flex-wrap'>{user.email}</span> </p>
                    <p className="text-sm font-medium text-gray-900 my-2 flex  flex-row"><span className='mr-6'>Address</span> <span className='ml-7 flex-wrap'>{user.address.street}, {user.address.suite}, {user.address.city}</span></p>
                    <p className="text-sm font-medium text-gray-900 my-3 "> <span className='mr-10'>Lat</span> <span className='ml-10'>{user.address.geo.lat}</span></p>
                    <p className="text-sm font-medium text-gray-900 my-3 "><span className='mr-10'>Lng</span> <span className='ml-9'>{user.address.geo.lng}</span></p>
                    <p className="text-sm text-gray-900  font-medium my-3"> <span className='mr-8'>Phone</span> <span className='ml-7'>{user.phone}</span></p>
                    <p  className="text-sm text-gray-900  font-medium my-3"><span className='mr-6'>Website</span> <span className='ml-6'>{user.website}</span></p>
                    <p className="text-sm text-gray-900 flex  flex-row font-medium my-3"><span className='mr-1'>Company</span><span className='ml-10 flex-wrap'>{user.company.name}, {user.company.catchPhrase}, {user.company.bs}</span></p>
                
                    
                </div>
            </div>
  ))}
    </div>
      </div>
   
  )
}

export default Userdata