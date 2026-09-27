export const name="crop_16_9-fill";
export const id="dl_e171ec10e62f077bd507";
export const url=new URL("../icons/crop_16_9-fill.svg?v=da561a1789a14c8a3c51c95774812a83fbfc4b0c00c6cd620a27f31ef04dc87e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
