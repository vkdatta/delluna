export const name="map-pin-simple-line-light";
export const id="dl_a7420f057c394591a8ae";
export const url=new URL("../icons/map-pin-simple-line-light.svg?v=c6a6c8e0438689f8d8171ec9f5ccd49eb93111b6e949e7b5e070824be8006ae2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
