const quotes = [
    {
        quote : "엄마에게 쌓인 감정을 풀지 못했을 때는 하지 않았던 말이었다. 엄마는 조금 웃다가 내 어깨에 기대어 잠들어버렸다.",
        author : "쇼코의 미소 中"
    },
    {
        quote : "오늘을 살아내고 우리 내일로 가자",
        author : "새소년-난춘 中"
    },
    {
        quote : "알지 못하면 알려고 노력하는 것이, 그리하여 조금이라도 진실에 가까이 가는 것이 맞다. 그러나 우리는 표면적인 근거에서 아집을 발견하고 소중히 간직해 '그 쪽'을 배제하는 행위를 반복하고 있다. 실패 사례를 수도 없이 목격하면서도.",
        author : "박경리"
    },
    {
        quote : "꾸준히 지속하는 가장 좋은 방법은 무질서한 부분의 빈틈을 자신의 힘으로 극복해 나가는 경험을 반복하는 것이라 생각한다.",
        author : "성공하는 프로그래밍 공부법 中"
    },
    {
        quote : "Treating people with dignity and respect makes a decent man.",
        author : "Alexandria Ocasio-Cortez"
    },
    {
        quote : "거절이란 조금 더 집중하고자 하는 일이 있어 나름의 우선순위를 세우는 과정이기 때문이다. 그렇게 일을 정돈하는 마음이 전해지도록 충분히 그리고 정갈하게 표현하려 애쓴다.",
        author : "사랑한다고 말할 용기 中"
    },
    {
        quote : "창공처럼 무겁고, 무한한 연민. ",
        author : "태고의 시간들 중中"
    },
]

const quote = document.querySelector("#quotes p:first-child");
const author = document.querySelector("#quotes p:last-child");

const randomNum = Math.floor(Math.random() * quotes.length);
const todaysQuote = quotes[randomNum].quote;
const todaysAuthor = quotes[randomNum].author;
quote.innerText = todaysQuote;
author.innerText = todaysAuthor;