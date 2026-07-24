export default {
  name: 'unit',
  title: 'Unit Latihan',
  type: 'document',
  fields: [
    {
      name: 'namaSekolah',
      title: 'Nama Sekolah / Unit',
      type: 'string',
      validation: Rule => Rule.required().error('Nama sekolah wajib diisi')
    },
    {
      name: 'slug',
      title: 'Slug (URL Unik)',
      type: 'slug',
      options: {
        source: 'namaSekolah',
        maxLength: 96,
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'tingkat',
      title: 'Tingkat Pendidikan',
      type: 'string',
      options: {
        list: [
          { title: 'SD / MI', value: 'SD/MI' },
          { title: 'SMP / MTs', value: 'SMP/MTs' },
          { title: 'SMA / SMK / MA', value: 'SMA/SMK/MA' },
          { title: 'Umum / Ranting', value: 'Umum' },
        ],
        layout: 'radio'
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'tahunAktif',
      title: 'Aktif Sejak (Tahun)',
      type: 'string',
      placeholder: 'Contoh: 2023'
    },
    {
      name: 'pelatih',
      title: 'Nama Pelatih Utama',
      type: 'string',
      placeholder: 'Contoh: Kang Ahmad'
    },
    {
      name: 'jadwal',
      title: 'Jadwal Latihan',
      type: 'string',
      placeholder: 'Contoh: Selasa & Kamis, 16.00 WIB'
    },
    {
      name: 'lokasi',
      title: 'Lokasi Latihan',
      type: 'string',
      placeholder: 'Contoh: Lapangan Utama SMAN 6 Kota Serang'
    },
    {
      name: 'kontakWA',
      title: 'Nomor WhatsApp Pelatih (Format: 628xxx)',
      type: 'string',
      description: 'Gunakan awalan 62 tanpa tanda + atau strip. Contoh: 6281234567890'
    },
    {
      name: 'fotoBackground',
      title: 'Foto Bersama / Banner Unit',
      type: 'image',
      options: {
        hotspot: true
      }
    }
  ]
}
