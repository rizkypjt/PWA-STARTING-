var test;

if('serviceWorker' in navigator){
    navigator.serviceWorker
            .register('/sw.js')
            .then(function(){
                console.log('yeah')
            });
}

window.addEventListener('beforeinstallpromp', function(event){
    console.log('gak bisah di install, Masih Belajar bro');
    event.preventDefault();
    test = event;
    return false;
});