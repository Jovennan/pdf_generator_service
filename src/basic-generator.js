const PDFDocument = require('pdfkit');
const headerGenerator = require('./generators/header-generator');
const bodyGenerator = require('./generators/body-generator');
const constants = require('./utils/constants');

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

  doc.fontSize(constants.FONT_SIZE_DEFAULT);
  doc.font(constants.FONT_DEFAULT);

  headerGenerator.generate(doc, data);
  bodyGenerator.generate(doc, data);

  doc.pipe(res);
  doc.end();
};
