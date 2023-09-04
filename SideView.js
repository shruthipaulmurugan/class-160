AFRAME.registerComponent("place-side-view", {
  init: function(){
    this.createPlaces();
  },
  tick: function(){
    const placesContainer = document.querySelector("#places-container");
    const {state} = placesContainer.getAttribute("tour");

    if(state == "view" || state == "change-view"){
      this.el.setAttribute("visible", true)
    }
    else{
      this.el.setAttribute("visible", false)
    }
  },
  createPlaces: function(){
    const sideViewContainer = document.querySelector(
      "#side-view-container"
    );
    let previousXPosition = -50;
    let previousYPosition = 30;

    for(var i = 1; i <= 4; i++){
      const position = {
        x: (previousXPosition += 50),
        y: (previousYPosition += 2),
        z: -40
      }
      const entityE1 = this.createPlaceThumbNail(position, i)
      sideViewContainer.appendChild(entityE1)
    }
  },
  createPlaceThumbNail: function(){
    const entityE1 = document.createElement("a-entity");
    entityE1.setAttribute("visible", true);

    entityE1.setAttribute("id", `place-${id}`);

    entityE1.setAttribute("geometry", {
      primitive: "circle",
      radius: 2.5
    })
    entityE1.setAttribute("material", {
      src: "./assets/helicopter.png",
      opacity: 0.9
    })
    entityE1.setAttribute("position", position);
    entityE1.setAttribute("cursor-listener", {});
    return entityE1
  }
})