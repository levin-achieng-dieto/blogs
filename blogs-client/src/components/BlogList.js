import React, { useState, useEffect } from "react";
// import Card from "./Card";


function BlogList(){
    const [blog, setBlog] = useState([]);
    useEffect(() => {
            fetch("http://localhost:9292/posts")
              .then((response) => response.json())
              .then((data) => {
                setBlog(data.blog);
              });
          }, []);
    return(
        <div>{blog?.map((user) => user.name)}</div>
    )
}

export default BlogList




