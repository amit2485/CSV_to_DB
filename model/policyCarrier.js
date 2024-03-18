const mongoose = require('mongoose');

const policyCarrierSchema = mongoose.Schema({
  company_name: {
    type: String,
    required: true
  }
});

const PolicyCarrier = mongoose.model('PolicyCarrier', policyCarrierSchema);

module.exports = PolicyCarrier;
