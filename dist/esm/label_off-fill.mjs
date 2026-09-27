export const name="label_off-fill";
export const id="dl_e738a712d6d1426ef978";
export const url=new URL("../icons/label_off-fill.svg?v=b19e9b2d2d55ba3592fc7bab845d63e041e96a8766796ae4e7a746e0e33ce9ae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
