import React from "react";
import Post from "../components/Post";

const PostList = (props) => {
    return (
        <>
            <h2 style={{ textAlign: "center" }}>
                {props.title}
            </h2>
            {props.posts.map((el, ind) => {
                return <Post delete={props.delete} number={ind + 1} key={el.id} post={el} />;
            })}
        </>
    );
}

export default PostList;