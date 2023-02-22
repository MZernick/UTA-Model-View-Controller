const User = require('./user');
const Blog = require('./blog');
const Comment = require('./comment');

Blog.belongsTo(User, {
    foreignKey: 'user_id'
})
User.hasMany(Blog, {
    foreignKey: 'user_id'
});

Comment.belongsTo(User, {
    foreignKey: 'user_id'
})

User.hasMany(Comment, {
    foreignKey: 'user_id'
});

Comment.belongsTo(Blog, {
    foreignKey: 'comment_id'
});

Blog.hasMany(Comment, {
    foreignKey: 'comment_id'
});

module.exports = {User, Blog, Comment};