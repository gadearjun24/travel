const { Schema, mongoose } = require("mongoose");

const userSchema = new Schema({
  user_name: { type: String, require: true },
  user_email: { type: String, require: true, unique: true },
  user_password: { type: String, require: true },
  user_adhaar_no: { type: String, require: true, unique: true },
  user_gender: { type: String, require: true },
  user_city: { type: String, require: true },
  user_state: { type: String, require: true },
  user_otp: { type: Number, require: true, default: "000000" },

  user_preferances: { type: [String], require: true },
});

exports.User = mongoose.model("user", userSchema);