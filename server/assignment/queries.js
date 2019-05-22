const { query, queryOne } = require('../db')

const q = {
  getAllAssignments: `
    SELECT
      id,
      name,
      due_date::TEXT AS "dueDate",
      status,
      subject
    FROM assignment`,
  addAssignment: `
    INSERT INTO assignment (name, due_date, status, subject)
    VALUES ($1, $2, $3, $4)`,
  updateAssignment: `
    UPDATE assignment
    SET name = $2,
        due_date = $3,
        status = $4,
        subject = $5
    WHERE id = $1`,
  deleteAssignment: `
    DELETE FROM assignment
    WHERE id = $1`
}

const getAllAssignments = async () =>
  query(q.getAllAssignments, [])

const addAssignment = async (name, dueDate, status, subject) =>
  query(q.addAssignment, [name, dueDate, status, subject])

const updateAssignment = async (assignmentId, name, dueDate, status, subject) =>
  query(q.updateAssignment, [assignmentId, name, dueDate, status, subject])

const deleteAssignment = async (assignmentId) =>
  query(q.deleteAssignment, [assignmentId])

module.exports = {
  getAllAssignments,
  addAssignment,
  updateAssignment,
  deleteAssignment
}