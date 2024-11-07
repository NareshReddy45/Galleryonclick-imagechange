// src/components/ThumbnailItem/index.js
import React from 'react'
import './index.css'

function ThumbnailItem({thumbnailUrl, thumbnailAltText, onClick}) {
  return (
    <li className="thumbnail-item">
      <button type="button" className="thumbnail-button" onClick={onClick}>
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className="thumbnail-image"
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
