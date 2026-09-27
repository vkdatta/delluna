export const name="lucid_2-external-link";
export const id="dl_0ce48f8d80cb4e6b85b0";
export const url=new URL("../icons/lucid_2-external-link.svg?v=a75ed25845bd9be499dc9f475ac5c5fb3cbacc55dd86884546610696179f3f39",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
