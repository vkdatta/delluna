export const name="schedule-fill";
export const id="dl_7239734e1e6749a59fa3";
export const url=new URL("../icons/schedule-fill.svg?v=26ad5abfbe891fb96e92cdcf93e6fd44803765e5c1918bc9bdbaffc468c4735c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
