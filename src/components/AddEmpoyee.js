import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
// import Flip from 'react-reveal/Flip';

function AddEmployee(props) {
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [img, setImg] = useState('');


  const [show, setShow] = useState(false);


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
     <button onClick={handleShow} className="block mx-auto m-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">+Add Employee</button>
      

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>+Add Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            
        <form  onSubmit={(e)=>{
            handleClose();
            e.preventDefault();
            setRole('');
            setName('');
            setImg('');
            //console.log("hello from edit employee")
            //console.log(props.id,name,role)
            props.newEmployee(name,role,img);
        }} 
        id="editmodal" className="w-full max-w-sm">
     <div className="md:flex md:items-center mb-6">
    <div className="md:w-1/3">
      <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="name">
        Full Name
      </label>
    </div>
    <div className="md:w-2/3">
      <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="name" 
      placeholder="degraft frimpong"
      type="text" value={name} onChange={(e)=>{
        setName(e.target.value);
      }}/>
    </div>
  </div>
  <div className="md:flex md:items-center mb-6">
    <div className="md:w-1/3">
      <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="role">
        Role
      </label>
    </div>
    <div className="md:w-2/3">
      <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="role" 
      placeholder="Software Developer"
      type="text" value={role} onChange={(e)=>{
        setRole(e.target.value);
      }}/>
    </div>
  </div>
  <div className="md:flex md:items-center mb-6">
    <div className="md:w-1/3">
      <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="img">
        Image Url
      </label>
    </div>
    <div className="md:w-2/3">
      <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="img"
      placeholder='https://frimpsup.com'
      type="text" value={img} onChange={(e)=>{
        setImg(e.target.value);
      }}/>
    </div>
  </div>
</form>

  
        </Modal.Body>
        <Modal.Footer>
            
          {/* <Button variant="secondary" onClick={handleClose}>
            Close
          </Button> */}
          
          <button onClick={handleClose} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center" >Close
          
          </button>
          
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"  form="editmodal">+Add</button>
          
          
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddEmployee;