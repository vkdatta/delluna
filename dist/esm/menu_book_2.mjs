export const name="menu_book_2";
export const id="dl_ff28f3505b4d40be99e0";
export const url=new URL("../icons/M/menu_book_2.svg?v=7f513afb1594988f276b58dd7e2b97f0912064c18bc20c3f4db3038a069ebed8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
