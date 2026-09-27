export const name="medical_mask-fill";
export const id="dl_16a373e44f5317c88713";
export const url=new URL("../icons/medical_mask-fill.svg?v=1894e78bcca5b56df0f8d11359e9da3516c5508560efef4985c9bd27d107cb56",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
