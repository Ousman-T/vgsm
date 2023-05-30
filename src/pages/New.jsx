import { useState } from "react";

function New(){
    const [newPost, setNewPost] = useState({})
    return(
        <div>
            <h1>Create a post</h1>
            <form action='/new' method='POST'>
                Title:<input type="text" name="title"/>

            </form>
        </div>

    )
}

export default New;