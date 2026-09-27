export const name="acute";
export const id="dl_40210cc1b8c9f12ccb46";
export const url=new URL("../icons/acute.svg?v=8df25e13a0a69091cc88e081b805642d038aa04411d63061d6942643d1f5a5a7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
