const tabs = document.querySelectorAll('.tabBtn');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(tabBtn => {
            tabBtn.classList.remove('bg-priamry-color', 'text-white', 'activeTab')
            tabBtn.classList.add('text-paragraph', 'border-stroke')
        })
        tab.classList.remove('text-paragraph', 'border-stroke')
        tab.classList.add('bg-priamry-color', 'text-white', 'activeTab')
    })
})


//  < button class="tabBtn activeTab btn sm:w-30 box-border font-semibold bg-priamry-color text-white" > All</button >
//   <button class="tabBtn btn sm:w-30 box-border font-semibold text-paragraph border-stroke">Open</button>
//    <button class="tabBtn btn sm:w-30 box-border font-semibold text-paragraph border-stroke">Closed</button>









