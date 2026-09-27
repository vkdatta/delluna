export const name="productivity";
export const id="dl_1775796cdb8099437ccf";
export const url=new URL("../icons/productivity.svg?v=a912ccc7dcd6021b415b6115bb305572f24106af37b5fdc5fe99a5b32f453c30",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
