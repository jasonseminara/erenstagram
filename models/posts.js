const { db } = require('../config/connection');

module.exports = {
  findAll() {
    return db.many(`
    SELECT * FROM posts, users
    WHERE posts.author = users.id
    ORDER BY posts.date_created asc;
    `);
  },
  findOne(id) {
    return db.one(`
    SELECT *
    FROM posts
    WHERE author = $1`, id);
  },
  
  create(newpost) {
    debugger;
    return db.one(`
    INSERT INTO post (content, img)
    VALUES ($1, $2)
    RETURNING *
    `, newpost);
  },
  
  delete(id) {
    return db.one(`
    DELETE FROM posts
    WHERE id = $1
    RETURNING *
      `, id);
  },
  
  update(id, postData) {
    return db.one(`
    UPDATE posts
    SET
    content = $2,
    img = $3
    WHERE author = $1
    RETURNING *
    `, [id, postData.content, postData.img]);
  },
};