export const handler = function (instance) {
    return {
        get: function (obj, prop) {
            if (['[object Object]', '[object Array]'].indexOf(Object.prototype.toString.call(obj[prop])) > -1) {
                return new Proxy(obj[prop], handler(instance));
            }
            return obj[prop];
        },
        set: function (obj, prop, value) {
            obj[prop] = value;
            instance.render();
            return true;
        },
        deleteProperty: function (obj, prop) {
            delete obj[prop];
            instance.render();
            return true;

        }
    };
};