(function (window, document){
'use strict' ; //내가엄격한자바스크립트언어로 실행하겠어

    const $toggles = document.querySelectorAll('.toggle'); //NodeList arraylike 유사배열
    const $toggleBtn = document.getElementById('toggle-btn');
    
    $toggleBtn.addEventListener('click' , function (){
        toggleElements();
    });

    window.addEventListener('resize' , function (){
        if(window.innerWidth > 1024){
            offElements();
        }
    });

    function toggleElements(){
        [].forEach.call($toggles, function (toggle) {
            toggle.classList.toggle('on');
        });
    }

    function offElements(){
        [].forEach.call($toggles, function(toggle) {
            toggle.classList.remove('on');
        });
    }
})(window, document);


