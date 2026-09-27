export const name="qr_code-fill";
export const id="dl_b6a74ababae8dda9a66a";
export const url=new URL("../icons/qr_code-fill.svg?v=e67fd98c0000f421fcd18a84dc24b1920777a9c29cd68cdf3d66730e07c06f90",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
