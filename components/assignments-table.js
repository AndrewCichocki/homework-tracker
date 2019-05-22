import React, { useState, useEffect } from 'react'
import MaterialTable from 'material-table'
import axios from 'axios'

const statuses = { 0: 'Not Started', 1: 'In Progress', 2: 'Complete' }
// different colour row for status past due date?

function AssignmentsTable() {
  const [state, setState] = useState({
    data: []
  })
  // Populate inital data
  useEffect(() => {
    axios.get('http://localhost:3000/assignment')
      .then(({ data }) => setState({ ...state, data }))
      .catch((err) => console.error(err))
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
          onRowAdd: (newData) => {
            return new Promise((resolve, reject) => {
              axios.post('http://localhost:3000/assignment', newData)
                .then(({ data }) => {
                  setState({ ...state, data })
                  resolve()
                })
                .catch((err) => {
                  console.error(err)
                  reject()
                })
            })
          },
          onRowUpdate: (newData, oldData) => {
            return new Promise((resolve, reject) => {
              const { id } = oldData
              axios.put(`http://localhost:3000/assignment/${id}`, newData)
                .then(({ data }) => {
                  setState({ ...state, data })
                  resolve()
                })
                .catch((err) => {
                  console.error(err)
                  reject()
                })
            })
          },
          onRowDelete: (oldData) => {
            return new Promise((resolve, reject) => {
              const { id } = oldData
              axios.delete(`http://localhost:3000/assignment/${id}`)
                .then(({ data }) => {
                  setState({ ...state, data })
                  resolve()
                })
                .catch((err) => {
                  console.error(err)
                  reject()
                })
            })
          }
        }}
        options={{
          sorting: true
        }}
      />
    </div>
  )
}

export default AssignmentsTable