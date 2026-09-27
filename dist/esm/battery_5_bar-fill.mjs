export const name="battery_5_bar-fill";
export const id="dl_0560cafdd421ea7e6147";
export const url=new URL("../icons/battery_5_bar-fill.svg?v=1d246539bfeba96dd3ba707e7dd7398a1f96e941edfac35d4c93e13268ce23c2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
