const Users = require('../models/users');

exports.addUser = async (req, res) => {
    const newUser = await Users.create(req.body);
    res.json(newUser);
};
exports.getAllUsers = async (req, res) => {
    const allUsers = await Users.find();
    res.json(allUsers);
}