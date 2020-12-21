import React from 'react';
import p_s from './post_style.module.css';
import CreateNewPost from "./post_adding/createNewPost";


const Post = (props) => {
    let PostItemsRend = props.PostItems.map(spn => <CreateNewPost name={spn.name} cont={spn.cont} like={spn.like}/>);
    return (
        <div>
            {PostItemsRend}
        </div>
    );
}

export default Post;