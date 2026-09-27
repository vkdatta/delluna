export const name="align_self_stretch-fill";
export const id="dl_9e75d480b75c2dc3fe93";
export const url=new URL("../icons/align_self_stretch-fill.svg?v=664286e31d99bbc276b073d147bceb7b3a88d9349c516a44b83d7c2376ec539c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
