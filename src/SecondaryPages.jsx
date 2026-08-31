import { useEffect } from 'react'

function useDocumentMeta(title, themeColor) {
  useEffect(() => {
    document.title = title
    const theme = document.querySelector('meta[name="theme-color"]')
    const robots = document.querySelector('meta[name="robots"]') ?? document.createElement('meta')
    theme?.setAttribute('content', themeColor)
    robots.setAttribute('name', 'robots')
    robots.setAttribute('content', 'noindex')
    if (!robots.parentNode) document.head.appendChild(robots)
  }, [themeColor, title])
}

const privacySections = [
  {
    title: 'Общие положения',
    paragraphs: ['Настоящая политика описывает, как обрабатываются данные посетителей сайта. Сайт является персональной страницей SMM-специалиста Камиллы и носит информационный характер.'],
  },
  {
    title: 'Какие данные собирает сайт',
    paragraphs: [
      'Сайт не содержит форм обратной связи, не запрашивает регистрацию и не собирает персональные данные посетителей: имя, телефон, e-mail и другие сведения на сайте не вводятся и не сохраняются.',
      'Связь происходит только по вашей инициативе — через внешние мессенджеры и социальные сети по ссылкам на сайте.',
    ],
  },
  {
    title: 'Cookie и аналитика',
    paragraphs: [
      'Сайт не использует собственные cookie-файлы для отслеживания и не подключает внешние системы веб-аналитики.',
      'Хостинг-провайдер может автоматически фиксировать технические сведения о запросах (IP-адрес, тип браузера, время обращения) в служебных журналах — это стандартная работа любого веб-сервера, необходимая для его функционирования и безопасности.',
    ],
  },
  {
    title: 'Внешние сервисы',
    paragraphs: ['На сайте есть ссылки на сторонние площадки. При переходе по ним начинают действовать правила и политики этих сервисов:'],
    list: [
      <>Telegram — <a href="https://telegram.org/privacy" target="_blank" rel="noopener">telegram.org/privacy</a></>,
      <>WhatsApp — <a href="https://www.whatsapp.com/legal/privacy-policy" target="_blank" rel="noopener">whatsapp.com/legal</a></>,
      <>MAX — политика сервиса на его официальном сайте</>,
      <>Instagram* — политика сервиса на его официальном сайте</>,
    ],
    after: 'Шрифты подгружаются с сервиса Google Fonts, который при загрузке получает IP-адрес запроса.',
  },
  {
    title: 'Данные, переданные в переписке',
    paragraphs: ['Если вы пишете в мессенджер, вы добровольно передаёте те сведения, которые указываете сами. Они используются исключительно для обсуждения и выполнения работы, не передаются третьим лицам и не публикуются без вашего согласия.'],
  },
  {
    title: 'Ваши права',
    paragraphs: ['Вы вправе запросить удаление переписки и переданных в ней сведений. Для этого напишите в любой из указанных на сайте мессенджеров.'],
  },
  {
    title: 'Изменения политики',
    paragraphs: ['Политика может обновляться. Актуальная редакция всегда размещена на этой странице.'],
  },
]

export function PrivacyPage() {
  useDocumentMeta('Политика конфиденциальности · Камилла SMM', '#f3efe7')
  return (
    <div className="privacy-view">
      <div className="privacy-top"><div className="privacy-wrap">
        <a href="/" className="privacy-brand">Kamilla<i>.</i></a>
        <a href="/" className="privacy-back">На главную</a>
      </div></div>
      <header className="privacy-hero"><div className="privacy-wrap">
        <div className="privacy-eyebrow">Документ</div>
        <h1>Политика <em>конфиденциальности</em></h1>
        <div className="privacy-updated">Редакция от 2026 года</div>
      </div></header>
      <main className="privacy-wrap">
        {privacySections.map((section, index) => (
          <section className="privacy-block" key={section.title}>
            <h2><span className="n">{String(index + 1).padStart(2, '0')}</span> {section.title}</h2>
            {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            {section.list && <ul>{section.list.map((item, itemIndex) => <li key={itemIndex}>{item}</li>)}</ul>}
            {section.after && <p>{section.after}</p>}
          </section>
        ))}
        <div className="privacy-note"><b>Контакт для вопросов</b><p>По любым вопросам о данных — <a href="https://t.me/faalseee" target="_blank" rel="noopener">Telegram</a>.</p></div>
        <p className="privacy-legal"><sup>*</sup> Организация Meta Platforms Inc., а также её социальные сети Facebook и Instagram признаны экстремистскими и запрещены на территории РФ.</p>
        <footer>© 2026 · <b>Kamilla</b> · SMM</footer>
      </main>
    </div>
  )
}

export function NotFoundPage() {
  useDocumentMeta('Страница не найдена · Камилла SMM', '#15120e')
  return (
    <main className="not-found-view">
      <div className="not-found-eyebrow">Ошибка 404</div>
      <div className="not-found-code">404</div>
      <h1>Такой страницы <em>не существует</em></h1>
      <p>Возможно, ссылка устарела или в адресе опечатка. Но всё интересное — на главной.</p>
      <a className="not-found-button" href="/"><span>Вернуться на главную</span><svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg></a>
      <div className="not-found-alt"><a href="/#services">Услуги</a><a href="/#case">Кейс</a><a href="https://t.me/faalseee" target="_blank" rel="noopener">Написать в Telegram</a></div>
    </main>
  )
}
