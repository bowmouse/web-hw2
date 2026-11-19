# 실습과제 #2 : 영화 데이터를 자바스크립트로

- 이름 / 학번 : 2651060 / 전동찬
- 사이트 주소 : https://bowmouse.github.io/web-hw2/
- 사용한 API 1 : TMDB (영화 정보, 평점, 포스터 이미지, now_playing 응답)
- 사용한 API 2 : KOBIS 일별 박스오피스 (기준일 2026-11-19)

### 내 인생 영화 5편

1. 설 (2012)
   https://image.tmdb.org/t/p/w500/3XSxm6luj7H6woYahlD1zfWPHdL.jpg

2. 혀 끝으로 만나는 중국: 설 (2016)
   https://image.tmdb.org/t/p/w500/oTHABiqDV333aC50slk79oD9lGp.jpg

3. 설국열차 (2013)
   https://image.tmdb.org/t/p/w500/jw66dQvYyXkZNA0bJ7nKvua9jDr.jpg

4. 설계자 (2024)
   https://image.tmdb.org/t/p/w500/qcnrlYPXMh7gLAGzloMS7tNfHi2.jpg

5. 얀데스 설원의 생존자들 (2023)
   https://image.tmdb.org/t/p/w500/m0t0X7PaAwnBO02R0XJcXNTuS1t.jpg

### 박스오피스 영화 5편

1. 폭설 (2026)
   https://i.namu.wiki/i/Aqqn4nej6tMe_zLy20tILbBr7KMzvYBb85Bv8qr97CYu-2JywKanrlb8gFArU3XQuSFt07k0AEc6NKNolgEsew.webp

2. 임영웅ㅣ아임 히어로 더 스타디움 2 (2026)
   https://cdn.cgv.co.kr/cgvpomsfilm/Movie/Thumbnail/Poster/030001/30001783/30001783_320.jpg

3. 헝거게임 50번째 추첨의 날 (2026)
   https://i.namu.wiki/i/pt9XGRyS0-Jpeh0IdK8xZw44ZUssJD0nkk5yyBDwe-guDdNDDpNJpSPHEpM-dgtYTSr8o39EN16vxLsT8Q7dkg.webp

4. 폴2: 데드포인트 (2026)
   https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf3hLR7rC0gVUsKE5o6SEEdBB39KpehHjm_j7obrPUhGh8ef2QeWeEbcmT&s=10

5. 극장판 치이카와: 인어 섬의 비밀 (2026)
   https://cdn.cgv.co.kr/cgvpomsfilm/Movie/Thumbnail/Poster/030001/30001367/30001367_320.jpg

## 구현 항목 체크

- [０] 1. Part A: 배열과 반복문
- [０] 2. Part B: 객체 배열과 함수 7개
- [０] 3. Part C: 실제 TMDB 응답 구조
- [０] 4. 출력: console-a.png, console-c.png 및 페이지 요약 3줄
- [０] 5. 코드 품질: 함수 주석, const와 let 사용, 원본 배열 불변, 중복 계산 방지
- [０] 6. 제출 형식: GitHub 저장소, Pages, README, 자가 테스트 표

## 자가 테스트 표

| 번호 | 호출 | 기대 결과 | 실제 결과 |
|---|---|---|---|
| 1 | formatNumber("1234567") | '1,234,567' | '1,234,567' |
| 2 | average(movies).toFixed(1) | 7.3 | 7.3 |
| 3 | best(movies).title | 임영웅ㅣ아임 히어로 더 스타디움 2 | 임영웅ㅣ아임 히어로 더 스타디움 2 |
| 4 | sortBy(movies, "rating", true)[0].title | 최고 평점 영화 제목 | 임영웅ㅣ아임 히어로 더 스타디움 2 |
| 5 | filterByRating(movies, 8).length | 8점 이상인 영화 수 | 6 |
| 6 | search(movies, " 설국 ").length | 제목에 '설국'이 포함된 영화 수 | 1 |
| 7 | yearsSince("2014-11-06") | 12 | 12 |
| 8 | movies[0].title | 첫 번째 영화 제목 | 설 |

## 어려웠던 점 3가지와 해결

1. 배열과 객체의 차이: 영화 정보를 배열과 객체로 각각 정리하고, 각 속성이 어떤 역할을 하는지 구분하는 과정에서 어려움이 있었습니다. 과제 안내문과 수업 자료를 참고하여 배열과 객체의 구조를 비교하며 해결했습니다.

2. 영화 데이터 처리 함수: 평균 평점, 최고 평점, 영화 정렬 및 검색 등 여러 함수를 작성하는 과정에서 어려움이 있었습니다. 각 함수의 입력과 출력을 구분하고 기존 코드를 분석하며 문제를 해결했습니다.

3. TMDB API 응답 구조: TMDB에서 전달되는 JSON 데이터의 구조를 파악하고 기존 영화 데이터와 같은 방식으로 처리하는 과정에서 어려움이 있었습니다. 응답 객체와 results 배열의 구조를 확인하며 문제를 해결했습니다.

## 참고한 자료 (교재 절, MDN 페이지 제목, 검색어)

- 웹개발기초 실습과제 #2 안내문
- 웹개발기초 실습 수업 자료
- JavaScript 교재 8장, 9장, 10장, 11장

## 생성형 AI 사용 내역

- 질문 요지 : JavaScript의 null 개념, 객체 배열의 구조, 함수의 역할 및 TMDB API 응답 데이터 처리 방법
- 답변 요약 :
  1. null과 숫자 0의 차이 및 객체 속성의 의미
  2. 배열과 객체를 이용한 영화 데이터 관리 방법
  3. 평균, 정렬, 검색 등 JavaScript 함수의 역할
- 채택 여부 : 답변을 참고하여 코드의 구조와 각 문법의 역할을 이해하고 수정하는 과정에 활용했습니다.