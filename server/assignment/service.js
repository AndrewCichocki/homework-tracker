const q = require('./queries')

const getAllAssignments = async () => {
  return await q.getAllAssignments()
}

const addAssignment = async (name, dueDate, status, subject) => {
  // if (!name || !dueDate || !status || !subject) return 'All fields are required'
  await q.addAssignment(name, dueDate, status, subject)
  return await q.getAllAssignments()
}

const updateAssignment = async (assignmentId, name, dueDate, status, subject) => {
  // if (!assignmentId || !name || !dueDate || !status || !subject) return 'All fields are required'
  await q.updateAssignment(assignmentId, name, dueDate, status, subject)
  return await q.getAllAssignments()
}

const deleteAssignment = async (assignmentId) => {
  // if (!assignmentId) return 'All fields are required'
  await q.deleteAssignment(assignmentId)
  return await q.getAllAssignments()
}

module.exports = {
  getAllAssignments,
  addAssignment,
  updateAssignment,
  deleteAssignment
}