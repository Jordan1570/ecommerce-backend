const { Tag } = require('../models');

const tagData = [
  {
    tag_name: 'white',
  },
  {
    tag_name: 'pop music',
  },
  {
    tag_name: 'blue',
  },
  {
    tag_name: 'gold',
  },
  {
    tag_name: 'bottoms',
  },
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;
