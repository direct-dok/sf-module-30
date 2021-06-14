const randNumber = new Promise((resolve, reject) => {
    setTimeout(function() {
        let rand = Math.floor(Math.random() * 10);
        if(rand % 2 == 0) {
            resolve(rand);
        } else {
            reject("Error: the number is not even");
        }
    },3000);
})

async function getNumber() {
    let one = await randNumber;
    console.log(one);
}

getNumber();