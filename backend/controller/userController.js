const UserModel = require("../models/user");

class UserController{
    async getOneUser(req, res){
        try {
            const {id_user} = req.query;

            const user = await UserModel.findOne({_id: id_user});
            return res.json(user);
        } catch(e) {
            console.log(e);
            return res.status(5000).json({ message: 'Connot get user' });
        }
    }

    async getUsers(req, res){
        try {
            const users = await UserModel.find();
            return res.json(users);
        } catch(e) {
            console.log(e);
            return res.status(5000).json({ message: 'Connot get users' });
        }
    }

    // async createUser(req, res){        }

    // async deleteUser(req, res){        }

    // async updatetUser(req, res){        }
}

module.exports = new UserController();