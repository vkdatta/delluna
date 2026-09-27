export const name="preview_off-fill";
export const id="dl_1f85e2f39da597f7ea4b";
export const url=new URL("../icons/preview_off-fill.svg?v=4f9ed8a3dcfe898be49cefc068900d6137bdcebb717d57c2a9bad940ad89664c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
