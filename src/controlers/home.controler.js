import views from "../views/home.html";

export default () => {

    const divElement = document.createElement('div');
    divElement.classList = 'text-white'
    divElement.innerHTML = views
    
    const btnclick = divElement.querySelector('#btnClick')
    btnclick.addEventListener('click', () => {
        alert('puta')
    });

    return divElement;
};