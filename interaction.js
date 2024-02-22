function DnD(canvas, interactor) {
  // Définir ici les attributs de la 'classe'
  this.initX = 0;
  this.initY = 0;
  this.finalX = 0;
  this.finalY = 0;
  this.isclicked = false;
  this.interactor = interactor;
  // Fonction pour obtenir les coordonnées de la souris par rapport au canvas

  // Développer les 3 fonctions gérant les événements
  this.clicsouris = function (evt) {
    var pos = getMousePosition(canvas, evt)
    this.initX = pos.x;
    this.initY = pos.y;
    this.isclicked = true;
    //console.log(evt)
    this.interactor.onInteractionStart(this);
  }.bind(this);

  this.deplacersouris = function (evt) {

    if (this.isclicked){
      var pos = getMousePosition(canvas, evt)
      this.finalX = pos.x;
      this.finalY = pos.y;
      this.isclicked = true;
      this.interactor.onInteractionUpdate(this);
    }
    //console.log(evt)
  }.bind(this);

  this.relachersouris = function (evt) {
      var pos = getMousePosition(canvas, evt)
      this.finalX = pos.x;
      this.finalY = pos.y;
      this.isclicked = false;
    this.interactor.onInteractionEnd(this);
    //console.log(evt)
  }.bind(this);

  // Associer les fonctions précédentes aux évènements du canvas.
  canvas.addEventListener('mousedown', this.clicsouris, false);
  canvas.addEventListener('mousemove', this.deplacersouris, false);
  canvas.addEventListener('mouseup', this.relachersouris, false);

}


// Place le point de l'événement evt relativement à la position du canvas.
function getMousePosition(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
};