export const name="arrow-fat-left-light";
export const id="dl_3a64aadf0fcc41619815";
export const url=new URL("../icons/arrow-fat-left-light.svg?v=08bf5159c2e7804bd64c219a5721bfa8640579ffc86503869e68c678407107d2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
