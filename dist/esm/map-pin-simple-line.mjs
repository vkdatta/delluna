export const name="map-pin-simple-line";
export const id="dl_77d930586333432b9162";
export const url=new URL("../icons/map-pin-simple-line.svg?v=d29bb2188901f7e9a94448361d32684586cae04e0ad4fe8e926df7a1159e7876",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
