const fs = require('fs')
const path = require('path')
const { getPost } = require('./posts')

function renderMarkDown(marked) {
    const showdown = require('showdown')
    const converter = new showdown.Converter()

    return converter.makeHtml(marked)
}

function getMarkDownFileContent(fileAddress) {
    return fs.readFileSync(path.join(`posts/${fileAddress}`), { encoding: "utf8" })
}

function renderPostMarkDown(slug) {
    const { file } = getPost(slug)

    return renderMarkDown(
        getMarkDownFileContent(file)
    )
}

module.exports = {
    renderMarkDown,
    getMarkDownFileContent,
    renderPostMarkDown
}
