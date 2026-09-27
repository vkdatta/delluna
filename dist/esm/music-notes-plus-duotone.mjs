export const name="music-notes-plus-duotone";
export const id="dl_cb1f7eb399a84932a33b";
export const url=new URL("../icons/music-notes-plus-duotone.svg?v=1a0b1f764c2e978c48395772a5489c44067cc0ecbc50566c500995a2306e1162",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
