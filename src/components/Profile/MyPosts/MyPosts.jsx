import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";

const MyPosts = (props) => {

    let postsElements = props.postsElements
        .map((p) => <Post message={p.message} likesCount={p.likesCount} key={p.id}/>);

    let addNewPost = (values) => {
        props.addPost(values.newPostText);
    }

    return (
        <div className={s.postsBlock}>
            <h2>Posts</h2>
            <AddMessageReduxForm onSubmit={addNewPost}/>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

const AddPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={'textarea'} name={'newPostText'} placeholder={'Enter your text'}/>
            </div>
            <div>
                <button><h3>Add post</h3></button>
            </div>
        </form>
    )
}

const AddMessageReduxForm = reduxForm({form: 'ProfileAddPostForm'})(AddPostForm);

export default MyPosts;