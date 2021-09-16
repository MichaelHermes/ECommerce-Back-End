// import models
const Product = require("./Product");
const Category = require("./Category");
const Tag = require("./Tag");
const ProductTag = require("./ProductTag");

/* Establishes the One-To-Many relationship between the Product and Category models.
	I.e. A product belongsTo a single category, but a category can have many products. */
Product.belongsTo(Category, {
	foreignKey: "category_id",
	onDelete: "SET NULL",
});
Category.hasMany(Product, {
	foreignKey: "category_id",
	onDelete: "SET NULL",
});

/* Establishes the Many-To-Many relationship between the Product and Tag models, via a ProductTag junction/associative model.
	I.e. A product can have many tags and a tag can have many products. */
Product.belongsToMany(Tag, { through: ProductTag, foreignKey: "product_id" });
Tag.belongsToMany(Product, { through: ProductTag, foreignKey: "tag_id" });

module.exports = {
	Product,
	Category,
	Tag,
	ProductTag,
};
