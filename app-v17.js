const TYPES = {
  transfer: {
    name: '자료이관',
    desc: '보존 중인 장기요양급여 제공자료를 공단에 실제로 이관하는 경우입니다.',
    tag: '공단에 자료를 이관하는 경우',
    docs: [
      '공단이관·자체보관 신청서',
      '장기요양급여 제공자료 이관 목록표',
      '실제 이관할 장기요양급여 제공자료',
      '일부 자료가 분실·훼손된 경우: 분실 및 훼손 목록표 추가',
      '대리인이 방문하는 경우: 아래 신청인 확인서류를 추가 확인'
    ],
    tip: '자료이관은 기관의 현재 급여제공 여부에 따라 처리상태가 달라집니다. 아직 운영 중이면 일부이관으로 접수증을 먼저 받고, 운영 종료 후 나머지 자료를 추가 이관하여 이관완료로 처리합니다.'
  },
  lost: {
    name: '전건 분실',
    desc: '보존기간 중 이관해야 할 자료가 전부 분실·훼손되어 실제로 이관할 자료가 없는 경우입니다.',
    tag: '이관대상 자료가 전부 분실·훼손된 경우',
    docs: [
      '공단이관·자체보관 신청서',
      '장기요양급여 제공자료 이관 목록표',
      '장기요양급여 제공자료 분실 및 훼손 목록표',
      '확인서 [별지 제2호 서식] — 분실·훼손 경위와 내용을 작성',
      '대리인이 방문하는 경우: 아래 신청인 확인서류를 추가 확인'
    ],
    flows: [
      ['신청서 작성', '공단이관 신청서를 작성합니다.'],
      ['이관 목록표 작성', '이관대상 자료의 기본 내역을 이관 목록표에 작성합니다.'],
      ['분실 및 훼손 목록표 작성', '분실·훼손된 이관대상 자료의 내역을 확인하여 별도 목록표에 작성합니다.'],
      ['확인서 작성', '확인서의 분실·훼손 해당 항목을 확인하고, 어떤 자료를 어떤 경위로 분실·훼손했는지 구체적으로 작성합니다.'],
      ['공단 제출 및 확인', '신청서·이관 목록표·분실 및 훼손 목록표·확인서를 관할 지사에 제출합니다.'],
      ['접수증 수령 및 후속 신고', '공단 확인 후 접수증을 받아 관할 시·군·구 휴·폐업 신고 등 후속 절차를 진행합니다.']
    ],
    tip: '전건 분실은 단순히 “자료가 없음”으로 처리되는 유형이 아닙니다. 자료의 기록·관리 또는 이관 의무 위반이 인정되면 과태료가 부과될 수 있습니다.'
  },
  nohistory: {
    name: '급여제공이력 없음',
    desc: '최근 5년간 급여제공이력이 없거나, 휴업 후 새 급여제공이력 없이 폐업을 신고하는 경우입니다.',
    tag: '최근 5년간 급여제공이력이 없는 경우',
    docs: [
      '공단이관·자체보관 신청서',
      '장기요양급여 제공자료 이관 목록표',
      '확인서 [별지 제2호 서식] — 급여제공이력이 없다는 내용을 작성',
      '대리인이 방문하는 경우: 아래 신청인 확인서류를 추가 확인'
    ],
    flows: [
      ['해당 여부 확인', '최근 5년간 장기요양급여 제공이력이 없거나, 휴업 후 새 급여제공이력 없이 폐업하는 경우인지 확인합니다.'],
      ['신청서 작성', '공단이관 신청서를 작성합니다.'],
      ['이관 목록표 작성', '장기요양급여 제공자료 이관 목록표를 작성합니다.'],
      ['확인서 작성', '확인서의 급여제공내역 없음 항목을 확인하고, 급여제공이력이 없다는 내용을 작성합니다.'],
      ['공단 제출 및 이력 확인', '신청서·이관 목록표·확인서를 제출하고 공단에서 급여제공 이력을 확인합니다.'],
      ['접수증 수령 및 폐업 신고', '공단 확인 후 접수증을 받아 관할 시·군·구 폐업 신고 등 후속 절차를 진행합니다.']
    ],
    tip: '이 유형은 “서류를 잃어버린 경우”가 아닙니다. 최근 5년간 급여제공 자체가 없거나, 휴업 이후 새로운 급여제공 없이 폐업하는 경우에 해당합니다.'
  },
  self: {
    name: '자체보관',
    desc: '휴업하는 기관이 공단의 허가를 받아 장기요양급여 제공자료를 기관에서 직접 보관하려는 경우입니다.',
    tag: '휴업 중 자료를 기관에서 보관하는 경우',
    docs: [
      '공단이관·자체보관 신청서 — 자체보관에 체크',
      '장기요양급여 제공자료 이관 목록표',
      '자체보관 계획 — 보관기간·보관장소·보관책임자(성명·전화번호) 기재',
      '분실·훼손 자료가 있는 경우: 분실 및 훼손 목록표 추가',
      '대리인이 방문하는 경우: 아래 신청인 확인서류를 추가 확인'
    ],
    flows: [
      ['자체보관 신청서 작성', '별지 제36호서식에서 자체보관에 체크하고 기관 기본정보와 휴업기간을 작성합니다.'],
      ['이관 목록표 작성', '기관에서 직접 보관할 자료의 내역을 목록표에 정리합니다.'],
      ['자체보관 계획 작성', '신청서에 보관기간·보관장소·보관책임자와 연락처를 빠짐없이 작성합니다.'],
      ['휴업 예정일 전 공단에 신청', '자체보관 신청은 휴업 예정일 전에 관할 지사에 제출해야 합니다.'],
      ['공단 검토 및 허가 확인', '자체보관은 신청만으로 가능한 것이 아닙니다. 공단이 자체보관 계획 등을 검토하여 허가한 경우에만 직접 보관할 수 있습니다.'],
      ['휴업 신고 등 후속 절차', '공단의 자체보관 허가 여부를 확인한 뒤 관할 시·군·구 휴업 신고 등 필요한 후속 절차를 진행합니다.']
    ],
    tip: '자체보관은 휴업에만 적용합니다. 폐업기관은 자체보관을 선택할 수 없습니다.'
  }
};


const SERVICE_GUIDES = {
  '방문요양': {
    common: [
      ['자체', '배상책임보험 증서'],
      ['자체', '직원 근무일지(출근부)'],
      ['별지24', '프로그램관리자·사회복지사 업무수행일지'],
      ['별지25', '교육시간 관리대장']
    ],
    recipient: ['급여계약 서류', '급여제공기록지', '급여비용 명세서', '(또는) 본인부담금 수납대장']
  },
  '방문목욕': {
    common: [
      ['자체', '배상책임보험 증서'],
      ['자체', '직원 근무일지(출근부)'],
      ['별지24', '프로그램관리자·사회복지사 업무수행일지'],
      ['별지25', '교육시간 관리대장']
    ],
    recipient: ['급여계약 서류', '급여제공기록지', '급여비용 명세서', '(또는) 본인부담금 수납대장']
  },
  '방문간호': {
    common: [
      ['자체', '배상책임보험 증서'],
      ['자체', '직원 근무일지(출근부)'],
      ['별지24', '프로그램관리자·사회복지사 업무수행일지'],
      ['별지25', '교육시간 관리대장']
    ],
    recipient: ['급여계약 서류', '급여제공기록지', '방문간호지시서', '급여비용 명세서', '(또는) 본인부담금 수납대장']
  },
  '복지용구': {
    common: [],
    recipient: ['급여계약 서류', '급여제공기록지', '급여비용 명세서', '(또는) 본인부담금 수납대장']
  },
  '주야간보호': {
    common: [
      ['자체', '배상책임보험 증서'],
      ['자체', '직원 근무일지(출근부)'],
      ['별지22', '이동서비스일지'],
      ['별지23', '주·야간보호 목욕서비스 제공일지'],
      ['별지24', '프로그램관리자·사회복지사 업무수행일지'],
      ['별지25', '교육시간 관리대장'],
      ['별지26', '프로그램 운영기록지']
    ],
    recipient: ['급여계약 서류', '급여제공기록지', '급여비용 명세서', '(또는) 본인부담금 수납대장']
  },
  '주야간보호 치매전담실': {
    common: [
      ['자체', '배상책임보험 증서'],
      ['자체', '직원 근무일지(출근부)'],
      ['별지22', '이동서비스일지'],
      ['별지23', '주·야간보호 목욕서비스 제공일지'],
      ['별지24-2', '치매전담형 프로그램관리자 업무수행일지'],
      ['별지25', '교육시간 관리대장'],
      ['별지26', '프로그램 운영기록지']
    ],
    recipient: ['급여계약 서류', '급여제공기록지', '급여비용 명세서', '(또는) 본인부담금 수납대장']
  },
  '단기보호': {
    common: [
      ['자체', '배상책임보험 증서'],
      ['자체', '직원 근무일지(출근부)'],
      ['별지25', '교육시간 관리대장'],
      ['별지26', '프로그램 운영기록지']
    ],
    recipient: ['급여계약 서류', '급여제공기록지', '급여비용 명세서', '(또는) 본인부담금 수납대장']
  },
  '노인요양시설': {
    common: [
      ['자체', '배상책임보험 증서'],
      ['자체', '직원 근무일지(출근부)'],
      ['별지25', '교육시간 관리대장'],
      ['별지26', '프로그램 운영기록지']
    ],
    recipient: ['급여계약 서류', '급여제공기록지', '급여비용 명세서', '(또는) 본인부담금 수납대장']
  },
  '노인요양시설 치매전담실': {
    common: [
      ['자체', '배상책임보험 증서'],
      ['자체', '직원 근무일지(출근부)'],
      ['별지24-2', '치매전담형 프로그램관리자 업무수행일지'],
      ['별지25', '교육시간 관리대장'],
      ['별지26', '프로그램 운영기록지']
    ],
    recipient: ['급여계약 서류', '급여제공기록지', '급여비용 명세서', '(또는) 본인부담금 수납대장']
  },
  '공동생활가정': {
    common: [
      ['자체', '배상책임보험 증서'],
      ['자체', '직원 근무일지(출근부)'],
      ['별지25', '교육시간 관리대장'],
      ['별지26', '프로그램 운영기록지']
    ],
    recipient: ['급여계약 서류', '급여제공기록지', '급여비용 명세서', '(또는) 본인부담금 수납대장']
  }
};


const PDF_2025 = 'https://www.carefor.co.kr/ct_att/contents_article/0/202507/45793/G2uS45b6v6.pdf';
const PDF_2026 = 'https://www.carefor.co.kr/ct_att/contents_article/0/202601/46327/4OOVuDaPzf.pdf';

// 연도별 「장기요양급여 제공기준 및 급여비용 산정방법 등에 관한 세부사항」 원문/자료 페이지.
// 2025·2026은 PDF의 개별 별지 페이지까지 직접 연결하고,
// 2021~2024는 해당 연도의 세부사항 자료 페이지로 연결합니다.
const YEAR_FORM_SOURCES = {
  2021: 'https://www.carefor.co.kr/cs/view_notice.php?cscmgno=903&rtnUrl=/cs/list_notice.php',
  2022: 'https://www.carefor.co.kr/cs/view_notice.php?calmgno=25968&rtnUrl=/cs/list_pds.php?csckind=2&listCnt=15&page=4',
  2023: 'https://carefor.co.kr/cs/view_pds.php?calmgno=35927&rtnUrl=/cs/list_pds.php?',
  2024: 'https://carefor.co.kr/cs/view_pds.php?calmgno=44534&rtnUrl=/cs/list_pds.php',
  2025: PDF_2025,
  2026: PDF_2026
};

const FORM_RESOURCES = {
  '별지22': {
    title: '이동서비스일지',
    desc: '주·야간보호 이동서비스 제공 시 작성·보관하는 서식입니다.',
    pages: {2025:50, 2026:60}
  },
  '별지23': {
    title: '주·야간보호 목욕서비스 제공 일지',
    desc: '주·야간보호 목욕서비스 제공 시 작성·보관하는 서식입니다.',
    pages: {2025:52, 2026:62}
  },
  '별지24': {
    title: '프로그램관리자·급여관리 업무수행 일지',
    desc: '2026년부터 가정방문급여용 서식의 명칭과 내용이 개편되었습니다.',
    pages: {2025:53, 2026:63}
  },
  '별지24-2': {
    title: '주야간보호기관 인지활동형 프로그램관리자 업무수행 일지',
    desc: '2026년부터 주야간보호기관용 업무수행 일지로 구분됩니다.',
    pages: {2025:56, 2026:66}
  },
  '별지24-3': {
    title: '치매전담형 기관 프로그램관리자 업무수행 일지',
    desc: '2026년부터 치매전담형 기관용으로 별지 제24호의3 서식이 구분됩니다.',
    pages: {2026:69}
  },
  '별지25': {
    title: '교육시간 관리 대장',
    desc: '교육시간 관련 증빙을 작성·보관하는 서식입니다.',
    pages: {2025:59, 2026:72}
  },
  '별지26': {
    title: '프로그램 운영 기록지',
    desc: '프로그램 제공내용과 평가 등을 작성·보관하는 서식입니다.',
    pages: {2025:62, 2026:75}
  }
};

function row(code, name, period='', note='') { return {code, name, period, note}; }

function getCommonRows(service, yearValue){
  const year = parseInt(String(yearValue), 10);
  const base = (SERVICE_GUIDES[service]?.common || []).map(([code,name])=>row(code,name));

  // 2021~2024: 참고사이트에 표시된 기존 구조를 유지합니다.
  if(year <= 2024) return base;

  // 2025: 사용자가 제공한 참고사이트 화면의 연도별 표기를 기준으로 표시합니다.
  if(year === 2025){
    if(['방문요양','방문목욕','방문간호'].includes(service)){
      return [
        row('자체','배상책임보험 증서'),
        row('자체','직원 근무일지(출근부)'),
        row('별지24','프로그램관리자·사회복지사 업무수행일지'),
        row('별지25','교육시간 관리대장')
      ];
    }
    if(service === '주야간보호'){
      return [
        row('자체','배상책임보험 증서'),
        row('자체','직원 근무일지(출근부)'),
        row('별지22','이동서비스일지'),
        row('별지23','주·야간보호 목욕서비스 제공일지'),
        row('별지24-2','주·야간보호 및 치매전담형 프로그램관리자 업무수행 일지'),
        row('별지25','교육시간 관리대장'),
        row('별지26','프로그램 운영기록지')
      ];
    }
    if(service === '주야간보호 치매전담실'){
      return [
        row('자체','배상책임보험 증서'),
        row('자체','직원 근무일지(출근부)'),
        row('별지22','이동서비스일지'),
        row('별지23','주·야간보호 목욕서비스 제공일지'),
        row('별지24-2','치매전담형 프로그램관리자 업무수행일지'),
        row('별지25','교육시간 관리대장'),
        row('별지26','프로그램 운영기록지')
      ];
    }
    if(service === '노인요양시설 치매전담실'){
      return [
        row('자체','배상책임보험 증서'),
        row('자체','직원 근무일지(출근부)'),
        row('별지24-2','치매전담형 프로그램관리자 업무수행일지'),
        row('별지25','교육시간 관리대장'),
        row('별지26','프로그램 운영기록지')
      ];
    }
    return base;
  }

  // 2026: 참고사이트 화면과 2026.1.1. 세부사항의 개정 별지서식을 반영합니다.
  if(year >= 2026){
    if(['방문요양','방문목욕','방문간호'].includes(service)){
      return [
        row('자체','배상책임보험 증서'),
        row('자체','직원 근무일지(출근부)'),
        row('별지24','가정방문급여 급여관리 업무수행일지','2026.1.1.부터','NEW'),
        row('별지25','교육시간 관리대장')
      ];
    }
    if(service === '주야간보호'){
      return [
        row('자체','배상책임보험 증서'),
        row('자체','직원 근무일지(출근부)'),
        row('별지22','이동서비스일지'),
        row('별지23','주·야간보호 목욕서비스 제공일지'),
        row('별지24-2','주야간보호기관 인지활동형 프로그램관리자 업무수행 일지','2026.1.1.부터','NEW'),
        row('별지25','교육시간 관리대장'),
        row('별지26','프로그램 운영기록지')
      ];
    }
    if(service === '주야간보호 치매전담실'){
      return [
        row('자체','배상책임보험 증서'),
        row('자체','직원 근무일지(출근부)'),
        row('별지22','이동서비스일지'),
        row('별지23','주·야간보호 목욕서비스 제공일지'),
        row('별지24-3','치매전담형 기관 프로그램관리자 업무수행 일지','2026.1.1.부터','NEW'),
        row('별지25','교육시간 관리대장'),
        row('별지26','프로그램 운영기록지')
      ];
    }
    if(service === '노인요양시설 치매전담실'){
      return [
        row('자체','배상책임보험 증서'),
        row('자체','직원 근무일지(출근부)'),
        row('별지24-3','치매전담형 기관 프로그램관리자 업무수행 일지','2026.1.1.부터','NEW'),
        row('별지25','교육시간 관리대장'),
        row('별지26','프로그램 운영기록지')
      ];
    }
    // 단기보호·노인요양시설·공동생활가정은 참고사이트 화면상 2025→2026 편철항목 변화 없음.
    return base;
  }
  return base;
}

function formResourceLink(code, yearValue){
  const r = FORM_RESOURCES[code];
  if(!r) return '';
  const year = parseInt(String(yearValue), 10);
  const page = r.pages?.[year];
  // 2025·2026은 실제 별지 시작 페이지로 바로 이동합니다.
  if(year === 2025 && page) return `${PDF_2025}#page=${page}`;
  if(year >= 2026 && page) return `${PDF_2026}#page=${page}`;
  // 2021~2024는 해당 연도 세부사항 원문/첨부자료 페이지로 연결합니다.
  return YEAR_FORM_SOURCES[year] || '';
}

function formLinkLabel(yearValue){
  const year = parseInt(String(yearValue), 10);
  return year >= 2025 ? '🔍 서식 보기' : '🔗 연도 서식';
}
const COMMON_CHECKS = [
  '공단이관·자체보관 신청서를 작성했습니다.',
  '장기요양급여 제공자료 이관 목록표를 작성했습니다.',
  '신청서·이관 목록표의 수량과 실제 자료를 대조했습니다.',
  '대리 방문인 경우 위임장 등 필요한 서류를 확인했습니다.',
  '공단에서 안내한 접수 또는 허가 결과를 확인했습니다.',
  '관할 시·군·구 휴·폐업 신고 등 후속 절차를 확인했습니다.'
];

let business = null;
let typeKey = null;
let operation = null;
let visitorType = null;
let entityType = null;

const $ = (s) => document.querySelector(s);
const $$ = (s) => [...document.querySelectorAll(s)];

function scrollToEl(el){ el.scrollIntoView({behavior:'smooth', block:'start'}); }

function selectBusiness(value){
  business = value;
  typeKey = null;
  operation = null;
  $$('[data-business]').forEach(b=>b.classList.toggle('selected', b.dataset.business===value));
  $('#typeSection').classList.remove('hidden');
  $('#operationSection').classList.add('hidden');
  $('#resultSection').classList.add('hidden');
  $$('[data-content]').forEach(el=>el.classList.add('hidden'));
  renderTypes();
  setTimeout(()=>scrollToEl($('#typeSection')),80);
}

function renderTypes(){
  const keys = business === 'close' ? ['transfer','lost','nohistory'] : ['transfer','lost','self'];
  $('#typeGrid').innerHTML = keys.map(k=>{
    const t=TYPES[k];
    return `<button type="button" class="type-card" data-type="${k}"><strong>${t.name}</strong><p>${t.desc}</p></button>`;
  }).join('');
  $$('[data-type]').forEach(btn=>btn.addEventListener('click',()=>selectType(btn.dataset.type)));
}

function selectType(k){
  typeKey=k;
  operation=null;
  $$('[data-type]').forEach(b=>b.classList.toggle('selected',b.dataset.type===k));
  if(k==='transfer'){
    $('#operationSection').classList.remove('hidden');
    $('#resultSection').classList.add('hidden');
    $$('[data-content]').forEach(el=>el.classList.add('hidden'));
    $$('[data-operation]').forEach(b=>b.classList.remove('selected'));
    setTimeout(()=>scrollToEl($('#operationSection')),80);
  }else{
    $('#operationSection').classList.add('hidden');
    showResult();
  }
}

function selectOperation(value){
  operation=value;
  $$('[data-operation]').forEach(b=>b.classList.toggle('selected', b.dataset.operation===value));
  showResult();
}

function transferFlow(){
  if(operation==='active'){
    return [
      ['신청서·이관 목록표 작성', '현재 우선 이관할 자료를 기준으로 공단이관 신청서와 이관 목록표를 작성합니다.'],
      ['기존 자료 일부이관', '기관이 아직 운영 중이므로 지금까지 생성된 자료 중 우선 이관 가능한 자료를 공단에 먼저 이관합니다.'],
      ['접수증 수령', '공단에서 우선 이관한 자료를 확인하고, 관할 시·군·구 휴·폐업 신고에 사용할 접수증을 받습니다.'],
      ['관할 시·군·구 휴·폐업 신고', '공단 접수증을 포함해 필요한 신고서류를 준비하여 휴·폐업 신고를 진행합니다.'],
      ['예정일까지 급여 제공 및 기록 보관', '휴·폐업 예정일까지 운영하면서 새로 발생하는 급여제공자료를 계속 작성·보관합니다.'],
      ['운영 종료 후 잔여자료 추가 이관', '급여 제공이 종료되면 일부이관 이후 새로 발생한 나머지 자료를 정리하여 공단에 추가 이관합니다.'],
      ['이관완료 확인', '잔여자료까지 모두 이관한 뒤 최종 이관완료로 처리됐는지 확인합니다.']
    ];
  }
  return [
    ['신청서·이관 목록표 작성', '공단이관 신청서와 이관대상 자료 전체를 기준으로 이관 목록표를 작성합니다.'],
    ['전체 이관자료 준비', '현재 급여를 제공하지 않아 새 자료가 더 발생하지 않으므로 보존 중인 이관대상 자료 전체를 준비합니다.'],
    ['공단에 전체 자료 이관', '신청서·이관 목록표와 실제 이관대상 자료를 관할 지사에 제출합니다.'],
    ['공단 확인 및 이관완료', '공단에서 신청서·목록표와 실제 자료를 확인하고 이관완료로 처리합니다.'],
    ['접수증 수령 및 후속 신고', '이관완료 후 접수증을 받아 관할 시·군·구 휴·폐업 신고 등 필요한 후속 절차를 진행합니다.']
  ];
}

function transferIntro(){
  if(operation==='active') return '아직 급여를 제공 중인 기관입니다. 기존 자료를 먼저 일부이관해 접수증을 받고, 운영 종료 후 새로 발생한 나머지 자료까지 추가 이관하여 최종 이관완료로 처리합니다.';
  return '현재 장기요양급여를 제공하지 않아 새로운 급여제공자료가 더 발생하지 않는 기관입니다. 이관대상 자료 전체를 제출하여 이관완료로 처리합니다.';
}

function showResult(){
  const t=TYPES[typeKey];
  const bname=business==='close'?'폐업':'휴업';
  let suffix='';
  if(typeKey==='transfer') suffix=operation==='active'?' · 현재 급여제공 중':' · 현재 급여제공하지 않음';
  $('#resultTitle').textContent=`${bname} · ${t.name}${suffix}`;
  $('#resultIntro').textContent=typeKey==='transfer'?transferIntro():t.desc;
  $('#resultSection').classList.remove('hidden');
  $$('[data-content]').forEach(el=>el.classList.remove('hidden'));
  renderFlow(t);
  renderDocs(t);
  renderChecks();
  renderSituationHelp();
  resetApplicantChoice();
  setTimeout(()=>scrollToEl($('#resultSection')),80);
}

function renderFlow(t){
  const flows=typeKey==='transfer'?transferFlow():t.flows;
  $('#flowList').innerHTML=flows.map((f,i)=>`<article class="flow-item"><div class="flow-num">${i+1}</div><div><h3>${f[0]}</h3><p>${f[1]}</p></div></article>`).join('');
  let tip=t.tip;
  if(typeKey==='transfer' && operation==='active') tip='일부이관은 “자료가 덜 준비돼서” 하는 절차가 아니라, 기관이 아직 운영 중이라 휴·폐업 예정일까지 새로운 급여제공자료가 계속 발생하기 때문에 먼저 접수증을 받기 위한 중간 단계입니다.';
  if(typeKey==='transfer' && operation==='ended') tip='이미 급여 제공을 종료했다면 새 자료가 더 발생하지 않으므로 일부이관으로 남겨두지 않고, 보존 중인 이관대상 자료 전체를 확인하여 이관완료로 처리하는 것이 맞습니다.';
  $('#flowTip').innerHTML=`<strong>꼭 확인하세요.</strong> ${tip}`;

  const legal = $('#legalDetail');
  if(typeKey==='lost'){
    legal.classList.remove('hidden');
    legal.innerHTML=`
      <strong>전건 분실 시 과태료가 부과될 수 있습니다.</strong>
      <p>전건 분실 사실만으로 과태료가 자동 확정되는 것은 아니지만, 장기요양급여 제공자료의 <b>기록·관리 의무</b> 또는 휴·폐업 시 <b>자료이관 의무</b> 위반이 인정되면 과태료 대상이 될 수 있습니다.</p>
      <details class="mini-details">
        <summary>과태료 기준 자세히 보기</summary>
        <div>
          <p>현행 시행령 별표 3에서 관련 위반행위의 기준금액은 <b>1차 50만원, 2차 100만원, 3차 이상 200만원</b>입니다.</p>
          <p>법률상 상한은 500만원이며, 위반행위가 둘 이상이면 합산될 수 있습니다. 실제 부과 여부와 금액은 위반내용·정당한 사유·위반횟수·감경·가중 사유 등을 고려하여 관할 지자체가 판단합니다.</p>
        </div>
      </details>`;
  }else if(typeKey==='self'){
    legal.classList.remove('hidden');
    legal.innerHTML=`
      <strong>자체보관은 공단 허가가 필요합니다.</strong>
      <p>휴업기관이 자료를 직접 보관하려면 <b>휴업 예정일 전까지</b> 자체보관 신청서를 제출해야 하며, 공단이 보관계획을 검토해 허가한 경우에만 자체보관할 수 있습니다.</p>`;
  }else{
    legal.classList.add('hidden');
    legal.innerHTML='';
  }
}

function renderDocs(t){
  $('#selectedDocTitle').textContent=`${t.name} 준비서류`;
  const docLink = (d) => {
    if(d.includes('확인서')) return `<a class="inline-doc-link" href="forms/confirmation.html" target="_blank" rel="noopener">${d}</a>`;
    if(d.includes('위임장')) return `<a class="inline-doc-link" href="forms/authorization.html" target="_blank" rel="noopener">${d}</a>`;
    if(d.includes('신청서') || d.includes('이관 목록표') || d.includes('분실 및 훼손 목록표')) return `<a class="inline-doc-link" href="https://www.law.go.kr/LSW/flDownload.do?bylClsCd=110202&flSeq=153264663&gubun=" target="_blank" rel="noopener">${d}</a>`;
    return d;
  };
  $('#selectedDocList').innerHTML=t.docs.map(d=>`<li>${docLink(d)}</li>`).join('');

  const help = $('#docHelp');
  if(typeKey==='lost'){
    help.classList.remove('hidden');
    help.innerHTML=`<strong>확인서는 이렇게 작성하세요.</strong><p>확인서에서 <b>분실 또는 훼손</b> 해당 항목을 확인하고, 분실·훼손된 자료와 경위를 구체적으로 작성합니다.</p>`;
  }else if(typeKey==='nohistory'){
    help.classList.remove('hidden');
    help.innerHTML=`<strong>확인서는 이렇게 작성하세요.</strong><p>확인서의 <b>급여제공내역 없음</b> 항목을 확인하고, 최근 5년간 급여제공이력이 없거나 휴업 후 새 급여제공이력 없이 폐업한다는 내용을 작성합니다.</p>`;
  }else if(typeKey==='self'){
    help.classList.remove('hidden');
    help.innerHTML=`<strong>신청서의 자체보관 계획을 꼭 채우세요.</strong><p><b>보관기간 · 보관장소 · 보관책임자 성명 · 전화번호</b>를 작성해야 합니다. 신청서를 냈다고 바로 자체보관할 수 있는 것은 아니며 공단 허가를 확인해야 합니다.</p>`;
  }else{
    help.classList.add('hidden');
    help.innerHTML='';
  }
}

function renderSituationHelp(){
  const box=$('#situationHelp');
  if(typeKey==='transfer' && operation==='active'){
    box.classList.remove('hidden');
    box.innerHTML=`<strong>예시</strong><p>9월 30일까지 운영하고 폐업할 예정인데 구청 신고를 위해 공단 접수증이 필요한 경우 → 현재까지의 자료를 먼저 <b>일부이관</b>하고 접수증을 받은 뒤, 9월 30일 운영 종료 후 남은 자료를 모두 추가 이관하여 <b>이관완료</b>로 처리합니다.</p>`;
  }else if(typeKey==='transfer' && operation==='ended'){
    box.classList.remove('hidden');
    box.innerHTML=`<strong>예시</strong><p>현재 급여를 제공하지 않아 더 이상 새 자료가 생기지 않는 기관 → 보존 중인 이관대상 자료 전체를 제출하여 처음부터 <b>이관완료</b>로 처리합니다.</p>`;
  }else{
    box.classList.add('hidden');
    box.innerHTML='';
  }
}

function renderApplicantDocs(){
  const result=$('#applicantResult');
  if(!visitorType || !entityType){
    result.classList.add('hidden');
    result.innerHTML='';
    return;
  }
  let title='';
  let items=[];
  let note='';
  if(visitorType==='rep' && entityType==='individual'){
    title='개인기관 · 대표자 직접 방문';
    items=['대표자 신분증'];
    note='신청서와 이관 관련 서류는 앞의 준비서류 안내에 따라 별도로 준비합니다.';
  }else if(visitorType==='rep' && entityType==='corporate'){
    title='법인기관 · 법인대표자 직접 방문';
    items=['법인대표자 신분증'];
    note='국가·지방자치단체 기관은 법인 기준으로 확인하는 공단 업무기준이 사용됩니다.';
  }else if(visitorType==='agent' && entityType==='individual'){
    title='개인기관 · 대리인 방문';
    items=[
      '위임장 [별지 제14호 서식] — 대표자 인감 날인',
      '대표자 인감증명서',
      '대표자 신분증 앞면 사본',
      '대리인 신분증 앞면 사본 및 방문 시 신분증 지참'
    ];
    note='위임장에는 대표자의 인감을 사용하고, 인감증명서와 일치하는지 확인합니다.';
  }else{
    title='법인기관 · 대리인 방문';
    items=[
      '위임장 [별지 제14호 서식] — 법인인감 날인',
      '법인인감증명서',
      '법인대표자 신분증 앞면 사본',
      '대리인 신분증 앞면 사본 및 방문 시 신분증 지참'
    ];
    note='위임장에는 법인인감을 사용하고, 법인인감증명서와 일치하는지 확인합니다.';
  }
  const linked=items.map(x=>x.includes('위임장')?`<li><a class="inline-doc-link" href="forms/authorization.html" target="_blank" rel="noopener">${x}</a></li>`:`<li>${x}</li>`).join('');
  result.innerHTML=`<strong>${title}</strong><ul>${linked}</ul><p>${note}</p>`;
  result.classList.remove('hidden');
}

function resetApplicantChoice(){
  visitorType=null; entityType=null;
  $$('[data-visitor],[data-entity]').forEach(b=>b.classList.remove('selected'));
  $('#entityStep').classList.add('hidden');
  $('#applicantResult').classList.add('hidden');
  $('#applicantResult').innerHTML='';
}

function checkItems(){
  const extras=[];
  if(typeKey==='transfer'){
    extras.push('장기요양급여 제공자료 이관 목록표를 작성했습니다.');
    extras.push('실제 이관자료와 이관 목록표의 수량을 대조했습니다.');
    if(operation==='active') extras.push('운영 종료 후 새로 발생한 잔여자료를 추가 이관할 일정을 확인했습니다.');
    if(operation==='active') extras.push('잔여자료 추가 이관 후 최종 이관완료 여부를 확인했습니다.');
  }
  if(typeKey==='lost'){
    extras.push('이관 목록표를 작성했습니다.');
    extras.push('분실 및 훼손 목록표를 작성했습니다.');
    extras.push('확인서에 분실·훼손 자료와 경위를 작성했습니다.');
    extras.push('과태료가 부과될 수 있다는 안내를 확인했습니다.');
  }
  if(typeKey==='nohistory'){
    extras.push('이관 목록표를 작성했습니다.');
    extras.push('확인서에 급여제공이력이 없다는 내용을 작성했습니다.');
    extras.push('최근 5년간 급여제공이력이 없거나 휴업 후 새 급여제공이력 없이 폐업하는 경우인지 확인했습니다.');
  }
  if(typeKey==='self'){
    extras.push('이관 목록표를 작성했습니다.');
    extras.push('신청서에 보관기간·보관장소·보관책임자와 전화번호를 작성했습니다.');
    extras.push('휴업 예정일 전에 자체보관 신청서를 제출했습니다.');
    extras.push('공단의 자체보관 허가 여부를 확인했습니다.');
  }
  return [...extras, ...COMMON_CHECKS.filter((_,i)=>i===0 || i>=3)];
}

function renderChecks(){
  const key=`hyupeup-check-${business}-${typeKey}-${operation||'na'}`;
  let saved={};
  try{saved=JSON.parse(localStorage.getItem(key)||'{}')}catch(e){}
  const items=checkItems();
  $('#checkList').innerHTML=items.map((text,i)=>`<div class="check-row"><input id="c${i}" type="checkbox" ${saved[i]?'checked':''}><label for="c${i}">${text}</label></div>`).join('');
  $$('#checkList input').forEach((input,i)=>input.addEventListener('change',()=>{
    saved[i]=input.checked;
    localStorage.setItem(key,JSON.stringify(saved));
  }));
}

$$('[data-business]').forEach(btn=>btn.addEventListener('click',()=>selectBusiness(btn.dataset.business)));
$$('[data-operation]').forEach(btn=>btn.addEventListener('click',()=>selectOperation(btn.dataset.operation)));
$$('[data-jump]').forEach(btn=>btn.addEventListener('click',()=>scrollToEl(document.getElementById(btn.dataset.jump))));

$$('[data-visitor]').forEach(btn=>btn.addEventListener('click',()=>{
  visitorType=btn.dataset.visitor; entityType=null;
  $$('[data-visitor]').forEach(b=>b.classList.toggle('selected',b===btn));
  $$('[data-entity]').forEach(b=>b.classList.remove('selected'));
  $('#entityStep').classList.remove('hidden');
  $('#applicantResult').classList.add('hidden');
}));
$$('[data-entity]').forEach(btn=>btn.addEventListener('click',()=>{
  entityType=btn.dataset.entity;
  $$('[data-entity]').forEach(b=>b.classList.toggle('selected',b===btn));
  renderApplicantDocs();
}));

$('#changeBtn').addEventListener('click',()=>{ scrollToEl($('#start')); });
$('#resetBtn').addEventListener('click',()=>{business=null;typeKey=null;operation=null;resetApplicantChoice();$$('[data-business], [data-operation]').forEach(b=>b.classList.remove('selected'));$('#typeSection').classList.add('hidden');$('#operationSection').classList.add('hidden');$('#resultSection').classList.add('hidden');$$('[data-content]').forEach(el=>el.classList.add('hidden'));scrollToEl($('#start'));});
$('#fontBtn').addEventListener('click',()=>{const on=document.body.classList.toggle('large-text');$('#fontBtn').setAttribute('aria-pressed',String(on));$('#fontBtn').textContent=on?'가− 기본 글자':'가+ 글자 크게';});
$('#makeLabelBtn').addEventListener('click',()=>{
  const years=$$('#yearChoices input:checked').map(i=>i.value);
  const services=$$('#serviceChoices input:checked').map(i=>i.value);
  const err=$('#bindingError');
  if(!years.length || !services.length){
    err.classList.remove('hidden');
    $('#labelResult').classList.add('hidden');
    return;
  }
  err.classList.add('hidden');

  const serviceIcons = {
    '방문요양':'🚶','방문목욕':'🛁','방문간호':'🩺','복지용구':'♿',
    '주야간보호':'☀️','주야간보호 치매전담실':'🧩','단기보호':'🏠',
    '노인요양시설':'🏢','노인요양시설 치매전담실':'🧩','공동생활가정':'🏡'
  };

  const renderCommon = (common, year)=> {
    if(!common.length) return '';
    const rows=common.map(item=>{
      const code=item.code, name=item.name;
      const link=formResourceLink(code, year);
      const isSelf=code==='자체';
      const period=item.period ? `<span class="period-badge">${item.period}</span>` : '';
      const note=item.note ? `<span class="revision-note">${item.note}</span>` : '';
      const view=(!isSelf && link) ? `<a class="form-view-btn" href="${link}" target="_blank" rel="noopener">${formLinkLabel(year)}</a>` : '';
      return `<li class="${item.note?'revised-form-row':''}"><span class="dot">•</span><span class="form-code ${isSelf?'self-code':''}">[${code}]</span><span class="form-row-main"><strong>${name}</strong>${period}${note}</span>${view}</li>`;
    }).join('');
    return `<section class="source-common"><h4>📂 공통서류</h4><ul>${rows}</ul></section>`;
  };

  const renderRecipients = (name, guide)=> {
    const recipient=guide.recipient.map(item=>{
      if(item.startsWith('(또는)')) return `<li class="alt-line">↳ ${item.replace('(또는) ','')}</li>`;
      return `<li>${item}</li>`;
    }).join('');
    return `<section class="source-service-block">
      <div class="source-service-pill">${serviceIcons[name]||'📁'} ${name}</div>
      <div class="source-recipient-card"><strong>① 수급자</strong><ul>${recipient}</ul></div>
      <div class="source-dots">⋮</div>
      <div class="source-recipient-placeholder">② 수급자</div>
      <div class="source-dots">⋮</div>
      <div class="source-recipient-placeholder">③ 수급자</div>
    </section>`;
  };

  const renderYearNotice=(year)=>{
    const y=parseInt(String(year),10);
    if(y>=2026) return `<div class="year-revision-alert current"><strong>2026년 변경사항</strong><span>2026년 1월 1일부터 업무수행일지가 <b>별지24(가정방문급여)</b>, <b>별지24의2(주야간보호)</b>, <b>별지24의3(치매전담형)</b>으로 구분됩니다. 아래 NEW 표시와 서식 원문을 확인하세요.</span></div>`;
    return '';
  };

  const yearCards=years.map(year=>{
    const selectedGuides=services.map(name=>[name,SERVICE_GUIDES[name]]).filter(([,g])=>g);
    const commonMap=new Map();
    selectedGuides.forEach(([name])=>getCommonRows(name,year).forEach(item=>{
      const key=`${item.code}|${item.name}|${item.period}`;
      commonMap.set(key,item);
    }));
    const common=[...commonMap.values()];
    const serviceBlocks=selectedGuides.map(([name,guide])=>renderRecipients(name,guide)).join('');
    return `<article class="source-year-card">
      <div class="source-year-head">${year}</div>
      ${renderYearNotice(year)}
      ${renderCommon(common,year)}
      <section class="source-service-section"><h4>👤 급여종류별 서류</h4><div class="source-service-grid">${serviceBlocks}</div></section>
    </article>`;
  }).join('');

  const selectedSourceLinks=years.map(y=>{
    const url=YEAR_FORM_SOURCES[parseInt(y,10)];
    return url ? `<a href="${url}" target="_blank" rel="noopener">${y}년 세부사항</a>` : '';
  }).filter(Boolean).join('');
  const resourceIntro=`<aside class="form-resource-guide"><strong>각 별지 서식을 바로 확인할 수 있습니다.</strong><span><b>2025·2026년은 해당 별지 서식의 실제 시작 페이지로 바로 연결</b>됩니다. 2021~2024년은 해당 연도 세부사항 원문·첨부자료 페이지로 연결해 당시 서식을 확인할 수 있습니다. 2026년은 별지24·24의2·24의3 개편사항을 반영했습니다.</span><div class="form-source-links">${selectedSourceLinks}</div></aside>`;
  $('#labelResult').innerHTML=resourceIntro+yearCards;
  $('#labelResult').classList.remove('hidden');
  setTimeout(()=>scrollToEl($('#labelResult')),60);
});
$('#clearBindingBtn').addEventListener('click',()=>{
  $$('#yearChoices input, #serviceChoices input').forEach(i=>i.checked=false);
  $('#bindingError').classList.add('hidden');
  $('#labelResult').classList.add('hidden');
  $('#labelResult').innerHTML='';
});
$$('#yearChoices input, #serviceChoices input').forEach(i=>i.addEventListener('change',()=>$('#bindingError').classList.add('hidden')));
$('#clearChecks').addEventListener('click',()=>{if(!business||!typeKey)return;localStorage.removeItem(`hyupeup-check-${business}-${typeKey}-${operation||'na'}`);renderChecks();});


// 상단 업무별 바로가기: 아직 상황을 선택하지 않은 경우 먼저 선택 단계로 안내합니다.
document.querySelectorAll('.overview-card, .overview-wide').forEach(link=>{
  link.addEventListener('click', e=>{
    const id=(link.getAttribute('href')||'').replace('#','');
    const target=document.getElementById(id);
    if(target && target.hasAttribute('data-content') && target.classList.contains('hidden')){
      e.preventDefault();
      scrollToEl(document.getElementById('start'));
    }
  });
});

