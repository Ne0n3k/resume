type BadgeListProps = {
  items: string[]
}

export const BadgeList = ({ items }: BadgeListProps) => (
  <ul className="badge-list">
    {items.map((item) => (
      <li key={item} className="badge-list__item">
        {item}
      </li>
    ))}
  </ul>
)

