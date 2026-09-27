export const name="file-js-duotone";
export const id="dl_37d60bdd006f47d787b1";
export const url=new URL("../icons/file-js-duotone.svg?v=2b2c0a0acd78d88bf2e188249143cd506943d63a3153ada76b9293fe4928b782",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
