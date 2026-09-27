export const name="ring_volume-fill";
export const id="dl_fd4ea909ed9d111bf656";
export const url=new URL("../icons/ring_volume-fill.svg?v=be3e7bef9f2495f4575791e93a9c78f8b9f21714f590ae51e754e37722adc10f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
