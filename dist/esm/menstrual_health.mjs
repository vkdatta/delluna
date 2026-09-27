export const name="menstrual_health";
export const id="dl_eaed485255e5793b6e76";
export const url=new URL("../icons/menstrual_health.svg?v=d02ff2db465c22c367fb75e5916a99917d7d11cb2d89c7d675c00c9b54b9c9cb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
