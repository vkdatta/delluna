export const name="hls_off-fill";
export const id="dl_ecc77a415cc2aca3a72d";
export const url=new URL("../icons/hls_off-fill.svg?v=b1aa7da5eb9ee2b61d6f310573a23a8deb95d414bb228aade94889fc58b1a809",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
