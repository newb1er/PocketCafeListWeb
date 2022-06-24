import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    meta: {
        title: "ElementPlus",
        meta: [
            { name: "viewport", content: "width=device-width, initial-scale=1" },
            {
                hid: "description",
                name: "description",
                content: "ElementPlus + Nuxt3",
            },
        ]
    },

    css: [
        "~/assets/scss/index.scss"
    ],

    components: true
})
