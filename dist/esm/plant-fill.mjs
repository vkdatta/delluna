export const name="plant-fill";
export const id="dl_ae5ab8a9d4c64d5e8449";
export const url=new URL("../icons/plant-fill.svg?v=89365d2bad59feda3c54c3c1e22d5bce0a53e54b4be55fe4cf0b02649295be3b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
