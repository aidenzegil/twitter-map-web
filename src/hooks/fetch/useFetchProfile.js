import { useState } from "react";

async function fetchNewProfile(id) {

    const result = await fetch("https://tweeterman.herokuapp.com/tweet/", {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify({ sentId: id }),
    }).then((response) => response.json())
  
    return result
  }
  
  
  export const useFetchProfile = (id) => {
    const [profile, setProfile] = useState([""]);
  
    const fetchProfile= async() => {
      const newProfile = await fetchNewProfile(id)
      setProfile(newProfile)
    }
  
    return [fetchProfile, profile];
  };