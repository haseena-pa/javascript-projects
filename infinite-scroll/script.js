const filter = document.getElementById('filter');
const postContainer = document.querySelector('.post-container');
const loader = document.querySelector('.loader');

let limit = 3;
let page = 1;

async function getPosts() {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`);
    const data = await res.json();
    return data;
}

async function showPosts() {
    const posts = await getPosts();
    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');
        postElement.innerHTML = `
            <div class="number">${post.id}</div>
            <div class="post-info">
                <h2 class="post-title">${post.title}</h2>
                <p class="post-body">${post.body}</p>
            </div>
        `;
        postContainer.appendChild(postElement);
    });

}
showPosts();
document.addEventListener('scroll', () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight - 10) {
        setTimeout(() => {
            loader.classList.add('show');
            setTimeout(() => {
                loader.classList.remove('show');
                page++;
                showPosts();
            }, 300);
        }, 1000);

    }

});

