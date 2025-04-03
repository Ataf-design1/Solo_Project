import React from 'react'
import Budjet from '../Components/Budjet'
import ExpenceForm from '../Components/ExpenceForm'
import ExpenceTable from '../Components/ExpenceTable'

const Dashboard = () => {
  return (
    <div>
        <Budjet/>
        <ExpenceForm/>
        <ExpenceTable/>
    </div>
  )
}

export default Dashboard