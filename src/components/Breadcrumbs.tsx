import Link from "next/link";

interface BreadcrumbItem {
  name: string;
  href?: string;
  current?: boolean;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Хлебные крошки" className="mb-6">
      <ol className="flex items-center space-x-2 text-sm text-brand-gray" itemScope itemType="https://schema.org/BreadcrumbList">
        {items.map((item, index) => (
          <li key={index} className={index > 0 ? "before:content-['/'] before:mx-2" : ""}>
            <span itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              {item.href && !item.current ? (
                <Link href={item.href} className="hover:text-brand-yellow" itemProp="item">
                  <span itemProp="name">{item.name}</span>
                </Link>
              ) : (
                <span itemProp="name" className={item.current ? "text-white font-medium" : ""}>
                  {item.name}
                </span>
              )}
              <meta itemProp="position" content={`${index + 1}`} />
            </span>
          </li>
        ))}
      </ol>
    </nav>
  );
}