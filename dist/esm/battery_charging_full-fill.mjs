export const name="battery_charging_full-fill";
export const id="dl_6c2bbe5f669e47479fe6";
export const url=new URL("../icons/B/battery_charging_full-fill.svg?v=daa438ac1ae3ce13b22a43365281af5feb8e34f5fe31711c8cdfe9e5a82098c5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
