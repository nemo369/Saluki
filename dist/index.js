var data = {
    heading: 'My Todos',
    todos: ['Swim', 'Climb', 'Jump', 'Play']
};
function template(props) {
    return "\n\t\t<h1>" + props.heading + "</h1>\n\t\t<ul>\n\t\t\t" + props.todos.map(function (todo) {
        return "<li>" + todo + "</li>";
    }).join('') + "\n\t\t</ul>";
}
var Saluki = function (options) {
    this.elem = document.querySelector(options.selector);
    this.data = options.data;
    this.template = options.template;
};
var app = new Saluki({
    selector: '#app',
    data: data,
    template: template
});
Saluki.prototype.render = function () {
    // Render the UI
    this.elem.innerHTML = this.template(this.data);
};
app.render();
