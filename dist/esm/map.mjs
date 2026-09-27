export const name="map";
export const id="dl_c9f0d5e495770e60b884";
export const url=new URL("../icons/map.svg?v=6f9744348420aa2aee0f6dae7b0f11e3604fbcf4d635fcc12bd8113a090954d2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
