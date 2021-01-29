const PDFDocument = require('pdfkit');
const headerGenerator = require('./generators/header-generator');
const bodyGenerator = require('./generators/body-generator');

exports.generate = (req, res) => {
  const data = req.body;
  const doc = new PDFDocument({
    compress: true,
    size: 'A4',
    margins: {
      top: 50,
      bottom: 50,
      left: 72,
      right: 72,
    },
    layout: 'portrait',
  });

  headerGenerator.generate(doc, data);
  bodyGenerator.generate(doc, data);

  doc.pipe(res);
  doc.end();
};
