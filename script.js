const tabs = document.querySelectorAll('.tabBtn')
const cardContainer = document.getElementById('cardContainer')
const loader = document.getElementById('loader')

const issueModal = document.getElementById('issueModal')
const modalContent = document.getElementById('modalContent')

const searchBar = document.getElementById('searchBar')
const issueCount = document.getElementById('issueCount')

let allIssues = []

const loadIssues = () => {

    cardContainer.innerHTML = ''
    loader.classList.remove('hidden')

    fetch('https://phi-lab-server.vercel.app/api/v1/lab/issues')

        .then(res => res.json())

        .then(result => {

            allIssues = result.data

            issueCount.innerText = `${allIssues.length} Issues`

            renderCards(allIssues)

        })

        .finally(() => {

            loader.classList.add('hidden')

        })

}

function renderCards(cards) {

    cardContainer.innerHTML = ''


    issueCount.innerText = cards.length + " Issues"

    cards.forEach(card => {

        cardContainer.innerHTML += `

<div onclick="openModal(${card.id})" 
class="card shadow-default rounded border-t-4 ${card.status === 'open' ? 'border-open' : 'border-close'} cursor-pointer">

<div class="cardContent bg-white rounded">

<div class="cardTop space-y-3 p-4">

<div class="flex justify-between">

<img src="${card.status === 'open' ? './assets/Open-Status.png' : './assets/Closed- Status .png'}">

<img src="./assets/${card.priority}.png">

</div>

<div>

<h2 class="text-sm text-Style font-semibold">
${card.title}
</h2>

<p class="text-xs text-paragraph">
${card.description}
</p>

</div>

<div class="flex gap-1 flex-wrap">

${card.labels.map(label => `
<img src="./assets/${label}.png">
`).join('')}

</div>

</div>

<div class="text-xs text-paragraph border-t border-stroke p-4">

<p>#${card.id} by ${card.author}</p>

<p>${new Date(card.createdAt).toLocaleDateString()}</p>

</div>

</div>

</div>

`

    })

}

function openModal(id) {

    fetch(`https://phi-lab-server.vercel.app/api/v1/lab/issue/${id}`)

        .then(res => res.json())

        .then(data => {

            const issue = data.data

            modalContent.innerHTML = `

<h2 class="text-xl font-semibold text-Style">
${issue.title}
</h2>

<div class="flex items-center gap-3 text-sm">

<span class="${issue.status === 'open' ? 'bg-open' : 'bg-close'} text-white px-3 py-1 rounded-full">
${issue.status === 'open' ? 'Opened' : 'Closed'}
</span>

<p class="text-paragraph">
Opened by ${issue.author} • ${new Date(issue.createdAt).toLocaleDateString()}
</p>

</div>

<div class="flex gap-2">

${issue.labels.map(label => `
<img src="./assets/${label}.png">
`).join('')}

</div>

<p class="text-paragraph">
${issue.description}
</p>

<div class="flex justify-between pt-4 border-t border-stroke">

<div>
<p class="text-paragraph">Assignee:</p>
<p class="font-semibold text-Style">
${issue.assignee || 'Not Assigned'}
</p>
</div>

<div>
<p class="text-paragraph">Priority:</p>
<span class="bg-red-500 text-white px-3 py-1 rounded-full text-xs uppercase">
${issue.priority}
</span>
</div>

</div>

`

            issueModal.showModal()

        })

}

tabs.forEach(tab => {

    tab.addEventListener('click', () => {

        tabs.forEach(t => {
            t.classList.remove('bg-priamry-color', 'text-white')
            t.classList.add('text-paragraph')
        })

        tab.classList.add('bg-priamry-color', 'text-white')

        const type = tab.innerText.toLowerCase()

        if (type === 'all') {
            renderCards(allIssues)
        }

        if (type === 'open') {
            renderCards(allIssues.filter(issue => issue.status === 'open'))
        }

        if (type === 'closed') {
            renderCards(allIssues.filter(issue => issue.status === 'closed'))
        }

    })

})

searchBar.addEventListener('input', () => {

    const value = searchBar.value

    if (value === '') {
        loadIssues()
        return
    }

    fetch(`https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q=${value}`)

        .then(res => res.json())

        .then(data => {
            renderCards(data.data)
        })

})

loadIssues()