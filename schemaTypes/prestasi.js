export default {
  name: 'prestasi',
  title: 'Hall of Fame Prestasi',
  type: 'document',
  fields: [
    {
      name: 'namaAtlet',
      title: 'Nama Atlet',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'namaKejuaraan',
      title: 'Kejuaraan / Medali',
      type: 'string',
      placeholder: 'Contoh: Juara 1 POPDA Banten 2025',
      validation: Rule => Rule.required()
    },
    {
      name: 'unitSekolah',
      title: 'Asal Unit / Sekolah',
      type: 'string',
      placeholder: 'Contoh: SMAN 6 Kota Serang'
    },
    {
      name: 'fotoAtlet',
      title: 'Foto Atlet',
      type: 'image',
      options: {
        hotspot: true
      },
      validation: Rule => Rule.required()
    }
  ]
}
