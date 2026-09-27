export const name="buildings-light";
export const id="dl_1f0cd87d05f746cb82f1";
export const url=new URL("../icons/buildings-light.svg?v=93043270ce8cd961e5ee4f6b9c65ce19ffc6f0f04e22c8a9f067f5e1d0592380",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
