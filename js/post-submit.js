const postForm = async (event) => {
    event.preventDefault();

    const post_title = document.querySelector('#post-title').value.trim();
    const post = document.querySelector('#post-content').value.trim();

    if(post_title&&post){
        const response = await fetch('/post', {
            method: 'POST',
            body: JSON.stringify({post_title, post}),
            headers: {'Content-Type': 'application/json'},
        });

        if(response.ok){
            document.location.replace('/');
        }else{
            alert('Failed to post.')
        }
    }
};


document.querySelector('#post-form').addEventListener('submit', postForm);