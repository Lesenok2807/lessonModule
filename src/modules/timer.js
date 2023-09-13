const timer = () => {
    const dateNow = new Date();
    const options = { weekday: 'long' };
    const dayOfWeek = dateNow.toLocaleString('ru-ru', options);
    let dataStop =  new Date('1 January 2024');
    let timeRemaining = (dataStop - dateNow) / 1000;
    let days = Math.floor(timeRemaining / 60 / 60 / 24);

    function setTime(time) {
        if (12 > time >= 4) {
          console.log('Доброе утро!');
        } else if (20 > time >= 12){
          console.log('Добрый день!');
        } else if (23 > time >= 20){
          console.log('Добрый вечер!');
        } else {
          console.log('Доброй ночи!');
        }
      }
      setTime(dateNow.getHours());
    
    console.log('Сегодня: ' + dayOfWeek);    
    console.log('До Нового Года осталось: ' + days);          

};


export default timer;