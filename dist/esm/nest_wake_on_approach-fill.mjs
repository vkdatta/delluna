export const name="nest_wake_on_approach-fill";
export const id="dl_e7ba86657f2529a79db1";
export const url=new URL("../icons/nest_wake_on_approach-fill.svg?v=adc14928fd67ad5b52547fbe39ffe17cc6104ecd8b9553341050bf9404e95266",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
