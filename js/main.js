new Vue({
    el: '#app',

    data: {
        theme: 'light',
    },

    mounted() {
        this.theme = localStorage.theme ?? 'system'
        this.applyTheme()
    },

    methods: {
        setDarkMode() {
            localStorage.theme = 'dark'
            document.getElementById('app').classList.add('dark')
            this.theme = 'dark'
            this.applyTheme()
        },
        setLightMode() {
            localStorage.theme = 'light'
            document.getElementById('app').classList.remove('dark')
            this.theme = 'light'
            this.applyTheme()
        },
        setSystemMode() {
            localStorage.removeItem('theme')
            document.getElementById('app').classList.remove('dark')
            this.theme = 'system'
            this.applyTheme()
        },

        applyTheme() {
            if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                document.documentElement.classList.add('dark')
            } else {
                document.documentElement.classList.remove('dark')
            }
        }
    }
})