export const name="map-pin-area-fill";
export const id="dl_78e3506e86a54d7ba46c";
export const url=new URL("../icons/map-pin-area-fill.svg?v=5e1e5d7344fd8f4ed3390a0b75989716faeea4d871700df63ba4f068608a5c0e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
