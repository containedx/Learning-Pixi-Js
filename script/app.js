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
    for( let j = 0 ; j < 5 ; j++){
      for ( let i = 0 ; i < 8 ; i++){

        const helmlok = PIXI.Sprite.from('img/helmlok.png');
        helmlok.x += i * 150;
        helmlok.y += j * 200;

        helmlok.tint = Math.random() * 0xFFFFFF;

        app.stage.addChild(helmlok);

      }
    }
    
