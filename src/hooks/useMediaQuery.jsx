import { useEffect, useState } from "react";

// import { useState, useEffect } from "react";

const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    // Update the matches state with the current match status
    setMatches(media.matches);

    // Define the listener function that will update the state
    const listener = () => {
      setMatches(media.matches);
    };

    // Add the event listener to the media query list
    media.addListener(listener);

    // Cleanup function to remove the event listener
    return () => {
      media.removeListener(listener);
    };
  }, [query]);

  return matches;
};

export default useMediaQuery;
