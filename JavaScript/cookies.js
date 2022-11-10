export function cookies() {
    const $content = document.querySelector('.cookies'),
     $accept = document.querySelector('.accept_cookies');
    
    $accept.addEventListener('click', function () {
        $content.classList.remove('active');
    });
    
    setTimeout(function (){
        $content.classList.add('active');
    },50);
}