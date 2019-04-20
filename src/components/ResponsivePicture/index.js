import React from "react";

export const ResponsivePicture = ({ sources }) => {
  const { imageSources, image } = sources;
  const renderSources = () => {
    return imageSources.map(source => (
      <source
        key={source.srcset}
        media={source.media}
        srcSet={source.srcset}
        type={source.type}
      />
    ));
  };

  return (
    <picture className="responsivePicture">
      {renderSources()}
      <img src={image.src} />
    </picture>
  );
};
