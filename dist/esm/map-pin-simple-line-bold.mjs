export const name="map-pin-simple-line-bold";
export const id="dl_b7b2a795b9074c368d4a";
export const url=new URL("../icons/map-pin-simple-line-bold.svg?v=7aa0c7ff55231d06f3b602b745deaaeb721fcb53c12ee296d78d26c4b594e0ef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
