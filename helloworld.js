var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello, from the world of Vue!'
    }
});

var app2 = new Vue({
    el: '#app-2',
    data: {
        message: 'You first loaded me on ' + new Date().toLocaleString()
    }
});

var app3 = new Vue({
    el: '#app-3',
    data: {
        seen: true
    }
});

var app4 = new Vue({
    el: '#app-4',
    data: {
        todos: [
            { text: 'Learn Javascript' },
            { text: 'Learn Vue, cause its dope' },
            { text: 'While were at it, learn Angular?' }
        ]
    }
});

var app5 = new Vue({
    el: '#click',
    data: {
        message: 'Hello Vue.js!'
    },
    methods: {
        reverseMessage: function () {
            this.message = this.message.split('').reverse().join('')
        }
    }
});

var app6 = new Vue({
    el: '#app-6',
    data: {
        message: 'Hello Vue!',
        instructions: 'Type something into the below box, and press the button!'
    },
    methods: {
        reverseMessage: function () {
            this.message = this.message.split('').reverse().join('')
        }
    }
});

Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
});

var app7 = new Vue({
    el: '#app-7',
    data: {
        groceryList: [
            { id: 0, text: 'Cheese' },
            { id: 1, text: 'More cheese' },
            { id: 2, text: 'Need more be said?'}
        ]
    }
});

// var app8 = new Vue({
//     el: '#app-8',
//     data: {
//         message: 'Original'
//     }
// })

var obj = {
    foo: 'ORIGINAL',
    bar: 'DIFFERENT'
};

// Object.freeze(obj)

var app8 = new Vue({
    el: '#app-8',
    data: obj
});

var applink = new Vue({
    el: '#applink',
    data: {
        message: 'Click here',
        url: 'https://www.google.com',
        target: 'blank'
    }
});