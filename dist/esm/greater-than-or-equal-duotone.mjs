export const name="greater-than-or-equal-duotone";
export const id="dl_16136ca0974c431d856f";
export const url=new URL("../icons/greater-than-or-equal-duotone.svg?v=34ccaf9cde330a2697c8652bcb60dc458691feefd90ecc315eedecacce7c57b2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
