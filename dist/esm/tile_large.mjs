export const name="tile_large";
export const id="dl_6002e043dbb044729b4a";
export const url=new URL("../icons/tile_large.svg?v=b3e5a4ab115eea6293a382e4ef65912ae45729920e0cc598aaefdd6cf1533d21",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
