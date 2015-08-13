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
    	var i = 0,
    		newParticle = {};

    	for (i=0;i<amountOfParticles;i++){
    		newParticle = {
    			x : 0,
    			y : i,
    			// y : i*5,
    			radius : 2,
    			color : '#00'+i+'000'
    		}
    		vars.particles.push(newParticle);
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
    		particle.x++;
    		console.log('hla');console.log(particle.x);
    	}
    }


    /***
     * Returns the distance between (x1,y1) and (x2,y2)
     */
    function animateParticles (){
        
        vars.context.clearRect(0, 0, vars.canvas.width, vars.canvas.height);

        updateParticles();

        // // calculate the new X and Y position of each circle
        // var dot1x = vars.circle1.x + vars.radius * Math.cos(vars.circle1.angle),
        //     dot1y = vars.circle1.y + vars.radius * Math.sin(vars.circle1.angle),
        //     dot2x = vars.circle2.x + vars.radius * Math.cos(vars.circle2.angle),
        //     dot2y = vars.circle2.y + vars.radius * Math.sin(vars.circle2.angle);
       
        // // draws the two dots
        // drawDot(dot1x, dot1y, 2);
        // drawDot(dot2x, dot2y, 2);
        // drawDot(vars.circle1.x, vars.circle1.y,vars.radius);
        // drawDot(vars.circle2.x, vars.circle2.y,vars.radius);

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

        generateParticles(10);
		console.log(vars.particles);

        // animateParticles();
        // drawLine(0,0,10,10);
    }

    init();

}(movingParticles));