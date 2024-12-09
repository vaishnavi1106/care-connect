import React from 'react';
import './VideoPage.css';

const VideoPage = () => {
  return (
    <div className="video-page-container">
      <h1>Video</h1>
      <h3>Let's Support Each Other.</h3>
      
      <div className="video-gallery">
        {/* Example Video Embed */}
        <div className="video">
          <iframe 
            width="560" 
            height="315" 
            src="https://www.youtube.com/embed//91fZilDEFlA?feature=shared" 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen>
          </iframe>
          <p>Indias Urban Homless.</p>
        </div>
        <div className="video">
          <iframe 
            width="560" 
            height="315" 
            src="https://www.youtube.com/embed/kfWNa7lF2pQ?feature=shared" 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen>
          </iframe>
          <p>Life Homless People In Pune.</p>
        </div>
      </div>
    </div>
  );
};

export default VideoPage;
