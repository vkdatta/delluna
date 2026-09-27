export const name="battery_horiz_000";
export const id="dl_ebe727b6031fd20ef7fc";
export const url=new URL("../icons/battery_horiz_000.svg?v=f1e3b194cbb524c150072f2d05f3aa27a2cfeb4faeb07f6a6ae4d098036a6b0f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
