import SlideNav from './slide.js'

const slide = new SlideNav('.slide', '.slide-display')

slide.init()
slide.addArrow('.prev', '.next')
slide.addControl('.custom-controls')
