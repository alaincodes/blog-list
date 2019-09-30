/* eslint-disable linebreak-style */
/* eslint-disable no-tabs */
/* eslint-disable linebreak-style */
const blogsRouter = require('express').Router();
const uuidv4 = require('uuid/v4');
const Blog = require('../models/blog');

blogsRouter.get('/', (request, response) => {
	Blog.find({}).then((blogs) => {
		response.json(blogs.map((blog) => blog.toJSON()));
	});
});

blogsRouter.get('/:id', (request, response, next) => {
	Blog.findById(request.params.id)
		.then((blog) => {
			if (blog) {
				response.json(blog.toJSON());
			} else {
				response.status(400).end();
			}
		})
		.catch((error) => next(error));
});

blogsRouter.post('/', (request, response, next) => {
	const { body } = request;

	const blog = new Blog({
		title: body.title,
		author: body.author,
		url: body.url,
		likes: body.likes,
		id: uuidv4(),
	});

	blog
		.save()
		.then((savedBlog) => {
			response.json(savedBlog.toJSON);
		})
		.catch((error) => next(error));
});

blogsRouter.put('/:id', (request, response, next) => {
	const { body } = request;

	const blog = {
		title: body.title,
		author: body.author,
		url: body.url,
		likes: body.likes,
	};

	Blog.findByIdAndUpdate(request.params.id, blog, { new: true })
		.then((updatedBlog) => {
			response.json(updatedBlog.toJSON());
		})
		.catch((error) => next(error));
});

module.exports = blogsRouter;
