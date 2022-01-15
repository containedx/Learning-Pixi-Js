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
      
    const numberOfAliens = 50;

    // DISPLAYING IMAGE :3
    for( let i = 0 ; i < numberOfAliens ; i++){

      const helmlok = PIXI.Sprite.from('img/helmlok.png');

      helmlok.x += Math.random() * app.screen.width;
      helmlok.y += Math.random() * app.screen.height;
      helmlok.tint = Math.random() * 0xFFFFFF;

      app.stage.addChild(helmlok);

    }
    
