import React, { useState } from 'react'
import MaterialTable from 'material-table'

const subjectsFromDb = [
  { name: 'English', teacher: 'Mr. Chan' },
  { name: 'Math', teacher: 'Ms. Johnson'}
]

function SubjectsTable() {
  const [state, setState] = useState({
    data: subjectsFromDb
  })
  return (
    <div style={{ maxWidth: '100%' }}>
      <MaterialTable
        title="Subjects"
        columns={[
          { title: 'Name', field: 'name' },
          { title: 'Teacher', field: 'teacher' },
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

export default SubjectsTable