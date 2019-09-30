/* eslint-disable linebreak-style */
/* eslint-disable no-redeclare */
/* eslint-disable linebreak-style */
/* eslint-disable no-tabs */
// eslint-disable-next-line no-var
var _ = require('lodash');

// eslint-disable-next-line no-unused-vars
const dummy = (blogs) => 1;

// eslint-disable-next-line arrow-body-style
const totalLikes = (blogs) => {
	return blogs.length === 0
		? 0
		: blogs.map((blog) => blog.likes).reduce((acc, curr) => acc + curr, 0);
};

const favoriteBlog = (blogs) => {
	let likes = 0;
	let mostLikes = {};

	blogs.forEach((blog) => {
		if (blog.likes > likes) {
			likes = blog.likes;
			mostLikes = blog;
		}
	});

	return {
		title: mostLikes.title,
		author: mostLikes.author,
		likes: mostLikes.likes,
	};
};

const mostBlogs = (blogs) => {
	_.sortBy(blogs, ['author', 'likes']);
};

module.exports = {
	dummy,
	totalLikes,
	favoriteBlog,
	mostBlogs,
};
