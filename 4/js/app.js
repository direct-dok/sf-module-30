if(localStorage.getItem('userInfo')) {
    console.log('Вы у нал уже были');
    const obj = JSON.parse(localStorage.getItem('userInfo'));
    alert(`Добрый день, ${obj.name}! Давно не виделись. В последний раз вы были у нас ${obj.date}`)
} else {
    const name = prompt('Добро пожаловать! Назовите, пожалуйста, ваше имя');
    console.log(name);
    const infoUser = {
        name: name, 
        date: new Date()
    }

    localStorage.setItem('userInfo', JSON.stringify(infoUser));
}