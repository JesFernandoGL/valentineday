window.addEventListener('load', function(){
    const over = $('.overlay');    

    over.addClass('animate__fadeOut');
    

    setTimeout(() => {
        main();              
    }, 1000);

    setTimeout(() => {
        over.hide();            
    }, 1500);

     
});

const imagesNo = ['9-peach-&-goma', '13-mochi-cat-peach-goma', '11-peach-&-goma-animations', '15-peach-&-goma-animations', '22-peach-&-goma', '16-peach-cat-mochi-goma'];
const imagesSi = ['3-peach-&-goma-animations', '7-mochi-cat-peach-goma', '10-mochi-cat-peach-goma', '17-mochi-cat-peach-goma'];

function main(){
    eventsBtn();
    

}


function eventsBtn(){
    const btnSi = $('#btnSi');
    const btnNo = $('#btnNo');
    const gif = $('#gifMain');

    btnSi.click(dijoSi);
    btnNo.click(dijoNo);


    function dijoSi(){
        const count = Number(btnSi.attr('data-count'));
        let newCount = '';
        if(count === imagesSi.length - 1){
            newCount = imagesSi.length - 1;
        }else{
            newCount = count + 1;
        }
        if(count === imagesSi.length - 1 ){
            activateCelebration();
        }
        btnSi.attr('data-count', newCount);

        const imageSi = `images/${imagesSi[count]}.gif`
        gif.attr('src', imageSi);
        
        
        $(`.title${count}`).addClass('animate__fadeOutDown');
        setTimeout(() => {
            $(`.title${count}`).removeClass('animate__fadeInDown title-Active animate__fadeOutDown animate__bounceIn animate__slow');            
        }, 1000);
        $(`.title${newCount}`).addClass('title-Active animate__fadeInDown'); 
    }
    function dijoNo(){
        
        btnSi.attr('data-count', 0);
        
        if($(`.title-Active`).length > 0){
            $(`.title-Active`).addClass('animate__fadeOutDown');
            $(`.title0`).addClass('animate__fadeInDown');
            setTimeout(() => {
                $(`.title-Active`).removeClass('animate__fadeInDown title-Active animate__fadeOutDown animate__bounceIn animate__slow');            
            }, 1000); 
        }

        const count = Number(btnNo.attr('data-count'));
        let newCount = '';
        if(count === imagesNo.length - 1){
            newCount = 0;
        }else{
            newCount = count + 1;
        }
        btnNo.attr('data-count', newCount);
        
        const imageNo = `images/${imagesNo[count]}.gif`
        gif.attr('src', imageNo);   
    }
}


function activateCelebration(){
    $('.title4 ').addClass('animate__fadeInDown title-Active');
    explosionConfetti();    
}

function explosionConfetti() {
    var count = 200;

    function fire(particleRatio, opts) {
        confetti(Object.assign({}, opts, {
            particleCount: Math.floor(count * particleRatio)
        }));
    }

    let i = 0;
    function launchExplosion() {
        let xPos = Math.random();
        let yPos = Math.random();

        fire(0.25, {
            spread: 26,
            startVelocity: 55,
            origin: { x: xPos, y: yPos }
        });
        fire(0.2, {
            spread: 60,
            origin: { x: xPos, y: yPos }
        });
        fire(0.35, {
            spread: 100,
            decay: 0.91,
            scalar: 0.8,
            origin: { x: xPos, y: yPos }
        });
        fire(0.1, {
            spread: 120,
            startVelocity: 25,
            decay: 0.92,
            scalar: 1.2,
            origin: { x: xPos, y: yPos }
        });
        fire(0.1, {
            spread: 120,
            startVelocity: 45,
            origin: { x: xPos, y: yPos }
        });
        
        i++;
        if (i < 5) {
            setTimeout(launchExplosion, 500); // Ejecuta cada 500ms
        }
    }

    launchExplosion();
}




