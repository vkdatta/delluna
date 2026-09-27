export const name="lucid_3-pocket-knife";
export const id="dl_aa4226e5a23241249c2a";
export const url=new URL("../icons/lucid_3-pocket-knife.svg?v=5c906dbd4f6cfcf15690c2d116aac209d59ac73dce26f4fca65ef9cf5642120f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
