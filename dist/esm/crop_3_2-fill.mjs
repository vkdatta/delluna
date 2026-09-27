export const name="crop_3_2-fill";
export const id="dl_f19ab87389a8227cc6e7";
export const url=new URL("../icons/crop_3_2-fill.svg?v=c2e1d89a4433afb158470c2fd5002dde92f981b5467b62f25ba4be24d17f2e60",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
