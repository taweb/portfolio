const React = require("react")
const Layout = require("./src/components/layout").default

const getPage = (uri) => {
  if (uri === '/') return '/';
  return uri.replace(/^\/|\/$/g, '')
}

// Wraps every page in a component
exports.wrapPageElement = ({ element, props }) => {
  document.documentElement.style.setProperty('--currentColor', `var(--${getPage(props.uri)})`)
  return <Layout {...props}>{element}</Layout>
}