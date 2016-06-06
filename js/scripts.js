// alert("anything?");
$(document).ready(function() {
// event.preventDefault();
  $("form#gList").submit(function(event) {
    event.preventDefault();

      var items = $("input#item1").val();
      var items2 = $("input#item2").val();

      var groceryLists = [items, items2];
      alert("this is the array" + groceryLists);
      alert(items + items2);
      // alert(groceryLists);
var alph = [items,items2];
      // var groceryUppers = groceryLists.map(function(groceryUpper){
         alph.sort();
         alert(alph);
        // return groceryUpper.toUpperCase();
      });


      // alert(items + "!");
      // var capitalizedItems = [];

  // });
});
