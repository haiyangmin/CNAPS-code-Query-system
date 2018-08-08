var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var BankSchema = new Schema({
    name: {type: String, required: true},
    bankcode: { type: number, min: 12, max: 12  },
    address: {type: String },
    phone: {type: number, },
    bankId: Schema.Types.ObjectId,
});

// Virtual for this book instance URL.
BankSchema
.virtual('url')
.get(function () {
  return '/bank/'+this._id;
});

// Export model.
module.exports = mongoose.model('Bank', BankSchema);
