const db = require('../config/db');
const queries = require('../constants/queries');

const UserModel = {
  getAll: () => {
    return db.query(queries.getAllUsers);
  },

  getById: (id) => {
    return db.query(queries.getUserById, [id]);
  },

  create: ({ name, email, password }) => {
    return db.query(queries.createUser, [name, email, password]);
  },

  update: (id, { name, email, password }) => {
    return db.query(queries.updateUser, [name, email, password, id]);
  },

  delete: (id) => {
    return db.query(queries.deleteUser, [id]);
  }
};

module.exports = UserModel;
