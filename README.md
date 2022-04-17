#  📝 Momentum Chrom App Clone

## 🖋 개요

- to-do list 관리 목적의 chrome의 momentum app 클론하여 구현해보기
- 목적 : 자바스크립트의 문법과 여러 메소드에 익숙해지기
<br>

## 💻 주요 기능

- Math.random을 활용해 배경화면, 화면 하단의 명언 랜덤으로 렌더링
- navigator.geolocation으로 사용자 위치 정보 불러온 뒤 weather API를 활용해 현지의 날씨 정보 가져오기
- 자바스크립트의 Date 객체를 활용해 시간을 불러오고, padStart 함수로 보기 좋게 포맷팅
- input으로 전달받은 to-dos를 localStorage에 저장하여 데이터가 유실되지 않도록 함
- to-dos의 생성 및 삭제
<br>

## 💬 프로젝트를 하며 느낀 점

- 이번 프로젝트에서 메인이라고 할 수 있는 투두리스트 구현이 가장 어려웠다. (더 많은 연습이 필요할 것 같다)
  - localStorage 개념이 생소했지만 이 역시 객체처럼 key와 value로 저장된다는 개념을 알게 되었다.
  - 개발자 도구의 Application 탭에서 시각화하며 실습할 수 있는 점이 유용했다.
- 이벤트 핸들링은 반복적으로 사용하다보니 이전보다 훨씬 익숙해진 걸 느낄 수 있었다.
<br>

## 🔨 이슈

- (큰 이슈는 아니지만) 투두리스트의 삭제 버튼 css 수정과 내부 컨텐츠의 font-size 및 margin 간격 조정, li bullet 수정 예정
<br>

## 🔎 실제 구현 화면
![image](https://user-images.githubusercontent.com/80025366/163709323-b6925e35-7278-457a-b9de-f904263dc95d.png)
