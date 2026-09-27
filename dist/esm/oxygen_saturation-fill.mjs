export const name="oxygen_saturation-fill";
export const id="dl_815046d91429e2af12ad";
export const url=new URL("../icons/oxygen_saturation-fill.svg?v=034b5207893e9fce6e1fe3805f16ce3323cc398f7aeeee9af0ed08a5093dec3f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
