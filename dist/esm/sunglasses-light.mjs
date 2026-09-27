export const name="sunglasses-light";
export const id="dl_da12b34cd6b5a766fa36";
export const url=new URL("../icons/sunglasses-light.svg?v=436add599f24e84bc42cb84a1349f095ba9906816520760b2ad2f2a62b4b01a3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
