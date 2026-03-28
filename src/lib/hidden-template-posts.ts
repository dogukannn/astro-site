import type { CollectionEntry } from 'astro:content'

/**
 * Posts that ship with the template (e.g. authored by "enscribe") are kept in-repo
 * for reference, but should not show up in the site's public listings.
 */
const HIDDEN_TEMPLATE_AUTHORS = new Set(['enscribe', 'jktrn'])

export function isHiddenTemplatePost(post: CollectionEntry<'blog'>): boolean {
  const authors = post.data.authors ?? []
  return authors.some((a) => HIDDEN_TEMPLATE_AUTHORS.has(a))
}

export {}
