import { useState } from "react";

async function fetchNewFollowing(id) {

    const result = await fetch("https://tweeterman.herokuapp.com/tweet/", {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify({ sentId: id }),
    }).then((response) => response.json())
  
    return result
  }
  
  
  export const useFetchFollowing = (id) => {
    const [following, setFollowing] = useState([""]);
  
    const fetchFollowing= async() => {
      const newFollowing = await fetchNewFollowing(id)
      setFollowing(newFollowing)
    }
  
    return [fetchFollowing, following];
  };