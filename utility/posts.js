const fs = require('fs');
const path = require('path');

function getPosts() {
    const orderFile = fs.readFileSync("posts/order.json");

    return JSON.parse(orderFile).posts;
}

function getPost(slug) {
    return getPosts().reduce((found, post) => {
        if (slug === `/${post.slug}`) {
            found = post;
        }

        return found;
    }, null);
}

function useMemoisRenderedPost() {
    const slugs = {};

    return function (slug, rendererFn) {
        if (slugs[slug] === undefined) {
            slugs[slug] = rendererFn();
        }

        return slugs[slug];
    }
}

const memoisedRendredPost = useMemoisRenderedPost();

module.exports = {
    getPosts,
    getPost,
    memoisedRendredPost,
}
