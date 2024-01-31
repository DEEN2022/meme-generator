const generateMemeBtn = document.querySelector(".generate-meme-btn");
const memeTitle = document.querySelector(".meme-title");
const memeImage = document.querySelector(".meme-generator img");
const memeAuthor = document.querySelector(".meme-author");

const updateMeme = (title, url, author) => {
    memeTitle.innerHTML = title
    memeImage.setAttribute("src", url)
    memeAuthor.innerHTML = author
}

const generateMeme = () => {
    fetch(" https://meme-api.com/gimme/wholesomememes").then((response) => response.json()).then((data) => {
        updateMeme(data.title, data.url, data.author);
    });
};

generateMemeBtn.addEventListener("click", generateMeme);

generateMeme();