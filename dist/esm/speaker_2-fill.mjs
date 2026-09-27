export const name="speaker_2-fill";
export const id="dl_891fe4447a303fafb3bc";
export const url=new URL("../icons/speaker_2-fill.svg?v=b482e8a443103f562866ea0c1f0184defa0d5be9e3cadd5087e78e54059374da",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
