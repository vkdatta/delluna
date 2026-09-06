export const name="key-return-fill";
export const id="dl_cd9cae39506b42b782e1";
export const url=new URL("../icons/key-return-fill.svg?v=279c4a0d73f077ecef146e5d8e50a5ac7bbddf6d0423473dd358bfaffefd1cf4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
