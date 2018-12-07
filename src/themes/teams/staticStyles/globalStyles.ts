import { StaticStyleFunction } from '../../types'

const globalStyles: StaticStyleFunction = siteVars => ({
  html: {
    fontSize: siteVars.htmlFontSize,
  },
  body: {
    padding: siteVars.bodyPadding,
    margin: siteVars.bodyMargin,
    fontFamily: siteVars.bodyFontFamily,
    lineHeight: siteVars.bodyLineHeight,
  },
})

export default globalStyles