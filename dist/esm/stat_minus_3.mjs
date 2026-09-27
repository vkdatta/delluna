export const name="stat_minus_3";
export const id="dl_9f9c6071c924bfdfc343";
export const url=new URL("../icons/stat_minus_3.svg?v=75dd5fa9fffeee5543d9a2045ee92f5bc13b403b1c83fa184927223e58e0496c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
