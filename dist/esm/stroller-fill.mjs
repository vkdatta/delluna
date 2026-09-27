export const name="stroller-fill";
export const id="dl_cdcb242a10c51d9d4d98";
export const url=new URL("../icons/stroller-fill.svg?v=8d7d0df3d147005b0c7df5c542a17d05556682f4d9c2570264ccd83c9b60752a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
