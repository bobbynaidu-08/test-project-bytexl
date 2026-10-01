/* ==========================================================================
   NoteFlow — Notes Management System
   ========================================================================== */

/* ============ 1. DESIGN TOKENS ============ */
:root {
  --bg: #F6F6FB;
  --surface: #FFFFFF;
  --surface-2: #FAFAFE;
  --primary: #4F46E5;
  --primary-dark: #4034C4;
  --primary-light: #EEF0FE;
  --text: #1D1E2C;
  --text-muted: #666B80;
  --text-faint: #9296A8;
  --border: #E7E8F1;
  --danger: #DC2626;
  --danger-light: #FEF2F2;
  --success: #059669;

  --note-blue-bg: #EFF5FF;   --note-blue-border: #BFDBFE;   --note-blue-text: #1D4ED8;
  --note-green-bg: #ECFDF5;  --note-green-border: #A7F3D0;  --note-green-text: #047857;
  --note-amber-bg: #FFFBEA;  --note-amber-border: #FDE68A;  --note-amber-text: #B45309;
  --note-pink-bg: #FDF2F8;   --note-pink-border: #FBCFE8;   --note-pink-text: #BE185D;
  --note-violet-bg: #F6F3FF; --note-violet-border: #DDD6FE; --note-violet-text: #7C3AED;
  --note-gray-bg: #F4F4F7;   --note-gray-border: #E1E2EA;   --note-gray-text: #4B5062;

  --font-display: 'Space Grotesk', 'Segoe UI', sans-serif;
  --font-body: 'Inter', 'Segoe UI', Arial, sans-serif;

  --space-xs: 0.4rem;
  --space-sm: 0.8rem;
  --space-md: 1.5rem;
  --space-lg: 2.2rem;
  --space-xl: 3rem;

  --radius-sm: 8px;
  --radius-md: 14px;
  --radius-lg: 18px;
  --radius-pill: 999px;

  --shadow-sm: 0 1px 2px rgba(31,33,60,.05), 0 1px 1px rgba(31,33,60,.04);
  --shadow-md: 0 8px 24px rgba(31,33,60,.08);
  --shadow-lg: 0 20px 48px rgba(31,33,60,.18);

  --transition: 0.2s ease;
  --sidebar-width: 260px;
  --topbar-height: 68px;
}

[data-theme="dark"] {
  --bg: #14151F;
  --surface: #1B1D2A;
  --surface-2: #20222F;
  --primary: #6366F1;
  --primary-dark: #818CF8;
  --primary-light: #262A44;
  --text: #EDEEF5;
  --text-muted: #A6A9BE;
  --text-faint: #7A7E96;
  --border: #2C2F42;
  --danger: #F87171;
  --danger-light: #3A1F26;

  --note-blue-bg: #1C2740;   --note-blue-border: #2A3B63;   --note-blue-text: #93C5FD;
  --note-green-bg: #17291F;  --note-green-border: #234333;  --note-green-text: #6EE7B7;
  --note-amber-bg: #2B2213;  --note-amber-border: #453419;  --note-amber-text: #FCD34D;
  --note-pink-bg: #2A1B24;   --note-pink-border: #452A38;   --note-pink-text: #F9A8D4;
  --note-violet-bg: #241D3B; --note-violet-border: #382C5C; --note-violet-text: #C4B5FD;
  --note-gray-bg: #23242F;   --note-gray-border: #33354200; --note-gray-text: #C2C4D3;
}

/* ============ 2. RESET ============ */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { font-size: 16px; }
body {
  font-family: var(--font-body);
  background: var(--bg);
  color: var(--text);
  line-height: 1.55;
  transition: background var(--transition), color var(--transition);
}
h1, h2, h3 { font-family: var(--font-display); line-height: 1.2; }
button { font-family: inherit; cursor: pointer; border: none; background: none; color: inherit; }
input, select, textarea { font-family: inherit; font-size: 0.95rem; color: var(--text); background: var(--surface); }
ul { list-style: none; }
a { color: inherit; }
img { max-width: 100%; display: block; }

a:focus-visible, button:focus-visible, input:focus-visible,
select:focus-visible, textarea:focus-visible {
  outline: 2px solid var(--primary);
  outline-offset: 2px;
}

/* ============ 3. APP SHELL / SIDEBAR ============ */
.app-shell { display: flex; min-height: 100vh; }

.sidebar {
  width: var(--sidebar-width);
  flex-shrink: 0;
  background: var(--surface);
  border-right: 1px solid var(--border);
  display: flex;
  flex-direction: column;
  padding: var(--space-md);
  position: sticky;
  top: 0;
  height: 100vh;
  overflow-y: auto;
  transition: background var(--transition), transform var(--transition);
  z-index: 200;
}

.sidebar-logo {
  display: flex;
  align-items: center;
  gap: var(--space-xs);
  padding-bottom: var(--space-md);
  margin-bottom: var(--space-md);
  border-bottom: 1px solid var(--border);
}
.logo-mark {
  display: inline-flex; align-items: center; justify-content: center;
  width: 34px; height: 34px; border-radius: var(--radius-sm);
  background: var(--primary-light); color: var(--primary); font-size: 1rem;
}
.logo-text { font-family: var(--font-display); font-weight: 700; font-size: 1.15rem; color: var(--primary); }
.sidebar-close { display: none; margin-left: auto; font-size: 1.1rem; color: var(--text-muted); }

.sidebar-nav { display: flex; flex-direction: column; gap: 0.2rem; }
.nav-item {
  display: flex; align-items: center; gap: var(--space-sm);
  padding: 0.7rem 0.8rem; border-radius: var(--radius-sm);
  font-size: 0.92rem; font-weight: 500; color: var(--text-muted);
  transition: background var(--transition), color var(--transition);
  text-align: left; width: 100%;
}
.nav-item i { width: 18px; text-align: center; color: var(--text-faint); transition: color var(--transition); }
.nav-item:hover { background: var(--bg); color: var(--text); }
.nav-item.active { background: var(--primary-light); color: var(--primary); }
.nav-item.active i { color: var(--primary); }
.nav-count {
  margin-left: auto; font-size: 0.72rem; font-weight: 700;
  background: var(--bg); color: var(--text-faint);
  padding: 0.1rem 0.5rem; border-radius: var(--radius-pill);
}
.nav-item.active .nav-count { background: var(--primary); color: #fff; }

.sidebar-categories { margin-top: var(--space-lg); }
.sidebar-subheading {
  font-size: 0.72rem; font-weight: 700; letter-spacing: 0.05em;
  text-transform: uppercase; color: var(--text-faint); margin-bottom: var(--space-sm);
  padding-left: 0.8rem;
}
.category-mini-list { display: flex; flex-direction: column; gap: 0.15rem; }
.category-mini-item {
  display: flex; align-items: center; gap: var(--space-sm);
  padding: 0.55rem 0.8rem; border-radius: var(--radius-sm);
  font-size: 0.88rem; color: var(--text-muted); transition: background var(--transition);
}
.category-mini-item:hover { background: var(--bg); color: var(--text); }
.category-dot { width: 9px; height: 9px; border-radius: 50%; flex-shrink: 0; }
.category-mini-item .nav-count { background: var(--bg); }

.sidebar-overlay {
  display: none;
  position: fixed; inset: 0; background: rgba(15,16,26,.5);
  z-index: 190;
}

/* ============ 4. MAIN AREA / TOPBAR ============ */
.main-area { flex: 1; min-width: 0; display: flex; flex-direction: column; }

.topbar {
  height: var(--topbar-height);
  display: flex; align-items: center; gap: var(--space-md);
  padding: 0 var(--space-lg);
  background: var(--surface);
  border-bottom: 1px solid var(--border);
  position: sticky; top: 0; z-index: 100;
}
.hamburger { display: none; font-size: 1.2rem; color: var(--text); }
.page-title { font-size: 1.15rem; font-weight: 700; white-space: nowrap; }

.topbar-search {
  flex: 1; max-width: 420px;
  display: flex; align-items: center; gap: var(--space-xs);
  background: var(--bg); border: 1px solid var(--border);
  border-radius: var(--radius-pill); padding: 0.55rem 1rem;
  color: var(--text-faint);
}
.topbar-search input { flex: 1; background: transparent; border: none; color: var(--text); }
.topbar-search input:focus-visible { outline: none; }
.topbar-search:focus-within { border-color: var(--primary); }

.topbar-actions { display: flex; align-items: center; gap: var(--space-sm); margin-left: auto; }
.icon-btn {
  position: relative;
  display: inline-flex; align-items: center; justify-content: center;
  width: 38px; height: 38px; border-radius: var(--radius-sm);
  color: var(--text-muted); transition: background var(--transition), color var(--transition);
}
.icon-btn:hover { background: var(--primary-light); color: var(--primary); }
.badge-dot {
  position: absolute; top: 6px; right: 7px;
  width: 7px; height: 7px; border-radius: 50%; background: var(--danger);
}
.user-chip { display: flex; align-items: center; gap: 0.5rem; padding-left: var(--space-sm); border-left: 1px solid var(--border); }
.avatar {
  width: 34px; height: 34px; border-radius: 50%;
  background: var(--primary); color: #fff;
  display: inline-flex; align-items: center; justify-content: center;
  font-size: 0.75rem; font-weight: 700;
}
.user-chip-name { font-size: 0.88rem; font-weight: 600; }

/* ============ 5. CONTENT ============ */
.content { padding: var(--space-lg); max-width: 1400px; width: 100%; margin: 0 auto; }

.welcome-block {
  display: flex; align-items: flex-end; justify-content: space-between;
  gap: var(--space-md); flex-wrap: wrap; margin-bottom: var(--space-lg);
}
.welcome-text h2 { font-size: clamp(1.4rem, 2.2vw, 1.8rem); margin-bottom: 0.3rem; }
.welcome-text p { color: var(--text-muted); }

.btn {
  display: inline-flex; align-items: center; gap: 0.5rem;
  padding: 0.75rem 1.3rem; font-size: 0.92rem; font-weight: 600;
  border-radius: var(--radius-sm); white-space: nowrap;
  transition: background var(--transition), transform var(--transition), box-shadow var(--transition);
}
.btn-primary { background: var(--primary); color: #fff; box-shadow: var(--shadow-sm); }
.btn-primary:hover { background: var(--primary-dark); transform: translateY(-1px); box-shadow: var(--shadow-md); }
.btn-secondary { background: var(--bg); color: var(--text); border: 1px solid var(--border); }
.btn-secondary:hover { background: var(--border); }
.btn-danger { background: var(--danger); color: #fff; }
.btn-danger:hover { filter: brightness(0.92); }
.btn-danger-outline { background: var(--danger-light); color: var(--danger); border: 1px solid var(--danger); }
.btn-danger-outline:hover { background: var(--danger); color: #fff; }

/* ============ 6. STATS ============ */
.stats-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: var(--space-md); margin-bottom: var(--space-lg); }
.stat-card {
  display: flex; align-items: center; gap: var(--space-md);
  background: var(--surface); border: 1px solid var(--border);
  border-radius: var(--radius-lg); padding: var(--space-md);
  box-shadow: var(--shadow-sm); transition: box-shadow var(--transition), transform var(--transition);
}
.stat-card:hover { box-shadow: var(--shadow-md); transform: translateY(-2px); }
.stat-icon { width: 46px; height: 46px; border-radius: var(--radius-md); display: inline-flex; align-items: center; justify-content: center; font-size: 1.1rem; flex-shrink: 0; }
.icon-total { background: var(--note-blue-bg); color: var(--note-blue-text); }
.icon-fav { background: var(--note-pink-bg); color: var(--note-pink-text); }
.icon-pin { background: var(--note-amber-bg); color: var(--note-amber-text); }
.icon-archive { background: var(--note-violet-bg); color: var(--note-violet-text); }
.stat-body { display: flex; flex-direction: column; }
.stat-value { font-family: var(--font-display); font-size: 1.5rem; font-weight: 700; }
.stat-label { font-size: 0.82rem; color: var(--text-muted); }

/* ============ 7. TOOLBAR ============ */
.toolbar {
  display: flex; align-items: center; justify-content: space-between;
  gap: var(--space-md); flex-wrap: wrap; margin-bottom: var(--space-md);
}
.filter-chips { display: flex; gap: 0.5rem; flex-wrap: wrap; }
.chip {
  padding: 0.5rem 1rem; border-radius: var(--radius-pill);
  font-size: 0.85rem; font-weight: 600; color: var(--text-muted);
  background: var(--surface); border: 1px solid var(--border);
  transition: background var(--transition), color var(--transition);
}
.chip:hover { background: var(--primary-light); color: var(--primary); }
.chip.active { background: var(--primary); color: #fff; border-color: var(--primary); }

.toolbar-right { display: flex; gap: 0.6rem; }
.select-input {
  padding: 0.55rem 0.9rem; border-radius: var(--radius-sm);
  border: 1px solid var(--border); background: var(--surface); color: var(--text-muted);
}
.select-input:hover { border-color: var(--primary); color: var(--text); }

.trash-bar {
  display: flex; align-items: center; justify-content: space-between;
  gap: var(--space-md); background: var(--danger-light); border: 1px solid var(--danger);
  color: var(--danger); padding: var(--space-sm) var(--space-md);
  border-radius: var(--radius-md); margin-bottom: var(--space-md); font-size: 0.88rem;
}

/* ============ 8. NOTES GRID / CARDS ============ */
.notes-grid {
  display: grid; grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
  gap: var(--space-md);
}
.note-card {
  display: flex; flex-direction: column; gap: 0.6rem;
  background: var(--surface); border: 1px solid var(--border);
  border-top: 3px solid transparent;
  border-radius: var(--radius-lg); padding: var(--space-md);
  box-shadow: var(--shadow-sm);
  transition: box-shadow var(--transition), transform var(--transition);
  position: relative;
}
.note-card:hover { box-shadow: var(--shadow-md); transform: translateY(-3px); }
.note-card.is-pinned { border-top-style: solid; }

.note-card.color-blue   { border-top-color: var(--note-blue-text); }
.note-card.color-green  { border-top-color: var(--note-green-text); }
.note-card.color-amber  { border-top-color: var(--note-amber-text); }
.note-card.color-pink   { border-top-color: var(--note-pink-text); }
.note-card.color-violet { border-top-color: var(--note-violet-text); }
.note-card.color-gray   { border-top-color: var(--note-gray-text); }

.note-top { display: flex; align-items: center; justify-content: space-between; gap: 0.5rem; }
.note-tag {
  display: inline-block; padding: 0.28rem 0.7rem; font-size: 0.72rem;
  font-weight: 700; border-radius: var(--radius-pill); border: 1px solid transparent;
}
.tag-color-blue   { background: var(--note-blue-bg);   color: var(--note-blue-text);   border-color: var(--note-blue-border); }
.tag-color-green  { background: var(--note-green-bg);  color: var(--note-green-text);  border-color: var(--note-green-border); }
.tag-color-amber  { background: var(--note-amber-bg);  color: var(--note-amber-text);  border-color: var(--note-amber-border); }
.tag-color-pink   { background: var(--note-pink-bg);   color: var(--note-pink-text);   border-color: var(--note-pink-border); }
.tag-color-violet { background: var(--note-violet-bg); color: var(--note-violet-text); border-color: var(--note-violet-border); }
.tag-color-gray   { background: var(--note-gray-bg);   color: var(--note-gray-text);   border-color: var(--note-gray-border); }

.note-top-icons { display: flex; gap: 0.2rem; }
.note-mini-btn { width: 30px; height: 30px; border-radius: var(--radius-sm); display: inline-flex; align-items: center; justify-content: center; color: var(--text-faint); transition: background var(--transition), color var(--transition); }
.note-mini-btn:hover { background: var(--primary-light); color: var(--primary); }
.note-mini-btn.pin-active { color: var(--note-amber-text); }
.note-mini-btn.fav-active { color: var(--note-pink-text); }

.note-title { font-size: 1.05rem; font-weight: 700; }
.note-preview {
  color: var(--text-muted); font-size: 0.88rem; flex: 1;
  display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden;
}
.note-tags-row { display: flex; gap: 0.35rem; flex-wrap: wrap; }
.note-mini-tag { font-size: 0.7rem; color: var(--text-faint); background: var(--bg); padding: 0.15rem 0.5rem; border-radius: var(--radius-pill); }

.note-dates { font-size: 0.72rem; color: var(--text-faint); }

.note-footer { display: flex; align-items: center; justify-content: space-between; padding-top: 0.6rem; border-top: 1px solid var(--border); }
.note-actions { display: flex; gap: 0.15rem; }

/* Empty states */
.empty-state { text-align: center; padding: var(--space-xl) var(--space-md); }
.empty-icon { font-size: 2.4rem; color: var(--text-faint); margin-bottom: var(--space-sm); }
.empty-state h3 { font-size: 1.1rem; margin-bottom: 0.3rem; }
.empty-state p { color: var(--text-muted); margin-bottom: var(--space-md); }

/* ============ 9. MODALS ============ */
.modal-overlay {
  display: none; position: fixed; inset: 0; z-index: 300;
  background: rgba(15,16,26,.55);
  align-items: center; justify-content: center; padding: var(--space-md);
}
.modal-overlay.open { display: flex; }
.modal {
  background: var(--surface); border-radius: var(--radius-lg);
  width: 100%; max-width: 560px; max-height: 90vh; overflow-y: auto;
  box-shadow: var(--shadow-lg);
}
.modal-small { max-width: 420px; }
.modal-header {
  display: flex; align-items: center; justify-content: space-between;
  padding: var(--space-md); border-bottom: 1px solid var(--border);
}
.modal-header h2 { font-size: 1.1rem; }
.modal-body { padding: var(--space-md); display: flex; flex-direction: column; gap: var(--space-md); }
.modal-footer { display: flex; justify-content: flex-end; gap: 0.6rem; padding: var(--space-md); border-top: 1px solid var(--border); }

.form-group { display: flex; flex-direction: column; gap: 0.35rem; }
.form-group label { font-size: 0.85rem; font-weight: 600; }
.form-group .hint { font-weight: 400; color: var(--text-faint); font-size: 0.78rem; }
.required { color: var(--danger); }
.form-group input, .form-group select, .form-group textarea {
  padding: 0.65rem 0.85rem; border: 1px solid var(--border); border-radius: var(--radius-sm);
  background: var(--bg);
}
.form-group input:focus-visible, .form-group select:focus-visible, .form-group textarea:focus-visible {
  outline: none; border-color: var(--primary); box-shadow: 0 0 0 3px var(--primary-light);
}
.form-group textarea { resize: vertical; min-height: 120px; }
.field-error { font-size: 0.78rem; color: var(--danger); min-height: 1em; }
.form-row { display: grid; grid-template-columns: 1fr 1fr; gap: var(--space-md); }
.form-row.checkboxes { grid-template-columns: 1fr 1fr; }

.checkbox-label { display: flex; align-items: center; gap: 0.5rem; font-size: 0.88rem; cursor: pointer; }
.checkbox-label input { width: auto; }

.color-picker { display: flex; gap: 0.5rem; }
.color-swatch { width: 30px; height: 30px; border-radius: 50%; border: 2px solid transparent; transition: transform var(--transition), border-color var(--transition); }
.color-swatch:hover { transform: scale(1.1); }
.color-swatch.active { border-color: var(--text); }
.swatch-blue { background: var(--note-blue-text); }
.swatch-green { background: var(--note-green-text); }
.swatch-amber { background: var(--note-amber-text); }
.swatch-pink { background: var(--note-pink-text); }
.swatch-violet { background: var(--note-violet-text); }
.swatch-gray { background: var(--note-gray-text); }

/* ============ 10. TOASTS ============ */
.toast-container {
  position: fixed; bottom: var(--space-lg); right: var(--space-lg);
  display: flex; flex-direction: column; gap: 0.6rem; z-index: 400;
}
.toast {
  display: flex; align-items: center; gap: 0.6rem;
  background: var(--surface); color: var(--text);
  border: 1px solid var(--border); box-shadow: var(--shadow-md);
  padding: 0.8rem 1.1rem; border-radius: var(--radius-sm);
  font-size: 0.88rem; min-width: 240px;
  animation: toast-in 0.25s ease;
}
.toast i { color: var(--success); }
.toast.toast-danger i { color: var(--danger); }
@keyframes toast-in {
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: translateY(0); }
}

/* ============ 11. RESPONSIVE ============ */
@media (max-width: 1100px) {
  .stats-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 900px) {
  .sidebar {
    position: fixed; left: 0; top: 0; transform: translateX(-100%);
    box-shadow: var(--shadow-lg);
  }
  .sidebar.open { transform: translateX(0); }
  .sidebar-close { display: inline-flex; align-items: center; justify-content: center; }
  .sidebar-overlay.open { display: block; }
  .hamburger { display: inline-flex; align-items: center; justify-content: center; }
  .page-title { display: none; }
  .form-row { grid-template-columns: 1fr; }
}

@media (max-width: 640px) {
  .content { padding: var(--space-md); }
  .topbar { padding: 0 var(--space-md); gap: var(--space-sm); }
  .topbar-search { max-width: none; }
  .user-chip-name { display: none; }
  .stats-grid { grid-template-columns: 1fr 1fr; gap: 0.6rem; }
  .welcome-block { align-items: flex-start; }
  .welcome-block .btn { width: 100%; justify-content: center; }
  .notes-grid { grid-template-columns: 1fr; }
  .toolbar { flex-direction: column; align-items: stretch; }
  .toolbar-right { flex-direction: column; }
  .select-input { width: 100%; }
}

@media (max-width: 420px) {
  .stats-grid { grid-template-columns: 1fr; }
}
