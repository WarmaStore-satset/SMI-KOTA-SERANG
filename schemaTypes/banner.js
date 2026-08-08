export default {
  name: 'banner',
  title: 'Banner Carousel',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Caption / Tulisan',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Gambar Banner',
      type: 'image',
      options: { hotspot: true }
    }
  ]
}
