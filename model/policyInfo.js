const mongoose = require('mongoose');

const policyInfoSchema = new mongoose.Schema({
  policyNumber: {
    type: String,
    required: true
  },
  policyStartDate: {
    type: String,
    required: true
  },
  policyEndDate: {
    type: String,
    required: true
  },
  policyCategory: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'PolicyCategory',
    required: true
  },
  collectionId: {
    type: Number,
    required: true
  },
  companyCollectionId: {
    type: Number,
    required: true
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
});

const PolicyInfo = mongoose.model('PolicyInfo', policyInfoSchema);

module.exports = PolicyInfo;
