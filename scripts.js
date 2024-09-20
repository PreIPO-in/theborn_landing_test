// EmailJS 초기화
(function() {
    emailjs.init("mF5UYEirBq3JjjBVp");
})();

// 폼 제출 이벤트 처리
const form = document.getElementById('applicationForm'); // 여기서 ID 확인
const statusMessage = document.getElementById('statusMessage'); // 상태 메시지 요소

form.addEventListener('submit', function(event) {
    event.preventDefault();

    emailjs.sendForm('service_kqpxun2', 'template_c2cmie4', this)
        .then(function() {
            statusMessage.innerText = "전송이 완료되었습니다!";
        }, function(error) {
            console.error("전송 에러: ", error); // 에러 로그 추가
            statusMessage.innerText = "전송에 실패했습니다. 다시 시도해주세요.";
        });
});
