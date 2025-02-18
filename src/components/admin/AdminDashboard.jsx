import React from 'react'
import AdminSidebar from './AdminSidebar'
import AdminTable from './AdminTable'
import ShowTotal from './ShowTotal'

function AdminDashboard() {
  return (
    <>
      <div className="">
        <ShowTotal/>
        <div className=" flex gap-1 ">

      <AdminSidebar/>
      <AdminTable/>
        </div>
      </div>

    </>
  )
}

export default AdminDashboard