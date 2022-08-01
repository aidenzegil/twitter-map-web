import { useState } from "react";

async function fetchNewTimeline(id) {

    const result = await fetch("https://tweeterman.herokuapp.com/tweet/", {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify({ sentId: id }),
    }).then((response) => response.json())
  
    return result
  }
  
  
  export const useFetchTimeline = (id) => {
    const [timeline, setTimeline] = useState([""]);
  
    const fetchTimeline= async() => {
      const newTimeline = await fetchNewTimeline(id)
      setTimeline(newTimeline)
    }
  
    return [fetchTimeline, timeline];
  };