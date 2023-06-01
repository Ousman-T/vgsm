const BASE_URL = '/new'

/*---- Helper functions ---*/

async function sendRequest(url, method = 'GET', payload = null){
    // Fetch accepts an options object as the second argument
    // used to include data payload, set handlers and such
    const options = { method };
    if(payload){
        options.headers = {'Content-Type': 'applications/json'};
        options.body = JSON.stringify(payload);
        console.log('Just stringified your payload :]');
        console.log(url);
    }
    const res = await fetch(url, options);
    if (res.ok) return res.json();
    throw new Error('Bad request, coming from utilities');
};

// * Create a Post

export function createPost(postData){
    console.log('Creating your post through an API');
    return sendRequest(`${BASE_URL}/new`, 'POST', postData);
};

// ! Delete a post
export function removePost(postData){
    return sendRequest(`${BASE_URL}`, 'DELETE', postData)
};