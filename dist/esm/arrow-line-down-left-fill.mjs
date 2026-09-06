export const name="arrow-line-down-left-fill";
export const id="dl_c52070c60c0f46a3a4a1";
export const url=new URL("../icons/arrow-line-down-left-fill.svg?v=7425059db820567bc37c2c1b2e0858b3bc9fb133298143a9d81123b4599094cc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
