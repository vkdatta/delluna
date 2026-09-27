export const name="lucid_2-map-pin-check-inside";
export const id="dl_c3bf1a6f3f4643bda626";
export const url=new URL("../icons/lucid_2-map-pin-check-inside.svg?v=d2d1a65be879fc1f9d0a549d4cee8cc2605d35078994c8d2220c788a4c219b61",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
