export const name="encrypted_add_circle";
export const id="dl_b603e8e67771ecde3a5b";
export const url=new URL("../icons/encrypted_add_circle.svg?v=3f03cab1acf9b995d8ecbd860760f038a1f285e0d2db80cdf7a7067bad44b279",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
