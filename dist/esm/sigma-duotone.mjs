export const name="sigma-duotone";
export const id="dl_6c7e2239f6ef11271b68";
export const url=new URL("../icons/sigma-duotone.svg?v=207f2ba0e4f527943e67185dda44348ea31a72e25f7e5eeeb17677a7ba016c8b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
