export const name="tile_small-fill";
export const id="dl_ebf22f828fc1d601624d";
export const url=new URL("../icons/tile_small-fill.svg?v=63a53c378d2120d9a55d039b66687fbdf27005e46984ebbe74bc5a9086da3c3a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
