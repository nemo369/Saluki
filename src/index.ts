import { data } from './data'
import { handler } from './handler'
class Saluki {
    elem: HTMLElement;
    data: object;
    props: string;
    constructor(options) {
        this.elem = document.querySelector(options.selector);
        this.props = options.props;
        this.setData(options.data)
    }
    public setData(data) {
        this.data = new Proxy(data, this.handler(this))

    }
    public template(props): string {
        return `
		<h1>${props.heading}</h1>
		<ul>
			${props.todos.map(function (todo) {
            return `<li>${todo}</li>`;
        }).join('')}
        </ul>`;

    }
    public render() {
        this.elem.innerHTML = this.template(this.data)
    }
    handler(instance) {
        return {
            get: function (obj, prop) {
                console.log(obj);

                if (['[object Object]', '[object Array]'].indexOf(Object.prototype.toString.call(obj[prop])) > -1) {
                    return new Proxy(obj[prop], this.handler(instance));
                }
                return obj[prop];
            },
            set: function (obj, prop, value) {
                obj[prop] = value;
                this.render();
                return true;
            },
            deleteProperty: function (obj, prop) {
                delete obj[prop];
                this.render();
                return true;

            }
        };
    };

}
var app = new Saluki({
    selector: '#app',
    data,
})
// app.render();


// setTimeout(() => {
//     const newData = { ...data, heading: 'new text' }
//     app.setData(newData)
//     app.render();
// }, 3000);