import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    meta: {
        title: "Pocket Cafe",
        meta: [
            { name: "viewport", content: "width=device-width, initial-scale=1" },
            {
                hid: "description",
                name: "description",
                content: "Discover and keep your favorite cafes in your pocket.",
            },
        ]
    },

    css: [
        "~/assets/scss/index.scss"
    ],

    components: true,

    runtimeConfig: {
        public: {
            apiBase: ''
        }
    }
})
