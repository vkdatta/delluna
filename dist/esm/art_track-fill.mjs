export const name="art_track-fill";
export const id="dl_5cdc32ec328245e9f11e";
export const url=new URL("../icons/art_track-fill.svg?v=e9046b7fabd81bbe074c2dc3eddfe266147a2d31c9905c4cfb833ff1d13f11f4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
