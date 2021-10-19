import React from 'react'
import MyButton from "../components/UI/button/MyButton";
import MyInput from "../components/UI/input/MyInput";

const PostForm = ({ create }) => {
    const [post, setPost] = React.useState({ title: "", body: "" });
    const addNewPost = (e) => {
        e.preventDefault();
        const newPost = {
            ...post,
            id: Date.now()
        }
        create(newPost);
        setPost({ title: '', body: '' })
    };
    return (
        <form>
            <MyInput
                onChange={(e) => setPost({ ...post, title: e.target.value })}
                value={post.title}
                type="text"
                placeholder="text"
            />
            <MyInput
                onChange={(e) => setPost({ ...post, body: e.target.value })}
                value={post.body}
                type="text"
                placeholder="body"
            />

            <MyButton type="submit" onClick={addNewPost}>
                Create
            </MyButton>
        </form>
    )
}

export default PostForm;