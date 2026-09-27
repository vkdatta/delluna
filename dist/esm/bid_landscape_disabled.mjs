export const name="bid_landscape_disabled";
export const id="dl_5b482408cf87ae165cc6";
export const url=new URL("../icons/bid_landscape_disabled.svg?v=fc8b7cfaebe37d62fe6b2903ceced8e731d65791338730bd225e3bd4ec8f8f6e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
