const mongoose = require('mongoose');

const userAccountSchema = mongoose.Schema({
  accountName: {
    type: String,
    required: true
  }
});

const UserAccount = mongoose.model('UserAccount', userAccountSchema);

module.exports = UserAccount;
