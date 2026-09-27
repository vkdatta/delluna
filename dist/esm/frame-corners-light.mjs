export const name="frame-corners-light";
export const id="dl_c204e80d88ad471eb903";
export const url=new URL("../icons/frame-corners-light.svg?v=e71addc6af545aa8dcd2b6696608bd6071745196705f5cdb312e9e4acf5ec4ef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
