let type = "WebGL";
    if (!PIXI.utils.isWebGLSupported()) {
      type = "canvas";
    }

    PIXI.utils.sayHello(type);

    //Create a Pixi Application
    const app = new PIXI.Application();

    //Add the canvas that Pixi automatically created for you to the HTML document
    document.body.appendChild(app.view);

    //fullscreen
    app.renderer.resize(window.innerWidth, window.innerHeight);
    // bg color
    app.renderer.backgroundColor = 0x000000;
      
    
    // DISPLAYING IMAGE :3
      
    //Load image
    PIXI.Loader.shared
      .add("img/helmlok.png")
      .load(setup);
      
    function setup() {
        
        //create sprite
        const cat = new PIXI.Sprite(PIXI.Loader.shared.resources["img/helmlok.png"].texture)
        
        //add to stage (scene)
        app.stage.addChild(cat)
    }