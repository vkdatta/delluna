export const name="cell-tower-fill";
export const id="dl_8b5a8c6b9b104d948ac4";
export const url=new URL("../icons/cell-tower-fill.svg?v=5b999a7e0ce85add3a38e6685c33fae11f24d76ecc7e26669e51214f6d807793",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
