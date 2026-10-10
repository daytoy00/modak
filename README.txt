모닥 - PC 프로그램 만들기

1. Node.js(nodejs.org, LTS)를 설치해요.
2. 이 폴더에서 터미널(명령 프롬프트)을 열고 아래를 차례로 입력해요.
     npm install
     npm start              ← 바로 실행해 보기
3. 설치 파일(.exe / .dmg)을 만들려면:
     npm run build:win      ← Windows (dist 폴더에 설치 파일 생김)
     npm run build:mac      ← Mac (Mac에서만)
4. 만들어진 설치 파일을 친구에게 보내면 설치해서 쓸 수 있어요.

참고
- 인터넷 연결이 필요해요 (접속자 연결에 PeerJS 서비스를 써요).
- 화면 공유는 주 화면 전체를 공유해요. Windows는 시스템 소리도 같이 나가요.
- 화면 구성을 바꾸려면 index.html을 수정하면 돼요.

[GitHub에서 자동으로 설치 파일 만들기]
1. 이 폴더를 GitHub 저장소(repository)에 올려요 (.github 폴더 포함).
2. 저장소의 Actions 탭 > build > Run workflow 를 누르면 Windows(.exe)와 Mac(.dmg) 설치 파일이 만들어져요.
3. 완료 후 같은 화면 아래 Artifacts에서 내려받아 친구에게 배포해요.
※ 코드 서명이 없어서 처음 설치할 때 "알 수 없는 게시자" 경고가 떠요 (Mac은 우클릭 > 열기).
