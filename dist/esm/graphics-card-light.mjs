export const name="graphics-card-light";
export const id="dl_db16b3f17fe545049944";
export const url=new URL("../icons/graphics-card-light.svg?v=d4e23df9cf30aea9660e0c1ff93dea8b22fa888659214e27b2faac7823b161e6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
