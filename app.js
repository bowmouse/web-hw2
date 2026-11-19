// ============================================================
// Part A: 배열과 반복문
// ============================================================


// A1. 평균 평점

let sumA = 0;

for (let i = 0; i < ratings.length; i++) {
    sumA += ratings[i];
}

const averageA = sumA / ratings.length;

console.log(`A1 평균 평점: ${averageA}`);


// A2. 최고 평점 영화

let maxA = 0;

for (let i = 1; i < ratings.length; i++) {

    if (ratings[i] > ratings[maxA]) {
        maxA = i;
    }

}

console.log(`A2 최고 평점: ${titles[maxA]} ${ratings[maxA]}`);


// A3. 8점 이상인 영화 수

let count8A = 0;

for (let i = 0; i < ratings.length; i++) {

    if (ratings[i] >= 8) {
        count8A++;
    }

}

console.log(`A3 8점 이상: ${count8A}편`);


// A4. 연도대별 영화 수

let count2020A = 0;
let count2010A = 0;
let count2000A = 0;
let countBeforeA = 0;

for (let i = 0; i < years.length; i++) {

    const decadeA = years[i] - (years[i] % 10);

    switch (decadeA) {

        case 2020:
            count2020A++;
            break;

        case 2010:
            count2010A++;
            break;

        case 2000:
            count2000A++;
            break;

        default:
            countBeforeA++;
            break;
    }

}

console.log(
    `A4 2020년대 ${count2020A}편, 2010년대 ${count2010A}편, 2000년대 ${count2000A}편, 그 이전 ${countBeforeA}편`
);


// A5. 누적 관객 100만 이상 영화

let bigA = "";

for (let i = 0; i < audiences.length; i++) {

    if (audiences[i] >= 1000000) {
        bigA += titles[i] + " ";
    }

}

if (bigA.trim() === "") {
    bigA = "없음";
} else {
    bigA = bigA.trim();
}

console.log(`A5 관객 100만 이상: ${bigA}`);



// ============================================================
// Part B: 객체 배열과 함수 7개
// ============================================================


// average : 배열 ⇒ 평균 평점 숫자

function average(list) {

    return averageBy(list, "rating");

}


// best : 배열 ⇒ 최고 평점 영화 객체

function best(list) {

    if (list.length === 0) {
        return null;
    }

    let bestMovie = list[0];

    for (let i = 1; i < list.length; i++) {

        if (list[i].rating > bestMovie.rating) {
            bestMovie = list[i];
        }

    }

    return bestMovie;

}


// filterByRating : 배열, 최소 평점 ⇒ 새 배열

function filterByRating(list, min) {

    return list.filter((movie) => movie.rating >= min);

}


// sortBy : 배열, 키 이름, 내림차순 여부 ⇒ 새 배열

function sortBy(list, key, desc) {

    const sign = desc ? -1 : 1;

    return [...list].sort((a, b) => {

        let result;

        if (typeof a[key] === "string") {

            result = a[key].localeCompare(b[key]);

        } else {

            result = a[key] - b[key];

        }

        return result * sign;

    });

}


// search : 배열, 검색어 ⇒ 제목이 일치하는 새 배열

function search(list, keyword) {

    const cleanKeyword = keyword.trim().toLowerCase();

    return list.filter((movie) =>

        movie.title.toLowerCase().includes(cleanKeyword)

    );

}


// formatNumber : 숫자 또는 숫자 문자열 ⇒ 천 단위 쉼표 문자열

function formatNumber(n) {

    return Number(n).toLocaleString("ko-KR");

}


// yearsSince : 날짜 문자열 ⇒ 올해까지 지난 연수

function yearsSince(dateStr) {

    const releaseYear = new Date(dateStr).getFullYear();

    const currentYear = new Date().getFullYear();

    return currentYear - releaseYear;

}



// ============================================================
// Part B: 페이지 요약 3줄
// ============================================================

const bestMovie = best(movies);

const audienceTop = sortBy(movies, "audience", true)[0];

const summaryLines = [

    `전체 ${movies.length}편, 평균 평점 ${average(movies).toFixed(1)}점`,

    `최고 평점 ${bestMovie.title} (${bestMovie.rating.toFixed(1)}점, 개봉한 지 ${yearsSince(bestMovie.date)}년)`,

    `관객 1위 상영작 ${audienceTop.title} (누적 ${formatNumber(audienceTop.audience)}명)`

];

document.getElementById("out").textContent = summaryLines.join("\n");



// ============================================================
// Part C: 실제 TMDB 응답
// ============================================================


// getList : TMDB 응답 객체 ⇒ 영화 배열

function getList(data) {

    return data.results;

}


// averageBy : 배열, 키 이름 ⇒ 해당 키 값의 평균

function averageBy(list, key) {

    if (list.length === 0) {
        return 0;
    }

    return list.reduce(
        (acc, movie) => acc + Number(movie[key]),
        0
    ) / list.length;

}


const tmdbMovies = getList(TMDB);


// C1. 현재 응답 정보

console.log(
    `C1 page ${TMDB.page}, total_pages ${TMDB.total_pages}, total_results ${TMDB.total_results}, 이번 응답 ${tmdbMovies.length}편`
);


// C2. 상영작 평균 평점

console.log(
    `C2 상영작 평균 평점: ${averageBy(tmdbMovies, "vote_average").toFixed(1)}`
);


// C3. 평점 상위 5편 표

console.table(

    sortBy(tmdbMovies, "vote_average", true).slice(0, 5),

    ["title", "release_date", "vote_average"]

);


// C4. 검색 결과

const tmdbSearchKeyword = "바다";

console.log(
    `C4 '${tmdbSearchKeyword}' 검색: ${search(tmdbMovies, tmdbSearchKeyword).length}편`
);



// ============================================================
// 보너스: 날짜에 요일 표시 (+0.3)
// ============================================================

function formatDate(dateStr) {

    const [year, month, day] = dateStr.split("-").map(Number);

    const date = new Date(year, month - 1, day);

    const weekdays = ["일", "월", "화", "수", "목", "금", "토"];

    return `${year}년 ${month}월 ${day}일 (${weekdays[date.getDay()]})`;

}



// ============================================================
// 보너스: fetch로 JSON 파일 읽기 (+0.4)
// ============================================================

async function loadJson() {

    const response = await fetch("tmdb.json");

    if (!response.ok) {
        throw new Error(`tmdb.json을 불러오지 못했습니다: HTTP ${response.status}`);
    }

    const data = await response.json();

    console.table(

        sortBy(getList(data), "vote_average", true).slice(0, 5),

        ["title", "vote_average"]

    );

}


// 실제 tmdb.json을 준비한 뒤 아래 주석을 해제하세요.

// loadJson();