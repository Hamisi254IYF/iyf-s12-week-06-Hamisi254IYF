// ===== Exercise 1: Predict the output =====
// My prediction: A, C, E, B, D
// Actual output:  A, C, E, B, D   ✅ (Reasoning:

//A, C, E are plain synchronous console.logs → they run immediately, in order.

//setTimeout(..., 0) → "B" is queued and runs after all sync code, even with 0ms.

//setTimeout(..., 100) → "D" waits 100ms, so it's last.

//So the order is A → C → E → B → D.
console.log("A");
setTimeout(() => console.log("B"), 0);
console.log("C");
setTimeout(() => console.log("D"), 100);
console.log("E");

// ===== Exercise 2: Callback pattern =====
function loadUser(userId, callback) {
    setTimeout(() => {
        const user = { id: userId, name: "Jane Doe", email: "jane@example.com" };
        callback(user);
    }, 1500);
}

loadUser(42, (user) => {
    console.log("User loaded:", user);
});