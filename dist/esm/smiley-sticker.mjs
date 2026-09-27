export const name="smiley-sticker";
export const id="dl_48d03e559c64859419d0";
export const url=new URL("../icons/smiley-sticker.svg?v=abbc292ba7733c9e4ed0889bc9e1bb6197f3d4d494381acec0d8c4b6109be23f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
