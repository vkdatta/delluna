export const name="arrow-fat-lines-down-light";
export const id="dl_3d1f29ed9091439d9c5a";
export const url=new URL("../icons/arrow-fat-lines-down-light.svg?v=9e393d149425cc01cc90025344511d096de78a78a4c31d8103ab2852403ae9b5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
