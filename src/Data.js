const profile = {
    name: "Choi EunJin",
    kname: "최은진",
    objective: "Front-end Web Developer",
    slogan: "Seize the day !",
    email: "choing26@naver.com",
    tel: "010-5167-0209",
    education: [
        { ed: "원화여자고등학교 졸업" },
        { ed: "계명대학교 생명과학부 졸업" },
        { ed: "부산 그린컴퓨터아카데미\n리엑트(React)활용 프론트엔드 개발자 양성과정 수료" }
    ],
    skills: [
        { sk: "HTML" },
        { sk: "CSS" },
        { sk: "Javascript" },
        { sk: "React" },
        { sk: "Photoshop" },
    ],
};
const pfdata = [
    { id: 1, title: "main" },
    {
        id: 2, title: "TASAKI", type: "Standard Web",
        font: [
            "Pretendard",
            "Noto Serif KR",
        ],
        info: "리액트로 구현한 TASAKI 홈페이지",
        color: [
            "#e3f0ea", "#dee2e6"
        ],
        skill: [
            "ReactJS", "Sass", "React-Router"
        ],
        src: "", link: "https://chxxing.github.io/react_tasaki/"
    },
    { id: 3, title: "TeddyBear\nMusium", type: "Standard Web", font: ["Pretendard"], info: "리액트로 구현한 테디베어박물관 홈페이지", color: ["#e36b2f", "#53361e"], skill: ["ReactJS", "Sass", "React-Router"], src: "", link: "https://chxxing.github.io/react_teddybear" },
    { id: 4, title: "ESSA", type: "Responsive Web", font: ["Pretendard", "Noto Serif KR", 'Montserrat'], info: "에싸쇼파 홈페이지", color: ["#a36d6b", "#573036"], skill: ["HTML5", "CSS3", "Javascript(jQuery)"], src: "", link: "https://chxxing.github.io/essa_my/" },
    { id: 5, title: "Kyochon", type: "Responsive Web", font: ["Noto Sans KR", "Noto Serif KR"], info: "교촌치킨 홈페이지", color: ["#f9b52c", "#b99764"], skill: ["HTML5", "CSS3", "Javascript(jQuery)"], src: "", link: "https://chxxing.github.io/kyochon_my/" },
    { id: 6, title: "Dentiste", type: "Standard Web", font: ["Noto Sans KR"], info: "덴티스테 홈페이지", color: ["#017552", "#dddddd"], skill: ["HTML5", "CSS3", "Vanilla JS"], src: "", link: "https://chxxing.github.io/dentiste_my/" },
    { id: 7, title: "profile" }
];

export { profile, pfdata };