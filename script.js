const tabs = document.querySelectorAll('.tabBtn');
const cardContainer = document.getElementById('cardContainer');
const loader = document.getElementById('loader');

const loadIssues = () => {
    cardContainer.innerHTML = ``;
    loader.classList.remove('hidden')
    const url = 'https://phi-lab-server.vercel.app/api/v1/lab/issues';
    fetch(url)
        .then(res => res.json())
        .then(result => {
            renderCards(result.data)
        })
        .catch(() => {
            cardContainer.innerHTML = `<div class="flex justify-center text-error">
                <p>Issue load Faild</p>
                
               </div>`;
        })
        .finally(() => {
            loader.classList.add('hidden')
        })
}
function renderCards(cards) {
cards.forEach(card=>
    cardContainer.innerHTML+=`<div class="card shadow-default rounded bg-close pt-0.75">
                    <div class="cardContent bg-white rounded">
                        <div class="cardTop space-y-3 p-4">
                            <div class="flex justify-between items-center">
                                <img src="${card.status==='open'?'./assets/Open-Status.png':"./assets/Closed- Status .png"}" alt="${card.status}">
                                <img src="./assets/${card.priority}.png" alt="">
                            </div>
                            <div class="space-y-3">
                                <div class="space-y-2">
                                    <h2 class="text-sm text-Style font-semibold">Fix navigation menu on mobile devices
                                    </h2>
                                    <p class="text-xs text-paragraph">The navigation menu doesn't collapse properly on
                                        mobile devices. Need to fix the
                                        responsive behavior.</p>
                                </div>
                                <div class="labels flex items-center gap-1 flex-wrap">
                                    <img src="./assets/bug.png" alt="">
                                    <img src="./assets/help wanted.png" alt="">
                                </div>
                            </div>
                        </div>
                        <div class="cardBottom text-xs text-paragraph border-t border-stroke p-4 space-y-4">
                            <p>#1 by john_doe</p>
                            <p>1/15/2024</p>
                        </div>
                    </div>
                </div>`
)
}


loadIssues()


// "id": 2,
// "title": "Add dark mode support",
// "description": "Users are requesting a dark mode option. This would improve accessibility and user experience.",
// "status": "open",
// "labels": [
// "enhancement",
// "good first issue"
// ],
// "priority": "medium",
// "author": "sarah_dev",
// "assignee": "",
// "createdAt": "2024-01-14T14:20:00Z",
// "updatedAt": "2024-01-16T09:15:00Z"

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






// < div class="card shadow-default rounded bg-open pt-0.75" >
//     <div class="cardContent bg-white rounded">
//         <div class="cardTop space-y-3 p-4">
//             <div class="flex justify-between items-center">
//                 <img src="./assets/Open-Status.png" alt="">
//                     <img src="./assets/high.png" alt="">
//                     </div>
//                     <div class="space-y-3">
//                         <div class="space-y-2">
//                             <h2 class="title text-sm text-Style font-semibold">Fix navigation menu on mobile devices
//                             </h2>
//                             <p class="description text-xs text-paragraph">The navigation menu doesn't collapse properly on
//                                 mobile devices. Need to fix the
//                                 responsive behavior.</p>
//                         </div>
//                         <div class="labels flex items-center gap-1 flex-wrap">
//                             <img src="./assets/bug.png" alt="">
//                                 <img src="./assets/help wanted.png" alt="">
//                                 </div>
//                         </div>
//                     </div>
//                     <div class="cardBottom text-xs text-paragraph border-t border-stroke p-4 space-y-4">
//                         <p>#1 by john_doe</p>
//                         <p>1/15/2024</p>
//                     </div>
//             </div>
//         </div>








