/* Velvet App — vanilla JS, no build step, no framework.
 *
 * ACCESS GATE: client-side only (see ACCESS_CODE below). This deters
 * casual sharing of the URL but is NOT real security — anyone can read
 * this file's source. For real per-buyer access control you'd need a
 * backend that validates codes against Hotmart's webhook (see the app
 * README for a suggested path). Fine for an MVP delivered manually to
 * paying customers via a private link.
 */

const ACCESS_CODE = "VELVET28"; // <-- change this before launch
const LS_ACCESS = "velvet_access_granted";
const LS_PROGRESS = "velvet_progress"; // { "1": true, "2": true, ... }

function getProgress(){
  try { return JSON.parse(localStorage.getItem(LS_PROGRESS) || "{}"); }
  catch(e){ return {}; }
}
function setDayDone(day, done){
  const p = getProgress();
  if(done) p[day] = true; else delete p[day];
  localStorage.setItem(LS_PROGRESS, JSON.stringify(p));
}

/* ---------- ACCESS GATE ---------- */
function checkAccess(){
  const granted = localStorage.getItem(LS_ACCESS) === "1";
  document.getElementById('gate').classList.toggle('hide', granted);
  document.getElementById('shell').classList.toggle('hide', !granted);
  if(granted) renderHome();
}

document.getElementById('gate-submit').addEventListener('click', function(){
  const val = document.getElementById('gate-input').value.trim().toUpperCase();
  if(val === ACCESS_CODE){
    localStorage.setItem(LS_ACCESS, "1");
    checkAccess();
  } else {
    document.getElementById('gate-err').textContent = "That code doesn't match — check your purchase email.";
  }
});
document.getElementById('gate-input').addEventListener('keydown', function(e){
  if(e.key === 'Enter') document.getElementById('gate-submit').click();
});
document.getElementById('lock-btn').addEventListener('click', function(){
  if(confirm("Lock the app? You'll need your access code to re-enter.")){
    localStorage.removeItem(LS_ACCESS);
    checkAccess();
  }
});

/* ---------- BOTTOM NAV ---------- */
document.querySelectorAll('.bottom-nav button').forEach(function(btn){
  btn.addEventListener('click', function(){
    document.querySelectorAll('.bottom-nav button').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    if(btn.dataset.tab === 'home') renderHome();
    else renderSettings();
  });
});

/* ---------- RENDER: HOME (program list) ---------- */
function renderHome(){
  const main = document.getElementById('main');
  const progress = getProgress();
  const doneCount = Object.keys(progress).length;
  const pct = Math.round((doneCount / TOTAL_DAYS) * 100);
  const circumference = 2 * Math.PI * 26;
  const offset = circumference - (pct/100) * circumference;

  let html = `
    <div class="progress-card">
      <div class="ring">
        <svg width="64" height="64">
          <circle cx="32" cy="32" r="26" stroke="rgba(255,255,255,.18)" stroke-width="6" fill="none"/>
          <circle cx="32" cy="32" r="26" stroke="#cf9d51" stroke-width="6" fill="none"
            stroke-dasharray="${circumference}" stroke-dashoffset="${offset}" stroke-linecap="round"/>
        </svg>
        <div class="pct">${pct}%</div>
      </div>
      <div>
        <h2>${doneCount} of ${TOTAL_DAYS} days complete</h2>
        <p>${doneCount === 0 ? "Ready when you are — start with day 1." : (doneCount === TOTAL_DAYS ? "You finished the full program 🎉" : "Keep going, one day at a time.")}</p>
      </div>
    </div>
  `;

  PROGRAM.forEach(function(week){
    html += `<div class="week-block">
      <div class="week-head"><span class="n">Week ${week.week}</span><span class="t">— ${week.title}</span></div>`;
    week.days.forEach(function(d){
      const done = !!progress[d.day];
      html += `
        <div class="day-row ${done ? 'done' : ''}" data-day="${d.day}">
          <div class="num">${done ? '✓' : d.day}</div>
          <div class="info">
            <div class="t">${d.title}</div>
            <div class="sub">Day ${d.day} · ${d.technique}</div>
          </div>
          <div class="chev">›</div>
        </div>`;
    });
    html += `</div>`;
  });

  main.innerHTML = html;
  main.querySelectorAll('.day-row').forEach(function(row){
    row.addEventListener('click', function(){
      renderLesson(parseInt(row.dataset.day, 10));
    });
  });
}

/* ---------- RENDER: LESSON DETAIL ---------- */
function renderLesson(dayNum){
  const d = ALL_DAYS.find(x => x.day === dayNum);
  if(!d) return renderHome();
  const progress = getProgress();
  const done = !!progress[dayNum];
  const main = document.getElementById('main');

  main.innerHTML = `
    <button class="back-link" id="back-btn">‹ Back to program</button>
    <div class="lesson-head">
      <div class="eyebrow">Week ${d.week} · Day ${d.day} · ${d.technique}</div>
      <h1>${d.title}</h1>
    </div>
    <p class="lesson-body">${d.lesson}</p>
    <div class="kp-list">
      <h3>Key points</h3>
      <ul>${d.keyPoints.map(k => `<li>• ${k}</li>`).join('')}</ul>
    </div>
    <div class="practice-card">
      <h3>Guided practice</h3>
      <div class="pt">${d.practice.title}</div>
      <div class="dur">⏱ ${d.practice.duration}</div>
      <ol>${d.practice.steps.map(s => `<li>${s}</li>`).join('')}</ol>
    </div>
    <div class="nav-btns">
      <button class="btn ${done ? 'btn-outline' : ''}" id="toggle-done">${done ? 'Mark as not done' : 'Mark day as done'}</button>
    </div>
  `;

  document.getElementById('back-btn').addEventListener('click', renderHome);
  document.getElementById('toggle-done').addEventListener('click', function(){
    setDayDone(dayNum, !done);
    renderLesson(dayNum);
  });
}

/* ---------- RENDER: SETTINGS ---------- */
function renderSettings(){
  const main = document.getElementById('main');
  main.innerHTML = `
    <div class="lesson-head">
      <div class="eyebrow">Settings</div>
      <h1>Your account</h1>
    </div>
    <div class="settings-item"><span>Program</span><span>Velvet — 28 Days</span></div>
    <div class="settings-item"><span>Days completed</span><span>${Object.keys(getProgress()).length} / ${TOTAL_DAYS}</span></div>
    <button class="btn btn-outline" id="reset-progress" style="margin-bottom:10px;">Reset my progress</button>
    <button class="btn btn-outline" id="lock-app">Lock app</button>
    <p style="font-size:.76rem;color:var(--muted);margin-top:18px;">Need help? Contact support@[insert-domain].com</p>
  `;
  document.getElementById('reset-progress').addEventListener('click', function(){
    if(confirm("Reset all progress? This can't be undone.")){
      localStorage.removeItem(LS_PROGRESS);
      renderSettings();
    }
  });
  document.getElementById('lock-app').addEventListener('click', function(){
    document.getElementById('lock-btn').click();
  });
}

/* ---------- INIT ---------- */
checkAccess();

/* ---------- PWA: register service worker ---------- */
if('serviceWorker' in navigator){
  window.addEventListener('load', function(){
    navigator.serviceWorker.register('sw.js').catch(function(){ /* offline install is best-effort */ });
  });
}
