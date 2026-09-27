export const name="map-pin-plus-light";
export const id="dl_317f48d3d15149a5b970";
export const url=new URL("../icons/map-pin-plus-light.svg?v=11348474deed348ab734545a38a1cd3375936c42e74d21dd590cfcdd6048143e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
