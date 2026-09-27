export const name="sticky_note_2";
export const id="dl_dd854194bcd1fc6529fc";
export const url=new URL("../icons/sticky_note_2.svg?v=ae2e7d64e9ac9ab1e41f50dded033f871bc2ed36ffa447e9eb473338a2717a3f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
