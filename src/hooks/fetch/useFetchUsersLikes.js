import { useState } from "react";

async function fetchNewUsersLikes(id) {

    const result = await fetch("https://tweeterman.herokuapp.com/tweet/", {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify({ sentId: id }),
    }).then((response) => response.json())
  
    return result
  }
  
  
  export const useFetchUsersLikes = (id) => {
    const [usersLikes, setUsersLikes] = useState([""]);
  
    const fetchUsersLikes= async() => {
      const newUsersLikes = await fetchNewUsersLikes(id)
      setUsersLikes(newUsersLikes)
    }
  
    return [fetchUsersLikes, usersLikes];
  };