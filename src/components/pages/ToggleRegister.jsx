import React, { useState } from 'react'
import FacultyRegister from '../FacultyRegister'
import StudentRegister from '../StudentRegister'

function ToggleRegister() {
  const [toggle,setToggle] = useState(false)

  function facultyToggle (){
    setToggle(false)
  }

  function studentToggle (){
    setToggle(true)
  }
  return (
    <div classname="bg-slate-950 m-2">
      <button onClick={facultyToggle} className="btn btn-info mr-1" disabled={ !toggle }>Faculty</button>
      <button onClick={studentToggle} className="btn btn-info" disabled={toggle}  >Student</button>
      {/* <FacultyRegister/>
      <StudentRegister/> */}

      {
        !toggle ? <FacultyRegister/> : <StudentRegister/>
      }
    </div>
  )
}

export default ToggleRegister