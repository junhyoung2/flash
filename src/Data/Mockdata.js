
const mockData = {
  categories: [
    {
      id: 1,
      name: "조사병단 기본 지식",
      flashcards: [
        { id: 101, question: "벽 안에서 가장 바깥쪽 벽의 이름은?", answer: "마리아의 벽" },
        { id: 102, question: "엘런 예거가 처음 거인으로 변신한 전투는?", answer: "트로스트 구 전투" },
        { id: 103, question: "리바이 아커만의 별명은?", answer: "인류 최강의 병사" },
        { id: 104, question: "초기 벽의 이름은 무엇에서 유래했는가?", answer: "유미르의 세 딸 이름" },
        { id: 105, question: "조사병단의 상징은?", answer: "자유의 날개" },
        { id: 106, question: "조사병단의 전신은 무엇인가?", answer: "정찰병단" },
        { id: 107, question: "조사병단의 주된 임무는?", answer: "벽 밖 세계 탐사 및 거인 조사" },
        { id: 108, question: "조사병단 본부는 어느 지역에 있었는가?", answer: "트로스트 구" },
        { id: 109, question: "조사병단의 정식 입단은 어떤 의식 이후 이루어지는가?", answer: "선서식" },
      ],
    },
    {
      id: 2,
      name: "인물 정보 퀴즈",
      flashcards: [
        { id: 201, question: "미카사는 어느 가문 출신인가?", answer: "아커만 가문" },
        { id: 202, question: "아르민이 계승한 거인은?", answer: "초대형 거인" },
        { id: 203, question: "지크 예거와 엘런 예거의 관계는?", answer: "이복형제" },
        { id: 204, question: "히스토리아는 원래 무슨 이름으로 활동했는가?", answer: "크리스타 렌즈" },
        { id: 205, question: "라이너 브라운은 어떤 거인의 힘을 지녔는가?", answer: "갑옷 거인" },
        { id: 206, question: "리바이의 출생지는 어디인가?", answer: "지하 도시" },
        { id: 207, question: "한지 조에는 어떤 분야를 주로 연구했는가?", answer: "거인의 생태와 행동 패턴" },
        { id: 208, question: "베르톨트 후버의 성격은 어떻게 묘사되는가?", answer: "소심하지만 책임감 있는 성격" },
        { id: 209, question: "에르빈 스미스가 신뢰한 최측근은 누구인가?", answer: "리바이 아커만" },
        { id: 210, question: "피크 핑거는 어떤 거인의 힘을 지녔는가?", answer: "전차 거인" },
      ],
    },
    {
      id: 3,
      name: "전투와 작전",
      flashcards: [
        { id: 301, question: "시즈간시나 구 탈환 작전에서 희생된 사령관은?", answer: "에르빈 스미스" },
        { id: 302, question: "ODM 기어는 무엇의 줄임말인가?", answer: "Omni-Directional Mobility Gear" },
        { id: 303, question: "벽 외 첫 정찰에서 가장 큰 손실을 입은 병단은?", answer: "조사병단" },
        { id: 304, question: "거인을 처치하기 위한 급소는 어디인가?", answer: "목덜미" },
        { id: 305, question: "리바이의 유명한 전투 스타일은?", answer: "회전 절단기술" },
        { id: 306, question: "트로스트 구 방어전의 지휘관은 누구였는가?", answer: "픽시스" },
        { id: 307, question: "수송 작전 중 '짐마차 작전'의 핵심 목적은?", answer: "엘런의 신병 확보 및 이동" },
        { id: 308, question: "벽을 부순 첫 거인의 이름은?", answer: "초대형 거인" },
        { id: 309, question: "말레국이 수행한 파라디섬 급습 작전의 핵심 전략은?", answer: "기습 폭격 및 거인 투입" },
      ],
    },
    {
      id: 4,
      name: "세계관 이해하기",
      flashcards: [
        { id: 401, question: "엘디아 제국이 다스린 인류는?", answer: "유미르의 후예" },
        { id: 402, question: "말레국은 거인을 어떻게 활용했는가?", answer: "군사 병기로 활용" },
        { id: 403, question: "패러디섬은 실제로 어떤 목적의 장소인가?", answer: "엘디아인의 격리 지역" },
        { id: 404, question: "거인의 유래는 누구로부터 시작되었는가?", answer: "유미르 프리츠" },
        { id: 405, question: "구성원 모두가 거인이 될 수 있는 인종은?", answer: "엘디아인" },
        { id: 406, question: "9개의 거인은 처음 누구의 힘에서 나뉘었는가?", answer: "유미르 프리츠" },
        { id: 407, question: "세계는 왜 엘디아인을 두려워했는가?", answer: "거인의 힘을 가졌기 때문" },
        { id: 408, question: "좌표의 힘이란 무엇을 의미하는가?", answer: "모든 거인을 지배하는 능력" },
        { id: 409, question: "왕가의 피와 함께할 때만 가능한 능력은?", answer: "좌표의 힘 활성화" },
        { id: 410, question: "유미르가 거인의 힘을 얻은 계기는?", answer: "기묘한 생물과 접촉" },
      ],
    },
    {
      id: 5,
      name: "명대사 맞추기",
      flashcards: [
        { id: 501, question: "에르빈: '너는 죽을 때까지...'", answer: "전진할 수 있겠느냐?'" },
        { id: 502, question: "엘런: '자유를 위해서라면...'", answer: "나는 하늘도 날 수 있어'" },
        { id: 503, question: "리바이: '선택은...'", answer: "항상 후회만 남는다" },
        { id: 504, question: "한지: '연구를 위해서라면...'", answer: "목숨도 걸 수 있어!" },
        { id: 505, question: "지크: '엘디아의 해방을 위해서는...'", answer: "멸종이 필요하다'" },
        { id: 506, question: "에르빈: '나는...'", answer: "진실을 알고 싶다!" },
        { id: 507, question: "엘런: '모두 자유롭게...'", answer: "살 수 있는 세상을 원해'" },
        { id: 508, question: "아르민: '사람은...'", answer: "바다를 봐야 해'" },
        { id: 509, question: "리바이: '목숨을 걸고 싸워라. 그래야...'", answer: "살아남을 수 있다'" },
      ],
    },
    {
      id: 6,
      name: "9개의 거인 능력",
      flashcards: [
        { id: 601, question: "전차 거인의 주요 특징은?", answer: "높은 기동성과 지원 능력" },
        { id: 602, question: "수정 결정체를 생성하는 거인은?", answer: "여성형 거인" },
        { id: 603, question: "짐승 거인의 주특기는?", answer: "장거리 투창" },
        { id: 604, question: "초대형 거인의 특징은?", answer: "압도적인 크기와 증기 방출" },
        { id: 605, question: "창의적인 전략을 쓰는 지능형 거인은?", answer: "전차 거인" },
        { id: 606, question: "갑옷 거인의 방어 능력은 어디에서 기인하는가?", answer: "경화된 피부" },
        { id: 607, question: "창조 능력과 복원을 가진 거인은?", answer: "시조 거인" },
        { id: 608, question: "엘런은 최종적으로 몇 개의 거인을 동시에 보유했는가?", answer: "3개" },
      ],
    },
  ],
};

export default mockData;
