import React, { useState } from 'react'
import MaterialTable from 'material-table'

const assignmentsFromDb = [
  { name: 'Essay 1', status: 'In Progress', dueDate: '5/20/2019', subject: 1 },
  { name: 'Algebra', status: 'Not Started', dueDate: '5/21/2019', subject: 2 },
  { name: 'Essay 2', status: 'Not Started', dueDate: '5/22/2019', subject: 1 },
]
const subjectsFromDb = { 1: 'English', 2: 'Math' }
const statuses = { 'Not Started': 'Not Started', 'In Progress': 'In Progress', 'Complete': 'Complete' }

function AssignmentsTable() {
  const [state, setState] = useState({
    data: assignmentsFromDb,
    subjects: subjectsFromDb
  })
  return (
    <div style={{ maxWidth: '100%' }}>
      <MaterialTable
        title="Assignments"
        columns={[
          { title: 'Name', field: 'name' },
          { title: 'Status', field: 'status', lookup: statuses },
          { title: 'Due Date', field: 'dueDate', type: 'date' },
          { title: 'Subject', field: 'subject', lookup: state.subjects }
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