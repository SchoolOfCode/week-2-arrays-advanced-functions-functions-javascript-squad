// 

function greeting(name) {
    console.log(`Hello ${name}`);
}

function greetNames(callback, name1, name2, name3) {
    callback(name1);
    callback(name2);
    callback(name3);
}

greetNames(greeting, "Kit", "Chris", "Carmen")