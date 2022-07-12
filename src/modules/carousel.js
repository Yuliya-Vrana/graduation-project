const carousel = () => {
    let sliderToShow = 3
    const sliderToScroll = 1

    const container = document.querySelector('.services-elements')
    const track = container.querySelector('.services-carousel')
    const elements = track.querySelectorAll('.element')

    const btnLeft = document.querySelector('.btn-left')
    const btnRight = document.querySelector('.btn-right')

    const clientWidthScreen = screen.width
  
    if(clientWidthScreen >= 1250){
        sliderToShow = 3
    } else if(clientWidthScreen < 1250 && clientWidthScreen >= 950){
        sliderToShow = 2
    } else if(clientWidthScreen < 950 ){
        sliderToShow = 1
    }

    const elemWidth = Math.floor(container.clientWidth / sliderToShow)
    const movePosition = sliderToScroll * elemWidth

    let position = 0
    
    elements.forEach(elem => { 
        elem.style.minWidth = `calc(${elemWidth}px - 7px)`
    })

    const setPosition = () => {
        track.style.transform = `translateX(${position}px)`
    }

    const checkBtn = () => {
        let scroll = - (elements.length - sliderToShow) * elemWidth
        
        if(position == 0){
          btnLeft.setAttribute('disabled', 'disabled')  
        }else {
            btnLeft.removeAttribute('disabled')
        }
        
        if(position == scroll){
            btnRight.setAttribute('disabled', 'disabled')  
          }else {
            btnRight.removeAttribute('disabled')
          }

    }

    btnLeft.addEventListener('click', () => {
        position += Math.floor(movePosition)
        setPosition()
        checkBtn()        
    })

    btnRight.addEventListener('click', () => {
        position -= Math.floor(movePosition)
        setPosition() 
        checkBtn()   
    })

    checkBtn()
}

export default carousel



