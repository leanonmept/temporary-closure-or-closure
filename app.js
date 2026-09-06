const TYPES = {
  transfer: {
    name: '자료이관',
    desc: '보존 중인 장기요양급여 제공자료를 공단에 실제로 이관하는 경우입니다.',
    tag: '자료가 남아 있어요',
    docs: [
      '공단이관·자체보관 신청서',
      '장기요양급여 제공자료 이관 목록표',
      '실제 이관할 장기요양급여 제공자료',
      '일부 자료가 분실·훼손된 경우: 분실 및 훼손 목록표 추가',
      '대리 신청 시 위임장 등 필요한 서류'
    ],
    tip: '자료이관은 기관의 현재 급여제공 여부에 따라 처리상태가 달라집니다. 아직 운영 중이면 일부이관으로 접수증을 먼저 받고, 운영 종료 후 나머지 자료를 추가 이관하여 이관완료로 처리합니다.'
  },
  lost: {
    name: '전건 분실',
    desc: '보존기간 중 이관해야 할 자료가 전부 분실·훼손되어 실제로 이관할 자료가 없는 경우입니다.',
    tag: '자료를 전부 잃어버렸어요',
    docs: [
      '공단이관·자체보관 신청서',
      '장기요양급여 제공자료 이관 목록표',
      '장기요양급여 제공자료 분실 및 훼손 목록표',
      '확인서 [별지 제2호 서식] — 분실·훼손 경위와 내용을 작성',
      '대리 신청 시 위임장 등 필요한 서류'
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
    tag: '최근 5년간 급여이력이 없어요',
    docs: [
      '공단이관·자체보관 신청서',
      '장기요양급여 제공자료 이관 목록표',
      '확인서 [별지 제2호 서식] — 급여제공이력이 없다는 내용을 작성',
      '대리 신청 시 위임장 등 필요한 서류'
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
    tag: '휴업 중 기관에서 보관할래요',
    docs: [
      '공단이관·자체보관 신청서 — 자체보관에 체크',
      '장기요양급여 제공자료 이관 목록표',
      '자체보관 계획 — 보관기간·보관장소·보관책임자(성명·전화번호) 기재',
      '분실·훼손 자료가 있는 경우: 분실 및 훼손 목록표 추가',
      '대리 신청 시 위임장 등 필요한 서류'
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
    note: '방문요양 자료는 방문요양 수급자별로 정리합니다.',
    items: [
      ['1', '장기요양급여 계약 관련 서류', '해당 수급자의 급여계약에 관한 보존자료를 먼저 둡니다.'],
      ['2', '방문요양 급여제공기록지 등', '방문요양 급여제공기록지와 급여비용 산정에 필요한 관련 서류·증빙자료를 정리합니다.'],
      ['3', '급여비용 명세서 부본 또는 본인부담금수납대장', '기관이 보존하는 해당 자료를 마지막 묶음으로 확인합니다.']
    ]
  },
  '방문목욕': {
    note: '방문목욕 자료는 방문목욕 수급자별로 정리합니다.',
    items: [
      ['1', '장기요양급여 계약 관련 서류', '해당 수급자의 급여계약에 관한 보존자료를 먼저 둡니다.'],
      ['2', '방문목욕 급여제공기록지 등', '방문목욕 급여제공기록지와 급여비용 산정에 필요한 관련 서류·증빙자료를 정리합니다.'],
      ['3', '급여비용 명세서 부본 또는 본인부담금수납대장', '기관이 보존하는 해당 자료를 마지막 묶음으로 확인합니다.']
    ]
  },
  '방문간호': {
    note: '방문간호는 다른 급여와 달리 방문간호지시서를 별도로 빠뜨리지 않도록 확인합니다.',
    items: [
      ['1', '장기요양급여 계약 관련 서류', '해당 수급자의 급여계약에 관한 보존자료를 먼저 둡니다.'],
      ['2', '방문간호 급여제공기록지 등', '방문간호 급여제공기록지와 급여비용 산정에 필요한 관련 서류·증빙자료를 정리합니다.'],
      ['3', '방문간호지시서', '해당 수급자의 방문간호지시서를 별도 항목으로 확인합니다.'],
      ['4', '급여비용 명세서 부본 또는 본인부담금수납대장', '기관이 보존하는 해당 자료를 마지막 묶음으로 확인합니다.']
    ]
  },
  '복지용구': {
    note: '복지용구 급여를 제공한 수급자별로 계약 및 급여제공 관련 자료를 정리합니다.',
    items: [
      ['1', '장기요양급여 계약 관련 서류', '복지용구 급여계약에 관한 보존자료를 먼저 둡니다.'],
      ['2', '복지용구 급여제공기록지 등', '복지용구 급여제공기록지와 급여비용 산정에 필요한 관련 서류·증빙자료를 정리합니다.'],
      ['3', '급여비용 명세서 부본 또는 본인부담금수납대장', '기관이 보존하는 해당 자료를 마지막 묶음으로 확인합니다.']
    ]
  },
  '주야간보호': {
    note: '주·야간보호 수급자별로 해당 연도의 급여제공 자료를 정리합니다.',
    items: [
      ['1', '장기요양급여 계약 관련 서류', '해당 수급자의 급여계약에 관한 보존자료를 먼저 둡니다.'],
      ['2', '주·야간보호 급여제공기록지 등', '급여제공기록지와 급여비용 산정에 필요한 관련 서류·증빙자료를 정리합니다.'],
      ['3', '급여비용 명세서 부본 또는 본인부담금수납대장', '기관이 보존하는 해당 자료를 마지막 묶음으로 확인합니다.']
    ]
  },
  '주야간보호 치매전담실': {
    note: '치매전담실도 기본 이관범주는 동일하며, 급여비용 산정에 필요한 치매전담 관련 증빙자료가 있다면 ② 묶음에 함께 확인합니다.',
    items: [
      ['1', '장기요양급여 계약 관련 서류', '해당 수급자의 급여계약에 관한 보존자료를 먼저 둡니다.'],
      ['2', '주·야간보호 급여제공기록지 등', '급여제공기록지와 치매전담형 급여비용 산정에 필요한 관련 서류·증빙자료를 함께 확인합니다.'],
      ['3', '급여비용 명세서 부본 또는 본인부담금수납대장', '기관이 보존하는 해당 자료를 마지막 묶음으로 확인합니다.']
    ]
  },
  '단기보호': {
    note: '단기보호 수급자별로 해당 연도의 급여제공 자료를 정리합니다.',
    items: [
      ['1', '장기요양급여 계약 관련 서류', '해당 수급자의 급여계약에 관한 보존자료를 먼저 둡니다.'],
      ['2', '단기보호 급여제공기록지 등', '급여제공기록지와 급여비용 산정에 필요한 관련 서류·증빙자료를 정리합니다.'],
      ['3', '급여비용 명세서 부본 또는 본인부담금수납대장', '기관이 보존하는 해당 자료를 마지막 묶음으로 확인합니다.']
    ]
  },
  '노인요양시설': {
    note: '시설급여 수급자별로 해당 연도의 급여제공 자료를 정리합니다.',
    items: [
      ['1', '장기요양급여 계약 관련 서류', '해당 수급자의 급여계약에 관한 보존자료를 먼저 둡니다.'],
      ['2', '시설급여 급여제공기록지 등', '시설급여 제공기록지와 급여비용 산정에 필요한 관련 서류·증빙자료를 정리합니다.'],
      ['3', '급여비용 명세서 부본 또는 본인부담금수납대장', '기관이 보존하는 해당 자료를 마지막 묶음으로 확인합니다.']
    ]
  },
  '노인요양시설 치매전담실': {
    note: '치매전담실도 기본 이관범주는 동일하며, 급여비용 산정에 필요한 치매전담 관련 증빙자료가 있다면 ② 묶음에 함께 확인합니다.',
    items: [
      ['1', '장기요양급여 계약 관련 서류', '해당 수급자의 급여계약에 관한 보존자료를 먼저 둡니다.'],
      ['2', '시설급여 급여제공기록지 등', '급여제공기록지와 치매전담형 급여비용 산정에 필요한 관련 서류·증빙자료를 함께 확인합니다.'],
      ['3', '급여비용 명세서 부본 또는 본인부담금수납대장', '기관이 보존하는 해당 자료를 마지막 묶음으로 확인합니다.']
    ]
  },
  '공동생활가정': {
    note: '공동생활가정 수급자별로 해당 연도의 급여제공 자료를 정리합니다.',
    items: [
      ['1', '장기요양급여 계약 관련 서류', '해당 수급자의 급여계약에 관한 보존자료를 먼저 둡니다.'],
      ['2', '시설급여 급여제공기록지 등', '급여제공기록지와 급여비용 산정에 필요한 관련 서류·증빙자료를 정리합니다.'],
      ['3', '급여비용 명세서 부본 또는 본인부담금수납대장', '기관이 보존하는 해당 자료를 마지막 묶음으로 확인합니다.']
    ]
  }
};

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
    return `<button type="button" class="type-card" data-type="${k}"><span class="tag">${t.tag}</span><strong>${t.name}</strong><p>${t.desc}</p></button>`;
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
    ['전체 이관자료 준비', '이미 급여 제공을 종료해 새 자료가 더 발생하지 않으므로 보존 중인 이관대상 자료 전체를 준비합니다.'],
    ['공단에 전체 자료 이관', '신청서·이관 목록표와 실제 이관대상 자료를 관할 지사에 제출합니다.'],
    ['공단 확인 및 이관완료', '공단에서 신청서·목록표와 실제 자료를 확인하고 이관완료로 처리합니다.'],
    ['접수증 수령 및 후속 신고', '이관완료 후 접수증을 받아 관할 시·군·구 휴·폐업 신고 등 필요한 후속 절차를 진행합니다.']
  ];
}

function transferIntro(){
  if(operation==='active') return '아직 급여를 제공 중인 기관입니다. 기존 자료를 먼저 일부이관해 접수증을 받고, 운영 종료 후 새로 발생한 나머지 자료까지 추가 이관하여 최종 이관완료로 처리합니다.';
  return '이미 급여 제공을 종료한 기관입니다. 새 자료가 더 발생하지 않으므로 이관대상 자료 전체를 한 번에 제출하여 바로 이관완료로 처리합니다.';
}

function showResult(){
  const t=TYPES[typeKey];
  const bname=business==='close'?'폐업':'휴업';
  let suffix='';
  if(typeKey==='transfer') suffix=operation==='active'?' · 아직 운영 중':' · 이미 운영 종료';
  $('#resultTitle').textContent=`${bname} · ${t.name}${suffix}`;
  $('#resultIntro').textContent=typeKey==='transfer'?transferIntro():t.desc;
  $('#resultSection').classList.remove('hidden');
  $$('[data-content]').forEach(el=>el.classList.remove('hidden'));
  renderFlow(t);
  renderDocs(t);
  renderChecks();
  renderSituationHelp();
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
    box.innerHTML=`<strong>예시</strong><p>이미 급여 제공이 끝나 더 이상 새 자료가 생기지 않는 기관 → 보존 중인 이관대상 자료 전체를 제출하여 처음부터 <b>이관완료</b>로 처리합니다.</p>`;
  }else{
    box.classList.add('hidden');
    box.innerHTML='';
  }
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

$('#changeBtn').addEventListener('click',()=>{ scrollToEl($('#start')); });
$('#resetBtn').addEventListener('click',()=>{business=null;typeKey=null;operation=null;$$('[data-business], [data-operation]').forEach(b=>b.classList.remove('selected'));$('#typeSection').classList.add('hidden');$('#operationSection').classList.add('hidden');$('#resultSection').classList.add('hidden');$$('[data-content]').forEach(el=>el.classList.add('hidden'));scrollToEl($('#start'));});
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
  const yearText=years.join(' · ');
  const cards=services.map(s=>{
    const guide=SERVICE_GUIDES[s];
    const items=guide.items.map(item=>`<li class="guide-row"><span class="guide-no">${item[0]}</span><div><strong>${item[1]}</strong><p>${item[2]}</p></div></li>`).join('');
    const nurse=s==='방문간호'?'<div class="service-alert"><strong>방문간호 확인</strong><p>방문간호지시서를 별도 항목으로 반드시 확인하세요.</p></div>':'';
    return `<article class="binding-result-card"><div class="label-head"><span>선택한 편철 묶음</span><strong>${s}</strong><p><b>${yearText}</b> · 선택한 각 연도별로 같은 순서로 따로 정리합니다.</p></div><p class="guide-note">${guide.note}</p><ol class="service-guide">${items}</ol>${nurse}</article>`;
  }).join('');
  $('#labelResult').innerHTML=`<div class="binding-result-summary"><b>${years.length}개 연도 · ${services.length}개 급여종류 선택</b><p>아래 급여종류별 순서를 참고해 선택한 각 연도 자료를 따로 편철하세요.</p></div>${cards}<div class="label-finish"><b>마지막 확인</b><p>수급자별 자료를 정리한 뒤 이관 목록표의 인원·권수·매수와 실제 자료가 일치하는지 대조하세요.</p></div>`;
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
