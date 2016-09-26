module.exports = function() {
  var canvas = document.getElementById('dividerSineCanvas')
  var ctx = canvas.getContext('2d')

  var height = canvas.height = window.innerHeight * 3 / 100;
  var width = canvas.width = window.innerWidth;

  function draw() {
    ctx.fillStyle = 'rgba(0,0,0,0.0)'
    ctx.fillRect(0,0,width,height)

    ctx.fillStyle="black"
    for(var i = 0; i < width; i++) {
      ctx.fillRect(i, Math.sin(i)+height/2, 1, 1)
    }
  }

  draw()
}
