export const name="exposure_plus_1";
export const id="dl_387c1efa63fe4f8b9272";
export const url=new URL("../icons/exposure_plus_1.svg?v=4a0ab28d9d6626bf6b70dbe89f0bab1eadd6eeb5411df0098230b2a9abe0006b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
