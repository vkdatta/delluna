export const name="media_output_off";
export const id="dl_5a63bf3da32813007f45";
export const url=new URL("../icons/media_output_off.svg?v=f2201da50f5c3cace6eae22bb9f20f9a64d4de51585ee07414aa57c1b1efc1a6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
