export const name="lucid_2-image-upscale";
export const id="dl_9b1d652745de496eb1a6";
export const url=new URL("../icons/lucid_2-image-upscale.svg?v=f2600a5cba4dca9604d0bbf1dff495b42b4922878d875c026831e6eb61d6c186",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
