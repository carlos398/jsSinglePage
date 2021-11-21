// exportacion de las vistas
import {pages} from '../controlers/index'
// buscar el elemento donde vamos a pintar en el html
let content = document.getElementById('root');
// limpiamos el content
content.innerHTML = '';

const router = async (route) => {
    content.innerHTML = '';
    switch (route) {
        case '#/': {
            return content.appendChild(pages.home())
        }
        case '#/posts':
            return content.appendChild(await pages.posts())
        case '#/products':
            return console.log('products')
        default:
            return console.log('not found 404!!')
    }
}

export {router}