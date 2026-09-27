export const name="map-pin-line-fill";
export const id="dl_2a567e03f1ef4118a86b";
export const url=new URL("../icons/map-pin-line-fill.svg?v=459a529e0ebc8ed559adadde846917029b43abbcfc454f37d96c13775cf20210",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
