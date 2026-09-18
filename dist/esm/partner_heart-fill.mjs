export const name="partner_heart-fill";
export const id="dl_03e9d54875a84b1fa723";
export const url=new URL("../icons/P/partner_heart-fill.svg?v=4dbdc404c81862dee990b5f54432bd8293829ca373e790f7e874819c3a8d8cb6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
