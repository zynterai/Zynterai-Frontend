import { cn } from '@/lib/utils'

/**
 * Shared legal typography. Major sections are `h2` — we separate them with
 * strong vertical rhythm + top rules (not cards/grids, to avoid “notes”).
 */
const legalArticleBase = cn(
  'legal-article mx-auto max-w-[70ch] space-y-6 text-[15px] leading-[1.72] text-foreground/80',
  '[&_h1]:mb-3 [&_h1]:text-[1.75rem] [&_h1]:font-semibold [&_h1]:tracking-[-0.02em] [&_h1]:text-foreground sm:[&_h1]:text-[2.1rem]',
  /* First major section after intro */
  '[&_h2:first-of-type]:mt-10',
  /* Every major section */
  '[&_h2]:scroll-mt-28 [&_h2]:pb-3 [&_h2]:text-lg [&_h2]:font-semibold [&_h2]:tracking-tight [&_h2]:text-foreground',
  '[&_h2]:border-b [&_h2]:border-white/12',
  /* Subsequent major sections: clear break from prior wall of text */
  '[&_h2:not(:first-of-type)]:mt-[3.25rem] [&_h2:not(:first-of-type)]:border-t [&_h2:not(:first-of-type)]:border-white/10 [&_h2:not(:first-of-type)]:pt-12',
  /* Subsections */
  '[&_h3]:mt-10 [&_h3]:scroll-mt-28 [&_h3]:border-l-2 [&_h3]:border-white/10 [&_h3]:pl-4 [&_h3]:text-base [&_h3]:font-semibold [&_h3]:text-foreground/95',
  '[&_h4]:mt-8 [&_h4]:text-[15px] [&_h4]:font-semibold [&_h4]:text-foreground/90',
  '[&_p]:text-foreground/78 [&_li]:text-foreground/78',
  '[&_strong]:font-semibold [&_strong]:text-foreground/95',
  /* Lists: tighter + clearer markers */
  '[&_ul]:my-2 [&_ul]:list-outside [&_ul]:space-y-2.5 [&_ul]:pl-6 [&_ul_ul]:mt-3 [&_ul_ul]:space-y-2 [&_ul_ul]:pl-5',
  '[&_a]:underline-offset-[2px] [&_a]:decoration-white/20 [&_a]:transition-colors hover:[&_a]:decoration-white/40 hover:[&_a]:underline'
)

/** Terms — brand link + marker tint */
export const legalArticleClassNameTerms = cn(
  legalArticleBase,
  '[&_ul>li]:marker:text-primary/45',
  '[&_a]:text-primary/90 hover:[&_a]:text-primary'
)

/** Privacy — cooler marker tint (subsection border inherits from base) */
export const legalArticleClassNamePrivacy = cn(
  legalArticleBase,
  '[&_h3]:border-[#a5c9ca]/18',
  '[&_h2:not(:first-of-type)]:border-[#a5c9ca]/12',
  '[&_ul>li]:marker:text-[#6d8a8c]',
  '[&_a]:text-[#8cadaf] hover:[&_a]:text-[#9ebfc1]'
)
