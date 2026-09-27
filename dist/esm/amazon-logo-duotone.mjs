export const name="amazon-logo-duotone";
export const id="dl_0f33dec1a2e04fca9926";
export const url=new URL("../icons/amazon-logo-duotone.svg?v=0c14576150cd2a0547c06f1c307f2e070581365413114981b6cc5c2a74c25a79",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
