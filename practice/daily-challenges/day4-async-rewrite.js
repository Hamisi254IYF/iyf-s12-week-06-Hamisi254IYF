// Day 4: Rewrite callback-based loadUser using async/await

// --- Original (callback style) ---
// function loadUser(userId, callback) {
//     setTimeout(() => {
//         callback({ id: userId, name: "Jane Doe" });
//     }, 1500);
// }

// --- Rewritten (promise + async/await) ---
function loadUser(userId) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({ id: userId, name: "Jane Doe" });
        }, 1500);
    });
}

async function main() {
    console.log("Loading...");
    const user = await loadUser(42);
    console.log("User:", user);
}

main();