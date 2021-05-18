document.addEventListener('DOMContentLoaded', () => {
    console.log("Document loaded")
    
    const features = document.querySelectorAll('.feature__link');
    //console.log(features)
    const featuresDetails = document.querySelectorAll('.feature-sub')
    //console.log(featuresDetails)

    const acc = new accordion(features, featuresDetails)
    //console.log(dispatcher)
    
    features.forEach((feature, idx) => feature.addEventListener('click', () => acc.setActive(idx)))
})

//Accordion state dispatcher
class accordion {
    constructor(accordionItems, accordionDetails) {
        this.state = {
            currentIdx: -1,
            accordionItems: accordionItems,
            accordionDetails: accordionDetails
        };
    }

    setActive(idx) {
        const accordionItemsCount = this.state.accordionItems.length;
        console.log("Idx, accordionItemsCount, currentIdx: ", idx, this.state.currentIdx, accordionItemsCount)

        if(idx >= accordionItemsCount) return;
        
        this._toggleAccordionItem(idx);
        //Collapse each other
        for(let i = 0; i < accordionItemsCount; i++) {
            if(i !== idx) {
                this._collapseAccordionItem(i)
            }
        }

        this.state.currentIdx = idx;
    }

    _toggleAccordionItem(idx) {
        this.state.accordionItems[idx].classList.toggle('feature__link_active')
        this.state.accordionDetails[idx].classList.toggle('hidden')
    }
    
    _expandAccordionItem(idx) {
        this.state.accordionItems[idx].classList.add('feature__link_active')
        this.state.accordionDetails[idx].classList.remove('hidden')
    }
    
    _collapseAccordionItem(idx) {
        this.state.accordionItems[idx].classList.remove('feature__link_active')
        this.state.accordionDetails[idx].classList.add('hidden')
    }

    toString() {
        console.log("AccordionItems, AccordionDetails: ",
            this.state.accordionItems,
            this.state.accordionDetails)
    }
}

