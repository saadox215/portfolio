export const Menu = ({ onSectionChange, menuOpened, setMenuOpened }) => <>
  <button aria-label="Toggle navigation" onClick={() => setMenuOpened(!menuOpened)} className="menu-toggle">
    <span className={menuOpened ? "open" : ""} /><span className={menuOpened ? "hidden" : ""} /><span className={menuOpened ? "open reverse" : ""} />
  </button>
  <nav className={`side-menu ${menuOpened ? "opened" : ""}`} aria-label="Main navigation">
    <div className="menu-inner"><p className="eyebrow">SAAD AFIFI / NAVIGATION</p><MenuButton label="About" onClick={() => onSectionChange(0)} number="01" /><MenuButton label="Toolkit" onClick={() => onSectionChange(1)} number="02" /><MenuButton label="Work" onClick={() => onSectionChange(2)} number="03" /><MenuButton label="Contact" onClick={() => onSectionChange(3)} number="04" /></div>
  </nav>
</>;
const MenuButton = ({ label, number, onClick }) => <button onClick={onClick} className="menu-button"><span>{number}</span>{label}<b>↗</b></button>;
