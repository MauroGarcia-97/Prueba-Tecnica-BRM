const app = require('./src/app');
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en http://localhost:3000`);
  /*console.log(`Servidor ejecutándose en http://localhost:${PORT}`);*/
});