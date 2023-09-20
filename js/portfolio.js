const galleryImages = document.querySelector('.gallery-images');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
let currentIndex = 0;

function showImage(index) {
    galleryImages.style.transform = `translateX(-${index * 100}%)`;
}

prevBtn.addEventListener('click', () => {
    currentIndex = Math.max(currentIndex - 1, 0);
    showImage(currentIndex);
});

nextBtn.addEventListener('click', () => {
    currentIndex = Math.min(currentIndex + 1, galleryImages.children.length - 1);
    showImage(currentIndex);
});


function Submit() {
    event.preventDefault();

    var phone = document.getElementById( 'phone' ).value;
    var email = document.getElementById( 'email' ).value;
    var content = document.getElementById( 'content' ).value;

    if( phone === "" || email === "" || content === "" ){
        alert("입력 양식을 모두 채워주세요");
        return false;
    } else {
        alert("제출이 완료되었습니다.");
        window.location.href = "submit.html";
    }
}
