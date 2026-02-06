const resources = [
  { name: "Community Health Center", description: "Local healthcare and wellness services.", category: "Health" },
  { name: "Adult Education Program", description: "Classes and workforce skill-building.", category: "Education" },
  { name: "Affordable Housing Office", description: "Housing assistance and guidance.", category: "Housing" },
  { name: "Neighborhood Food Pantry", description: "Food support for families.", category: "Food" }
]


const grid = document.getElementById("resourceGrid")
const search = document.getElementById("search")
const filter = document.getElementById("filter")


function displayResources(list) {
  grid.innerHTML = ""
  list.forEach(r => {
    const card = document.createElement("div")
    card.className = "card"
    card.innerHTML = `<span class="tag">${r.category}</span><h4>${r.name}</h4><p>${r.description}</p>`
    grid.appendChild(card)
  })
}


function updateResources() {
  const term = search.value.toLowerCase()
  const category = filter.value
  const filtered = resources.filter(r =>
    (r.name.toLowerCase().includes(term) || r.description.toLowerCase().includes(term)) &&
    (category === "all" || r.category === category)
  )
  displayResources(filtered)
}


search.addEventListener("input", updateResources)
filter.addEventListener("change", updateResources)


document.getElementById("resourceForm").addEventListener("submit", e => {
  e.preventDefault()
  resources.push({
    name: name.value,
    description: description.value,
    category: category.value
  })
  updateResources()
  e.target.reset()
})


displayResources(resources)