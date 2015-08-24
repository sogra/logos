// POSSIBLE Costa Rica - Canvas Particles Animation Experiment
// August 2015

var movingParticles = movingParticles || {};

(function (context) {

  /***
     * Global Variables
     */
    vars = {
        canvas : {},
        context : {},
        particles : [],
        canvasWidth : 0,
        canvasHeight : 0,
        movingDirection : '',
        sograText : 'so  gra',
    };

	/***
     * Creates particles and pushes to the Particles Array
     * TODO: randomize x, y and color
     */
    function generateParticles (amountOfParticles){

    	for (var i=0;i<amountOfParticles;i++){
    		vars.particles [i] = {
    			x : i*3,
    			y : i*4,
    			// y : i*5,
    			radius : 2,
    			color : '#00'+i+'000',
    			'opacity' : getRandomInt(50,100)/100
    		};
    	}
    }

	/***
     * Draw all contens from the Particles array
     */
    function drawParticles (){
    	var i = 0,
    		particle = {};

    	for (i=0;i<vars.particles.length;i++){
    		particle = vars.particles[i];
    		drawDot(particle.x, particle.y, 1, '#001100', 1);
    	}
    }

	/***
     * Updates particles attributes
     */
    function updateParticles (){
    	var i = 0,
    		particle = {};

    	for (i=0;i<vars.particles.length;i++){
    		particle = vars.particles[i];
    		if (particle.x < vars.canvasWidth) {
	    		particle.x++;
    		}
    	}
    }


    /***
     * Returns the distance between (x1,y1) and (x2,y2)
     */
    function drawScreen (){

        vars.context.clearRect(0, 0, vars.canvas.width, vars.canvas.height);

        updateParticles();
        drawParticles();

        // var distanceBetweenDots = distance(dot1x,dot1y,dot2x,dot2y);

        // if(distanceBetweenDots < 232) {
        //     drawLine(dot1x,dot1y,dot2x,dot2y)
        // }

        vars.context.fillText(vars.sograText,10,30);

        vars.animationHandler = window.requestAnimationFrame(drawScreen);
    }

    /***
     * Init all required functions
     */
    function init () {
      // Create Canvas Element and add it to the DOM
      vars.canvas = document.createElement('canvas');
      vars.canvas.id = 'canvasElement';
      vars.canvas.width = '200';
      vars.canvas.height = '200';
      document.getElementById('canvasContainer').appendChild(vars.canvas);

      vars.context = vars.canvas.getContext('2d');
      vars.canvasWidth = vars.canvas.clientWidth;
      vars.canvasHeight = vars.canvas.clientHeight;

      vars.context.font="55px Lato";
      vars.context.fillStyle = "#707070";

      generateParticles(5);

      drawScreen();
      drawLine(0,0,10,10);
    }

    init();

}(movingParticles));
