import {RootTheme, ThemeColorBaseToneKey, ThemeColorSchemeKey} from '@sanity/ui/theme'

/**
 * @public
 */
export interface ThemeContextValue {
  version: 0.0
  scheme: ThemeColorSchemeKey
  theme: RootTheme
  tone: ThemeColorBaseToneKey
}