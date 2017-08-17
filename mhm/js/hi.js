function openNav(){
  if(document.getElementById("menu").className == "closed"){
    document.getElementById("nav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.getElementById("menu").className = "open";
  }else{
    document.getElementById("nav").style.width = "0px";
    document.getElementById("main").style.marginLeft = "0px";
    document.getElementById("menu").className = "closed";
  }
}
