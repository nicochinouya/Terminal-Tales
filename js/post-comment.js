const postComment = async (event) => {
    event.preventDefault();

    const comment = document.querySelector('#comment').value.trim();
    const post_id = getPostIdFromUrl()
    if(comment){
        const response = await fetch('/comment', {
            method: 'POST',
            body: JSON.stringify({comment, post_id}),
            headers: {'Content-Type': 'application/json'}, 
        });
        if(response.ok){
            document.location.replace(window.location.pathname);
            console.log(post_id);
            console.log(response);
        }else{
            alert('Failed to post.')
        }
    }
}
function getPostIdFromUrl() {
    const url = window.location.href;
    const postIdIndex = url.lastIndexOf('/') + 1;
    return url.substring(postIdIndex);

}

document.querySelector('#post-comment').addEventListener('submit', postComment);