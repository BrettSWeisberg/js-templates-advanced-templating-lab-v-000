function init() {
  let template = document.getElementById("recipe-form-template").innerHTML;
  let templateFn = Handlebars.compile(template);
  let html = templateFn(recipe);
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})

let recipe = {
  description: 'yummy chicken noodle soup',
  ingredients: [
    {quantity: "1 cup", name: 'chicken'},
    {quantity: "3 nanoliters", name: 'stock'},
    {quantity: "12", name: 'noodles'}
  ]
}
