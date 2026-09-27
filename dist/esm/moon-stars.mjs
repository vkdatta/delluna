export const name="moon-stars";
export const id="dl_1b67b415954e445881c5";
export const url=new URL("../icons/moon-stars.svg?v=0d855f9fd55621c7d72ca3163c6b6f7e9e65b348777e1ff88bdbe2cee7516f83",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
