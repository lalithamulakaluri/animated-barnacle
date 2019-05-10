var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

var Schema = mongoose.Schema;

var DocSchema = new Schema ({
    owner : String,
    uploadTime : Number,
    imageLink : String,
    ipfsImageHash : String,
    docstatus: String,
    insstatus: String

})

var DocModel = mongoose.model('DocModel', DocSchema);

module.exports = DocModel;
