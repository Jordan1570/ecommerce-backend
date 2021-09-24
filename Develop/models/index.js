// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id',
  unique: false
});
// Categories have many Products
Catergories.hasMany(Product, {
  foreignKey: 'category_id',
  unique: false,
});
// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: ProductTag,

  foreignKey: 'tag_id',
  unique: false 
});
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: ProductTag,

  foreignKey: 'tag_id',
  unique: false
})
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
