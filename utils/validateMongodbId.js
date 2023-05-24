const mongoose = require('mongoose');
const validateMongoDbId = (id) => {
  const isValid = mongoose.Types.ObjectId.isValid(id);
  if (!isValid) throw new Error('Etibarlı deyil və yaxud yoxdur');
};
module.exports = validateMongoDbId;
