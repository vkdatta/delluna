export const name="lucid_3-phone-missed";
export const id="dl_371cff3fb83642a786f0";
export const url=new URL("../icons/lucid_3-phone-missed.svg?v=9477c81294bc93fd17b902d3a289accf899d002ef60bd2e846ff2e095d89c9c9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
