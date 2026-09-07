export const name="map-pin-area-fill";
export const id="dl_78e3506e86a54d7ba46c";
export const url=new URL("../icons/map-pin-area-fill.svg?v=37033541b4c5eb87c8fa4ee6820a3fe16e9c81c68b43b5d919c72ae0d0d16017",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
