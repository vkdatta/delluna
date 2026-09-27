export const name="rectangle-dashed-light";
export const id="dl_3255dfef624b43528139";
export const url=new URL("../icons/rectangle-dashed-light.svg?v=0ec5785630399ec931405d6b215c90758b2997fbb8d06c396d630e47b9b27149",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
