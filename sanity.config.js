import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'

import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'SMI Komwil Kota Serang',

  projectId: 'r6yz1q11',
  dataset: 'production',

  plugins: [structureTool()],

  schema: {
    types: schemaTypes,
  },
})
