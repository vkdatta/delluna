export const name="map-pin-simple-line";
export const id="dl_77d930586333432b9162";
export const url=new URL("../icons/map-pin-simple-line.svg?v=1c2e013e53423358a366718c46457dafb82215f95d746a7befa6c3e7f7b0e955",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
