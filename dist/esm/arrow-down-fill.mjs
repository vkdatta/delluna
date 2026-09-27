export const name="arrow-down-fill";
export const id="dl_cf68de2e45614fdda4ba";
export const url=new URL("../icons/arrow-down-fill.svg?v=6d45bf3cb355fdcf5c80cb80d25944873ae6baf9fe3b14ce8dcea29d00913888",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
