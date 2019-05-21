import React from 'react'
import { render } from 'react-dom'
// import logo from './logo.svg'
// import './main.css'
import RootContainer from './components/root-container'
import Menu from './components/menu'
// import Assignments from './components/assignments'
import AssignmentsTable from './components/assignments-table'
// import SubjectsTable from './components/subjects-table'
// import Counter from './components/counter'


const pages = [
  { label: 'Assignments', content: <AssignmentsTable /> }
  // { label: 'Subjects', content: <SubjectsTable /> },
  // { label: 'Graphs', content: 'Graphs go here...' }
]

function App() {
  return (
    <RootContainer>
      <Menu pages={pages} />
    </RootContainer>
  )
}

render(<App />, document.getElementById('root'))