import React from 'react'
import EditEmployee from './EditEmpoyee'
import Flip from 'react-reveal/Flip';

function Home(props) {
  return (
    <div>
    <div className="min-w-[350px] max-w-[350px] m-4 py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
        <img className="object-cover rounded-full h-[100px] w-[100px] block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0" src={props.img} />
        <div className="text-center space-y-2 sm:text-left">
            <div className="space-y-0.5">
            <p className="text-lg text-black font-semibold">
                {props.name}
            </p>
            <p className="text-slate-500 font-medium">
                {props.role}
            </p>
            </div>
            <Flip left>
            <EditEmployee name={props.name} role={props.role} updateEmployee={props.updateEmployee} id={props.id}/>
            </Flip>
        </div>
</div>
        
    </div>
    
  )
}

export default Home