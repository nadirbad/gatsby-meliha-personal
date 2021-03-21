/** @jsx jsx */
import { jsx } from "theme-ui"

const Footer = () => {
  const year = (new Date()).getFullYear();

  return (
    <footer
      className="site-footer"
      sx={{
        bg: "primary",
      }}
    >
      <div className="container">
        <p>
          © {year} - Sva prava zadržana. Zabranjeno preuzimanje sadržaja bez
          dozvole autora.
        </p>
      </div>
    </footer>
  )
}

export default Footer
