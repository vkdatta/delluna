export const name="alarm_on-fill";
export const id="dl_797c8a14fd75100bd75e";
export const url=new URL("../icons/alarm_on-fill.svg?v=91b8e5c5f0fe4c8312550923b44e9fb968775dc50aa8efd0ec834830a47b61cb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
