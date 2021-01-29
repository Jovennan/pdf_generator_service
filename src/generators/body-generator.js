const constants = require('../utils/constants');

exports.generate = (doc) => {
  doc.fontSize(constants.FONT_SIZE_DEFAULT).text('Body');
};
