import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'pengurus',
  title: 'Pengurus',
  type: 'document',

  fields: [

    defineField({
      name: 'nama',
      title: 'Nama Lengkap',
      type: 'string',
      validation: Rule => Rule.required()
    }),

    defineField({
      name: 'jabatan',
      title: 'Jabatan',
      type: 'string',
      options: {
        list: [
          {title: 'Pembina', value: 'Pembina'},
          {title: 'Ketua', value: 'Ketua'},
          {title: 'Wakil Ketua', value: 'Wakil Ketua'},
          {title: 'Sekretaris', value: 'Sekretaris'},
          {title: 'Bendahara', value: 'Bendahara'},
          {title: 'Koordinator Unit', value: 'Koordinator Unit'}
        ]
      },
      validation: Rule => Rule.required()
    }),

    defineField({
      name: 'urutan',
      title: 'Urutan Tampil',
      type: 'number',
      validation: Rule => Rule.required().min(1)
    }),

    defineField({
      name: 'foto',
      title: 'Foto',
      type: 'image',
      options: {
        hotspot: true
      }
    })

  ]
})
