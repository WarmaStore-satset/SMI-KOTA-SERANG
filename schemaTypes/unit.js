import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'unit',
  title: 'Unit Latihan',
  type: 'document',

  fields: [

    defineField({
      name: 'namaSekolah',
      title: 'Nama Sekolah',
      type: 'string'
    }),

    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'namaSekolah',
        maxLength: 96
      }
    }),

    defineField({
      name: 'tingkat',
      title: 'Tingkat',
      type: 'string',
      options: {
        list: [
          {title:'SD', value:'SD'},
          {title:'SMP', value:'SMP'},
          {title:'SMA', value:'SMA'},
          {title:'Umum', value:'Umum'}
        ]
      }
    }),

    defineField({
      name: 'tahunAktif',
      title: 'Tahun Aktif',
      type: 'number'
    }),

    defineField({
      name: 'pelatih',
      title: 'Pelatih',
      type: 'string'
    }),

    defineField({
      name: 'jadwal',
      title: 'Jadwal Latihan',
      type: 'text'
    }),

    defineField({
      name: 'lokasi',
      title: 'Lokasi',
      type: 'string'
    }),

    defineField({
      name: 'waPelatih',
      title: 'WhatsApp Pelatih',
      type: 'string'
    }),

    defineField({
      name: 'banner',
      title: 'Foto Banner',
      type: 'image',
      options: {
        hotspot: true
      }
    })

  ]
})
