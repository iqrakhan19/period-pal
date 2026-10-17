import './style.css'

// =========================================================
// 1. ICONS
// Every icon lives here. In index.html, data-icon="heart" becomes the heart.
// =========================================================
const ICONS = {
  heart: '<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z"/>',
  dashboard: '<rect x="3" y="3" width="7" height="9" rx="1"/><rect x="14" y="3" width="7" height="5" rx="1"/><rect x="14" y="12" width="7" height="9" rx="1"/><rect x="3" y="16" width="7" height="5" rx="1"/>',
  calendar: '<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',
  history: '<path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5"/><path d="M12 7v5l4 2"/>',
  bell: '<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>',
  settings: '<path d="M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3M1 14h6M9 8h6M17 16h6"/>',
  droplet: '<path d="M12 2.7s7 6.3 7 11.3a7 7 0 0 1-14 0c0-5 7-11.3 7-11.3z"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  sparkles: '<path d="M12 3l1.8 4.6L18.5 9l-4.7 1.4L12 15l-1.8-4.6L5.5 9l4.7-1.4z"/><path d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8z"/>',
  moon: '<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/>',
  smile: '<circle cx="12" cy="12" r="9"/><path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01"/>',
  leaf: '<path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.5 19 2c1 2 2 4.2 2 8 0 5.5-4.8 10-10 10z"/><path d="M2 21c0-3 1.9-5.4 5.1-6.5C9.5 13.7 12 13 14 12"/>',
  lock: '<rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>',
  book: '<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>',
  wind: '<path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2"/><path d="M9.6 4.6A2 2 0 1 1 11 8H2"/><path d="M12.6 19.4A2 2 0 1 0 14 16H2"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
  activity: '<path d="M22 12h-4l-3 9L9 3l-3 9H2"/>',
  music: '<path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>',
  pen: '<path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"/>',
  cloud: '<path d="M17.5 19H9a7 7 0 1 1 6.7-9h1.8a4.5 4.5 0 1 1 0 9z"/>',
  zap: '<path d="M13 2L3 14h9l-1 8 10-12h-9z"/>',
  info: '<circle cx="12" cy="12" r="9"/><path d="M12 16v-4M12 8h.01"/>',
  play: '<polygon points="6 4 20 12 6 20 6 4"/>',
  cup: '<path d="M17 8h1a4 4 0 0 1 0 8h-1"/><path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4z"/><path d="M6 1v3M10 1v3M14 1v3"/>',
  flame: '<path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.4-.5-2-1-3-1.1-2.1-.2-4 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.2.4-2.4 1-3a2.5 2.5 0 0 0 2.5 2.5z"/>',
  external: '<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/>',
  x: '<path d="M18 6L6 18M6 6l12 12"/>',
  trash: '<path d="M3 6h18M8 6V4h8v2M19 6l-1 14H6L5 6M10 11v6M14 11v6"/>',
  download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>',
  check: '<path d="M20 6L9 17l-5-5"/>',
}

function iconSvg(name) {
  return `<svg viewBox="0 0 24 24" class="icon" aria-hidden="true">${ICONS[name] || ''}</svg>`
}

function renderIcons() {
  document.querySelectorAll('[data-icon]').forEach((el) => {
    el.innerHTML = iconSvg(el.dataset.icon)
  })
}

// =========================================================
// 2. NAVIGATION (both menus are built from this one list)
// =========================================================
const PAGES = [
  { id: 'dashboard', label: 'Dashboard', short: 'Home', icon: 'dashboard' },
  { id: 'tracker', label: 'Period Tracker', short: 'Period', icon: 'droplet' },
  { id: 'mood', label: 'Mood & Move', short: 'Mood', icon: 'smile' },
  { id: 'calendar', label: 'Calendar', short: 'Calendar', icon: 'calendar' },
  { id: 'history', label: 'History', short: 'History', icon: 'history' },
  { id: 'reminders', label: 'Care Reminders', short: 'Care', icon: 'bell' },
  { id: 'settings', label: 'Settings', short: 'Settings', icon: 'settings' },
]

function buildNav(containerId, useShortLabel) {
  const container = document.getElementById(containerId)
  container.innerHTML = PAGES.map(
    (page) => `
      <a href="#${page.id}" class="nav-link" data-view="${page.id}">
        ${iconSvg(page.icon)}
        <span>${useShortLabel ? page.short : page.label}</span>
      </a>`
  ).join('')
}

buildNav('sidebar-nav', false)
buildNav('bottom-nav', true)
renderIcons()

// =========================================================
// 3. SHOWING ONE PAGE AT A TIME
// =========================================================
const views = document.querySelectorAll('.view')
const navLinks = document.querySelectorAll('[data-view]')

function showView() {
  const requested = window.location.hash.replace('#', '') || 'dashboard'
  const exists = document.getElementById(`view-${requested}`)
  const current = exists ? requested : 'dashboard'

  views.forEach((view) => {
    view.classList.toggle('is-active', view.id === `view-${current}`)
  })

  navLinks.forEach((link) => {
    if (link.dataset.view === current) {
      link.setAttribute('aria-current', 'page')
    } else {
      link.removeAttribute('aria-current')
    }
  })

  window.scrollTo(0, 0)
}

window.addEventListener('hashchange', showView)
showView()

// =========================================================
// 4. FRIENDLY GREETING
// =========================================================
function setGreeting() {
  const hour = new Date().getHours()
  let text = 'Good evening'
  if (hour < 12) text = 'Good morning'
  else if (hour < 18) text = 'Good afternoon'
  document.getElementById('greeting').textContent = text
}

setGreeting()

// =========================================================
// 5. MOOD & MOVE
// =========================================================
const SAFETY_TEXT =
  'These are general wellbeing ideas, not medical advice, and no food, drink or pose is a cure for period pain. Go at your own pace, skip anything that hurts, and stop if you feel unwell. If your cramps are unusually severe, getting worse, or stopping you from doing daily activities, please speak to a doctor.'

// Yoga pose drawings (simple SVG shapes, viewBox 0 0 120 90)
const POSES = {
  child: {
    label: "Child's pose",
    art: '<path class="floor" d="M6 80H114"/><path class="limb" d="M50 75H88"/><path class="limb" d="M50 75L84 60"/><path class="body" d="M84 60Q64 44 40 62"/><path class="limb" d="M40 65L14 73"/><circle class="head" cx="32" cy="69" r="7"/>',
  },
  cat: {
    label: 'Cat-cow',
    art: '<path class="floor" d="M6 80H114"/><path class="limb" d="M34 44L30 75"/><path class="limb" d="M88 44L90 75H108"/><path class="body" d="M34 44Q60 22 88 44"/><circle class="head" cx="25" cy="53" r="7"/>',
  },
  butterfly: {
    label: 'Reclined butterfly',
    art: '<path class="limb" d="M60 30L36 48M60 30L84 48"/><path class="body" d="M60 24V52"/><path class="limb" d="M60 52L34 66L60 82M60 52L86 66L60 82"/><circle class="head" cx="60" cy="14" r="8"/>',
  },
  twist: {
    label: 'Gentle lying twist',
    art: '<path class="limb" d="M60 28L22 28M60 28L98 28"/><path class="body" d="M60 22V50"/><path class="limb" d="M60 50L30 60L42 78M60 52L34 52L46 70"/><circle class="head" cx="60" cy="12" r="8"/>',
  },
  lie: {
    label: 'Resting pose',
    art: '<path class="limb" d="M60 30L40 54M60 30L80 54"/><path class="body" d="M60 22V54"/><path class="limb" d="M60 54L52 82M60 54L68 82"/><circle class="head" cx="60" cy="12" r="8"/>',
  },
  breath: {
    label: 'Seated breathing',
    art: '<path class="limb" d="M60 38L42 58M60 38L78 58"/><path class="body" d="M60 32V56"/><path class="limb" d="M32 68Q60 54 88 68M32 68Q60 80 88 68"/><circle class="head" cx="60" cy="20" r="9"/>',
  },
}

function poseSvg(key) {
  const pose = POSES[key]
  return `<svg viewBox="0 0 120 90" class="pose-svg" role="img" aria-label="${pose.label} illustration">${pose.art}</svg>`
}

function videoLink(query) {
  return 'https://www.youtube.com/results?search_query=' + encodeURIComponent(query)
}

// The content. "books: true" means: show the age-based book shelves (section 6).
const MOODS = [
  {
    id: 'cramps',
    label: 'My tummy aches',
    icon: 'activity',
    intro: 'Cramps can make everything feel heavy. You are not being dramatic. Pick only what feels comfortable, and let the rest go.',
    books: true,
    poses: {
      title: 'Gentle yoga for cramp days',
      sub: 'Slow, soft poses. Move only as far as feels kind, and breathe all the way through.',
      items: [
        { pose: 'child', name: "Child's pose", time: '1–2 min', query: "child's pose yoga for period cramps", tips: ['Spread your knees wide and rest your belly between them.', 'Place a pillow under your chest or forehead for support.', 'Breathe slowly into your lower back.'] },
        { pose: 'cat', name: 'Cat-cow', time: '1 min', query: 'cat cow pose gentle yoga for beginners', tips: ['Move with your breath: round on the exhale, soften on the inhale.', 'Keep the movement small and slow.', "Rest in child's pose if you feel dizzy."] },
        { pose: 'butterfly', name: 'Reclined butterfly', time: '2 min', query: 'reclined butterfly pose supta baddha konasana', tips: ['Put pillows under your knees so your hips can relax.', 'Rest one hand on your belly and one on your heart.', 'Stay as long as it feels soothing.'] },
        { pose: 'twist', name: 'Gentle lying twist', time: '1 min each side', query: 'supine spinal twist gentle yoga', tips: ['Let your knees drop only as far as is comfortable.', 'Keep both shoulders resting on the floor.', 'Breathe out slowly and switch sides.'] },
      ],
    },
    warm: {
      title: 'Warm comforts',
      sub: 'Soft warmth for your body. These are comforting, not cures, and everyone responds differently.',
      items: [
        { icon: 'flame', label: 'Warmth', title: 'Warm compress or hot water bottle', text: 'Warmth on your lower belly can feel deeply soothing.', tip: 'Wrap it in a thin towel, use it for 15 to 20 minutes, keep it warm (not hot), and never fall asleep on it.' },
        { icon: 'cup', label: 'Sip', title: 'Ginger tea', text: 'A cozy, warming classic. Simmer a few slices of fresh ginger in water for 5 to 10 minutes.', tip: 'Skip it if it upsets your stomach or a doctor has told you to avoid it.' },
        { icon: 'cup', label: 'Sip', title: 'Chamomile tea', text: 'Caffeine-free and calming, lovely in the evening with your feet up.', tip: 'Avoid it if you are allergic to plants in the daisy family.' },
        { icon: 'cup', label: 'Sip', title: 'Warm turmeric milk (haldi doodh)', text: 'A traditional comfort drink. Warm milk or plant milk with a pinch of turmeric and a little honey or jaggery.', tip: 'Keep it mild and not too sweet. Skip honey for children under 1 year.' },
        { icon: 'cup', label: 'Sip', title: 'Warm cumin (jeera) water', text: 'Gentle on the stomach. Simmer a teaspoon of cumin seeds in water, strain and sip slowly.', tip: 'Sip small amounts. Stop if it does not agree with you.' },
        { icon: 'droplet', label: 'Sip', title: 'Plain warm water with lemon', text: 'Simple hydration that feels comforting when you do not feel like anything else.', tip: 'Warm, not hot, so it is easy on your throat and stomach.' },
      ],
    },
    flow: {
      title: 'Your dreamy comfort flow',
      total: 'About 12 minutes',
      steps: [
        { name: 'Settle and breathe', time: '2 min', pose: 'breath', how: 'Sit or lie down comfortably and breathe slowly into your belly.' },
        { name: "Child's pose", time: '1–2 min', pose: 'child', how: 'Kneel, rest your forehead down and let your arms relax.' },
        { name: 'Cat-cow', time: '1 min', pose: 'cat', how: 'Round and soften your back slowly with each breath.' },
        { name: 'Reclined butterfly', time: '2 min', pose: 'butterfly', how: 'Lie back, soles together, knees open, supported by pillows.' },
        { name: 'Gentle lying twist', time: '1 min each side', pose: 'twist', how: 'Drop both knees to one side and breathe. Then switch.' },
        { name: 'Rest with warmth', time: '3–5 min', pose: 'lie', how: 'Lie still with a warm compress on your lower belly and a warm drink nearby.' },
      ],
    },
  },
  {
    id: 'tired',
    label: 'I need to rest',
    icon: 'moon',
    intro: 'Your body is doing a lot. Rest is not lazy, it is care. Small and slow is enough today.',
    activities: [
      { icon: 'moon', title: 'A short rest', text: 'A 20-minute nap or quiet lie-down can help. Avoid long naps late in the day so night sleep is not disturbed.' },
      { icon: 'music', title: 'Calm music', text: 'Put on soft, slow music while you rest or stretch.' },
      { icon: 'droplet', title: 'Water and a light snack', text: 'Tiredness feels worse when you are thirsty or hungry. Have water and something easy to eat.' },
    ],
    flow: {
      title: 'Soft wake-up stretch',
      total: 'About 8 minutes',
      steps: [
        { name: 'Seated deep breaths', time: '1 min', pose: 'breath', how: 'Sit tall and take 5 slow, deep breaths.' },
        { name: 'Neck and shoulder rolls', time: '1 min', icon: 'sparkles', how: 'Roll your shoulders back slowly, then tilt your head side to side.' },
        { name: 'Cat-cow', time: '1–2 min', pose: 'cat', how: 'Move slowly with your breath on hands and knees.' },
        { name: 'Reclined butterfly', time: '3 min', pose: 'butterfly', how: 'Lie back, soles together, knees open, and rest.' },
      ],
    },
  },
  {
    id: 'anxious',
    label: 'My mind feels busy',
    icon: 'wind',
    intro: 'Hormone changes can make feelings louder. Let your breath lead, and give your thoughts somewhere soft to land.',
    activities: [
      { icon: 'wind', title: 'Box breathing', text: 'Breathe in for 4, hold for 4, out for 4, hold for 4. Repeat 5 times.' },
      { icon: 'pen', title: 'Write it out', text: 'Spend 5 minutes writing whatever is on your mind. It does not need to make sense.' },
      { icon: 'book', title: 'Read or listen to a story', text: 'A familiar book, audiobook or podcast can gently shift your attention.' },
    ],
    flow: {
      title: 'Calm-down flow',
      total: 'About 10 minutes',
      steps: [
        { name: 'Box breathing', time: '2 min', pose: 'breath', how: 'In for 4, hold 4, out 4, hold 4.' },
        { name: 'Cat-cow', time: '1–2 min', pose: 'cat', how: 'Match each movement to one slow breath.' },
        { name: "Child's pose", time: '2 min', pose: 'child', how: 'Rest your forehead down and feel your breath in your back.' },
        { name: 'Body scan rest', time: '3 min', pose: 'lie', how: 'Relax each body part in turn, from your toes up to your face.' },
      ],
    },
  },
  {
    id: 'sad',
    label: 'I feel low',
    icon: 'cloud',
    intro: 'It is okay to feel low. Be as kind to yourself as you would be to a friend, and try one small, doable thing.',
    activities: [
      { icon: 'sun', title: 'Get some daylight', text: 'Sit by a window or step outside for a few minutes of fresh air.' },
      { icon: 'music', title: 'A comforting song', text: 'Choose music that feels warm and familiar.' },
      { icon: 'pen', title: 'Write 3 good things', text: 'Note three small things that were okay today, even tiny ones.' },
      { icon: 'heart', title: 'Reach out', text: 'Message someone you trust. If low feelings last for weeks, consider talking to a professional.' },
    ],
    flow: {
      title: 'Gentle mood-lift flow',
      total: 'About 15 minutes',
      steps: [
        { name: 'Easy walk', time: '5–10 min', icon: 'sun', how: 'Walk slowly indoors or outdoors at a pace that feels kind.' },
        { name: 'Cat-cow', time: '1 min', pose: 'cat', how: 'Move slowly with your breath.' },
        { name: 'Reclined butterfly', time: '2 min', pose: 'butterfly', how: 'Lie back and let your body soften.' },
        { name: 'Write 3 good things', time: '2 min', icon: 'pen', how: 'Finish with three small things you are grateful for.' },
      ],
    },
  },
  {
    id: 'irritable',
    label: 'I feel on edge',
    icon: 'zap',
    intro: 'Mood swings are common around your period. Let the tension out gently, without judging yourself.',
    activities: [
      { icon: 'wind', title: 'Long, slow exhales', text: 'Breathe in for 4, then out slowly for 8. Repeat a few times.' },
      { icon: 'music', title: 'Move to music', text: 'Put on a song and sway or stretch for a few minutes.' },
      { icon: 'pen', title: 'Let it out on paper', text: 'Write down what is bothering you, then decide what really needs attention.' },
    ],
    flow: {
      title: 'Tension-release flow',
      total: 'About 8 minutes',
      steps: [
        { name: 'Long exhale breathing', time: '2 min', pose: 'breath', how: 'In for 4, out for 8. Let your jaw and shoulders soften.' },
        { name: 'Shake it out', time: '1 min', icon: 'zap', how: 'Gently shake your hands, arms and legs.' },
        { name: 'Gentle lying twist', time: '2 min', pose: 'twist', how: 'Let your knees drop to one side, then the other.' },
        { name: 'Quiet rest', time: '3 min', pose: 'lie', how: 'Lie still, close your eyes and just breathe.' },
      ],
    },
  },
  {
    id: 'energetic',
    label: 'I feel bright',
    icon: 'sun',
    intro: 'Lovely! Enjoy that energy in a way that feels good, and still listen to your body.',
    activities: [
      { icon: 'activity', title: 'Brisk walk or dance', text: 'Walk, dance or cycle for 15 to 20 minutes.' },
      { icon: 'music', title: 'Make a happy playlist', text: 'Build a playlist for the days you feel less bright.' },
      { icon: 'pen', title: 'Plan something fun', text: 'Use your good mood to plan something you are looking forward to.' },
    ],
    flow: {
      title: 'Light energizer flow',
      total: 'About 20 minutes',
      steps: [
        { name: 'Warm-up march', time: '2 min', icon: 'activity', how: 'March on the spot and swing your arms.' },
        { name: 'Brisk walk or dance', time: '10 min', icon: 'music', how: 'Keep a pace where you can still talk comfortably.' },
        { name: 'Standing stretches', time: '3 min', icon: 'sparkles', how: 'Stretch your arms, sides, hamstrings and calves.' },
        { name: 'Cool-down breathing', time: '2 min', pose: 'breath', how: 'Slow your breath and drink some water.' },
      ],
    },
  },
]

// ----- Building the Mood screen -----
const moodPicker = document.getElementById('mood-picker')
const moodResult = document.getElementById('mood-result')

moodPicker.innerHTML = MOODS.map(
  (mood) => `
    <button type="button" class="mood-chip" data-mood="${mood.id}" aria-pressed="false">
      ${iconSvg(mood.icon)}
      <span>${mood.label}</span>
    </button>`
).join('')

function sectionHeading(icon, title, sub) {
  return `
    <div class="dream-heading">
      <span class="mini-icon">${iconSvg(icon)}</span>
      <div><h2>${title}</h2><p>${sub}</p></div>
    </div>`
}

function posesHtml(poses) {
  const cards = poses.items
    .map(
      (p) => `
      <article class="card card-soft pose-card">
        <div class="pose-art">${poseSvg(p.pose)}</div>
        <div class="pose-body">
          <h3>${p.name} <span class="tag">${p.time}</span></h3>
          <ul class="pose-tips">${p.tips.map((t) => `<li>${t}</li>`).join('')}</ul>
          <a class="video-btn" href="${videoLink(p.query)}" target="_blank" rel="noopener noreferrer">
            ${iconSvg('play')} Watch a video ${iconSvg('external')}
          </a>
        </div>
      </article>`
    )
    .join('')
  return `
    ${sectionHeading('leaf', poses.title, poses.sub)}
    <div class="dream-grid pose-grid">${cards}</div>`
}

function warmHtml(warm) {
  const cards = warm.items
    .map(
      (w) => `
      <article class="card card-soft warm-card">
        <div class="card-head">
          <span class="mini-icon">${iconSvg(w.icon)}</span>
          <div><span class="tag">${w.label}</span><h3>${w.title}</h3></div>
        </div>
        <p>${w.text}</p>
        <p class="warm-tip">${w.tip}</p>
      </article>`
    )
    .join('')
  return `
    ${sectionHeading('flame', warm.title, warm.sub)}
    <div class="dream-grid">${cards}</div>`
}

function activitiesHtml(activities) {
  const cards = activities
    .map(
      (a) => `
      <article class="card card-soft activity-card">
        <div class="card-head">
          <span class="mini-icon">${iconSvg(a.icon)}</span>
          <h3>${a.title}</h3>
        </div>
        <p>${a.text}</p>
      </article>`
    )
    .join('')
  return `
    ${sectionHeading('heart', 'Little things to try', 'Pick one. That is enough.')}
    <div class="dream-grid">${cards}</div>`
}

function flowHtml(flow) {
  const steps = flow.steps
    .map((step, index) => {
      const art = step.pose ? poseSvg(step.pose) : iconSvg(step.icon || 'sparkles')
      return `
      <li class="df-item">
        <div class="df-bubble">${art}<span class="df-num">${index + 1}</span></div>
        <div class="df-card">
          <h4>${step.name} <span class="tag">${step.time}</span></h4>
          <p>${step.how}</p>
        </div>
      </li>`
    })
    .join('')

  return `
    ${sectionHeading('moon', flow.title, flow.total + '. Follow the glowing path, one step at a time.')}
    <div class="card flow-wrap">
      <ol class="dream-flow">
        <li class="df-edge"><span class="df-dot">${iconSvg('sparkles')}</span><span class="flow-pill">Begin softly</span></li>
        ${steps}
        <li class="df-edge"><span class="df-dot">${iconSvg('heart')}</span><span class="flow-pill">Beautifully done. You cared for yourself.</span></li>
      </ol>
    </div>`
}

function showMood(id) {
  const mood = MOODS.find((m) => m.id === id)
  if (!mood) return

  moodPicker.querySelectorAll('.mood-chip').forEach((chip) => {
    chip.setAttribute('aria-pressed', String(chip.dataset.mood === id))
  })

  // Each part only appears if this feeling has that content.
  moodResult.innerHTML = `
    <div class="card mood-intro">
      <h2>${mood.label}</h2>
      <p class="muted">${mood.intro}</p>
    </div>
    ${mood.books ? shelfHtml() : ''}
    ${mood.poses ? posesHtml(mood.poses) : ''}
    ${mood.warm ? warmHtml(mood.warm) : ''}
    ${mood.activities ? activitiesHtml(mood.activities) : ''}
    ${flowHtml(mood.flow)}
    <p class="safety-note" style="margin-top: 1.5rem;">${iconSvg('info')}<span>${SAFETY_TEXT}</span></p>
  `
}

moodPicker.addEventListener('click', (event) => {
  const chip = event.target.closest('[data-mood]')
  if (chip) showMood(chip.dataset.mood)
})

// =========================================================
// 6. BOOK SHELVES BY AGE
// "free" is a search term for Project Gutenberg (free books that are
// out of copyright). Books without it only get a "Find a copy" link.
// =========================================================
const BOOK_SHELVES = {
  millennial: {
    label: 'Millennial',
    years: 'born 1981–1996',
    blurb: 'Poetry, timeless classics, and true stories of kings and queens.',
    books: [
      {
        id: 'gitanjali', title: 'Gitanjali', author: 'Rabindranath Tagore', tag: 'Poetry',
        tones: ['#7b8fe0', '#9a7fd6'], free: 'gitanjali tagore',
        why: 'Short poems. Read one, rest, and come back whenever you like.',
        story: 'A collection of devotional poems and songs. Tagore writes in a gentle, searching voice about longing, humility, nature and the closeness of the divine. There is no plot, so you can open it anywhere and read a single poem. The English version helped win him the Nobel Prize in Literature in 1913.',
      },
      {
        id: 'prophet', title: 'The Prophet', author: 'Kahlil Gibran', tag: 'Poetry',
        tones: ['#6fa8dc', '#8b74d1'], free: 'the prophet gibran',
        why: 'Calm, poetic passages about love, joy and sorrow. Perfect in small sips.',
        story: 'Almustafa has lived for twelve years in the city of Orphalese and is waiting for a ship to carry him home. Before he leaves, the townspeople ask him about love, marriage, children, work, joy, sorrow and death, and he answers in quiet, poetic passages.',
      },
      {
        id: 'pride', title: 'Pride and Prejudice', author: 'Jane Austen', tag: 'Old-school classic',
        tones: ['#e8809a', '#c78ae0'], free: 'pride and prejudice austen',
        why: 'Witty, warm and comforting. A classic that rewards a slow, cozy afternoon.',
        story: "Elizabeth Bennet is quick-witted and outspoken, and her family's future depends on the daughters marrying well. When she meets the wealthy, reserved Mr Darcy, they badly misjudge each other. As the story moves on, both have to face their own pride and prejudice.",
      },
      {
        id: 'henry', title: 'The Six Wives of Henry VIII', author: 'Alison Weir', tag: 'Royal history',
        tones: ['#d98aa8', '#8f7fd0'], free: null,
        why: 'Palace drama that is true. Each chapter focuses on one queen, so it is easy to dip in and out.',
        story: "A history of the Tudor king's marriages, told through the lives of Catherine of Aragon, Anne Boleyn, Jane Seymour, Anne of Cleves, Catherine Howard and Catherine Parr. It shows the politics, religion and personal drama of the Tudor court.",
      },
      {
        id: 'cleopatra', title: 'Cleopatra: A Life', author: 'Stacy Schiff', tag: 'Queens in history',
        tones: ['#c27fc9', '#7b8fe0'], free: null,
        why: 'A vivid, well-told biography. Great if you like strong women from history.',
        story: 'A biography of the last active ruler of Ptolemaic Egypt. It separates the real woman from the legend and follows how she held on to power through her dealings with Julius Caesar and Mark Antony.',
      },
      {
        id: 'mughal', title: 'The Last Mughal', author: 'William Dalrymple', tag: 'Kings and empires',
        tones: ['#f0a07a', '#c27fc9'], free: null,
        why: 'Rich storytelling about Delhi, poets and emperors. Read it like a slow historical novel.',
        story: 'The story of Delhi in 1857: the last Mughal emperor, Bahadur Shah Zafar, the poets and courtiers around him, and the uprising that ended Mughal rule.',
      },
    ],
  },
  genz: {
    label: 'Gen Z',
    years: 'born 1997–2012',
    blurb: 'Love stories, thrillers, crime mysteries and true stories.',
    books: [
      {
        id: 'oneday', title: 'One Day', author: 'David Nicholls', tag: 'Love story',
        tones: ['#e8809a', '#9a7fd6'], free: null,
        note: 'It has some sad moments.',
        why: 'A bittersweet love story you can fall into. It is easy to read and hard to put down.',
        story: 'Emma and Dexter spend one night together after graduating in 1988. The novel then revisits the same date, 15 July, every year for about twenty years. We watch them drift apart, come back together, and slowly work out what they mean to each other.',
      },
      {
        id: 'hugo', title: 'The Seven Husbands of Evelyn Hugo', author: 'Taylor Jenkins Reid', tag: 'Love story',
        tones: ['#d98aa8', '#7b8fe0'], free: null,
        note: 'Contains adult themes.',
        why: 'Glamorous, emotional and gripping. A good page-turner for a lazy day in bed.',
        story: 'Aging Hollywood legend Evelyn Hugo chooses an unknown young journalist, Monique Grant, to write her life story. As Evelyn tells it, the truth about her seven marriages, her career and the real love of her life comes out.',
      },
      {
        id: 'silent', title: 'The Silent Patient', author: 'Alex Michaelides', tag: 'Thriller',
        tones: ['#6fa8dc', '#8b74d1'], free: null,
        note: 'Contains dark themes.',
        why: 'A fast, twisty psychological thriller. Short chapters keep you hooked.',
        story: "Painter Alicia Berenson is found beside her husband's body, and she has not spoken a word since. Psychotherapist Theo Faber becomes determined to make her talk, and what he uncovers is not what he expects.",
      },
      {
        id: 'pip', title: "A Good Girl's Guide to Murder", author: 'Holly Jackson', tag: 'Crime mystery',
        tones: ['#7b8fe0', '#c78ae0'], free: null,
        why: 'A clever teen detective story that is easy to follow, even when you are tired.',
        story: 'Seventeen-year-old Pip picks a closed local murder case for her school project. She starts to doubt the official story, and begins interviewing people in her small town to find out what really happened.',
      },
      {
        id: 'noah', title: 'Born a Crime', author: 'Trevor Noah', tag: 'True story',
        tones: ['#f0a07a', '#c27fc9'], free: null,
        note: 'Includes some difficult themes.',
        why: 'Funny, honest and eye-opening. A great pick if you love documentaries.',
        story: 'Comedian Trevor Noah tells stories of growing up in South Africa during and after apartheid, as the child of a Black mother and a white father, at a time when their relationship was illegal. It is funny, honest and often moving.',
      },
      {
        id: 'malala', title: 'I Am Malala', author: 'Malala Yousafzai with Christina Lamb', tag: 'True story',
        tones: ['#6dbba0', '#7b8fe0'], free: null,
        why: 'An inspiring real-life story told in a warm, clear voice.',
        story: "Malala's account of growing up in Pakistan's Swat Valley, her love of school, and how she became an activist for girls' education. It includes the attack on her in 2012 and her recovery.",
      },
    ],
  },
}

let currentShelf = 'millennial'

function shelfHtml() {
  const shelf = BOOK_SHELVES[currentShelf]
  const tabs = Object.entries(BOOK_SHELVES)
    .map(
      ([key, s]) => `
      <button type="button" class="shelf-tab" data-shelf="${key}" aria-pressed="${key === currentShelf}">
        ${s.label} <small>${s.years}</small>
      </button>`
    )
    .join('')

  const cards = shelf.books
    .map(
      (b) => `
      <article class="card card-soft book-card" data-book="${b.id}">
        <div class="book-cover" style="background: linear-gradient(160deg, ${b.tones[0]}, ${b.tones[1]})">
          <strong>${b.title}</strong>
          <small>${b.author}</small>
        </div>
        <div class="book-info">
          <span class="tag">${b.tag}</span>
          <h3>${b.title}</h3>
          <p class="book-author">by ${b.author}</p>
          <p>${b.why}</p>
          <button type="button" class="book-more">Read the story →</button>
        </div>
      </article>`
    )
    .join('')

  return `
    <div id="shelf">
      ${sectionHeading('book', 'Books for tender days', shelf.blurb)}
      <div class="shelf-tabs" role="group" aria-label="Choose your generation">${tabs}</div>
      <div class="dream-grid">${cards}</div>
      <p class="muted" style="margin-top: 1rem; font-size: 0.9rem;">
        Some titles have grown-up themes. If you are under 18, please check the age rating first.
        No book at hand? A library app or audiobook lets you listen with your eyes closed.
      </p>
    </div>`
}

// The popup that opens when you click a book
const bookDialog = document.createElement('dialog')
bookDialog.className = 'book-dialog'
bookDialog.setAttribute('aria-labelledby', 'book-dialog-title')
document.body.appendChild(bookDialog)

function openBook(id) {
  const book = Object.values(BOOK_SHELVES).flatMap((s) => s.books).find((b) => b.id === id)
  if (!book) return

  const gutenberg = 'https://www.gutenberg.org/ebooks/search/?query=' + encodeURIComponent(book.free || '')
  const library = 'https://openlibrary.org/search?q=' + encodeURIComponent(book.title + ' ' + book.author)

  bookDialog.innerHTML = `
    <div class="book-dialog-inner">
      <button type="button" class="dialog-close" data-close aria-label="Close">${iconSvg('x')}</button>
      <div class="dialog-top">
        <div class="book-cover" style="background: linear-gradient(160deg, ${book.tones[0]}, ${book.tones[1]})">
          <strong>${book.title}</strong>
          <small>${book.author}</small>
        </div>
        <div>
          <span class="tag">${book.tag}</span>
          <h2 id="book-dialog-title">${book.title}</h2>
          <p class="book-author">by ${book.author}</p>
        </div>
      </div>

      <h3>The story in brief</h3>
      <p>${book.story}</p>
      ${book.note ? `<p class="warm-tip">${book.note}</p>` : ''}

      <h3>Why it suits a tender day</h3>
      <p>${book.why}</p>

      <div class="dialog-links">
        ${book.free ? `<a class="video-btn" href="${gutenberg}" target="_blank" rel="noopener noreferrer">${iconSvg('book')} Try reading free ${iconSvg('external')}</a>` : ''}
        <a class="video-btn alt" href="${library}" target="_blank" rel="noopener noreferrer">${iconSvg('book')} Find a copy ${iconSvg('external')}</a>
      </div>
      <p class="muted small">
        Period Pal shares short summaries only, because book texts are protected by copyright.
        Read the full book from a library, a bookshop, or a free site for old books that are out of copyright.
      </p>
    </div>`
  bookDialog.showModal()
}

// Close when clicking the X or the dark area outside the popup
bookDialog.addEventListener('click', (event) => {
  if (event.target === bookDialog || event.target.closest('[data-close]')) bookDialog.close()
})

// Clicks inside the Mood results: age tabs and book cards
moodResult.addEventListener('click', (event) => {
  const tab = event.target.closest('[data-shelf]')
  if (tab) {
    currentShelf = tab.dataset.shelf
    document.getElementById('shelf').outerHTML = shelfHtml()
    moodResult.querySelector(`[data-shelf="${currentShelf}"]`).focus()
    return
  }
  const card = event.target.closest('[data-book]')
  if (card) openBook(card.dataset.book)
})

// =========================================================
// 7. PERIOD TRACKER
// =========================================================
const STORE_KEY = 'periodpal:v1'
const DAY_MS = 86400000

// ----- Saving and loading (localStorage) -----
function loadData() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORE_KEY))
    if (saved && Array.isArray(saved.records)) {
      const cycle = Number(saved.cycleLength)
      return {
        records: saved.records.filter((r) => r && /^\d{4}-\d{2}-\d{2}$/.test(r.start)),
        cycleLength: cycle >= 21 && cycle <= 45 ? cycle : 28,
      }
    }
  } catch {
    // Storage blocked or broken data: start fresh.
  }
  return { records: [], cycleLength: 28 }
}

const state = loadData()

function saveData() {
  try {
    localStorage.setItem(STORE_KEY, JSON.stringify(state))
  } catch {
    setMsg('Your browser would not let us save. Your data may be lost when you close the tab.')
  }
}

// ----- Date helpers (all dates are local, written as YYYY-MM-DD) -----
function parseISO(text) {
  const [y, m, d] = text.split('-').map(Number)
  return new Date(y, m - 1, d)
}
function toISO(date) {
  const pad = (n) => String(n).padStart(2, '0')
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`
}
function addDays(date, n) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() + n)
}
function diffDays(a, b) {
  return Math.round((a - b) / DAY_MS) // a minus b, in days
}
function todayDate() {
  const now = new Date()
  return new Date(now.getFullYear(), now.getMonth(), now.getDate())
}
function fmt(date) {
  return date.toLocaleDateString(undefined, { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' })
}
function fmtShort(date) {
  return date.toLocaleDateString(undefined, { day: 'numeric', month: 'short' })
}
// Makes user text safe before putting it into HTML
function esc(text) {
  return String(text).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]))
}

// ----- Estimates -----
function getEstimates() {
  if (!state.records.length) return null
  const oldestFirst = [...state.records].sort((a, b) => (a.start < b.start ? -1 : 1))

  // Cycle length = days between two period start dates.
  const gaps = []
  for (let i = 1; i < oldestFirst.length; i++) {
    gaps.push(diffDays(parseISO(oldestFirst[i].start), parseISO(oldestFirst[i - 1].start)))
  }
  const usable = gaps.filter((g) => g >= 15 && g <= 60).slice(-6)

  let cycle = state.cycleLength
  let source = 'your typical cycle length'
  if (usable.length >= 2) {
    cycle = Math.round(usable.reduce((a, b) => a + b, 0) / usable.length)
    source = `the average of your last ${usable.length} cycles`
  }

  const lengths = oldestFirst
    .filter((r) => r.end)
    .map((r) => diffDays(parseISO(r.end), parseISO(r.start)) + 1)
    .slice(-6)
  const periodLen = lengths.length
    ? Math.min(10, Math.max(1, Math.round(lengths.reduce((a, b) => a + b, 0) / lengths.length)))
    : 5

  const last = parseISO(oldestFirst[oldestFirst.length - 1].start)
  const next = addDays(last, cycle)
  return { last, cycle, source, periodLen, next, upcoming: [0, 1, 2].map((i) => addDays(next, i * cycle)) }
}

function phaseName(day, est) {
  if (day > est.cycle) return 'Later than your usual cycle'
  if (day <= est.periodLen) return 'Period days'
  if (day <= est.cycle - 14) return 'After your period (follicular)'
  return 'Before your next period (luteal)'
}

// Words shown on both the tracker page and the dashboard
function describe(est) {
  const today = todayDate()
  const day = diffDays(today, est.last) + 1
  const until = diffDays(est.next, today)

  let nextText
  if (until > 1) nextText = `Your next period is estimated around ${fmt(est.next)}, about ${until} days from today.`
  else if (until === 1) nextText = `Your next period is estimated for tomorrow (${fmt(est.next)}).`
  else if (until === 0) nextText = 'Your period is estimated to start today.'
  else nextText = `Your estimated date (${fmt(est.next)}) was ${-until} day${-until === 1 ? '' : 's'} ago. Cycles vary, so log your period when it starts.`

  let eyebrow = 'Estimate'
  let headline
  if (day <= est.periodLen) {
    eyebrow = 'Period days'
    headline = `Day ${day} of your period`
  } else if (until > 0) {
    headline = `About ${until} day${until === 1 ? '' : 's'} until your next period`
  } else if (until === 0) {
    headline = 'Your period may start today'
  } else {
    headline = 'Your period may be a little late'
  }

  const pct = Math.min(100, Math.round((day / est.cycle) * 100))
  return { day, until, nextText, eyebrow, headline, pct }
}

// ----- Drawing the page -----
function renderTracker() {
  const summary = document.getElementById('tracker-summary')
  const history = document.getElementById('tracker-history')
  const est = getEstimates()

  if (!est) {
    summary.innerHTML = `
      <div class="card empty-state">
        <div class="empty-icon">${iconSvg('droplet')}</div>
        <h2>No periods logged yet</h2>
        <p>Add the first day of your period above, and Period Pal will estimate your next one.</p>
      </div>`
    history.innerHTML = ''
    return
  }

  const info = describe(est)
  const upcoming = est.upcoming
    .map(
      (d, i) => `
      <li>
        <span><strong>${i === 0 ? 'Next' : i === 1 ? 'After that' : 'Then'}:</strong> ${fmt(d)} to ${fmtShort(addDays(d, est.periodLen - 1))}</span>
        <span class="tag">Estimate</span>
      </li>`
    )
    .join('')

  summary.innerHTML = `
    <div class="card tracker-summary">
      <div class="cycle-ring" style="--pct:${info.pct}" role="img" aria-label="Day ${info.day} of about ${est.cycle}">
        <div><strong>Day ${info.day}</strong><span>of about ${est.cycle}</span></div>
      </div>
      <div class="summary-text">
        <p class="eyebrow">${info.eyebrow}</p>
        <h2>${info.headline}</h2>
        <p class="muted">${info.nextText}</p>
        <p class="muted small">Cycle phase (estimate): ${phaseName(info.day, est)}</p>
      </div>
    </div>

    <div class="stat-grid">
      <div class="stat"><strong>${fmtShort(est.last)}</strong><span>Last period started</span></div>
      <div class="stat"><strong>${est.cycle} days</strong><span>Cycle length</span></div>
      <div class="stat"><strong>${est.periodLen} days</strong><span>Period length</span></div>
    </div>

    <div class="card">
      <h3>Your next three periods</h3>
      <ol class="pred-list">${upcoming}</ol>
      <p class="muted small">
        These are estimates based on ${est.source}. Real cycles can be a few days earlier or later,
        and stress, illness and travel can shift them.
      </p>
      <button type="button" class="btn" id="ics-btn">${iconSvg('download')} Download calendar reminders</button>
      <p class="muted small" style="margin-top: 0.6rem;">
        Open the file to add the estimates to your phone calendar. Each one alerts you 2 days before,
        even when this app is closed.
      </p>
    </div>`

  // The history list, newest first
  const newestFirst = [...state.records].sort((a, b) => (a.start < b.start ? 1 : -1))
  const today = todayDate()
  const rows = newestFirst
    .map((r, i) => {
      const start = parseISO(r.start)
      const older = newestFirst[i + 1]
      const cycleLen = older ? diffDays(start, parseISO(older.start)) : null
      const duration = r.end ? diffDays(parseISO(r.end), start) + 1 : null
      const canEnd = !r.end && diffDays(today, start) <= 13
      return `
      <div class="record">
        <div>
          <p><strong>${fmt(start)}</strong></p>
          <p class="muted small">
            ${duration ? `Lasted ${duration} day${duration === 1 ? '' : 's'}` : 'End date not recorded'}
            ${cycleLen ? ` · Cycle: ${cycleLen} days` : ''}
          </p>
          ${r.notes ? `<p class="muted small">Note: ${esc(r.notes)}</p>` : ''}
        </div>
        <div class="record-actions">
          ${canEnd ? `<button type="button" class="btn btn-ghost btn-small" data-action="end" data-id="${r.id}">${iconSvg('check')} Period ended today</button>` : ''}
          <button type="button" class="btn btn-ghost btn-small" data-action="delete" data-id="${r.id}" aria-label="Delete the record from ${fmt(start)}">${iconSvg('trash')} Delete</button>
        </div>
      </div>`
    })
    .join('')

  history.innerHTML = `<div class="card"><h3>Your logged periods</h3>${rows}</div>`
}

// The card on the dashboard
function renderDashTeaser() {
  const el = document.getElementById('dash-empty')
  const est = getEstimates()
  if (!est) {
    el.innerHTML = `
      <div class="empty-icon">${iconSvg('calendar')}</div>
      <h2>Let's get started</h2>
      <p>You haven't added any period dates yet. Add the first day of your period and you'll see your estimates here.</p>
      <a class="btn" href="#tracker">Log my period</a>`
    return
  }
  const info = describe(est)
  el.innerHTML = `
    <div class="empty-icon">${iconSvg('droplet')}</div>
    <h2>${info.headline}</h2>
    <p>${info.nextText}</p>
    <a class="btn" href="#tracker">Open Period Tracker</a>`
}

function renderAll() {
  renderTracker()
  renderDashTeaser()
}

// ----- The form -----
const periodForm = document.getElementById('period-form')
const startInput = document.getElementById('p-start')
const endInput = document.getElementById('p-end')
const cycleInput = document.getElementById('p-cycle')
const notesInput = document.getElementById('p-notes')
const msgEl = document.getElementById('p-msg')

function setMsg(text, ok = false) {
  msgEl.textContent = text
  msgEl.classList.toggle('is-ok', ok)
}

// Dates in the future cannot be picked
startInput.max = toISO(todayDate())
endInput.max = toISO(todayDate())
cycleInput.value = state.cycleLength

document.getElementById('p-today').addEventListener('click', () => {
  startInput.value = toISO(todayDate())
  startInput.focus()
})

periodForm.addEventListener('submit', (event) => {
  event.preventDefault()
  const start = startInput.value
  const end = endInput.value
  const cycle = Number(cycleInput.value)
  const today = toISO(todayDate())

  if (!start) return setMsg('Please choose the first day of your period.')
  if (start > today) return setMsg('The first day cannot be in the future. Log it once it has started.')
  if (end) {
    if (end < start) return setMsg('The last day cannot be before the first day.')
    if (end > today) return setMsg('The last day cannot be in the future.')
    if (diffDays(parseISO(end), parseISO(start)) > 13) {
      return setMsg('A period longer than 14 days is unusual. Please check the dates, and consider speaking to a doctor.')
    }
  }
  if (!Number.isInteger(cycle) || cycle < 21 || cycle > 45) {
    return setMsg('Typical cycle length should be a whole number between 21 and 45 days.')
  }
  if (state.records.some((r) => r.start === start)) {
    return setMsg('You already logged a period starting on that date.')
  }

  state.records.push({ id: Date.now().toString(36), start, end: end || '', notes: notesInput.value.trim() })
  state.cycleLength = cycle
  saveData()

  periodForm.reset()
  cycleInput.value = cycle
  setMsg('Saved. Your estimates are updated below.', true)
  renderAll()
})

// Delete and "period ended today" buttons
document.getElementById('tracker-history').addEventListener('click', (event) => {
  const btn = event.target.closest('[data-action]')
  if (!btn) return
  const id = btn.dataset.id

  if (btn.dataset.action === 'delete') {
    if (!confirm('Delete this record? This cannot be undone.')) return
    state.records = state.records.filter((r) => r.id !== id)
  }
  if (btn.dataset.action === 'end') {
    const record = state.records.find((r) => r.id === id)
    if (record) record.end = toISO(todayDate())
  }
  saveData()
  renderAll()
})

// ----- Calendar reminder file (.ics) -----
function downloadReminders() {
  const est = getEstimates()
  if (!est) return
  const today = todayDate()
  const icsDate = (d) => toISO(d).replace(/-/g, '')
  const stamp = new Date().toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z'

  const events = est.upcoming
    .filter((d) => d >= today)
    .map((d, i) =>
      [
        'BEGIN:VEVENT',
        `UID:periodpal-${icsDate(d)}-${i}@periodpal.local`,
        `DTSTAMP:${stamp}`,
        `DTSTART;VALUE=DATE:${icsDate(d)}`,
        `DTEND;VALUE=DATE:${icsDate(addDays(d, 1))}`,
        'SUMMARY:Period may start (estimate)',
        'DESCRIPTION:Estimated by Period Pal. Cycles vary, so this could be a few days earlier or later.',
        'BEGIN:VALARM',
        'TRIGGER:-P2D',
        'ACTION:DISPLAY',
        'DESCRIPTION:Your period may start in 2 days (estimate)',
        'END:VALARM',
        'END:VEVENT',
      ].join('\r\n')
    )

  if (!events.length) return
  const ics = ['BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//Period Pal//EN', 'CALSCALE:GREGORIAN', ...events, 'END:VCALENDAR'].join('\r\n')

  const url = URL.createObjectURL(new Blob([ics], { type: 'text/calendar' }))
  const link = document.createElement('a')
  link.href = url
  link.download = 'period-pal-reminders.ics'
  document.body.appendChild(link)
  link.click()
  link.remove()
  setTimeout(() => URL.revokeObjectURL(url), 1000)
}

document.getElementById('tracker-summary').addEventListener('click', (event) => {
  if (event.target.closest('#ics-btn')) downloadReminders()
})

renderAll()