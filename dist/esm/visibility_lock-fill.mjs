export const name="visibility_lock-fill";
export const id="dl_73b6aabd8e9d4772ba75";
export const url=new URL("../icons/visibility_lock-fill.svg?v=36ad2040a0229f7883d06a8fd704f65b2a58a6703b5dac0f9b2d3d98ea5b9c7c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
