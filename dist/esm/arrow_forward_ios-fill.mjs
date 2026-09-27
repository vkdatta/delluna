export const name="arrow_forward_ios-fill";
export const id="dl_f3072cf9aec04967bbc2";
export const url=new URL("../icons/arrow_forward_ios-fill.svg?v=e5e2b2d3f9c60bff4400f040c2d2587b7d3215d7ecc6d41501bf55c64bb9ce89",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
