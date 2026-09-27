export const name="local_hospital-fill";
export const id="dl_0a4bcee4562b7ce101d4";
export const url=new URL("../icons/local_hospital-fill.svg?v=ae9fb08024b67bbab31425524fd8bf2acb9c9e2967c00fb16d2c1e2c6f7a3068",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
