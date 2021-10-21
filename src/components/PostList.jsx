import React from "react";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Post from "../components/Post";

const PostList = (props) => {
    if (!props.posts.length) {
        return (
            <h1 style={{ textAlign: "center" }}>Post not found!</h1>
        );
    }
    return (
        <>
            <h2 style={{ textAlign: "center" }}>
                {props.title}
            </h2>
            <TransitionGroup>
                {props.posts.map((el, ind) =>
                    <CSSTransition
                        key={el.id}
                        timeout={500}
                        classNames="post"
                    >
                        <Post delete={props.delete} number={ind + 1} post={el} />
                    </CSSTransition>
                )}
            </TransitionGroup>
        </>
    );
}

export default PostList;