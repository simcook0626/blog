import express from "express";
import { Configuration, OpenAIApi } from "openai";
import cors from "cors";
import dotenv from "dotenv";

// .env 파일 로드
dotenv.config();

console.log("API 키 확인:", process.env.OPENAI_API_KEY);

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const app = express();
app.use(cors());
app.use(express.json());

app.post("/generate-blog", async (req, res) => {
    const { title, keywords, audience, tone, content } = req.body;

    const prompt = `
        네이버 블로그 글을 작성해주세요.
        제목: ${title}
        키워드: ${keywords}
        대상 독자: ${audience}
        글 톤: ${tone}
        본문 내용: ${content}

        위 정보를 바탕으로 네이버 블로그 형식의 글을 작성하세요.
    `;

    try {
        const completion = await openai.createChatCompletion({
            model: "gpt-4",
            messages: [{ role: "user", content: prompt }],
            max_tokens: 500,
            temperature: 0.7,
        });

        const generatedText = completion.data.choices[0].message.content;
        res.json({ blog: generatedText });
    } catch (error) {
        console.error("OpenAI API 호출 중 오류 발생:", error.response ? error.response.data : error.message);
        res.status(500).send("Blog generation failed");
    }
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`서버가 실행 중입니다: http://localhost:${PORT}`);
});
