import { useState } from "react";
import { createPost } from "../utilities/makePostApi";

function New(){
    const [newPost, setNewPost] = useState({
        userName: "",
        postTitle: "",
        postBody: "",
    });

    const handleChange = (evt) => {
        setNewPost({...newPost, [evt.target.userName]: evt.target.value, error: ""})
    };

    const handleSubmit = async (e) => {
        console.log('Button clicked!');
        e.preventDefault();
        
        
        try {
            console.log(newPost);
            const postData = {
                userName: newPost.userName,
                postTitle: newPost.postTitle,
                postBody: newPost.postBody
            }
            const response = await createPost(postData);
            console.log(response);
            alert('Post recieved in database!')
        } catch(error){
            console.log('Error occurred in the catch');
            console.log(error);
            setNewPost({...newPost, error: "Problem saving post information"})
        };
    };
    return(
        <div className="newPost">
            <h1>Create a post</h1>
            <form action='/new' method="POST" onSubmit={handleSubmit}>
                userName:<input type="text" name="userName" onChange={handleChange}/>
                <br />
                postTitle:<input type="text" name="postTitle" onChange={handleChange}/>
                <br />
                postBody:<input type="text" name="postBody" onChange={handleChange}/>
                <br />
                <button type="submit" onSubmit={handleSubmit}>Submit Info?</button>
            </form>
        </div>

    )
}

export default New;