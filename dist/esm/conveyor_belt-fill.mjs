export const name="conveyor_belt-fill";
export const id="dl_c0f2adf57cce4ba28c40";
export const url=new URL("../icons/conveyor_belt-fill.svg?v=15a185e3f4cc88ebc46d8b74a7eb051fed0d631d3a6815a3331e14da03c62798",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
