export const name="php-fill";
export const id="dl_c2ab76328da74fbacf58";
export const url=new URL("../icons/php-fill.svg?v=46f7dae5e43f18ff1dda2abf3defa0a2fcb06f73a7a5f37bc68dc37b218df9e8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
