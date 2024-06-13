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
}