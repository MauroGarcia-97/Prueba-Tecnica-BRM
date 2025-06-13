const queries = {
  getAllUsers: 'SELECT * FROM users',
  getUserById: 'SELECT * FROM users WHERE id = $1',
  createUser: 'INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *',
  updateUser: 'UPDATE users SET name = $1, email = $2, password = $3, updated_at = NOW() WHERE id = $4 RETURNING *',
  deleteUser: 'DELETE FROM users WHERE id = $1'
};

module.exports = queries;
