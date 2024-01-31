const isHomepage = (string) => {
    return string === '/'
}

const getPage = (uri) => {
    if (uri === '/') return '/';
    return uri.replace(/^\/|\/$/g, '')
}

export { isHomepage, getPage };