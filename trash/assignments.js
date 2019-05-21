import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import AddAssignmentDialog from '../dialogs/add-assignment'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  }
  // table: {
  //   minWidth: 650,
  // },
}))

function createData(name, subject, dueDate, status) {
  return { name, subject, dueDate, status }
}

const rows = [
  createData('Essay 1', 'English', '2019-06-01', 'In Progress'),
  createData('Algebra - Chapter 5', 'Math', '2019-06-15', 'Not Started'),
  createData('Essay 2', 'English', '2019-07-01', 'Not Started')
]

function Assignments() {
  const classes = useStyles()
  return (
    <>
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Subject</TableCell>
              <TableCell align="right">Due Date</TableCell>
              <TableCell align="right">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(({ name, subject, dueDate, status }) => (
              <TableRow key={name}>
                <TableCell component="th" scope="row">
                  {name}
                </TableCell>
                <TableCell align="right">{subject}</TableCell>
                <TableCell align="right">{dueDate}</TableCell>
                <TableCell align="right">{status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
      <AddAssignmentDialog />
    </>
  )
}

export default Assignments