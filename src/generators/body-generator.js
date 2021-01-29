exports.generate = (doc, data) => {
  doc.text(data.body.txt, {
    columns: 3,
    columnGap: 15,
    height: 100,
    width: 465,
    align: 'center',
  });
  doc.moveDown();
};
