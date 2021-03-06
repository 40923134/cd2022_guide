
 function getScene() {
    var scene = new THREE.Scene();
	  scene.background = new THREE.Color("rgb(255, 255, 255)");
    return scene;
  }

  function getCamera() {
    var aspectRatio = window.innerWidth / window.innerHeight;
    var camera = new THREE.PerspectiveCamera(75, aspectRatio, 0.1, 1000);
    camera.position.set(150,0, 0);
    return camera;
  }

  function getLight(scene) {
    var light = new THREE.PointLight(0xffffff, 1, 0);
    light.position.set(100, 100, 100);
    scene.add(light);

    var ambientLight = new THREE.AmbientLight(0x111111);
    scene.add(ambientLight);
    return light;
  }

  function getRenderer() {
    var renderer = new THREE.WebGLRenderer({antialias: true});
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    return renderer;
  }

  function getControls(camera, renderer) {
    var controls = new THREE.TrackballControls(camera, renderer.domElement);
    controls.zoomSpeed = 0.4;
    controls.panSpeed = 0.4;
    return controls;
  }

  function loadModel() {
    var loader = new THREE.OBJLoader();
    loader.load( 'jansen-asm.obj', function ( object ) {
        object.rotation.z = 1.7;
        object.rotation.x = -2.2;
        object.rotation.y = 1.0;

      scene.add( object );
      document.querySelector('h1').style.display = 'none';
    } );
  }

  function render() {
    requestAnimationFrame(render);
    renderer.render(scene, camera);
    controls.update();
  

  };

  var scene = getScene();
  var camera = getCamera();
  var light = getLight(scene);
  var renderer = getRenderer();
  var controls = getControls(camera, renderer);

  loadModel()
  
  render();

