const express = require('express');
const bodyParser = require('body-parser');

const pdfGenerator = require('./basic-generator');

const app = express();

app.use(bodyParser.json());

const PORT = 8080;

app.get('/', (req, res) => {
  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', 'attachment; filename=report.pdf');

  pdfGenerator.generate(req, res);
});

app.listen(PORT);
