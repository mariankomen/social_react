import React from 'react';
import post_ad from '../post_adding/post_adding_style.module.css';
import {AddPost} from "../../../../redux/state";


const Post_Add = (props) => {

    let NewPostElement = React.createRef();
    let PostClickAdd = () => {
        let text = NewPostElement.current.value;
        AddPost(text);
        props.UpdateText('');
        console.log(text);
    }
    let OnChangeFunc = () => {
        let text = NewPostElement.current.value;
        props.UpdateText(text);
        console.log(text);
    }


    return (
        <div className={post_ad.Post}>
            {/*Text Area comm*/}
            <textarea className={post_ad.textar} onChange={OnChangeFunc} ref={NewPostElement} value={props.textValue}/>
            <div>
                <button className={post_ad.btn} onClick={PostClickAdd}>Add</button>
                <button className={post_ad.btn}>Delete</button>
            </div>
        </div>
    );
}

export default Post_Add;