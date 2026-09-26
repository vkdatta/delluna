export const name="radar";
export const id="dl_3e120ab3d1834c6c8ba1";
export const url=new URL("../icons/material_symbols/radar.svg?v=13a6b33d3d1bd281e36b8ca2e98c4d4208919170fdd8c2a5284cd1bc9b81c37e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
