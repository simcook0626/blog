function generateDocument() {
    // 입력 데이터 가져오기
    const name = document.getElementById("name").value;
    const achievement = document.getElementById("achievement").value;

    // 결과 생성
    const result = `
        <h3>${name}님의 공적조서</h3>
        <p><strong>업적:</strong></p>
        <p>${achievement}</p>
    `;

    // 결과 출력
    document.getElementById("output").innerHTML = result;
}
