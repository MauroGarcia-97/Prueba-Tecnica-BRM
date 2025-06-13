const db = require('../config/db');

const UserModel = {
  getAll: () => db.query('SELECT * FROM users'),
  getById: (id) => db.query('SELECT * FROM users WHERE id = $1', [id]),
  create: ({ name, email, password }) =>
    db.query(
      'INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *',
      [name, email, password]
    ),
  update: (id, { name, email, password }) =>
    db.query(
      'UPDATE users SET name = $1, email = $2, password = $3, updated_at = NOW() WHERE id = $4 RETURNING *',
      [name, email, password, id]
    ),
  delete: (id) => db.query('DELETE FROM users WHERE id = $1', [id]),
};

module.exports = UserModel;
