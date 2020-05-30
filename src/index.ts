import { data } from './data'

function template(props) {
    return `
		<h1>${props.heading}</h1>
		<ul>
			${props.todos.map(function (todo) {
        return `<li>${todo}</li>`;
    }).join('')}
        </ul>`;
}


var Saluki = function (options) {
    this.elem = document.querySelector(options.selector);
    this.data = options.data;
    this.template = options.template;
};

var app = new Saluki({
    selector: '#app',
    data,
    template
})
Saluki.prototype.render = function () {
    // Render the UI
    this.elem.innerHTML = this.template(this.data)
};
app.render();