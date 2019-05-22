import React, { useState, useEffect } from 'react'
import MaterialTable from 'material-table'
import axios from 'axios'

// const assignmentsFromDb = [
//   { name: 'Essay 1', status: 1, due_date: '5/20/2019', subject: 'English' },
//   { name: 'Algebra', status: 0, due_date: '5/21/2019', subject: 'Math' },
//   { name: 'Essay 2', status: 0, due_date: '5/22/2019', subject: 'English' },
// ]
const statuses = { 0: 'Not Started', 1: 'In Progress', 2: 'Complete' }
// different colour row for status past due date?

function AssignmentsTable() {
  const [state, setState] = useState({
    data: []
  })
  useEffect(() => {
    axios.get('http://localhost:3000/assignment')
      .then(({ data }) => {
        setState({ ...state, data })
        console.log('updated')
      })
      .catch((err) => {
        console.error(err)
      })
  }, [])
  return (
    <div style={{ maxWidth: '100%' }}>
      <MaterialTable
        title="Assignments"
        columns={[
          { title: 'Name', field: 'name' },
          { title: 'Status', field: 'status', lookup: statuses },
          { title: 'Due Date', field: 'dueDate', type: 'date' },
          { title: 'Subject', field: 'subject' }
        ]}
        data={state.data}
        editable={{
          onRowAdd: newData =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
                const data = [...state.data];
                data.push(newData);
                setState({ ...state, data });
              }, 600);
            }),
          onRowUpdate: (newData, oldData) =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
                const data = [...state.data];
                data[data.indexOf(oldData)] = newData;
                setState({ ...state, data });
              }, 600);
            }),
          onRowDelete: oldData =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
                const data = [...state.data];
                data.splice(data.indexOf(oldData), 1);
                setState({ ...state, data });
              }, 600);
            }),
        }}
        options={{
          sorting: true
        }}
      />
    </div>
  )
}

export default AssignmentsTable