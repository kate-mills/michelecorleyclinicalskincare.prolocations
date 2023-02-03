import * as React from "react"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header
    style={{
      margin: `0 auto`,
      padding: `var(--space-4) var(--size-gutter)`,
      display: `flex`,
      alignItems: `center`,
      justifyContent: `space-between`,
    }}
  >
    <Link
      to="/"
      style={{
        fontSize: `var(--font-sm)`,
        textDecoration: `none`,
      }}
    >
      {siteTitle}
    </Link>
    <img
      alt="MCC Data"
      height={20}
      style={{ margin: 0 }}
      src="data:image/webp;base64,UklGRnYAAABXRUJQVlA4IGoAAADwAwCdASoUAA8APtFUo0uoJKMhsAgBABoJZwAAWlxvn0v8KqhcmJBAAP72CdRkvGSosLeOXuOFgWezUQcogvNqigYXwREUjk3XnVUSzlnSa7ZQ7CsyEnj+X196reFgbKPYDtZtM+E2U0AA"
    />
  </header>
)

export default Header
