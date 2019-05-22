import React from 'react'
import { render } from 'react-dom'
import RootContainer from './components/root-container'
import Menu from './components/menu'
import AssignmentsTable from './components/assignments-table'

const pages = [
  { label: 'Assignments', content: <AssignmentsTable /> }
]

function App() {
  return (
    <RootContainer>
      <Menu pages={pages} />
    </RootContainer>
  )
}

render(<App />, document.getElementById('root'))