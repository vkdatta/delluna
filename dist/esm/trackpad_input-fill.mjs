export const name="trackpad_input-fill";
export const id="dl_73b60b1d19bf30c1472c";
export const url=new URL("../icons/trackpad_input-fill.svg?v=83f1c08171f9c38a9a4077daf0e4f8f4de30eb883b1758618ccc86148634b58f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
