export const name="palette-fill";
export const id="dl_0eb76826866044a097b7";
export const url=new URL("../icons/palette-fill.svg?v=c1e16186872c195b43ce60b90ab8b30cb5add83f7cb006accddba9d5a897ff8c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
