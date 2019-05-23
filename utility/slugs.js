const { memois } = require('./helpers');
const { getPosts } = require('./posts');

function getSlugs() {
    return getPosts().map(({ slug }) => `/${slug}`);
}

const memoizedGetSlugs = memois(getSlugs);

module.exports = {
    getSlugs,
    memoizedGetSlugs,
}
