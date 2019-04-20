const homeSources = {
  imageSources: [
    {
      media: '(min-width: 90em)',
      srcset: '/static/images/bg_heading_extralarge_land.jpg',
      type: 'image/jpg'
    },
    {
      media: '(min-width: 60em)',
      srcset: '/static/images/bg_heading_large_land.jpg',
      type: 'image/jpg'
    },
    {
      media: '(min-width: 40em)',
      srcset: '/static/images/bg_heading_land.jpg',
      type: 'image/jpg'
    },
    {
      media: '(min-width: 48em) and (orientation: portrait)',
      srcset: '/static/images/bg_heading_small_port.jpg',
      type: 'image/jpg'
    }
  ],
  image: {
    src: '/static/images/bg_heading_small_port.jpg'
  }
}

export {homeSources}
