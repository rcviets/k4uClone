//If deployed, use the deployed database. Otherwise use the local k4uclone database
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/k4uclone";

//connect to Mongo DB
mongoose.connect(MONGODB_URI);