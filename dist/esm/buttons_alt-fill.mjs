export const name="buttons_alt-fill";
export const id="dl_053703fe9898412fb58d";
export const url=new URL("../icons/buttons_alt-fill.svg?v=b0e23aed42d2e4bce00d89db2dbd61194f43005a1d8871979ed2f04353167888",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
