export const name="squares-intersect";
export const id="dl_d7014c6be2fd499a8457";
export const url=new URL("../icons/squares-intersect.svg?v=e59c4df599ae876adc989c175e504b8d40fe968258d4d9bb9142b1084293b7f3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
