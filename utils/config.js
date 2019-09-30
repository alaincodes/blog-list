/* eslint-disable linebreak-style */
/* eslint-disable no-tabs */
/* eslint-disable linebreak-style */
require('dotenv').config();

const { PORT } = process.env;
const { MONGODB_URI } = process.env;

module.exports = {
	MONGODB_URI,
	PORT,
};
