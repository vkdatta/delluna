export const name="bath_public_large-fill";
export const id="dl_3a42a51344bf45df99df";
export const url=new URL("../icons/bath_public_large-fill.svg?v=ca4fe62f70303424dd36dd083ca4c771eff64b5839dfa7607434ed5f111e8b26",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
