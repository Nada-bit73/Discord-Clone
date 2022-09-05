const UserController = require("../controllers/user.controller");

module.exports = function (app) {
    // create
    app.post("/api/user/new", UserController.createUser);
    // fetch one
    app.get("/api/user/:id", UserController.getUser);
    // fetch all
    app.get("/api/users", UserController.getAllUsers);
    // delete one
    app.delete("/api/user/:id", UserController.deleteUser);
    // update one
    app.put("/api/user/:id", UserController.updateUser);
};
