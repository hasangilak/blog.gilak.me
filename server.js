const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');
const { memoizedGetSlugs } = require('./utility/slugs');
const { renderPostMarkDown } = require('./utility/renderPostMarkdown');
const { memoisedRendredPost } = require('./utility/posts');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const slugs = memoizedGetSlugs();

app.prepare().then(() => {
    createServer((req, res) => {
        const parsedUrl = parse(req.url, true);
        const { pathname, query } = parsedUrl;

        if (slugs.includes(pathname)) {
            app.render(req, res, '/Single', {
                ...query,
                post: memoisedRendredPost(
                    pathname,
                    () => renderPostMarkDown(pathname)
                )
            });
        } else {
            handle(req, res, parsedUrl);
        }
    }).listen(3000, err => {
        if (err) throw err;
        console.log('> Ready on http://localhost:3000');
    });
});
