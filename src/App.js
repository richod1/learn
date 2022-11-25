import './index.css';
import Home from './components/Home';
import {useState} from 'react';
import {v4 as uuidv4} from 'uuid'


function App() {
  const [role,setRole]=useState('dev');

  const [employees,setEmployees]=useState([
    {
      id:1,
      name:"Degraft",
      role:"AppDeveloper",
      img:"https://images.pexels.com/photos/2232981/pexels-photo-2232981.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id:2,
      name:"Frimpong",
      role:"IosDeveloper",
      img:"https://images.pexels.com/photos/13743846/pexels-photo-13743846.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
    },
    {
      id:3,
      name:"Kweku",
      role:"Manager",
      img:"https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id:4,
      name:"Silver",
      role:"ReactDeveloper",
      img:"https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id:5,
      name:"Dollor",
      role:"WebDeveloper",
      img:"https://images.pexels.com/photos/2741701/pexels-photo-2741701.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id:6,
      name:"Daniel",
      role:"AndriodDeveloper",
      img:"https://images.pexels.com/photos/3748221/pexels-photo-3748221.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id:7,
      name:"Monica",
      role:"BackEndDev",
      img:"https://images.pexels.com/photos/2167673/pexels-photo-2167673.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id:8,
      name:"Morine",
      role:"Tester QA",
      img:"https://images.pexels.com/photos/2104252/pexels-photo-2104252.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
  ]);
  
  function updateEmployee(id, newName, newRole){
    const updatedEmployees = employees.map((employee)=>{
      if(id === employee.id){
        return {...employee, name: newName, role:newRole};
      }

      return employee;

    });
    setEmployees(updatedEmployees);
    
  }
  return (
    <div className="App bg-green-300">
     
      <input type="text" onChange={(e)=>{ 
      // console.log(e.target.value);
      setRole(e.target.value);
       
      } }
      />
      <div className="">
       {employees.map((employees)=>{
        console.log(employees);
        return ( 
        <Home 
        key={uuidv4()}
        name={employees.name}
        role={employees.role}
        img={employees.img}
     updateEmployee={updateEmployee}
        />);

      })}
      
      
      </div>
      
     
      
    </div>
  );
}

export default App;
