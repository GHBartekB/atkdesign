import photo from '../images/piwo.png';

export default  (tag) => {

    const image = document.createElement('img');
    image.src = photo;
    document.querySelector(tag).appendChild(image);

}