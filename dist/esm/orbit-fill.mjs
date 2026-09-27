export const name="orbit-fill";
export const id="dl_99c8d7e6b6c88cce3074";
export const url=new URL("../icons/orbit-fill.svg?v=8d5526492d229840388764cb44104435b29f06e01dcbf0b66dc73b291b2d0c2f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
