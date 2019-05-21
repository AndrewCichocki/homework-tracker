CREATE TYPE assignment_status AS ENUM (
  'Not Started',
  'In Progress',
  'Complete'
);

CREATE TABLE subject (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,-- UNIQUE,
  teacher TEXT
  --days TEXT,
  --times TEXT,
  --room TEXT
);

CREATE TABLE assignment (
  id SERIAL PRIMARY KEY,
  subject_id INT NOT NULL REFERENCES subject(id),
  name TEXT NOT NULL,
  due_date DATE NOT NULL,
  status assignment_status NOT NULL DEFAULT 'Not Started',
  --grade TEXT
  --UNIQUE(subject_id, name)
);
