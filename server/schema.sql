CREATE TABLE assignment (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  due_date TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
  status INT NOT NULL DEFAULT 0,
  subject TEXT NOT NULL
);
