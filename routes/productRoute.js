import express from "express";
const router = express.Router();

router.post("/create");
router.get("/all");
router.get("/:id");
router.put("/update/:id");
router.delete("/delete/:id");

export default router;
