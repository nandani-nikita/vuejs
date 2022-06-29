const app = Vue.createApp({
    data: function () {
        return {
            product: 'Socks',
            productDescription: 'Summer half socks',
            image: './assets/images/white.jpg',
            inventory: 100,
            details:['50% cotton', '30% wool', '20% polyster'],
            varients:[
                {
                    id:2234, color:'white'
                },
                {
                    id:2235, color:'gray'
                },
                {
                    id:2236, color:'multi color'
                }
            ]
            // url:'https://v2.vuejs.org/v2/guide/'
        }
    }
})