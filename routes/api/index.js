const router = require("express").Router();
const userRoutes = require("./users");

// User routes
router.use("/users", userRoutes);
router.use("/products", userRoutes);

module.exports = router;
