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
        { id: 1, sk: "HTML5" },
        { id: 2, sk: "CSS3" },
        { id: 3, sk: "Javascript" },
        { id: 4, sk: "React" },
        { id: 5, sk: "Photoshop" },
    ],
};
const trainingHP = [
    { id: 1, title: "현대엘리베이터", skill: "jQuery", src: "/assets/images/hpimg01.jpg", link: "https://chxxing.github.io/hd_jquery" },
    { id: 2, title: "현대엘리베이터", skill: "Javascript", src: "/assets/images/hpimg02.jpg", link: "https://chxxing.github.io/hd_javascript" },
    { id: 3, title: "카시아속초호텔", skill: "Javascript", src: "/assets/images/hpimg03.jpg", link: "https://chxxing.github.io/cassia" },
    { id: 4, title: "현대엘리베이터", skill: "React", src: "/assets/images/hpimg04.jpg", link: "https://chxxing.github.io/hd_react" },
    { id: 5, title: "부산청소", skill: "React", src: "/assets/images/hpimg05.jpg", link: "https://chxxing.github.io/clean_spa" },
    { id: 6, title: "피몽쉐", skill: "React", src: "/assets/images/hpimg06.jpg", link: "https://chxxing.github.io/phymongshe_shop/" },
]
const pfdata = [
    { id: 1, title: "main" },
    { id: 2, title: "TASAKI", type: "Standard Web", font: ["Pretendard", "Noto Serif KR",], info: "리액트를 활용하여 타사키 쥬얼리 홈페이지를 리뉴얼하였으며, 메인메뉴와 탭메뉴는 React-router를 사용하였습니다.", color: ["#e3f0ea", "#dee2e6"], skill: ["ReactJS", "Sass", "React-Router"], link: "https://chxxing.github.io/react_tasaki/" },
    { id: 3, title: "TeddyBearMusium", type: "Standard Web", font: ["Pretendard"], info: "리액트를 활용하여 테디베어홈페이지를 리뉴얼하였으며, 메인메뉴와 탭메뉴는 React-router를 사용하였습니다.", color: ["#e36b2f", "#53361e"], skill: ["ReactJS", "Sass", "React-Router"], link: "https://chxxing.github.io/react_teddybear" },
    { id: 4, title: "ESSA", type: "Responsive Web", font: ["Pretendard", "Noto Serif KR", 'Montserrat'], info: "에싸홈페이지를 리뉴얼하였으며, slick을 활용한 슬라이드와 AOS 라이브러리를 사용하여 스크롤 애니메이션을 구현했습니다.", color: ["#a36d6b", "#573036"], skill: ["HTML5", "CSS3", "Javascript(jQuery)"], link: "https://chxxing.github.io/essa_my/" },
    { id: 5, title: "Kyochon", type: "Responsive Web", font: ["Noto Sans KR", "Noto Serif KR"], info: "교촌치킨 홈페이지를 리뉴얼하였으며, slick을 활용한 슬라이드를 구현했습니다.", color: ["#f9b52c", "#b99764"], skill: ["HTML5", "CSS3", "Javascript(jQuery)"], link: "https://chxxing.github.io/kyochon_my/" },
    { id: 6, title: "Dentiste", type: "Standard Web", font: ["Noto Sans KR"], info: "덴티스테 홈페이지를 리뉴얼하였으며, swiper를 활용한 슬라이드를 구현했습니다.", color: ["#017552", "#dddddd"], skill: ["HTML5", "CSS3", "Vanilla JS"], link: "https://chxxing.github.io/dentiste_my/" },
    { id: 7, title: "training" },
    { id: 8, title: "profile" }
];

export { profile, pfdata, trainingHP };