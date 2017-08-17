/*function openNav(){
  document.getElementById("nav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  console.log("open");
}

function closeNav(){
  document.getElementById("nav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  console.log("close");
}*/

function openNav(){
  if(document.getElementById("menu").className == "test"){
    document.getElementById("nav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.getElementById("menu").className = "test1";
    console.log("1");
  }else{
    document.getElementById("nav").style.width = "0px";
    document.getElementById("main").style.marginLeft = "0px";
    document.getElementById("menu").className = "test";
    console.log("2");
  }
}
