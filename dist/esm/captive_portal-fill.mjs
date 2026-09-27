export const name="captive_portal-fill";
export const id="dl_f0fea6629ca33088986d";
export const url=new URL("../icons/captive_portal-fill.svg?v=018a7b2e26bc33cf31d2a67d8683b475555445cad8efcf9a7ea9522890acc9df",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
