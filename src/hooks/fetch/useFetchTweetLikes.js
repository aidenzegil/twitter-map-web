import { useState } from "react";

async function fetchNewTweetLikes(id) {

    const result = await fetch("https://tweeterman.herokuapp.com/tweet/", {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify({ sentId: id }),
    }).then((response) => response.json())
  
    return result
  }
  
  
  export const useFetchTweetLikes = (id) => {
    const [tweetLikes, setTweetLikes] = useState([""]);
  
    const fetchTweetLikes= async() => {
      const newTweetLikes = await fetchNewTweetLikes(id)
      setTweetLikes(newTweetLikes)
    }
  
    return [fetchTweetLikes, tweetLikes];
  };
  