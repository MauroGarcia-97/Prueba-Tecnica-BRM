<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
</head>
<body>

  <section>
    <h1>🧩 API de Gestión de Usuarios</h1>
    <p>API RESTful construida como prueba técnica para realizar operaciones CRUD sobre una tabla de usuarios.</p>
  </section>

  <section>
    <h2>⚙️ Tecnologías utilizadas</h2>
    <ul>
      <li><strong>Node.js</strong> + <strong>Express</strong></li>
      <li><strong>PostgreSQL</strong></li>
      <li><strong>Arquitectura MVC</strong></li>
    </ul>
  </section>

  <section>
    <h2>🚀 Instalación</h2>
    <ol>
      <li>Clona el repositorio:
        <pre><code>git clone https://github.com/MauroGarcia-97/Prueba-Tecnica-BRM.git
cd Prueba-Tecnica-BRM</code></pre>
      </li>
      <li>Instala dependencias:
        <pre><code>npm install</code></pre>
      </li>
      <li>Copia el archivo de entorno:
        <pre><code>cp .env.example .env</code></pre>
        <p>Edita el archivo <code>.env</code>:</p>
        <pre><code>DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=postgres
DB_NAME=users
PORT=3000</code></pre>
      </li>
    </ol>
  </section>

  <section>
    <h2>🗄️ Script de Base de Datos</h2>
    <p>Ejecuta el archivo <code>init-db.sql</code> en PostgreSQL para crear la base de datos y la tabla <code>users</code>.</p>
  </section>

  <section>
    <h2>▶️ Ejecución local</h2>
    <pre><code>npm run dev</code></pre>
    <p>La API estará disponible en: <code>http://localhost:3000</code></p>
  </section>

  <section>
    <h2>📌 Endpoints disponibles</h2>
    <h3>🔹 Obtener todos los usuarios</h3>
    <p><strong>Método:</strong> GET</p>
    <p><strong>Ruta:</strong> /users</p>
    <p><strong>Respuesta exitosa:</strong></p>
    <pre><code>{
  "message": "Lista de usuarios obtenida",
  "data": [
    {
      "id": 1,
      "name": "Juan Pérez",
      "email": "juan@example.com"
    }
  ]
}</code></pre>
    <h3>🔹 Obtener un usuario por ID</h3>
    <p><strong>Método:</strong> GET</p>
    <p><strong>Ruta:</strong> /users/:id</p>
    <p><strong>Respuesta exitosa:</strong></p>
    <pre><code>{
  "message": "Usuario encontrado",
  "data": {
    "id": 3,
    "name": "Maria Lopez",
    "email": "maria@example.com"
  }
}</code></pre>
    <p><strong>Error si no existe:</strong></p>
    <pre><code>{
  "error": "Usuario no encontrado"
}</code></pre>
    <h3>🔹 Crear un nuevo usuario</h3>
    <p><strong>Método:</strong> POST</p>
    <p><strong>Ruta:</strong> /users</p>
    <p><strong>Cuerpo esperado (JSON):</strong></p>
    <pre><code>{
  "name": "Nuevo Usuario",
  "email": "nuevo@correo.com",
  "password": "secreto123"
}</code></pre>
    <p><strong>Respuesta exitosa:</strong></p>
    <pre><code>{
  "message": "Usuario creado exitosamente",
  "data": {
    "id": 5,
    "name": "Nuevo Usuario",
    "email": "nuevo@correo.com"
  }
}</code></pre>
    <h3>🔹 Actualizar un usuario existente </h3>
    <p><strong>Método:</strong> PUT</p>
    <p><strong>Ruta:</strong> /users/:id</p>
    <p><strong>Cuerpo esperado (JSON):</strong></p>
    <pre><code>{
  "name": "Nombre Actualizado",
  "email": "nuevo@email.com",
  "password": "nuevoPass123"
}</code></pre>
    <p><strong>Respuesta exitosa:</strong></p>
    <pre><code>{
  "message": "Usuario actualizado correctamente",
  "data": {
    "id": 5,
    "name": "Nombre Actualizado",
    "email": "nuevo@email.com"
  }
}</code></pre>
    <p><strong>Cuerpo esperado (JSON):</strong></p>
    <pre><code>{
  "error": "Usuario no encontrado"
}</code></pre>
    <h3>🔹 Eliminar un usuario</h3>
    <p><strong>Método:</strong> DELETE</p>
    <p><strong>Ruta:</strong> /users/:id</p>
    <p><strong>Respuesta exitosa:</strong></p>
    <pre><code>{
  "message": "Usuario eliminado correctamente"
}</code></pre>
    <p><strong>Error si no existe:</strong></p>
    <pre><code>{
  "error": "Usuario no encontrado"
}</code></pre>

  </section>

  <section>
    <h2>📁 Organización del proyecto</h2>
    <ul>
      <li><code>src/controllers/</code>: Controladores</li>
      <li><code>src/routes/</code>: Rutas de la API</li>
      <li><code>src/models/</code>: Conexión y lógica con PostgreSQL</li>
      <li><code>src/constants/messages.js</code>: Mensajes centralizados</li>
      <li><code>src/constants/queries.js</code>: Consultas SQL definidas</li>
    </ul>
  </section>

  <section>
    <h2>📚 Lo que aprendí y qué mejoraría</h2>
    <p>Durante este proyecto:</p>
    <ul>
      <li>Reforcé el uso de la arquitectura MVC en Node.js.</li>
      <li>Implementé consultas parametrizadas con PostgreSQL.</li>
      <li>Centralicé respuestas y consultas para mayor claridad.</li>
    </ul>
    <p><strong>Mejoras futuras:</strong></p>
    <ul>
      <li>Agregar validaciones con Joi o Zod.</li>
      <li>Incluir autenticación JWT.</li>
      <li>Documentar con Swagger.</li>
      <li>Agregar pruebas unitarias con Jest.</li>
    </ul>
  </section>

  <section>
    <h2>📎 Repositorio</h2>
    <p>
      <a href="https://github.com/MauroGarcia-97/Prueba-Tecnica-BRM" target="_blank">
        https://github.com/MauroGarcia-97/Prueba-Tecnica-BRM
      </a>
    </p>
  </section>

</body>
</html>
