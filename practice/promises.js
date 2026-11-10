function getUserPosts(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!userId) {
                reject("User ID required");
                return;
            }
            resolve([
                { id: 1, title: "Post 1" },
                { id: 2, title: "Post 2" }
            ]);
        }, 1000);
    });
}

function getPostComments(postId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!postId) {
                reject("Post ID required");
                return;
            }
            resolve([
                { id: 1, text: "Great post!" },
                { id: 2, text: "Thanks for sharing" }
            ]);
        }, 1000);
    });
}

// Chain
getUserData(1)
    .then(user => {
        console.log("User:", user);
        return getUserPosts(user.id);
    })
    .then(posts => {
        console.log("Posts:", posts);
        return getPostComments(posts[0].id);
    })
    .then(comments => console.log("Comments:", comments))
    .catch(err => console.error("Error:", err));

// Parallel — 3 users at once
Promise.all([getUserData(1), getUserData(2), getUserData(3)])
    .then(users => console.log("All users:", users))
    .catch(err => console.error(err));