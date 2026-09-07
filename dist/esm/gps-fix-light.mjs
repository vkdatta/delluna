export const name="gps-fix-light";
export const id="dl_d35d9b86ba6d4242b85d";
export const url=new URL("../icons/gps-fix-light.svg?v=08a17738b583fb24823a91434a8ac49f34fbee0fb3c44ec1dc68f0ffce1ce6fb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
