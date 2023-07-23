const studentModel = require("../model/studentModel");

// creating user data
module.exports.createStudent = async (request, response) => {
  // console.log(request.body);
  try {
    const user = await new studentModel(request.body);
    user.save();
    response.status(201).send(user);
  } catch (error) {
    response.status(400).send(error);
  }
};

// getting student data
module.exports.getstudentData = async (request, response) => {
  try {
    const user = await studentModel.find();

    response.status(200).send({
      userData: user,
    });
  } catch (error) {
    response.status(400).send(error);
  }
};

// getting student data by id
module.exports.getstudentDataById = async (request, response) => {
  let { id } = request.params;
  try {
    const user = await studentModel.findById(id);

    response.status(200).send({
      userData: user,
    });
  } catch (error) {
    response.status(500).send(error);
  }
};

// updating user data
module.exports.updateStudentData = async (request, response) => {
  let { id } = request.params;
  try {
    const UpdateUser = await studentModel.findByIdAndUpdate(id, request.body, {
      new: true,
    });

    response.status(200).send({
      userData: UpdateUser,
    });
  } catch (error) {
    response.status(404).send(error);
  }
};

// delete by student id

module.exports.deleteStudentById = async (request, response) => {
  let { id } = request.params;
  try {
    const user = await studentModel.findByIdAndDelete(id);

    response.status(200).send({
      userData: user,
    });
  } catch (error) {
    response.status(500).send(error);
  }
};
