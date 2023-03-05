import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const [posts, setPosts] = useState([]);

  const cat = useLocation().search;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts${cat}`);
        setPosts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [cat]);
  // const posts = [
  //   {
  //     id: 1,
  //     title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
  //     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed est lacinia, porttitor eros id, rutrum est.t.",
  //     img: "https://images.unsplash.com/photo-1630228429379-19d04fded6a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIwfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
  //   },
  //   {
  //     id: 2,
  //     title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
  //     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed est lacinia, porttitor eros id, rutrum est.t.",
  //     img: "https://images.unsplash.com/photo-1666214273506-c2984f1d3301?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  //   },
  //   {
  //     id: 3,
  //     title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
  //     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed est lacinia, porttitor eros id, rutrum est.t.",
  //     img: "https://images.unsplash.com/photo-1666214280250-41f16ba24a26?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  //   },
  //   {
  //     id: 4,
  //     title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
  //     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed est lacinia, porttitor eros id, rutrum est.t.",
  //     img: "https://images.unsplash.com/photo-1618477371303-b2a56f422d9e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
  //   },
  // ];
  const getText = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent;
  };

  return (
    <div className="home">
      <div className="posts">
        {posts.map((post) => (
          <div className="post" key={post.id}>
            <div className="img">
              <img src={post?.img} alt="" />
            </div>
            <div className="content">
              <Link className="link" to={`/post/${post.id}`}>
                <h1>{post.title}</h1>
              </Link>
              <p>{getText(post.desc)}</p>
              <button>Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
