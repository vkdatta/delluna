export const name="domino_mask";
export const id="dl_948a56ee5a2e75c90fb4";
export const url=new URL("../icons/domino_mask.svg?v=de357b2f01fc8c344c2b17cc1a48301f30e78d943795cc8d13b2c9970597353c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
