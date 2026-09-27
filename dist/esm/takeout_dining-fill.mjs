export const name="takeout_dining-fill";
export const id="dl_8c3e49a7692c5b3eb289";
export const url=new URL("../icons/takeout_dining-fill.svg?v=87791771dfb87430e756973324713dec942e54ae819dbba6ce7b5e1f39793569",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
