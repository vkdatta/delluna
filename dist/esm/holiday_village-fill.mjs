export const name="holiday_village-fill";
export const id="dl_ddc64f82d9b3a9c37a05";
export const url=new URL("../icons/holiday_village-fill.svg?v=1df3a52a578eda54be058d8f6c073808d58159ae5185b679eeff9e0d48a51923",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
