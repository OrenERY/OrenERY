export default function Footer() {
  return (
    <footer className="bg-[var(--retro-border)] text-center py-8 px-4 border-t-4 border-[var(--retro-bg-dark)]">
      <a
        href="https://github.com/OrenERY"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[var(--retro-yellow)] hover:text-white text-xl inline-block pixel-border px-6 py-3 bg-[var(--retro-bg-dark)] shadow-[3px_3px_0_0_var(--retro-red)] hover:shadow-[1px_1px_0_0_var(--retro-red)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
        style={{ fontFamily: 'var(--font-pixel)', fontSize: '12px' }}
      >
        Look at my other works!
      </a>
    </footer>
  )
}
