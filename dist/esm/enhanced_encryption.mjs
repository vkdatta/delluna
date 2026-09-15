export const name="enhanced_encryption";
export const id="dl_3e46aa491fb24e9684e8";
export const url=new URL("../icons/E/enhanced_encryption.svg?v=daa8b786f408c4a0f413366fbc3021276f5eb2848577f14e4089f9d7e8db3064",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
