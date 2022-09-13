import React from 'react';

const PostItem = (props) => {
    return (
        <div className="post">
            <div className="post_content">
                <strong>{props.post.id}. {props.post.title}</strong>
                <div>
                    {props.post.text}
                </div>
            </div>
            <div className="post_delete_btn">
                <button>Delete</button>
            </div>
        </div>
    );
};

export default PostItem;