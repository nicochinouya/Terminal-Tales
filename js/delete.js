const deletePost = async () => {
    const id = document.querySelector('#id').textContent.trim();
 const response = await fetch(`/post/${id}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
 });

 if(response.ok){
    document.location.replace('/dashboard');
}else {
    alert('Failed to delete')
}
}

const redirect = async () => {
    const id = document.querySelector('#id').textContent.trim();
    document.location.replace(`/update/${id}`);
}

document.querySelector('#btn-update'). addEventListener('click', redirect)

document.querySelector('#btn-delete').addEventListener('click', deletePost)