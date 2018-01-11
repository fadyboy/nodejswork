var getUser = (id, callback) => {
    var user = {
        id: id,
        name: "Jabau something"
    };
    setTimeout(() => {
        callback(user);
    }, 4000);
    
}

getUser(32, (userObj) => {
    console.log(userObj);
})