let works = {
  name: 'works',
  title: 'Works',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text'
    },
    {
      name: 'projectLink',
      title: 'Project Link',
      type: 'string'
    },
    {
      name: 'codeLink',
      title: 'Code Link',
      type: 'string'
    },
    {
      name: 'imageUrl',
      title: 'imageURL',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [
        {
          name: 'tags',
          title: 'Tags',
          type: 'string'
        }
      ]
    }
  ]
}

export default works
