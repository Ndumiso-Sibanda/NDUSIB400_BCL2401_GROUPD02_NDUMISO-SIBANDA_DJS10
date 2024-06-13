import React from "react"
import './App.css'
import imgUrl from './assets/images/error-message.png'

function App() {
  const [posts, setPosts] = React.useState([])
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts") 
      .then(res => {
        if (!res.ok) {
          throw new Error("Failed to fetch data")
        }
        return res.json()})
      .then(data => setPosts(data))
      .catch(error => {
        console.log(error.message)
        return setError(error.message)
      });
  }, [])

  const postElements = posts.map(post => 

    <div key={post.id} className="post-tile">
      <h2 > <span>{post.id}</span>. {post.title}</h2>
      <p>{post.body}</p>
    </div>
  )

  return (
    <>
      {error ? (
        <img src={imgUrl} alt="404" />
      ) : (
        <>
          <h1 className="Post">Posts</h1>
          {postElements}
        </>
      )}
    </>
  )
}

export default App
