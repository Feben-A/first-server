const express = require("express");
const fruitsRouter = express.Router();
const fruits = require("../controllers/fruits");

// fruitsRouter.get("/fruits", fruits.index)
// issue above because...

fruitsRouter.get("/", fruits.index);

fruitsRouter.get("/:name", fruits.show);
fruitsRouter.post("/", fruits.create);
fruitsRouter.patch("/:name", fruits.update);
fruitsRouter.delete("/:name", fruits.destroy);

module.exports = fruitsRouter;

//when exporting
