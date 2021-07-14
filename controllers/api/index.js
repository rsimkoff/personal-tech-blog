const router = require("express").Router();
const userRoutes = require("./userRoutes");
const blogPostRoutes = require("./blogPostRoutes");


router.use("/", async (req, res) => {
  res.json({ message: "You hit route: /api/." });
});

router.use("/users", userRoutes);
router.use("/posts", blogPostRoutes);

module.exports = router;