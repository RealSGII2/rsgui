export type ColorType = 'brand' | 'warning' | 'success' | 'destructive' | 'gray'

export function lighten (color: string, percent: number) {
  const num = parseInt(color.replace('#', ''), 16)
  const amt = Math.round(255 * percent)
  const R = (num >> 16) + amt
  const B = (num >> 8 & 0x00FF) + amt
  const G = (num & 0x0000FF) + amt

  return (0x1000000 + (R < 255 ? R < 1 ? 0 : R : 255) * 0x10000 + (B < 255 ? B < 1 ? 0 : B : 255) * 0x100 + (G < 255 ? G < 1 ? 0 : G : 255)).toString(16).slice(1)
}

export function lightness (color: string) {
  const hexcolor = color.replace('#', '')
  var r = parseInt(hexcolor.substr(0, 2), 16)
  var g = parseInt(hexcolor.substr(2, 2), 16)
  var b = parseInt(hexcolor.substr(4, 2), 16)
  var yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000
  return yiq
}

export function setOpacity (color: string, percent: number) {
  const hex = color.replace('#', '')
  let r, g, b

  if (hex.length === 3) {
    r = parseInt(hex.substring(0, 1), 16)
    g = parseInt(hex.substring(1, 2), 16)
    b = parseInt(hex.substring(2, 3), 16)
  } else {
    r = parseInt(hex.substring(0, 2), 16)
    g = parseInt(hex.substring(2, 4), 16)
    b = parseInt(hex.substring(4, 6), 16)
  }

  return `rgba(${r},${g},${b},${percent})`
}
