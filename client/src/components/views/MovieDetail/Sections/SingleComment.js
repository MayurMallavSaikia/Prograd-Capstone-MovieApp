import React, { useState } from 'react'
import { Comment, Avatar, Button, Input } from 'antd';
import Axios from 'axios';
import { useSelector } from 'react-redux';
import LikeDislikes from './LikeDislikes';
const { TextArea } = Input;
function SingleComment(props) {
    const user = useSelector(state => state.user);
    const [CommentValue, setCommentValue] = useState("")
    const [OpenReply, setOpenReply] = useState(false)

    // const handleChange = (e) => {
    //     setCommentValue(e.currentTarget.value)
    // }

    // const openReply = () => {
    //     setOpenReply(!OpenReply)
    // }

    // const onSubmit = (e) => {
    //     e.preventDefault();

    //     const variables = {
    //         writer: localStorage.getItem('userId'),
    //         postId: props.postId,
    //         responseTo: props.comment._id,
    //         content: CommentValue
    //     }


    //     Axios.post('https://cinemahdbackend.herokuapp.com/api/comment/saveComment', variables)
    //         .then(response => {
    //             if (response.data.success) {
    //                 setCommentValue("")
    //                 setOpenReply(!OpenReply)
    //                 props.refreshFunction(response.data.result)
    //             } else {
    //                 alert('Failed to save Comment')
    //             }
    //         })
    // }

    const actions = [
        <LikeDislikes comment commentId={props.comment._id} userId={localStorage.getItem('userId')} />,
        // <span onClick={openReply} key="comment-basic-reply-to">Reply to </span>
    ]

    return (
        <div>
            <Comment
                actions={actions}
                author={props.comment.writerName}
                avatar={
                    <Avatar
                        src={"https://source.unsplash.com/random/200x200?sig="+Math.random() * 1000}
                        alt="image"
                    />
                }
                content={
                    <p>
                        {props.comment.content}
                    </p>
                }
            ></Comment>


            {/* {OpenReply &&
                <form style={{ display: 'flex' }} onSubmit={onSubmit}>
                    <TextArea
                        style={{ width: '100%', borderRadius: '5px' }}
                        onChange={handleChange}
                        value={CommentValue}
                        placeholder="write your reply"
                    />
                    <br />
                    <Button style={{ width: '20%', height: '52px' }} onClick={onSubmit}>Submit</Button>
                </form>
            } */}

        </div>
    )
}

export default SingleComment
