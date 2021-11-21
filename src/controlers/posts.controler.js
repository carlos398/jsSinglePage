import view from '../views/posts.html'

const getPosts = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/photos?_limit=15');
    return await response.json();
}

export default async () => {
    const divElement = document.createElement('div')
    divElement.innerHTML = view;

    const posts = await getPosts();

    posts.forEach(post => {
        divElement.innerHTML +=`
            <section class = "col-md-4 offset-4 text-black bg-white mb-3" style = "display:flex; flex-direction:column; justify-content:space-betewn; border:1px solid black; border-radius:20px;">
                <h5  class = "p-3" ">${post.title}</h5>
                <img  style = "heigth:auto;" class = "p2 " src='${post.url}'/>
            </section>
        `
    })

    return divElement
}