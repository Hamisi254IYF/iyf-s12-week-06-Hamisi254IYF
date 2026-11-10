// Single user
async function getUser(id) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return res.json();
}

// All users
async function getAllUsers() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return res.json();
}

// User 1's posts
async function getUserPostsApi(userId) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return res.json();
}

async function createPost(title, body, userId) {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, body, userId })
    });
    if (!res.ok) throw new Error("Failed to create post");
    return res.json();
}

let allUsers = [];

function applyFilters() {
    const query = document.getElementById("search").value.toLowerCase();
    const sortDir = document.getElementById("sort").value;   // "asc" | "desc"
    const cityFilter = document.getElementById("city-filter").value;

    let filtered = allUsers.filter(u =>
        (u.name.toLowerCase().includes(query) ||
         u.email.toLowerCase().includes(query)) &&
        (cityFilter === "" || u.address.city === cityFilter)
    );

    filtered.sort((a, b) =>
        sortDir === "asc"
            ? a.name.localeCompare(b.name)
            : b.name.localeCompare(a.name)
    );

    displayUsers(filtered);
}

// Wire all three inputs to applyFilters()
["search", "sort", "city-filter"].forEach(id => {
    document.getElementById(id).addEventListener("input", applyFilters);
});