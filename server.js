require('dotenv').config();
const express = require('express');
const connectDB = require('./src/config/database');

const app = express();
app.use(express.json());

app.use('/api/auth', require('./src/routes/auth'));
app.use('/api/posts', require('./src/routes/posts'));

const PORT = process.env.PORT || 3000;
connectDB().then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
