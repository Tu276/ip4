$(document).ready(function() {
 
  $("#text-center").submit(function(event) {
  function flavor() {
  var pizzaFlavour = document.getElementById("flavor").value;
  return parseInt(pizzaFlavour);
  }
  
function size() {
  var pizzaSize = document.getElementById("size").value;
  return parseInt(pizzaSize);
  }

  function crust() {
    var pizzaCrust = document.getElementById("crust").value;
    return parseInt(pizzaCrust);
    }