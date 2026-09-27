export const name="door_sensor-fill";
export const id="dl_cd85c53cda6de57a1c35";
export const url=new URL("../icons/door_sensor-fill.svg?v=8b35e73fbeb1ed96a27f9f9e76c774e7fde9655c5d45d811c3e44ad3cec180ce",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
