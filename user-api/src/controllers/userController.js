const User = require('../models/userModel');

const userController = {
  getAll: async (req, res) => {
    try {
      const { rows } = await User.getAll();
      res.json(rows);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  getById: async (req, res) => {
    try {
      const { rows } = await User.getById(req.params.id);
      if (!rows.length) return res.status(404).json({ message: 'Usuario no encontrado' });
      res.json(rows[0]);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  create: async (req, res) => {
    try {
      const { name, email, password } = req.body;
      const { rows } = await User.create({ name, email, password });
      res.status(201).json(rows[0]);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  update: async (req, res) => {
    try {
      const { name, email, password } = req.body;
      const { rows } = await User.update(req.params.id, { name, email, password });
      if (!rows.length) return res.status(404).json({ message: 'Usuario no encontrado' });
      res.json(rows[0]);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  delete: async (req, res) => {
    try {
      await User.delete(req.params.id);
      res.json({ message: 'Usuario eliminado' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
};

module.exports = userController;
