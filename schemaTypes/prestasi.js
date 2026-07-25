import {defineField, defineType} from 'sanity'

export default defineType({

  name: 'prestasi',

  title: 'Hall of Fame',

  type: 'document',

  fields: [

    defineField({
      name: 'namaAtlet',
      title: 'Nama Atlet',
      type: 'string'
    }),

    defineField({
      name: 'kejuaraan',
      title: 'Kejuaraan / Medali',
      type: 'string'
    }),

    defineField({
      name: 'asalUnit',
      title: 'Asal Unit',
      type: 'string'
    }),

    defineField({
      name: 'fotoAtlet',
      title: 'Foto Atlet',
      type: 'image',
      options: {
        hotspot: true
      }
    })

  ]

})
