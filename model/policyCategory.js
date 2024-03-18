const mongoose = require('mongoose');

const policyCategorySchema = mongoose.Schema({
  category_name: {
    type: String,
    required: true
  }
});

const PolicyCategory = mongoose.model('PolicyCategory', policyCategorySchema);

module.exports = PolicyCategory;
