export const name="map_pin_heart-fill";
export const id="dl_afde0aa4b8486fcef551";
export const url=new URL("../icons/map_pin_heart-fill.svg?v=eeccc48389fe5b56e3d4c6c2a0eed4c909894e6d0f4119fba14b34790c0a9f29",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
