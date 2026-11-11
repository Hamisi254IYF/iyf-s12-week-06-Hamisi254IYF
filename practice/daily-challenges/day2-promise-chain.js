// Day 2: Chain 3 promise-returning functions with random delays, time total execution

function task(name) {
    return new Promise(resolve => {
        const ms = Math.random() * 1000;
        setTimeout(() => {
            console.log(`${name} done after ${Math.round(ms)}ms`);
            resolve(name);
        }, ms);
    });
}

async function run() {
    const start = Date.now();
    await task("Task A");
    await task("Task B");
    await task("Task C");
    console.log(`Total: ${Date.now() - start}ms`);
}

run();