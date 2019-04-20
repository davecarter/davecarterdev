import React from 'react'
import PropTypes from 'prop-types'

export const ResponsivePicture = ({sources}) => {
  const {imageSources, image} = sources
  const renderSources = () => {
    return imageSources.map(source => (
      <source
        key={source.srcset}
        media={source.media}
        srcSet={source.srcset}
        type={source.type}
      />
    ))
  }

  return (
    <picture className="responsivePicture">
      {renderSources()}
      <img className="responsivePicture-image" src={image.src} />
    </picture>
  )
}

ResponsivePicture.propTypes = {
  sources: PropTypes.object
}
