export default defineNuxtPlugin(() => {
    return {
        provide: {
            api: () => {
                const config = useRuntimeConfig()
                const baseURL = config.public.apiBase

                return {
                    async getSavedList(userId) {
                        const url = baseURL + `/list/${userId}`

                        console.log('fetch saved list', url)
                        const res = await $fetch(url)

                        return res
                    },

                    async getUserInfo(userId) {
                        const url = baseURL + `/user/${userId}`
                        
                        console.log('fetch user info', url)
                        const res = await $fetch(url)

                        return res
                    }
                }
            }
        }
    }
})