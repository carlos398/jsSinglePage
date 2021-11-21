import Home from './home.controler'
import Posts from './posts.controler'
import notFound from './404.controler'

const pages = {
    home: Home,
    posts: Posts,
    notFound: notFound,
}

export {pages};