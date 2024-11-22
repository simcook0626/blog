function generateBlog() {
    const title = document.getElementById("title").value;
    const keywords = document.getElementById("keywords").value;
    const target = document.getElementById("target").value;
    const content = document.getElementById("content").value;
    const style = document.getElementById("style").value;
    const cta = document.getElementById("cta").value;

    // 생성된 블로그 내용
    const blogPost = `
        <h2>${title}</h2>
        <p><strong>키워드:</strong> ${keywords}</p>
        <p><strong>대상 독자:</strong> ${target}</p>
        <p>${content}</p>
        <p><strong>글 톤:</strong> ${style}</p>
        <p><em>${cta}</em></p>
    `;

    // 결과를 출력
    document.getElementById("result").innerHTML = blogPost;
}
