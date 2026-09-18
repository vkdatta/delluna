export const name="sensor_occupied-fill";
export const id="dl_6e8fb399428348bd979d";
export const url=new URL("../icons/sensor_occupied-fill.svg?v=dd1fe2bcf033d884c1abf06b37306b257240111ca90c799e3a2502f717bfdc6a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
