export const name="bluetooth-fill";
export const id="dl_bc49da12a48a44c2a720";
export const url=new URL("../icons/bluetooth-fill.svg?v=9f4fa3394a714eecd33d4a29b2162b83c1bf5d3a372a08e79ff431d307f8d5a2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
