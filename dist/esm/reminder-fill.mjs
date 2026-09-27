export const name="reminder-fill";
export const id="dl_8f8f259f790cb7583f9f";
export const url=new URL("../icons/reminder-fill.svg?v=a49ae69227430631a1aa19529219a1214209adf2f06693de022799fe4d6d1473",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
