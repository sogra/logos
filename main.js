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

        particle : {
			x : 0,
			y : 0,
			radius : 2,
			color : "#000"
		}
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
    function animateParticles (){
        
        vars.context.clearRect(0, 0, vars.canvas.width, vars.canvas.height);

        updateParticles();
        drawParticles();
 
        // var distanceBetweenDots = distance(dot1x,dot1y,dot2x,dot2y);

        // if(distanceBetweenDots < 232) {
        //     drawLine(dot1x,dot1y,dot2x,dot2y)
        // }

        vars.animationHandler = window.requestAnimationFrame(animateParticles);
    }

    /***
     * Init all required functions 
     */
    function init () {
        vars.canvas = document.getElementById("logoCanvas"),
        vars.context = vars.canvas.getContext('2d');
        vars.canvasWidth = vars.canvas.clientWidth;
        vars.canvasHeight = vars.canvas.clientHeight;

        generateParticles(10);
		console.log(vars.particles);

        animateParticles();
        // drawLine(0,0,10,10);
    }

    init();

}(movingParticles));