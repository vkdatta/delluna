export const name="1k_plus";
export const id="dl_65403566852f456a96b1";
export const url=new URL("../icons/1/1k_plus.svg?v=0ef0bc8f5c3a0ea21672427b5948c6f15dc25bd3a4dc6fee01dc639076df6065",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
