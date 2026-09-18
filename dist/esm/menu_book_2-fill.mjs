export const name="menu_book_2-fill";
export const id="dl_6dabd971107f4367a42d";
export const url=new URL("../icons/M/menu_book_2-fill.svg?v=24c83f12b3a6d2c3a11f7dc0d179efad74acc25d298ea6b370600fa8b6813bbc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
