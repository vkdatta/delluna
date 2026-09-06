export const name="map-pin-line";
export const id="dl_7182260574a24f6087d4";
export const url=new URL("../icons/map-pin-line.svg?v=094d6a7ddac2142e972e7beb27606c6533568cd42175248071a2bc3d2eff052c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
