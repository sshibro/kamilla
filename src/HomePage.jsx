import { useState } from 'react'
import OptimizedImage from './OptimizedImage.jsx'
import useHomeMotion from './useHomeMotion.js'

const projectLink =
  'https://t.me/faalseee?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%A5%D0%BE%D1%87%D1%83%20%D0%BE%D0%B1%D1%81%D1%83%D0%B4%D0%B8%D1%82%D1%8C%20%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82'
const priceLink =
  'https://t.me/faalseee?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%A5%D0%BE%D1%87%D1%83%20%D1%80%D0%B0%D1%81%D1%81%D1%87%D0%B8%D1%82%D0%B0%D1%82%D1%8C%20%D1%81%D1%82%D0%BE%D0%B8%D0%BC%D0%BE%D1%81%D1%82%D1%8C'
const caseLink =
  'https://t.me/faalseee?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%A5%D0%BE%D1%87%D1%83%20%D0%BF%D0%BE%D1%81%D0%BC%D0%BE%D1%82%D1%80%D0%B5%D1%82%D1%8C%20%D0%BA%D0%B5%D0%B9%D1%81'

const reasons = [
  ['Технологичный подход к продукту', 'Разбираю бизнес на процессы и вижу, где на самом деле рождается ценность.'],
  ['Вижу шире, чем просто контент', 'Смотрю на воронку целиком: от первого касания в ленте до повторной покупки.'],
  ['Бизнес-партнёрство, а не аутсорс', 'Погружаюсь в проект как в свой: предлагаю решения, а не жду техзадания.'],
  ['Честный взгляд и надёжность', 'Говорю прямо, что работает, а что нет. Сроки и договорённости — без напоминаний.'],
]

const services = [
  {
    title: 'Упаковка проекта',
    meta: '10–14 дней · 4 этапа',
    intro: 'Привожу соцсети к единой системе: понятно, кто вы, чем отличаетесь и почему покупать нужно у вас.',
    steps: [
      ['Аудит и разбор ЦА', 'что есть сейчас и кто ваш клиент.'],
      ['Позиционирование и УТП', 'смыслы и отличия от конкурентов.'],
      ['Визуальная система', 'палитра, шрифты, шаблоны, обложки.'],
      ['Тексты профиля', 'шапка, закреп, точки входа в диалог.'],
    ],
  },
  {
    title: 'Контент, который работает',
    meta: 'от 2 недель · 4 этапа',
    intro: 'Идеи, сценарии, тексты и визуал с конкретной задачей. Не «красиво», а понятно и узнаваемо.',
    steps: [
      ['Смыслы и рубрики', 'о чём говорим и зачем.'],
      ['Сценарии и тексты', 'Reels, сторис, посты под этап воронки.'],
      ['Съёмка и монтаж', 'организую процесс или веду по референсам.'],
      ['Контент-план', 'на месяц вперёд, с датами и целями.'],
    ],
  },
  {
    title: 'Продвижение',
    meta: 'от 1 месяца · 4 этапа',
    intro: 'Разбираемся, кому и что показывать, и превращаем подписчиков в клиентов.',
    steps: [
      ['Гипотезы', 'сегменты аудитории, офферы, форматы.'],
      ['Тесты', 'небольшим бюджетом проверяем, что даёт заявки.'],
      ['Масштабирование', 'усиливаем то, что сработало.'],
      ['Отчётность', 'охваты, переходы, заявки, стоимость лида.'],
    ],
  },
  {
    title: 'Соцсети под ключ',
    meta: 'от 1 месяца · полный цикл',
    intro: 'Полный цикл: вы занимаетесь продуктом — соцсети веду я.',
    steps: [
      ['Стратегия', 'цели, позиционирование, воронка.'],
      ['Контент', 'тексты, визуал, съёмки, монтаж.'],
      ['Ведение', 'публикации, сторис, директ, комьюнити.'],
      ['Аналитика', 'ежемесячный отчёт и план на период.'],
    ],
  },
]

const processSteps = [
  ['Знакомство и бриф', 'Созваниваемся, разбираю задачу и соцсети. На выходе — честная точка А.'],
  ['Аналитика', 'Разбор аудитории и конкурентов: боли, возражения, точки роста в вашей нише.'],
  ['Стратегия и позиционирование', 'Смыслы, УТП и контент-план. Согласовываем всё с вами до старта.'],
  ['Упаковка', 'Визуальная система, шапка, актуальные. Профиль объясняет ценность сам.'],
  ['Контент и ведение', 'Сценарии, съёмка, публикации. Живой контент по плану, а не «когда получится».'],
  ['Аналитика и рост', 'Усиливаю то, что приносит заявки. Раз в месяц — отчёт и план.'],
]

function ArrowIcon({ external = false, size = 15 }) {
  return external ? (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M7 17 17 7M9 7h8v8" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ) : (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function Button({ href, children, variant = 'solid', arrow = false, className = '', style }) {
  const external = href.startsWith('http')
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener' : undefined}
      className={`btn btn--${variant} ${className}`.trim()}
      style={style}
    >
      <span>{children}</span>
      {arrow && <ArrowIcon />}
    </a>
  )
}

function Words({ text, offset = 0 }) {
  return text.split(' ').map((word, index) => (
    <span className="w" key={`${word}-${index}`}>
      <i style={{ '--i': offset + index }}>{word}</i>{' '}
    </span>
  ))
}

function Chart() {
  return (
    <figure className="chart" id="chart">
      <figcaption className="chart-head">
        <span className="t">Заявки из соцсетей</span>
        <span className="n">схема · первые полгода</span>
      </figcaption>
      <div className="chart-y">
        <svg width="9" height="9" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M12 19V5M5 12l7-7 7 7" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        больше заявок в директ
      </div>
      <div className="chart-plot">
        <svg viewBox="0 0 440 240" role="img" aria-label="Схема: без системы охваты и заявки колеблются вокруг одного уровня; с системой они растут шаг за шагом.">
          <defs>
            <linearGradient id="upWash" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#c4653c" stopOpacity=".22" />
              <stop offset="100%" stopColor="#c4653c" stopOpacity="0" />
            </linearGradient>
          </defs>
          <line className="grid-line" x1="0" y1="52" x2="440" y2="52" />
          <line className="grid-line" x1="0" y1="104" x2="440" y2="104" />
          <line className="grid-line" x1="0" y1="156" x2="440" y2="156" />
          <line className="axis" x1="0" y1="208" x2="440" y2="208" />
          <line className="split-line" x1="104" y1="22" x2="104" y2="208" />
          <text className="split-label" x="112" y="18">старт работы</text>
          <g className="tick">
            {[157, 209, 262, 315, 367, 420].map((x, index) => (
              <g key={x}>
                <line x1={x} y1="208" x2={x} y2="213" />
                <text x={x} y="228">{index === 5 ? '6 мес' : index + 1}</text>
              </g>
            ))}
          </g>
          <path className="trace-fill" d="M104,150 C140,146 158,132 186,124 C214,116 232,104 262,88 C292,72 312,58 342,44 C372,30 396,24 420,20 L420,208 L104,208 Z" />
          <path className="trace trace--flat" data-trace d="M20,150 C40,142 56,158 76,150 C90,145 96,152 104,150 C132,146 148,160 172,152 C196,144 208,158 232,150 C256,142 270,157 294,149 C318,141 334,156 358,150 C382,144 400,155 420,148" />
          <path className="trace trace--up" data-trace d="M104,150 C140,146 158,132 186,124 C214,116 232,104 262,88 C292,72 312,58 342,44 C372,30 396,24 420,20" />
          <g className="pt pt--flat"><circle cx="420" cy="148" r="4.5" /></g>
          <g className="pt pt--up"><circle cx="420" cy="20" r="6" /><circle className="core" cx="420" cy="20" r="2.5" /></g>
        </svg>
      </div>
      <div className="chart-labels">
        <div className="leg leg--flat"><span className="swatch" /><span><b>Без системы</b><span>Посты «когда получится». Всплески есть, роста нет.</span></span></div>
        <div className="leg leg--up"><span className="swatch" /><span><b>С системой</b><span>Стратегия, контент-план, аналитика каждый месяц.</span></span></div>
      </div>
      <p className="chart-foot">Схема показывает принцип работы, а не гарантию цифр. Реальная динамика зависит от ниши, бюджета и точки А.</p>
    </figure>
  )
}

function ServiceList() {
  const [openServices, setOpenServices] = useState(() => new Set())
  const toggleService = (index) => {
    setOpenServices((current) => {
      const next = new Set(current)
      if (next.has(index)) next.delete(index)
      else next.add(index)
      return next
    })
  }

  return (
    <div className="svc-list reveal">
      {services.map((service, index) => {
        const open = openServices.has(index)
        return (
          <div className={`svc${open ? ' open' : ''}`} data-svc key={service.title}>
            <button className="svc-head" type="button" aria-expanded={open} onClick={() => toggleService(index)}>
              <span className="k">{String(index + 1).padStart(2, '0')}</span>
              <span className="t"><h3>{service.title}</h3><span className="meta">{service.meta}</span></span>
              <span className="chev" aria-hidden="true">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none"><path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" /></svg>
              </span>
            </button>
            <div className="svc-body"><div><div className="in-pad">
              <p>{service.intro}</p>
              <ul className="steps">
                {service.steps.map(([label, text]) => <li key={label}><b>{label}</b> — {text}</li>)}
              </ul>
            </div></div></div>
          </div>
        )
      })}
    </div>
  )
}

function SocialIcon({ type }) {
  if (type === 'telegram') {
    return <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M21.94 4.6 18.9 19.2c-.23 1.02-.84 1.27-1.7.79l-4.7-3.47-2.27 2.18c-.25.25-.46.46-.95.46l.34-4.8 8.73-7.9c.38-.34-.08-.53-.59-.19l-10.8 6.8-4.65-1.46c-1.01-.32-1.03-1.01.21-1.5l18.18-7c.84-.31 1.58.2 1.31 1.5Z" /></svg>
  }
  if (type === 'whatsapp') {
    return <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.9c0 1.76.46 3.45 1.34 4.95L2 22l5.3-1.39a9.9 9.9 0 0 0 4.74 1.21h.01c5.46 0 9.9-4.45 9.9-9.9 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 18.13a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.1.81.83-3.02-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.23 8.24-8.23 2.2 0 4.27.86 5.83 2.41a8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.24 8.23Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.8-.23-.09-.39-.13-.56.12-.16.25-.64.8-.79.97-.14.16-.29.18-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.5.11-.11.25-.29.37-.43.13-.14.17-.25.25-.41.08-.16.04-.31-.02-.43-.06-.12-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.42l-.48-.01c-.16 0-.43.06-.66.31-.23.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.16 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.1-.22-.16-.47-.28Z" /></svg>
  }
  if (type === 'instagram') {
    return <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="3.2" y="3.2" width="17.6" height="17.6" rx="5.2" stroke="currentColor" strokeWidth="1.9" /><circle cx="12" cy="12" r="4.1" stroke="currentColor" strokeWidth="1.9" /><circle cx="17.1" cy="6.9" r="1.25" fill="currentColor" /></svg>
  }
  return <span className="glyph" />
}

function SocialLink({ href, type, name, handle, delay = '', legal = false }) {
  return (
    <a href={href} target="_blank" rel="noopener" className={`social reveal ${delay}`.trim()}>
      <span className="ic" aria-hidden="true"><SocialIcon type={type} /></span>
      <span className="who">
        <span className="nm">{name}{legal && <sup>*</sup>}</span>
        <span className="at">{handle}</span>
      </span>
      <span className="go" aria-hidden="true"><ArrowIcon external size={13} /></span>
    </a>
  )
}

export default function HomePage() {
  useHomeMotion()

  return (
    <>
      <a href="#about" className="sr">Перейти к содержанию</a>

      <header className="hdr" id="hdr">
        <div className="hdr-in">
          <a href="#top" className="brand">Kamilla<i>.</i></a>
          <a href={projectLink} target="_blank" rel="noopener" className="hdr-cta">Обсудить проект</a>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="wrap hero-in">
          <div className="hero-lead">
            <h1>
              <span className="mask"><span>Соцсети,</span></span>
              <span className="mask"><span>которые</span></span>
              <span className="mask"><span className="ital"><em>работают.</em></span></span>
            </h1>
          </div>
          <div className="hero-shot bleed">
            <OptimizedImage image="1" alt="Камилла — SMM-специалист из Кисловодска" sizes="(min-width: 1024px) 500px, 100vw" loading="eager" fetchPriority="high" />
            <span className="shot-tag">Кисловодск · Кавминводы</span>
          </div>
          <div className="hero-body">
            <p className="usp"><b>SMM-технолог с духом гор:</b> вижу бизнес изнутри — от производственных процессов до упаковки смыслов.</p>
            <div className="hero-actions">
              <Button href={projectLink} className="btn--wide" arrow>Обсудить проект</Button>
              <Button href="#services" variant="ghost" className="btn--wide">Смотреть услуги</Button>
            </div>
            <div className="hero-meta">
              <span className="geo"><span className="pin" /> Работаю с локальным бизнесом</span>
              <span className="down"><span className="bar" /> Листайте</span>
            </div>
          </div>
        </div>
      </section>

      <section className="manifesto" id="offer">
        <div className="wrap manifesto-grid">
          <div className="manifesto-copy">
            <span className="qm" aria-hidden="true">“</span>
            <p data-split>
              <Words text="Пересоберу ваш SMM на фундаменте бизнес-логики. Соцсети начнут" />
              <em><Words text="приносить деньги," offset={8} /></em>
              <Words text="а не убытки." offset={10} />
            </p>
            <div className="sig">Камилла · SMM-технолог</div>
          </div>
          <Chart />
        </div>
      </section>

      <section className="sec" id="about">
        <div className="wrap">
          <div className="about-grid">
            <div className="about-text">
              <div className="kicker reveal">Знакомство</div>
              <h2 className="reveal" style={{ marginTop: 20 }}><span className="ln">Привет,</span><span className="ln">я <em>Камилла!</em></span></h2>
              <div className="prose" style={{ marginTop: 24 }}><p className="reveal d1">Я из Кисловодска — города гор, солнца и нарзана. Здесь всё настоящее растёт медленно и всерьёз. Так же я строю бренды.</p></div>
            </div>
            <figure className="about-fig">
              <div className="about-shot bleed">
                <OptimizedImage image="2" alt="Камилла — SMM-специалист" sizes="(min-width: 1024px) 440px, 100vw" dataPlx />
              </div>
              <figcaption className="shot-cap">Камилла · личный бренд · 2026</figcaption>
            </figure>
            <div className="about-more">
              <ul className="facts reveal">
                <li><span className="fk">01</span><span>По образованию — <b>технолог</b>. В маркетинге это мышление стало моим главным преимуществом.</span></li>
                <li><span className="fk">02</span><span>Годами работала <b>за кадром</b> своих проектов: создавала, упаковывала, развивала.</span></li>
                <li><span className="fk">03</span><span>Теперь помогаю <b>локальному бизнесу</b> превращать соцсети в источник заявок.</span></li>
              </ul>
              <p className="pull reveal d1">Горы учат смотреть шире. Солнце — быть заметной. Контент, характер и немного магии.</p>
            </div>
          </div>
          <div className="stats reveal">
            <div className="stat"><span className="num"><span data-count="20">0</span><sup>+</sup></span><span className="lbl">проектов упаковано</span></div>
            <div className="stat"><span className="num"><span data-count="5">0</span></span><span className="lbl">лет в маркетинге и производстве</span></div>
            <div className="stat"><span className="num"><span data-count="3">0</span><sup>×</sup></span><span className="lbl">средний рост охватов</span></div>
            <div className="stat"><span className="num">24/7</span><span className="lbl">на связи с клиентом</span></div>
          </div>
        </div>
      </section>

      <section className="sec sec--sand" id="why">
        <div className="wrap"><div className="why-grid">
          <div className="sticky-head">
            <div className="kicker reveal">Почему я</div>
            <h2 className="reveal" style={{ marginTop: 20 }}><span className="ln">Почему клиенты</span><span className="ln"><em>выбирают меня</em></span></h2>
            <p className="lede reveal d1">Четыре вещи, из-за которых со мной остаются после первого проекта.</p>
          </div>
          <div className="reasons">
            {reasons.map(([title, text], index) => (
              <article className={`reason reveal${index ? ` d${index}` : ''}`} key={title}>
                <span className="k">{String(index + 1).padStart(2, '0')}</span><h3>{title}</h3><p>{text}</p>
              </article>
            ))}
          </div>
        </div></div>
      </section>

      <section className="sec" id="services">
        <div className="wrap"><div className="services-grid">
          <div className="sticky-head">
            <div className="kicker reveal">Услуги</div>
            <h2 className="reveal" style={{ marginTop: 20 }}><span className="ln">Что я делаю</span><span className="ln"><em>для бизнеса</em></span></h2>
            <p className="lede reveal d1">Каждая услуга — с понятными этапами и сроками. Стоимость считаю индивидуально: под нишу, объём и задачу.</p>
          </div>
          <div className="svc-body-col">
            <ServiceList />
            <Button href={priceLink} className="btn--wide reveal" style={{ marginTop: 34 }} arrow>Рассчитать стоимость</Button>
          </div>
        </div></div>
      </section>

      <section className="proc sec--ink" id="process">
        <div className="proc-track" id="procTrack"><div className="proc-stage" id="procStage"><div className="wrap proc-grid">
          <div className="proc-head">
            <div className="kicker reveal">Этапы работы</div>
            <h2 className="reveal" style={{ marginTop: 20 }}><span className="ln">Как строится</span><span className="ln"><em>работа</em></span></h2>
            <p className="lede reveal d1">Шесть понятных шагов вместо «ждите результата» — вы всегда знаете, что происходит с проектом.</p>
            <div className="proc-progress" aria-hidden="true">
              <span className="count"><b id="procCur"><span>01</span></b><i>/</i><span className="tot">06</span></span>
              <span className="segs">{processSteps.map((step) => <span className="seg" key={step[0]}><i /></span>)}</span>
            </div>
          </div>
          <div className="proc-view" id="procView">
            {processSteps.map(([title, text], index) => (
              <article className="slide" key={title}>
                <span className="bignum" aria-hidden="true"><i>{String(index + 1).padStart(2, '0')}</i></span>
                <div className="slide-body"><h3>{title}</h3><p>{text}</p></div>
              </article>
            ))}
          </div>
        </div></div></div>
      </section>

      <section className="sec" id="case">
        <div className="wrap">
          <div className="kicker reveal">Кейс</div>
          <h2 className="reveal" style={{ marginTop: 20 }}><span className="ln">История проекта</span><span className="ln"><em>с характером</em></span></h2>
          <div className="case-layout" style={{ marginTop: 34 }}>
            <figure className="case-fig"><div className="case-shot bleed">
              <OptimizedImage image="3" alt="Кейс — образ и стиль бренда" sizes="(min-width: 1024px) 470px, 100vw" dataPlx />
              <span className="over">Локальный бренд · упаковка и контент</span>
            </div></figure>
            <div className="case-body">
              <div className="case-grid">
                <div className="case-block reveal"><div className="h"><span className="n">01</span> Запрос</div><p>Сильный продукт и слабый профиль: красивые фото есть, а системы нет. Заявки из соцсетей — случайные.</p></div>
                <div className="case-block reveal d1"><div className="h"><span className="n">02</span> Что я делала</div><ul>
                  <li>Разобрала бизнес на процессы, нашла реальную ценность продукта.</li><li>Сформулировала позиционирование и УТП по ЦА и конкурентам.</li><li>Собрала визуальную систему, переписала упаковку профиля.</li><li>Выстроила контент-план и воронку — от Reels до директа.</li>
                </ul></div>
                <div className="case-block reveal d2"><div className="h"><span className="n">03</span> Результат</div><ul>
                  <li>Профиль считывается за пять секунд: кто бренд и почему покупают здесь.</li><li>Контент ведёт человека к покупке, а не просто красиво выглядит.</li><li>Владелец понимает, что и зачем публикуется.</li>
                </ul><p className="case-note">Полный разбор с цифрами, скриншотами и до/после — отправлю в личные сообщения.</p></div>
              </div>
              <Button href={caseLink} className="btn--wide reveal" style={{ marginTop: 30 }} arrow>Получить полный кейс</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="wrap">
          <div className="contact-grid">
            <div>
              <div className="kicker reveal">Контакты</div>
              <h2 className="reveal" style={{ marginTop: 20 }}><span className="ln">Будем</span><span className="ln"><em>на связи</em></span></h2>
              <p className="lede reveal d1" style={{ maxWidth: '32ch' }}>Расскажите о своём проекте — отвечу в течение дня и скажу честно, чем могу быть полезна.</p>
              <div className="contact-aside reveal d2">
                <Button href={projectLink} className="btn--wide" arrow>Написать в Telegram</Button>
                <span className="contact-where"><span className="pin" /> Кисловодск · Кавминводы</span>
              </div>
            </div>
            <div className="socials">
              <SocialLink href="https://t.me/faalseee" type="telegram" name="Telegram" handle="@faalseee" />
              <SocialLink href="https://wa.me/79324131666" type="whatsapp" name="WhatsApp" handle="+7 932 413-16-66" delay="d1" />
              <SocialLink href="https://max.ru/u/f9LHodD0cOJsV-2Yt5X5XoZFP6lvKvFOk3A8a9Y1G4GK1nKauGdJsYWpR3M" type="max" name="Max" handle="Профиль в мессенджере" delay="d2" />
              <SocialLink href="https://www.instagram.com/613022_/" type="instagram" name="Instagram" handle="@613022_" delay="d3" legal />
            </div>
          </div>
          <p className="legal reveal"><sup>*</sup> Организация Meta Platforms Inc., а также её социальные сети Facebook и Instagram признаны экстремистскими и запрещены на территории РФ.</p>
        </div>
      </section>

      <footer>
        <div className="links"><a href="#services">Услуги</a><a href="#process">Этапы</a><a href="#case">Кейс</a><a href="/privacy">Политика конфиденциальности</a></div>
        <a className="dev" href="https://threeit.ru" target="_blank" rel="noopener" title="Разработка сайтов и веб-приложений — threeit">
          <span className="lbl">Разработано</span><span className="bar" aria-hidden="true" /><span className="mark" aria-hidden="true" /><span className="name">threeit</span><ArrowIcon external size={11} />
        </a>
        <span className="fmeta">© 2026 · <b>Kamilla</b> · SMM</span>
      </footer>

      <div className="dock" id="dock">
        <div className="dock-in">
          <span className="txt"><b>Обсудим ваш проект?</b><span>Отвечу сегодня</span></span>
          <a className="go" href={projectLink} target="_blank" rel="noopener">Написать<ArrowIcon size={13} /></a>
        </div>
      </div>
    </>
  )
}
