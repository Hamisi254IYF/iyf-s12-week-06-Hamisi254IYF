// Day 5: Fetch 3 endpoints in parallel; display each result as it settles

const urls = [
    "https://jsonplaceholder.typicode.com/users/1",
    "https://jsonplaceholder.typicode.com/posts/1",
    "https://jsonplaceholder.typicode.com/comments/1"
];

async function fetchAll() {
    const results = await Promise.allSettled(
        urls.map(url => fetch(url).then(r => {
            if (!r.ok) throw new Error(`HTTP ${r.status}`);
            return r.json();
        }))
    );

    results.forEach((result, i) => {
        if (result.status === "fulfilled") {
            console.log(`✅ #${i}`, result.value);
        } else {
            console.error(`❌ #${i} failed:`, result.reason.message);
        }
    });
}

fetchAll();