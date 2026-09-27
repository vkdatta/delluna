export const name="blur_on-fill";
export const id="dl_b68d4d631fc5a41c2dd2";
export const url=new URL("../icons/blur_on-fill.svg?v=65ff60a3c2896f59df2960c8f3e52b2631dddfcfa7b19446bff59c80df44ae8a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
