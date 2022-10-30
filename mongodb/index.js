const mongoose = require("mongoose");
mongoose
  .connect("mongodb://127.0.0.1:27017/7B", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to mongodb succesfully");
  })
  .catch((err) => {
    console.log(err);
  });
//first schema then model
//means we have to predefine fields
const student = new mongoose.Schema({
  name: String,
  workout: Boolean,
  height: Number,
});
//model is like collection
const Student = new mongoose.model("Student", student);

// const adder = async () => {
//   const ss = new Student({
//     name: "Ritika",
//     workout: true,
//     height: 6,
//   });
//   await ss.save();
// };
const adder = async () => {
  //   const ss = await Student.create({
  //     name: "ABHI",
  //     workout: true,
  //     height: 6,
  //   });
  //   const ss = await Student.find({ height: { $eq: 6 } });
  //   const ss = await Student.find({ height: { $gt: 6 } });
  const ss = await Student.find({ height: { $in: [5, 6] } });
  console.log(ss);
};
adder();
