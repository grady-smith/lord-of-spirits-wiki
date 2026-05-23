import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/footer.scss"
import { version } from "../../package.json"
import { i18n } from "../i18n"

interface Options {
  links: Record<string, string>
}

export default ((opts?: Options) => {
  const Footer: QuartzComponent = ({ displayClass, cfg }: QuartzComponentProps) => {
    const year = new Date().getFullYear()
    const links = opts?.links ?? []
    return (
      <footer class={`${displayClass ?? ""}`}>
        <hr />
        <div style={{ fontSize: "0.8rem", textAlign: "left", opacity: 0.8 }}>
          <h3>Disclaimer & Copyright Notice</h3>
          <p>
            <strong>Unofficial Fan Project:</strong> This website is an independent, non-commercial fan repository and is not affiliated with, endorsed by, or officially connected to Ancient Faith Ministries, Inc., or the hosts of the show.
          </p>
          <p>
            <strong>Copyright Attribution:</strong> All original podcast audio, titles, theology concepts, and primary source material belong exclusively to the original creators and copyright holders: <strong>© 2020–2026 Ancient Faith Ministries, Inc.</strong>, Fr. Andrew Stephen Damick, and Fr. Stephen De Young.
          </p>
          <p>
            <strong>AI & Transcription Notice:</strong> The summaries, transcripts, and knowledge graph connections found here are autonomously generated and indexed using artificial intelligence. Because these materials are machine-processed, they may contain transcription errors, mishearings, or inaccuracies. For the official, authoritative, and definitive audio versions of all episodes, please visit the official <a href="https://www.ancientfaith.com/podcasts/lordofspirits/">Ancient Faith Radio Lord of Spirits Page</a>.
          </p>
        </div>
        <p style={{ marginTop: "2rem" }}>
          {i18n(cfg.locale).components.footer.createdWith}{" "}
          <a href="https://quartz.jzhao.xyz/">Quartz v{version}</a> © {year}
        </p>
        <ul>
          {Object.entries(links).map(([text, link]) => (
            <li>
              <a href={link}>{text}</a>
            </li>
          ))}
        </ul>
      </footer>
    )
  }

  Footer.css = style
  return Footer
}) satisfies QuartzComponentConstructor
