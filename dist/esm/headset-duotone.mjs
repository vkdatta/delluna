export const name="headset-duotone";
export const id="dl_7cd4a70cf2d347e684ba";
export const url=new URL("../icons/headset-duotone.svg?v=71c8a1e3841468fae963696f722ab9bd3a331e07a96c1fde5b73f9bd316bd316",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
