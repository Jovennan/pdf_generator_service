const constants = require('../utils/constants');

exports.generate = (doc, data) => {
  doc
    .fillColor('blue')
    .fontSize(constants.FONT_SIZE_TITLE)
    .text(data.header.title, { align: 'center', underline: true });
  doc.moveDown();
  doc
    .fillColor('black')
    .fontSize(constants.FONT_SIZE_SUBTITLE)
    .text(data.header.subtitle, { align: 'center', oblique: true });
  doc.moveDown();
};
