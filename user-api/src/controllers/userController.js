const User = require('../models/userModel');
const messages = require('../constants/messages');

const userController = {
  getAll: async (req, res) => {
    try {
      const { rows } = await User.getAll();
      res.json({
        message: messages.usersFetched,
        data: rows
      });
    } catch (err) {
      res.status(500).json({ error: messages.serverError });
    }
  },

  getById: async (req, res) => {
    try {
      const { rows } = await User.getById(req.params.id);
      if (!rows.length) {
        return res.status(404).json({ error: messages.userNotFound });
      }
      res.json({
        message: messages.userFetched,
        data: rows[0]
      });
    } catch (err) {
      res.status(500).json({ error: messages.serverError });
    }
  },

  create: async (req, res) => {
    try {
      const { name, email, password } = req.body;
      const { rows } = await User.create({ name, email, password });
      res.status(201).json({
        message: messages.userCreated,
        data: rows[0]
      });
    } catch (err) {
      res.status(500).json({ error: messages.serverError });
    }
  },

  update: async (req, res) => {
    try {
      const { name, email, password } = req.body;
      const { rows } = await User.update(req.params.id, { name, email, password });
      if (!rows.length) {
        return res.status(404).json({ error: messages.userNotFound });
      }
      res.json({
        message: messages.userUpdated,
        data: rows[0]
      });
    } catch (err) {
      res.status(500).json({ error: messages.serverError });
    }
  },

  delete: async (req, res) => {
    try {
      const { rowCount } = await User.delete(req.params.id);
      if (rowCount === 0) {
        return res.status(404).json({ error: messages.userNotFound });
      }
      res.json({ message: messages.userDeleted });
    } catch (err) {
      res.status(500).json({ error: messages.serverError });
    }
  },
};

module.exports = userController;
