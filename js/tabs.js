const tabHandlerItems = document.querySelectorAll('[data-tabs-handler]');
//console.log("tabHandlerItems: ", tabHandlerItems);
const tabFieldItems = document.querySelectorAll('[data-tabs-field]');
//console.log("tabHandlerItems: ", tabHandlerItems);
const designTitles = document.querySelectorAll('.design__title');
//console.log("designTitles: ", designTitles);

tabHandlerItems.forEach((handler, idx) => {
    handler.addEventListener('click', () => {
        for(const h of tabHandlerItems) {
             if(handler === h) {
                h.classList.add('design-list__item_active');
             } else {
                h.classList.remove('design-list__item_active');
             }
        }

        for(const field of tabFieldItems) {
            if (field.dataset.tabsField === handler.dataset.tabsHandler) {
                field.classList.remove('hidden')
            } else {
                field.classList.add('hidden')
            }
        }

        designTitles.forEach((designTitle, designTitleIdx) => {
            if(idx === designTitleIdx) {
                designTitle.classList.remove('hidden')
            } else {
                designTitle.classList.add('hidden')
            }
        })
    })
})
