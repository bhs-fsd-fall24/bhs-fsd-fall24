$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }
    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); //top
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200); //right
    createPlatform(-50, -50, 50, canvas.height + 500); //bottom
    createPlatform(canvas.width, -50, 50, canvas.height + 100);

    /**
     * Uncomment the drawGrid() function call below to add a "grid" to your platformer game's screen
     * The grid will place both horizontal and vertical platforms incremented 100 pixels apart
     * This can help you determine specific x any y values throughout the game
     * Comment the function call out to remove the grid
     */

    // drawGrid();

    /////////////////////////////////////////////////
    //////////ONLY CHANGE BELOW THIS POINT///////////
    /////////////////////////////////////////////////

    // TODO 1
    // Create platforms
    // You must decide the x position, y position, width, and height of the platforms
    // example usage: createPlatform(x,y,width,height)
    
    // walls
    createPlatform(80, 0, 10, 625);
    createPlatform(200, 500, 10, 125);
    createPlatform(320, 125, 10, 250);
    createPlatform(320, 625, 10, 125);
    createPlatform(440, 0, 10, 250);
    createPlatform(440, 375, 10, 125);
    createPlatform(680, 125, 10, 250);
    createPlatform(680, 500, 10, 125);
    createPlatform(800, 375, 10, 250);
    createPlatform(920, 0, 10, 125);
    createPlatform(920, 500, 10, 250);
    createPlatform(1040, 625, 10, 125);
    createPlatform(1160, 125, 10, 250);
    createPlatform(1160, 500, 10, 125);
    createPlatform(1280, 125, 10, 500);
    
    // platforms
    createPlatform(200, 125, 120, 10);
    createPlatform(560, 125, 120, 10);
    createPlatform(800, 125, 120, 10);
    createPlatform(1145, 125, 40, 10);
    createPlatform(1265, 125, 40, 10);
    createPlatform(80, 250, 120, 10);
    createPlatform(440, 250, 120, 10);
    createPlatform(680, 250, 120, 10);
    createPlatform(80, 375, 240, 10);
    createPlatform(440, 375, 240, 10);
    createPlatform(800, 375, 360, 10);
    createPlatform(200, 500, 480, 10);
    createPlatform(920, 500, 240, 10);
    createPlatform(80, 625, 120, 10);
    createPlatform(320, 625, 240, 10);
    createPlatform(680, 625, 120, 10);


    // wedges
    createPlatform(900, 625, 20, 10);
    createPlatform(330, 313, 20, 10);
    createPlatform(420, 188, 20, 10);
    createPlatform(1290, 313, 20, 10);
    createPlatform(1290, 563, 20 , 10);
    createPlatform(1380, 438, 20 , 10);
    createPlatform(1380, 188, 20 , 10);
    createPlatform(1380, 688, 20 , 10);
    
    // TODO 2
    // Create collectables
    // You must decide on the collectable type, the x position, the y position, the gravity, and the bounce strength
    // Your collectable choices are 'database' 'diamond' 'grace' 'kennedi' 'max' and 'steve'; more can be added if you wish
    // example usage: createCollectable(type, x, y, gravity, bounce)
    createCollectable("rock", 980, 563, 0, 0);
    createCollectable("rock", 1220, 63, 0, 0);
    createCollectable("rock", 500, 438, 0, 0);
    createCollectable("rock", 860, 63, 0, 0);
    createCollectable("rock", 140, 313, 0, 0);
    createCollectable("rock", 140, 563, 0, 0);

    // TODO 3
    // Create cannons
    // You must decide the wall you want the cannon on, the position on the wall, and the time between shots in milliseconds
    // Your wall choices are: 'top' 'left' 'right' and 'bottom'
    // example usage: createCannon(side, position, delay, width, height)
    createCannon("top", 200, 1000, 20, 20);
    createCannon("top", 550, 5000, 20, 20);
    createCannon("left", 450, 3000, 20, 20);
    createCannon("bottom", 760, 4000, 20, 20);
    createCannon("bottom", 1000, 2000, 20, 20);

    /////////////////////////////////////////////////
    //////////ONLY CHANGE ABOVE THIS POINT///////////
    /////////////////////////////////////////////////
  }

  registerSetup(setup);
});
