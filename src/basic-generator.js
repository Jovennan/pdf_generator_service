const PDFDocument = require('pdfkit');
const headerGenerator = require('./generators/header-generator');
const bodyGenerator = require('./generators/body-generator');

exports.generate = (req, res) => {
  const data = req.body;
  const doc = new PDFDocument();

  headerGenerator.generate(doc, data);
  bodyGenerator.generate(doc, data);

  doc.pipe(res);
  doc.end();
};
