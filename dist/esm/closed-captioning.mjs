export const name="closed-captioning";
export const id="dl_e85fc53270d34a94a0be";
export const url=new URL("../icons/closed-captioning.svg?v=7bc3664f5467882d9510b7a228c2c62830574af33d244f8f8995b723916e596c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
