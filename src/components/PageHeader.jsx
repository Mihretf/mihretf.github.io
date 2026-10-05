export default function PageHeader({ eyebrow, title, intro }) {
  return (
    <header className="page-intro">
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      {intro ? <p className="lede page-lede">{intro}</p> : null}
    </header>
  )
}
