export const name="nest_display";
export const id="dl_73a1d22fb70345c4af54";
export const url=new URL("../icons/N/nest_display.svg?v=658fc153f48d159fd71ba36043ce7b0ffeed74d1d28482d3e734e8d688938b3f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
