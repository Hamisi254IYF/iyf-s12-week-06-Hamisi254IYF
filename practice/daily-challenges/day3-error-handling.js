// Day 3: Fetch a user; if 404, return a default user instead of throwing

async function fetchUserOr(id) {
    try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        if (res.status === 404) {
            return { id: null, name: "Unknown User", email: "n/a" };
        }
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
    } catch (err) {
        // Only network errors reach here now
        console.error("Network error:", err);
        return { id: null, name: "Unknown User", email: "n/a" };
    }
}

// Test — valid user
fetchUserOr(1).then(u => console.log("Found:", u));

// Test — invalid user (404)
fetchUserOr(9999).then(u => console.log("Default:", u));