export const name="fediverse-logo-duotone";
export const id="dl_02b342dd56004bb3b7f8";
export const url=new URL("../icons/fediverse-logo-duotone.svg?v=20b3a8405f91083f2f82f63b26f3c0a5405843409f6701649c6f9b6db9dee7f2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
