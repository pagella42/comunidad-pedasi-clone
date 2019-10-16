import React, { Component } from 'react';
import axios from 'axios';
import VerifyPost from './VerifyPost';

class CreatePost extends Component {
    constructor(){
        super()
        this.state = {
            post = {
                title: "",
                content:"",
                //category:"", We don't have category in our mvp
                points:0,
                date:"",
                address:"",
            },
            usersPhone: null, // login with number // Pass it from Login 
            verifyPost:{
                verified: false, 
                show:false,
            }
        }
    }

    handleInputChange = (event) => {
        let name = event.target.name
        let value = event.target.value
        let post = {...this.state.post}
        post[name] = value
    }

    verifyPost = () => {
        let verifyPost = {...this.state.verifyPost}
        verifyPost.show = true
        this.setState({verifyPost : verifyPost})
    }

    confirmPost = async () => {
        let usersPhone = this.state.usersPhone
        let post = {...this.state.post}
        let date = new Date()
        post.date = date
        // the post object contains all information about the post - the usersPhone is used to uniquely identify the user in the backend
        let data = {post : post, usersPhone : usersPhone}
        await axios.post("http://localhost:4000/data/post", data )
        alert("Successful posted your post.")
    }

    reviewPost = (action) => {
        if(action === "review"){
            let verifyPost = {...this.state.verifyPost}
            verifyPost.show = false
            this.setState({verifyPost : VerifyPost})
        } else {
            this.confirmPost()
        }
    }


    render() {
        return (
            <div>
                <input type="text" name="title" placeholder="Title" onChange={this.handleInputChange}/>
                <input type="text" name="content" placeholder="Text" onChange={this.handleInputChange}/>
                <input type="text" name="address" placeholder="Adress" onChange={this.handleInputChange}/>
                <button onClick={this.verifyPost}>Submit</button>
                {/* Pop up : please review your post */}
                {this.state.verifyPost.show ? <VerifyPost reviewPost={this.reviewPost} post={this.state.post} /> : <div></div>}
            </div>
        );
    }
}

export default CreatePost;