export const name="smiley-sticker";
export const id="dl_57f689d7c09e4600b671";
export const url=new URL("../icons/S/smiley-sticker.svg?v=abbc292ba7733c9e4ed0889bc9e1bb6197f3d4d494381acec0d8c4b6109be23f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
