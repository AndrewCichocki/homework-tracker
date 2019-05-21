import React from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
// import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'

function AddAssignmentDialog() {
  const [open, setOpen] = React.useState(false)
  function handleOpen() {
    setOpen(true)
  }
  function handleClose() {
    // process form
    setOpen(false)
  }
  // validation?
  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleOpen}>
        Add New Assignment
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Add New Assignment</DialogTitle>
        <DialogContent>
          {/*<DialogContentText>
            Add a new assignment.
          </DialogContentText>*/}
          <TextField
            autoFocus
            id="name"
            label="Name"
            type="text"
          />
          <TextField
            id="subject"
            label="Subject"
            type="text"
          />
          <TextField
            id="due-date"
            label="Due Date"
            type="text"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default AddAssignmentDialog