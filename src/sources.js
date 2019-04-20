const homeSources = {
  imageSources: [
    {
      media: '(min-width: 90em)',
      srcset: './images/bg_heading_extralarge_land.jpg',
      type: 'image/jpg'
    },
    {
      media: '(min-width: 80em) and (orientation: portrait)',
      srcset: './images/bg_heading_medium_port.jpg',
      type: 'image/jpg'
    },
    {
      media: '(min-width: 48em) and (orientation: portrait)',
      srcset: './images/bg_heading_small_port.jpg',
      type: 'image/jpg'
    }
  ],
  image: {
    src: './images/bg_heading_small_port.jpg'
  }
}

export {homeSources}
