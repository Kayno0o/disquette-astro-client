import { defineConfig } from 'unocss'

export default defineConfig({
  theme: {
    colors: {
      'accent': {
        'light': '#6ee7b7',
        'DEFAULT': '#34d36e',
      },
      'dark': {
        lighter: '#27272a',
        light: '#18181b',
        'DEFAULT': '#1e1e1e',
      }
    },
  },

  variants: [
    (matcher) => {
      const suffixes = ['hover', 'focus', 'focus-visible']
      const index = suffixes.findIndex(p => matcher.startsWith(p + ':'))
      if (index === -1)
        return matcher

      const suffix = suffixes[index]

      return {
        matcher: matcher.slice(suffix.length + 1),
        selector: s => `${s}:` + suffix,
      }
    },
    (matcher) => {
      const regex = /^(group(?:[\w-]+)?)\:/
      const match = matcher.match(regex)
      if (!match)
        return matcher

      const args = match[1].split('_')
      let group = args.shift()

      if (args.length) {
        group += ':' + args.join(':')
      }

      return {
        matcher: matcher.slice(match[0].length),
        selector: s => `.${group} ${s}`,
      }
    },
    (matcher) => {
      const suffix = 'all-child:'
      if (!matcher.startsWith(suffix))
        return matcher

      return {
        matcher: matcher.slice(suffix.length),
        selector: s => `${s} *`,
      }
    },
    (matcher) => {
      const suffix = 'child:'
      if (!matcher.startsWith(suffix))
        return matcher

      return {
        matcher: matcher.slice(suffix.length),
        selector: s => `${s} > *`,
      }
    },
    (matcher) => {
      const suffix = 'sub-child:'
      if (!matcher.startsWith(suffix))
        return matcher

      return {
        matcher: matcher.slice(suffix.length),
        selector: s => `${s} > * > *`,
      }
    },
  ],
})