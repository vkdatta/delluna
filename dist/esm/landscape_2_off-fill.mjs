export const name="landscape_2_off-fill";
export const id="dl_6ef8216f91c739fc7a7c";
export const url=new URL("../icons/landscape_2_off-fill.svg?v=1a138ec39ffb278df16c849c9b137da38e1a04ca844325a3310e5ffeeaacfaaf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
