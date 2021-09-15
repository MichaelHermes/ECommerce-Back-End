const router = require("express").Router();
const { Category, Product } = require("../../models");

router.get("/", async (req, res) => {
	try {
		const categories = await Category.findAll({ include: Product });
		res.status(200).json(categories);
	} catch (err) {
		res.status(500).json(err);
	}
});

router.get("/:id", async ({ params }, res) => {
	try {
		const categoryData = await Category.findByPk(params.id, {
			include: Product,
		});
		if (!categoryData) {
			res.status(404).json({ message: "No category found with this id!" });
			return;
		}
		res.status(200).json(categoryData);
	} catch (err) {
		res.status(500).json(err);
	}
});

router.post("/", async (req, res) => {
	/* req.body should look like this:
       {
         "category_name": "Games"
       }
    */
	try {
		const categoryData = await Category.create(req.body);
		res.status(200).json(categoryData);
	} catch (err) {
		res.status(400).json(err);
	}
});

router.put("/:id", async ({ params, body }, res) => {
	try {
		const categoryData = await Category.update(body, {
			where: { id: params.id },
		});
		res.status(200).json(categoryData);
	} catch (err) {
		res.status(500).json(err);
	}
});

router.delete("/:id", async ({ params }, res) => {
	try {
		const categoryData = await Category.destroy({
			where: { id: params.id },
		});
		if (!categoryData) {
			return res.status(404).json({ message: "No category with this id!" });
		}
		res.status(200).json(categoryData);
	} catch (err) {
		res.status(500).json(err);
	}
});

module.exports = router;
