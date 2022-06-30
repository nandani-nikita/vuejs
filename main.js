const app = Vue.createApp({
    data: function () {
        return {
            cart: 0,
            product: 'Socks',
            // productDescription: 'Summer half socks',
            image: './assets/images/white.jpg',
            inStock: true,
            // inventory: 100,
            details: ['50% cotton', '30% wool', '20% polyster'],
            variants: [
                { id: 2234, color: 'white', image: './assets/images/white.jpg' },
                { id: 2235, color: 'gray', image: './assets/images/gray.jpg' },
                { id: 2236, color: 'blue', image: './assets/images/blue.jpg' }
            ]
            // url:'https://v2.vuejs.org/v2/guide/'
        }
    },
    methods: {
        addToCart() {
            this.cart += 1
        },
        updateImage(varientImage) {
            this.image = varientImage
        }
    }
})