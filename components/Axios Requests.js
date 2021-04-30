import React, { useEffect, useState } from 'react'
import axios from 'axios'
import style from '../styles/Home.module.css'

const Requests = () => {

    function removeData(id) {
        fetch("https://requests.kevtucker.com/requests3/" + id, {
            method: 'DELETE'
        }).then(() => {
            alert('Request Deleted')
            console.log('removed');
        }).catch(err => {
            console.error(err)
        });
    }

    const [posts, setPosts] = useState([])
    const getPosts = async () => {
        try {
            const userPosts = await axios.get("https://requests.kevtucker.com/requests3")
            setPosts(userPosts.data);  // set State

        } catch (err) {
            console.error(err.message);
        }
    };

    useEffect(() => {

        getPosts()
        const interval = setInterval(() => {
            getPosts()
        }, 500)


        return () => clearInterval(interval)
    }, [])  // includes empty dependency array

    return (
        <div className={style.container}>
            {posts.map(result => {

                const { id, track, artist, contact, comment, location } = result;

                return (
                    <div className={style.requestBox} key={id}>
                        <h5>Track : {track}</h5>
                        <h5>Artist : {artist}</h5>
                        <h5>Comment : {comment}</h5>
                        <h5>Contact Name : {contact}</h5>
                        <h5>Contact Name : {location}</h5>
                        <button onClick={() => removeData(id)}>Delete Request</button>
                    </div>

                )
            })}

        </div>
    );
}
export default Requests;