import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'bustedNews',
  title: 'Busted News Directory',
  type: 'document',
  fields: [
    defineField({
      name: 'claim',
      title: 'Debunked Claim / Headline',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'verdict',
      title: 'Verdict',
      type: 'string',
      initialValue: 'FALSE (BUSTED)',
    }),
    defineField({
      name: 'explanation',
      title: 'Why it was debunked / Explanation',
      type: 'text',
    }),
    defineField({
      name: 'createdAt',
      title: 'Debunked On Date',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
  ],
})