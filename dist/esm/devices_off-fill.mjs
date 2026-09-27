export const name="devices_off-fill";
export const id="dl_260a14cf63c8911231cb";
export const url=new URL("../icons/devices_off-fill.svg?v=82c067792b55d13fd777523967346363374adedcb0085c3969fdf6efcdbd3166",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
