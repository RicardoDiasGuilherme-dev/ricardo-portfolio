export default function SectionHeading({
  eyebrow,
  title,
  children,
  id,
  className = '',
}) {
  return (
    <div className={`section-heading ${className}`}>
      <p className="eyebrow">
        <span />
        {eyebrow}
      </p>
      <h2 id={id}>{title}</h2>
      {children && <p className="section-description">{children}</p>}
    </div>
  )
}
