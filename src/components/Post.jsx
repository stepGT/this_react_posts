import React from "react";
import MyButton from "../components/UI/button/MyButton";

const Post = (props) => {
    return (
        <div className="post">
            <div className="post__content">
                <strong>{props.number} {props.post.title}</strong>
                <div>{props.post.body}</div>
            </div>
            <div className="post__btns">
                <MyButton onClick={() => props.delete(props.post)}>Delete</MyButton>
            </div>
        </div>
    );
}

export default Post;