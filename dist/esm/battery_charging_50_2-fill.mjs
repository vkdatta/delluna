export const name="battery_charging_50_2-fill";
export const id="dl_02ba2b30b6bdf7bb1890";
export const url=new URL("../icons/battery_charging_50_2-fill.svg?v=d4ad543713907e762708dff5281e84e294f4b0d2537c9c45dce0953b492f17b7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
