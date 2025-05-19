"use client";

import React, { useState } from "react";

const VideoOverlay: React.FC = () => {
  const [exploreHover, setExploreHover] = useState(false);

  return (
    <div style={styles.container}>
      <video
        autoPlay
        muted
        loop
        playsInline
        style={styles.video}
        src="damac-video.mp4"
      />
      <div style={styles.overlay}>
        <img
          src="damac-video.svg"
          alt="Couture by Cavalli Logo"
          style={styles.logo}
        />
        <div style={styles.buttons}>
          <button
            style={{
              ...styles.exploreButton,
              backgroundColor: exploreHover ? "#ccb073" : "#fff",
              color: exploreHover ? "#fff" : "#000",
            }}
            onMouseEnter={() => setExploreHover(true)}
            onMouseLeave={() => setExploreHover(false)}
          >
            Explore
          </button>
          <button style={styles.viewAllButton}>View All Project</button>
        </div>
      </div>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    position: "relative",
    width: "100%",
    height: "100vh",
    overflow: "hidden",
  },
  video: {
    position: "absolute",
    top: "50%",
    left: "50%",
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transform: "translate(-50%, -50%)",
    zIndex: 0,
  },
  overlay: {
    position: "relative",
    zIndex: 1,
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "0 20px",
    color: "white",
    textAlign: "center",
  },
  logo: {
    maxWidth: "300px",
    width: "80%",
    height: "auto",
    marginBottom: "16px",
  },
  buttons: {
    display: "flex",
    gap: "50px",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  exploreButton: {
    border: "none",
    fontSize: "1rem",
    cursor: "pointer",
    padding: "10px 24px",
    fontWeight: 100,
    borderRadius: "30px",
    transition: "all 0.3s ease",
    textTransform: "uppercase",
    wordSpacing: "10px"
  },
  viewAllButton: {
    backgroundColor: "transparent",
    border: "none",
    color: "white",
    fontSize: "1rem",
    cursor: "pointer",
    textDecorationLine: "underline",
    textUnderlineOffset: "4px",
    textDecorationThickness: "2px",
    fontWeight: 500,
    padding: "10px 0",
    textTransform: "uppercase"
  },
};

export default VideoOverlay;
