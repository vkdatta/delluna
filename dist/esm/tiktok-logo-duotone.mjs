export const name="tiktok-logo-duotone";
export const id="dl_2083503fa93b791507f4";
export const url=new URL("../icons/tiktok-logo-duotone.svg?v=380fe5b28daa007dcd5d21dc4255b12e8bc3d15e5f9c132e39e864cc619fda0e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
