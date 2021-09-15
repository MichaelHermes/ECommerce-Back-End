const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint

router.get("/", async (req, res) => {
	try {
		const tags = await Tag.findAll({ include: Product });
		res.status(200).json(tags);
	} catch (err) {
		res.status(500).json(err);
	}
});

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

router.post("/", async (req, res) => {
	/* req.body should look like this:
       {
         "tag_name": "Classic"
       }
    */
	try {
		const tagData = await Tag.create(req.body);
		res.status(200).json(tagData);
	} catch (err) {
		res.status(400).json(err);
	}
});

router.put("/:id", async ({ params, body }, res) => {
	try {
		const tagData = await Tag.update(body, { where: { id: params.id } });
		res.status(200).json(tagData);
	} catch (err) {
		res.status(500).json(err);
	}
});

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
