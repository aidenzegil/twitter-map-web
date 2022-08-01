import { useState } from "react";

async function fetchNewTweet(id) {

    const result = await fetch("https://tweeterman.herokuapp.com/tweet/", {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify({ sentId: id }),
    }).then((response) => response.json())
  
    return result
  }
  
  
  export const useFetchTweet = (id) => {
    const [tweet, setTweet] = useState([""]);
  
    const fetchTweet= async() => {
      const newTweet = await fetchNewTweet(id)
      setTweet(newTweet)
    }
  
    return [fetchTweet, tweet];
  };