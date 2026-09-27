export const name="wand_stars-fill";
export const id="dl_9ff3b75643e9a93f0b73";
export const url=new URL("../icons/wand_stars-fill.svg?v=6ad45170428afad4014c1a87481bf0943353caaaf139a5e68b39250a2036ae2f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
