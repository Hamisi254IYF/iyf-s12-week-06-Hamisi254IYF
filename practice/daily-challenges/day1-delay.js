// Day 1: delay(ms) returns a promise that resolves after ms milliseconds

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Test
async function test() {
    console.log("Start");
    await delay(2000);
    console.log("This prints after 2 seconds");
}

test();