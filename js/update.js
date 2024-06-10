const update = async (event) => {
    event.preventDefault();
    
    const id = getPostIdFromUrl()
    const post_title = document.querySelector('#title').value.trim();
    const post = document.querySelector('#post').value.trim();

    if(post_title&&post){
        const response = await fetch(`/update/${id}`, {
            method: 'PUT',
            body: JSON.stringify({post_title, post}),
            headers: {'Content-Type': 'application/json'},
        });
        if(response.ok){
            document.location.replace('/dashboard');
        }else {
            alert('Failed to update')
        }
    }

}
function getPostIdFromUrl() {
    const url = window.location.href;
    const postIdIndex = url.lastIndexOf('/') + 1;
    return url.substring(postIdIndex);

}


document.querySelector('.card').addEventListener('click', update)