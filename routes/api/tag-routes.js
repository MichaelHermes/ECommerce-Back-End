const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// Handles the request to retrieve all tags.
router.get("/", async (req, res) => {
	try {
		const tags = await Tag.findAll({ include: Product });
		res.status(200).json(tags);
	} catch (err) {
		res.status(500).json(err);
	}
});

// Handles the request to retrieve a single tag by id.
router.get("/:id", async ({ params }, res) => {
	try {
		const tagData = await Tag.findByPk(params.id, { include: Product });
		if (!tagData) {
			res.status(404).json({ message: "No tag found with this id!" });
			return;
		}
		res.status(200).json(tagData);
	} catch (err) {
		res.status(500).json(err);
	}
});

/* Handles the request to create a new tag.
	req.body should look like this:
	{
		"tag_name": "Classic"
	} */
router.post("/", async (req, res) => {
	try {
		const tagData = await Tag.create(req.body);
		res.status(200).json(tagData);
	} catch (err) {
		res.status(400).json(err);
	}
});

/* Handles the request to update a tag by id.
	req.body should look like this:
	{
		"tag_name": "Classic"
	} */
router.put("/:id", async ({ params, body }, res) => {
	try {
		const tagData = await Tag.update(body, { where: { id: params.id } });
		res.status(200).json(tagData);
	} catch (err) {
		res.status(500).json(err);
	}
});

// Handles the request to delete a tag by id.
router.delete("/:id", async ({ params }, res) => {
	try {
		const tagData = await Tag.destroy({ where: { id: params.id } });
		if (!tagData) {
			return res.status(404).json({ message: "No tag with this id!" });
		}
		res.status(200).json(tagData);
	} catch (err) {
		res.status(500).json(err);
	}
});

module.exports = router;
