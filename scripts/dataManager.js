export const getPosts = () => {
    return fetch("http://localhost:3333/posts")
    .then(response => response.json())
}

export const createPost = postObj => {
    console.log("createPost has been initiated");
    return fetch("http://localhost:3333/posts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(postObj)})
        .then(response => response.json())
}

export const deletePost = (postId) => {
    console.log("postId being plugged into deletePost is: " + postId);
  return fetch(`http://localhost:3333/posts/${postId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
    }
  })
}

export const getSinglePost = (postId) => {
  return fetch(`http://localhost:3333/posts/${postId}`)
    .then(response => response.json())
}

export const updatePost = postObj => {
  return fetch(`http://localhost:3333/posts/${postObj.id}`, {
      method: "PUT",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(postObj)

  })
      .then(response => response.json())
}

// let loggedInUser = {}

// export const setLoggedInUser (userObj) => {
//     loggedInUser = userObj;
//   }
