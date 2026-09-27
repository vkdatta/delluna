export const name="wand_stars-fill";
export const id="dl_3c0153774d9955bb914f";
export const url=new URL("../icons/wand_stars-fill.svg?v=65d8d62ef6331df8ea3125dce180761e9a3e074ccb9b96b66af8274d151c9b56",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
