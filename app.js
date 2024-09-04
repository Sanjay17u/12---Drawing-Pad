const drawingPad = document.querySelector('.Drawing-Pad')
const context = drawingPad.getContext('2d')
const clear = document.querySelector('#clear')


context.strokeStyle = '#000'
context.lineWidth = 10
context.lineCap = 'round'


let isDrawing = false;
let lastX = 0
let lastY = 0

const getCanvasOffset = (event) => {
    const rect = drawingPad.getBoundingClientRect()
    return {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top
    }
}


drawingPad.addEventListener('mousedown', (event) => {
    isDrawing = true
    const { x, y } = getCanvasOffset(event)
    lastX = x
    lastY = y

})


drawingPad.addEventListener('mousemove', (event) => {
    if(isDrawing) {
        const { x, y } = getCanvasOffset(event)
        context.beginPath()
        context.moveTo(lastX, lastY)
        context.lineTo(x, y)
        context.stroke()
        lastX = x
        lastY = y
    }
})


drawingPad.addEventListener('mouseup', () => {
    isDrawing = false
})


drawingPad.addEventListener('mouseleave', () => {
    isDrawing = false
})

clear.addEventListener('click', () => {
    context.clearRect(0,0,drawingPad.width, drawingPad.height)
})
