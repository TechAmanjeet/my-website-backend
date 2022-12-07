let brands = {
  name: 'brands',
  title: 'Brands',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string'
    },
    {
      name: 'imageUrl',
      title: 'ImageURL',
      type: 'image',
      options: {
        hotspots: 'true'
      }
    }
  ]
}

export default brands
