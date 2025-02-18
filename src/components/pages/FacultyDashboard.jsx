import React from 'react'
import Sidebar from '../Sidebar'
import Card from '../Card'

function FacultyDashboard() {
  return (
    <div className="flex ">
        <Sidebar/>
        <div className="flex flex-wrap justify-center gap-3 p-3 ">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>

        </div>
        
    </div>
  )
}

export default FacultyDashboard