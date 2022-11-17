Vue.component('panel', {
    template: `
        <div class="border border-blue-900">
            <div class="bg-blue-900 text-white py-5 px-4 text-2xl">
                <slot name="title"></slot>
            </div>
            <div class="py-5 px-4">
                <slot name="body"></slot>
            </div>
        </div>
    `
})
new Vue({
    el: '#app'
})